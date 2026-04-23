
// The real Stripe Payment Link for The Calm Anchor
const STRIPE_PAYMENT_LINK = "https://join.timcampbellcalm.com/b/5kQ3cxgI36UXggggSAb3q06";

export function startStripeCheckout() {
  // Redirect the user to the secure Stripe checkout page
  if (STRIPE_PAYMENT_LINK && !STRIPE_PAYMENT_LINK.includes("YOUR_REAL_LINK_HERE")) {
    window.location.href = STRIPE_PAYMENT_LINK;
  } else {
    console.warn("Stripe Payment Link is not configured correctly.");
    alert("Payment system is in demo mode. Please configure the STRIPE_PAYMENT_LINK correctly.");
  }
}
