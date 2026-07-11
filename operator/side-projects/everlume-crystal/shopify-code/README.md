# Everlume — Copy-Paste Code (HTML)

The actual HTML you paste into Shopify. Real "copy, paste, done." Code can't hold your
photos (you add image links where marked), and the buy buttons link to your product page.

## What goes where

| File | Paste into | How |
|---|---|---|
| `homepage-custom-liquid.html` | Homepage | Themes > Customize > **Add section** > **Custom Liquid** > paste > Save |
| `product-description.html` | Product Description | Products > your crystal > Description > click **`<>`** > paste > Save |
| `about-page.html` | About page | Online Store > Pages > Add page ("About") > click **`<>`** > paste > Save |
| `faq-page.html` | FAQ page | Online Store > Pages > Add page ("FAQ") > click **`<>`** > paste > Save |

## The `<>` button
In any Shopify text box, the **`<>`** icon in the toolbar switches to HTML view. Paste the
code there, then click `<>` again to see it formatted.

## Homepage swaps (2 minutes)
1. Find `REPLACE_IMAGE_URL` (twice). Upload your crystal photos in Shopify > Content >
   Files, copy each photo's link, and paste over `REPLACE_IMAGE_URL`. If you skip this,
   glowing placeholder blocks show instead, still launch-ready.
2. Buttons point to `/products/everlume-crystal`. If your product URL handle is different,
   update the links to match.

## Order to do it in
1. Add the product first using `product-description.html` (so the button link works).
2. Paste the homepage.
3. Add the About and FAQ pages.
4. Then policies, menu, email popup, reviews (see `../shopify-setup-guide.md`).
