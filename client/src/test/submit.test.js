import { test, expect } from "@playwright/test";

test("form submission displays result", async ({ page }) => {
  await page.goto("http://localhost:5173");

  // המתנה שהאלמנטים של הטופס ייטענו
  await page.waitForSelector('input[placeholder="Enter Url"]', {
    timeout: 10000,
  });

  // הזנת כתובות URL בטופס באמצעות name attribute
  await page.fill('input[name="url1"]', "https://www.google.com");
  await page.fill('input[name="url2"]', "https://www.facebook.com");
  await page.fill('input[name="url3"]', "https://www.twitter.com");

  // לחיצה על כפתור ההגשה
  await page.click('button[type="submit"]');

  // המתנה עד שהמידע יוצג
  await page.waitForSelector("a", { timeout: 10000 });

  // בדיקת שהתוצאה אינה שווה ל-URL המקורי
  const metadataUrls = await page.$$eval("a", (elements) =>
    elements.map((element) => element.textContent)
  );

  console.log(metadataUrls);

  expect(metadataUrls.length).toBe(3); // לבדוק אם יש 3 תוצאות
  expect(metadataUrls[0]).toEqual("1. https://www.google.com");
  expect(metadataUrls[1]).toEqual("2. https://www.facebook.com");
  expect(metadataUrls[2]).toEqual("3. https://www.twitter.com");
});
