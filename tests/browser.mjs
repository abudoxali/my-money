import { chromium, webkit } from "playwright";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
const server=spawn("python3",["-m","http.server","8765","--bind","127.0.0.1"],{stdio:"ignore"});
let browser;
try{
 for(let i=0;i<50;i++){try{if((await fetch("http://127.0.0.1:8765/")).ok)break}catch{}await new Promise(r=>setTimeout(r,100))}
 browser=await (process.env.BROWSER==="webkit"?webkit:chromium).launch({headless:true});
 const context=await browser.newContext({viewport:{width:428,height:926},isMobile:true,hasTouch:true,deviceScaleFactor:2,acceptDownloads:true});const page=await context.newPage();const external=[];page.on("request",r=>{if(!r.url().startsWith("http://127.0.0.1:8765/"))external.push(r.url())});
 const errors=[];page.on("pageerror",e=>errors.push(e.message));
 await page.goto("http://127.0.0.1:8765/");
 for(let i=0;i<4;i++)await page.locator('[data-action="pin"][data-id="0"]').click();
 await page.locator('[data-view="history"]').first().waitFor();
 await page.locator('[data-action="quick"][data-id="income"]').first().click();
 await page.locator('[name="amount"]').fill("5000");await page.locator('[name="title"]').fill("Client A");await page.locator('[name="source"]').fill("Client A");
 await page.locator("#tx button[type=submit]").click();await page.locator("#results").waitFor();assert.match(await page.locator("#results").innerText(),/Client A/);
 await page.locator('nav [data-view="add"]').click();await page.locator('[data-action="kind"][data-id="expense"]').click();
 await page.locator('[name="amount"]').fill("150");await page.locator('[name="title"]').fill("Lunch");await page.locator('#tx button[type=submit]').click();await page.locator("#results").waitFor();assert.match(await page.locator("#results").innerText(),/Lunch/);
 await page.locator('nav [data-view="reports"]').click();await page.locator("#simpleLimit").waitFor();await page.locator("#simpleLimit [name=amount]").fill("8000");await page.locator("#simpleLimit button.primary").click();await page.locator(".limitnumber").waitFor();assert.match(await page.locator(".limitcard").innerText(),/متبقي من الحد/);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await page.reload();for(let i=0;i<4;i++)await page.locator('[data-action="pin"][data-id="0"]').click();await page.locator('nav [data-view="history"]').click();assert.match(await page.locator("#results").innerText(),/Client A/);assert.match(await page.locator("#results").innerText(),/Lunch/);
 await page.evaluate(async()=>{await navigator.serviceWorker.ready; if(!navigator.serviceWorker.controller)await new Promise(r=>navigator.serviceWorker.addEventListener("controllerchange",r,{once:true}))});await context.setOffline(true);await page.reload();for(let i=0;i<4;i++)await page.locator('[data-action="pin"][data-id="0"]').click();await page.locator('nav [data-view="add"]').click();await page.locator('[data-action="kind"][data-id="expense"]').click();await page.locator('[name="amount"]').fill("25");await page.locator('[name="title"]').fill("Offline test");await page.locator("#tx button[type=submit]").click();await page.locator("#results").waitFor();assert.match(await page.locator("#results").innerText(),/Offline test/);await page.reload();for(let i=0;i<4;i++)await page.locator('[data-action="pin"][data-id="0"]').click();await page.locator('nav [data-view="history"]').click();assert.match(await page.locator("#results").innerText(),/Offline test/);assert.deepEqual(external,[]);assert.deepEqual(errors,[]);console.log("PASS mobile browser: PIN, income, expense, budget, reports, reload persistence, no page errors");
}finally{await browser?.close();server.kill()}
