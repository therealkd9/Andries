# Everlume Store — Go Live

This is a complete, self-contained store I built in code (`index.html` + `product.html`).
No Shopify, no theme editor, no pasting. It's ready to deploy.

## What's done (by me)
- Full homepage and product page, premium navy/gold design
- Product gallery, size selector, buy button, reviews, FAQ, all copy
- Responsive, fast, no build step needed

## The 2 things only you can do (because they're your bank + your account)

### 1. Payments — make a Stripe Payment Link (5 min)
A store needs a way to take money into YOUR bank. Easiest, no code:
1. Go to **stripe.com**, create an account (free).
2. Dashboard → **Payment Links** → **New link**.
3. Create a product "The Everlume Crystal", price **$49.95**, turn on **collect shipping address**.
4. Copy the payment link URL (looks like `https://buy.stripe.com/xxxx`).
5. In `product.html`, find `STRIPE_PAYMENT_LINK` and replace it with your URL. (Or send me the URL and I'll drop it in.)

That makes the "Create My Crystal" button take real payments. Photo collection: after payment,
Stripe emails the customer a receipt; add a line asking them to reply with their photo, or we
add a simple upload later.

### 2. Hosting — connect to Vercel (one click)
1. Go to **vercel.com**, sign in with your **GitHub**.
2. **Add New → Project → Import** the `therealkd9/andries` repo.
3. Set **Root Directory** to `everlume-store`.
4. **Deploy.** Vercel builds and gives you a live URL (e.g. `everlume.vercel.app`).
5. Add your own domain later in Vercel → Domains (~$12/yr).

Every time I push a change, Vercel auto-redeploys. No editor, no manual steps.

## Notes
- Product images currently load from your Shopify file URLs. If you leave Shopify, upload the
  images into this folder and I'll point the code at them so they never break.
- Want a real cart / multiple products / photo upload built in? That's a small step up to a
  Next.js app with Stripe Checkout. Say the word and I'll build it.
