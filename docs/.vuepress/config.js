module.exports = {
    title: '壹二呀的个人技术博客',
    description: '办法总比问题多',
    base: '/-vuepress-',
    locales: {
        "/": {
            lang: "zh-CN",
        },
      },
    theme: "vuepress-theme-reco",
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
        ],
        sidebar: 'auto'
      }
  }