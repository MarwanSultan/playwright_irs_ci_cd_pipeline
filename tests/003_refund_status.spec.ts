import { test, expect } from "./fixtures";

test("@smoke Where is My Refund navigation", async ({ irsPage }) => {
  await irsPage
    .locator("#block-pup-irs-informationmenu-2")
    .getByRole("link", { name: "Help" })
    .click();
  await irsPage.getByRole("button", { name: "Check refund status" }).click();
  await irsPage.getByRole("link", { name: "Where’s My Refund?" }).click();
  await expect(irsPage.getByRole("article")).toContainText("Check your refund");
});
