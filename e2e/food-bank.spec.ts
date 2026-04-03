import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders homepage with hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Community Harvest Food Bank/)
    await expect(page.locator('text=Fighting Hunger')).toBeVisible()
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    // Stats from the imported content
    await expect(page.getByRole('heading', { name: 'Our Programs' })).toBeVisible()
  })

  test('has navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav >> text=Locations')).toBeVisible()
    await expect(page.locator('nav >> text=Programs')).toBeVisible()
    await expect(page.locator('nav >> text=Events')).toBeVisible()
  })
})

test.describe('Locations', () => {
  test('lists locations', async ({ page }) => {
    await page.goto('/locations')
    await expect(page.locator('h1')).toContainText('Locations')
    await expect(page.locator('text=Harvest Hope Main Warehouse')).toBeVisible()
  })

  test('location detail page loads', async ({ page }) => {
    await page.goto('/locations/main-warehouse')
    await expect(page.locator('h1')).toContainText('Harvest Hope Main Warehouse')
  })
})

test.describe('Programs', () => {
  test('lists programs', async ({ page }) => {
    await page.goto('/programs')
    await expect(page.locator('h1')).toContainText('Programs')
    await expect(page.locator('text=Backpack Buddies')).toBeVisible()
  })

  test('program detail page loads', async ({ page }) => {
    await page.goto('/programs/backpack-buddies')
    await expect(page.locator('h1')).toContainText('Backpack Buddies')
  })
})

test.describe('Events', () => {
  test('lists events', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText('Events')
    await expect(page.locator('text=Spring Community Food Drive')).toBeVisible()
  })

  test('event detail page loads', async ({ page }) => {
    await page.goto('/events/spring-food-drive')
    await expect(page.locator('h1')).toContainText('Spring Community Food Drive')
  })
})

test.describe('Impact Stories', () => {
  test('lists impact stories', async ({ page }) => {
    await page.goto('/stories')
    await expect(page.locator('h1')).toContainText('Impact Stories')
    await expect(page.locator('text=Martinez Family')).toBeVisible()
  })

  test('story detail page loads', async ({ page }) => {
    await page.goto('/stories/martinez-family-story')
    await expect(page.locator('h1')).toContainText('Martinez Family')
  })
})

test.describe('Static Pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('Harvest Hope Food Bank')
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page).toHaveTitle(/Contact|Community Harvest/)
  })
})

test.describe('Navigation', () => {
  test('navigate from homepage to locations', async ({ page }) => {
    await page.goto('/')
    await page.locator('nav >> text=Locations').click()
    await expect(page).toHaveURL(/\/locations/)
    await expect(page.locator('h1')).toContainText('Locations')
  })

  test('navigate from listing to detail and back', async ({ page }) => {
    await page.goto('/programs')
    await page.getByText('Backpack Buddies').first().click()
    await expect(page.locator('h1')).toContainText('Backpack Buddies')
    // Navigate back via browser back button
    await page.goBack()
    await expect(page.locator('h1')).toContainText('Programs')
  })
})
