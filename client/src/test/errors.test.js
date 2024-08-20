import { test, expect } from "@playwright/test";

test.describe.serial("Form submission tests", () => {
  test("form submission displays error on empty fields", async ({ page }) => {
    await page.goto("http://localhost:5173");

    // לחיצה על כפתור ההגשה מבלי למלא את השדות
    await page.click('button[type="submit"]');

    // המתנה להצגת הודעת השגיאה
    await page.waitForSelector('text="URL is required"', { timeout: 60000 });

    // בדיקת הודעת השגיאה
    const errorMessages = await page.$$eval(
      'text="URL is required"',
      (elements) => elements.map((element) => element.textContent)
    );
    expect(errorMessages).toContain("URL is required");
  });
});
