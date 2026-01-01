import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Collisions",
  description: "Collisions - règles, monde",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Core rulebook",
        items: [
          { text: "Le monde", link: "/le-monde" },
          {
            text: "Les races",
            link: "/les-races",
            items: [
              { text: "Présentation", link: "les-races/presentation" },
              { text: "Araknes", link: "les-races/araknes" },
              { text: "Carkages", link: "les-races/carkages" },
              {
                text: "Passeurs occultes",
                link: "les-races/passeurs-occultes",
              },
            ],
          },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern:
        "https://github.com/collisions-jdr/vitepress/edit/main/docs/:path",
    },
    socialLinks: [],
  },
});
