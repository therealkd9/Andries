// Andries — Firebase sync config.
//
// Paste the config object from your Firebase project here (Project settings →
// "Your apps" → the web app → "SDK setup and configuration" → Config).
//
// These values are NOT secret — Firebase web config is meant to be public.
// Your check-ins are protected by Google sign-in + Firestore security rules
// (each person can only read/write their own data). Until you paste a real
// apiKey below, the app simply runs local-only with no sync.

export const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  appId: "PASTE_APP_ID"
};
