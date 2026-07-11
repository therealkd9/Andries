# CalmPaws — Copy-Paste Code (HTML)

These are the actual HTML files you paste into Shopify. Real "copy, paste, done."
Honest limits: code can't hold your photos (you add image links where marked) and the
buy buttons link to your product page (where Shopify's real checkout lives).

## What goes where

| File | Paste into | How |
|---|---|---|
| `homepage-custom-liquid.html` | Homepage | Themes > Customize > **Add section** > **Custom Liquid** > paste > Save |
| `product-description.html` | Your product's Description | Products > your bed > Description box > click **`<>`** > paste > Save |
| `about-page.html` | About page | Online Store > Pages > Add page ("About") > click **`<>`** > paste > Save |
| `faq-page.html` | FAQ page | Online Store > Pages > Add page ("FAQ") > click **`<>`** > paste > Save |

## The `<>` button
In any Shopify text box, the **`<>`** icon in the toolbar switches to HTML view. Paste the
code there, then click `<>` again to see it formatted. That's the trick that makes pasted
code work.

## Two things to swap in the homepage file
1. Find `REPLACE_IMAGE_URL` (appears twice). Upload your photos in Shopify > Content >
   Files, click each photo, copy its link, and paste it over `REPLACE_IMAGE_URL`. If you
   skip this, tidy colored blocks show instead, still fine to launch.
2. The buttons point to `/products/calmpaws-calming-cloud-bed`. If your product's URL
   handle is different (check the product page URL in Shopify), update the links to match.

## Order to do it in
1. Add the product first (so the button link works) using `product-description.html`.
2. Paste the homepage.
3. Add the About and FAQ pages.
4. Then do policies, menu, email popup, and reviews from `shopify-setup-guide.md`.

## Still the honest truth
Shopify has no "import my whole store as one file" button. This Custom Liquid approach is
the closest real thing: it gives you a designed homepage from one paste instead of building
blocks by hand. If anything looks off after pasting, tell me what you see and I'll fix the code.
