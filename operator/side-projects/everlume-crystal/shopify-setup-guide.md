# Everlume — Shopify Setup Guide (paste-by-paste)

No code import exists. You build the store in Shopify's visual editor and paste the copy
in. Follow in order. First time is about 45 to 75 minutes. You can't break anything.

## Step 1: Create the store (5 min)
1. Go to **shopify.com**, click **Start free trial**.
2. Answer the quick questions fast or skip. Name the store **Everlume**.

## Step 2: Add the product (15 min)
Admin → **Products** → **Add product**.
- **Title:** `The Everlume Crystal | Custom 3D Photo Crystal With Light Base`
- **Description:** open `shopify-code/product-description.html`, click the **`<>`** button in
  the description toolbar, paste it, click `<>` again.
- **Media:** upload 4 to 6 crystal photos.
- **Price:** `49.95`, Compare-at `89.95`.
- **Variants:** click **Add options like size** → option `Size` → values `Small`, `Medium`, `Large`.
- **Inventory:** uncheck "track quantity" so it never shows sold out.
- **Save.** Then check the product's URL handle. If it isn't `everlume-crystal`, update the
  button links in the homepage code to match.

## Step 3: Photo upload for customers (important, 5 min)
This is personalized, so customers must send their photo. Easiest launch-night method:
- In your order confirmation, ask customers to **reply to the confirmation email with their
  photo** (set this line in Settings → Notifications, or just add it to the product page /
  FAQ). Later, add a free "order attachment / file upload" app for a cleaner flow.

## Step 4: Theme (2 min)
Admin → **Online Store** → **Themes**. Use the free **Dawn** theme. Click **Customize**.

## Step 5: Homepage (15 min)
In the editor, top dropdown = **Home page**. Left sidebar → scroll down → **Add section** →
search **Custom Liquid** → add it → paste all of `shopify-code/homepage-custom-liquid.html`
into the Liquid box → **Save**. Remove the default demo sections you don't want (click each
→ Remove section). Drag the Custom Liquid section to the top.

## Step 6: Pages (10 min)
Admin → **Online Store** → **Pages** → **Add page** for each:
- **About** → paste `shopify-code/about-page.html` (via `<>`).
- **FAQ** → paste `shopify-code/faq-page.html` (via `<>`).

## Step 7: Policies (5 min)
Admin → **Settings** → **Policies**. Auto-generate Refund, Privacy, Terms, Shipping. Edit
Shipping + Refund to match: made-to-order crafting time plus shipping, and the 30-day
guarantee (remake or refund on defects).

## Step 8: Menu (5 min)
Admin → **Online Store** → **Navigation**. Add: Home, Create Yours (the product), About, FAQ, Contact.

## Step 9: Email popup (5 min)
Install the free **Shopify Forms** app. Paste the popup copy from `store-copy.md`. Offer the 10% code.

## Step 10: Reviews (5 min)
Admin → **Apps** → install **Judge.me** (free). Add the seed reviews from `store-copy.md`.

## Step 11: Launch (5 min)
- **Settings → Domains:** buy a domain (everlume.co or similar, ~$12/yr) or launch on the
  free myshopify URL for tonight and add a domain later.
- **Check everything on your phone.**
- Go live: **Online Store → Preferences →** remove the password page.

## Where the copy lives
`store-copy.md` = the words. This guide = where they go. `shopify-code/` = paste-ready HTML.
