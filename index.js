const puppeteer = require('puppeteer');
const data = require("./config.json");
let noOfPost =process.argv[2];

(async function() {

  const browser = await puppeteer.launch({headless : false});//crete browser 
  const page = await browser.newPage(); //create new page in browser 
  await page.goto('https://www.instagram.com/', { waitUntil:"networkidle2"}); // this is used to go on url which is given
  await page.type("input[name='username']",data.user,{delay:100});
  await page.type("input[name='password']",data.pwd,{delay:100});
  await Promise.all([
      page.waitForNavigation({waitUntil:"networkidle2"}),
      page.click("button[type='submit']"),
  ]);
  
  await page.type("input[placeholder='Search']","pepper_pepcoding");
  await page.waitForSelector(".-qQT3",{visible:true});
  await Promise.all([
    page.waitForNavigation({waitUntil:"networkidle2"}),
    page.click(".-qQT3"),
]);
await page.waitForSelector("._9AhH0",{visible:true});
await Promise.all([
    page.waitForNavigation({waitUntil:"networkidle2"}),
    page.click("._9AhH0"),
]);
 
for(let i =0 ;i<noOfPost;i++){
    await page.waitForSelector(".fr66n .wpO6b",{visible:true});
     page.click(".fr66n .wpO6b"),
        await Promise.all([
        page.waitForNavigation({waitUntil:"networkidle2"}),
        page.click("._65Bje.coreSpriteRightPaginationArrow"),
    ]);

}
  //await page.screenshot({ path: 'example.png' });//this take a screenshot of  that page 

  //await browser.close(); // close the browser 
})(); 