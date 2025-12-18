import { test, expect } from "./fixtures";

test("@smoke homepage title", async ({ irsPage }) => {
  await expect(irsPage).toHaveTitle(/Internal Revenue Service/);
});

