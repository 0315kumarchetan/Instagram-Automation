"use strict";

var puppeteer = require('puppeteer');

var data = require("./config.json");

var noOfPost = process.argv[2];

(function _callee() {
  var browser, page, i;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(puppeteer.launch({
            headless: false
          }));

        case 2:
          browser = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(browser.newPage());

        case 5:
          page = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(page["goto"]('https://www.instagram.com/', {
            waitUntil: "networkidle2"
          }));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(page.type("input[name='username']", data.user, {
            delay: 100
          }));

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(page.type("input[name='password']", data.pwd, {
            delay: 100
          }));

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(Promise.all([page.waitForNavigation({
            waitUntil: "networkidle2"
          }), page.click("button[type='submit']")]));

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(page.type("input[placeholder='Search']", "pepper_pepcoding"));

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap(page.waitForSelector(".-qQT3", {
            visible: true
          }));

        case 18:
          _context.next = 20;
          return regeneratorRuntime.awrap(Promise.all([page.waitForNavigation({
            waitUntil: "networkidle2"
          }), page.click(".-qQT3")]));

        case 20:
          _context.next = 22;
          return regeneratorRuntime.awrap(page.waitForSelector("._9AhH0", {
            visible: true
          }));

        case 22:
          _context.next = 24;
          return regeneratorRuntime.awrap(Promise.all([page.waitForNavigation({
            waitUntil: "networkidle2"
          }), page.click("._9AhH0")]));

        case 24:
          i = 0;

        case 25:
          if (!(i < noOfPost)) {
            _context.next = 34;
            break;
          }

          _context.next = 28;
          return regeneratorRuntime.awrap(page.waitForSelector(".fr66n .wpO6b", {
            visible: true
          }));

        case 28:
          page.click(".fr66n .wpO6b");
          _context.next = 31;
          return regeneratorRuntime.awrap(Promise.all([page.waitForNavigation({
            waitUntil: "networkidle2"
          }), page.click("._65Bje.coreSpriteRightPaginationArrow")]));

        case 31:
          i++;
          _context.next = 25;
          break;

        case 34:
        case "end":
          return _context.stop();
      }
    }
  });
})();