// @ts-check
import { test, expect } from '@playwright/test';

const LOCAL_HOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('random fact and image test', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);

  const text = await page.getByRole('p')
  const img = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await img.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
});

