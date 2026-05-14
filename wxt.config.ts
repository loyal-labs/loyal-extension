import { defineConfig } from "wxt";

export default defineConfig({
  modules: ["@wxt-dev/module-react"],


  manifest: ({ mode, browser }) => ({
    name:
      mode === "development"
        ? "Loyal (Dev)"
        : "Loyal — Private Solana Wallet & AI Agent",
    description:
      "Private open-source Solana wallet with AI agents and shielded transfers. Connect to any dApp, send via Telegram.",
    permissions: [
      "storage",
      "idle",
      "alarms",
      ...(browser === "firefox" ? [] : ["sidePanel"]),
    ],
    host_permissions: [
      "https://api.mainnet-beta.solana.com/*",
      "https://*.helius-rpc.com/*",
      "https://api.jup.ag/*",
      "https://api-js.mixpanel.com/*",
    ],
  }),
});
