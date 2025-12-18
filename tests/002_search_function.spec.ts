import { test, expect } from "./fixtures";

test("@smoke IRS search function", async ({ irsPage }) => {
  await irsPage
    .getByRole("application", { name: "Forms menu has additional" })
    .click();
  await irsPage.locator("#edit-search--3").click();
  await irsPage.locator("#edit-search--3").fill("tax credit");
  await irsPage.locator("#edit-submit-pup-forms-and-pubs-index-search").click();
  await expect(irsPage.getByText("Found 422 Matching Items;")).toBeVisible();
});
