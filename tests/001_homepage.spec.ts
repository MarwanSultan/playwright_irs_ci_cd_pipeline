import { test, expect } from "./fixtures";



// Smoke test to verify the homepage title
test("@smoke homepage title", async ({ irsPage }) => {
  await expect(irsPage).toHaveTitle(/Internal Revenue Service/);
});

