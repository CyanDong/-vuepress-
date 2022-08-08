module.exports = {
    title: '壹二呀',
    description: '办法总比问题多',
    base: '/-vuepress-/',
    locales: {
        "/": {
            lang: "zh-CN",
        },
      },
    theme: "reco",
    themeConfig: {
      // 博客配置
      // 1.接受字符串，它设置了最后更新时间的label，例如：最后更新时间：2019年5月3日 21:51:53
      lastUpdated: '最后更新时间',
      // 2.设置true，开启最后更新时间
      lastUpdated: true,
      // 3.设置false，不开启最后更新时间(默认)
      lastUpdated: false,
      type: 'blog',
      logo: '/author.jpeg',
      authorAvatar: '/author.jpeg',
      blogConfig: {
          category: {
            location: 2,     // 在导航栏菜单中所占的位置，默认2
            text: 'Category' // 默认文案 “分类”
          },
          tag: {
            location: 3,     // 在导航栏菜单中所占的位置，默认3
            text: 'Tag'      // 默认文案 “标签”
          },
          socialLinks: [     // 信息栏展示社交信息
            { icon: 'reco-github', link: 'https://github.com/recoluan' },
            { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
          ],
      },
      friendLink: [
          {
            title: 'vuepress-theme-reco',
            desc: 'A simple and beautiful vuepress Blog & Doc theme.',
            logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
            link: 'https://vuepress-theme-reco.recoluan.com'
          },
          {
            title: '午后南杂',
            desc: 'Enjoy when you can, and endure when you must.',
            email: 'recoluan@qq.com',
            link: 'https://www.recoluan.com'
          }
      ],
      //顶部导航栏
      nav: [           
        //格式一：直接跳转，'/'为不添加路由，跳转至首页
        { text: '首页', link: '/' },    
        
        //格式三：跳转至外部网页，需http/https前缀
        { text: 'Github', link: 'https://github.com/CyanDong/-vuepress-' },
      ],
   }
  }