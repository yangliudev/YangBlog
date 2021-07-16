module.exports = {
  title: "Yang Liu",
  description: "A blog for Yang.",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    subSidebar: "auto",
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "About",
        link: "/about/",
        icon: "reco-account",
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/yangliudev",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category",
      },
      tag: {
        location: 3,
        text: "Tag",
      },
    },
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "Yang Liu",
    authorAvatar: "/avatar.png",
    record: "",
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
};
