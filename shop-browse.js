const { expect } = require('@playwright/test');

async function buyLimitedTShirt(page, _userContext, events, test) {
    await page.goto('https://artillery-next-commerce-demo.vercel.app/');

    await expect(
        page
            .getByRole('link', {
                name: 'Lightweight Jacket',
            })
            .first()
    ).toBeVisible();

    await test.step('checkout_jacket_and_tshirt', async () => {
        await page
            .getByRole('link', { name: 'Lightweight Jacket' })
            .first()
            .click();

        await page.getByRole('option', { name: 'size l' }).click();

        await page.getByRole('link', { name: 'Shirt', exact: true }).click();

        await expect(page.getByText('limited edition t-shirt')).toBeVisible();

        await page.getByText('Home').first().click();

        await page.goto('https://artillery-next-commerce-demo.vercel.app/');
    });
}

module.exports = {
    buyLimitedTShirt,
};
