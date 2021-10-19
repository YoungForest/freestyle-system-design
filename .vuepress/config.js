module.exports = {
    title: "佛系系统设计群",
    description: "系统设计学习交流分享",
    head: [["link", { rel: "icon", href: `/logo.png` }]],
    dest: "./dist",
    themeConfig: {
      search: false,
      nav: [
        // { text: 'Articles', link: '/articles/' },
      ],
      // sidebar: 'auto',
      lastUpdated: 'Last Updated'
    },
  
    markdown: {
      // options for markdown-it-anchor
      anchor: { permalink: false },
      extendMarkdown: md => {
        md.use(require("markdown-it-katex"));
      }
    },
    // https://vuepress-plugin-blog.billyyyyy3320.com/guide/getting-started
    plugins: [
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
    ],
    head: [
      [
        // https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9046219176772396
        "script",
        {
          "data-ad-client": "ca-pub-9046219176772396",
          async: true,
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9046219176772396",
          crossorigin: "anonymous"
        },
      ],
    ],
  };

  
  