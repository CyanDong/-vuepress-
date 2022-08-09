---
title: 【vuepress】主题vuepress-theme-reco使用及配置
date: 2022-08-09
sidebar: 'auto'
categories:
  - 技能
tags:
  - vuepress
  - vuepress-theme-reco
---

## 安装及引用

参考官方文档 <https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html>

1、安装主题
```javascript
npm install vuepress-theme-reco --save-dev
```

2、引用
```javascript
// docs/.vuepress/config.js
module.exports = {
    title: '壹二呀',
    description: '办法总比问题多',
    base: '/-vuepress-/',
    locales: {
        "/": {
            lang: "zh-CN",
        },
      },
    theme: "reco", // 引入主题
    themeConfig: {
      // 博客配置
    }
}
```
## 配置更改

1、首页配置
```md
// docs/README.md
---
home: true
heroText: 今天掉头发了嘛
tagline: 没掉过头发的程序员都不是好的开发
actionText: 快速上手 →
actionLink: /zh/guide/

heroImageStyle: {
  maxHeight: '200px',
  display: block,
  margin: '6rem auto 1.5rem',
  borderRadius: '50%',
  boxShadow: '0 5px 18px rgba(0,0,0,0.2)'
}
---

```

2、博客配置
```javascript
// docs/.vuepress/config.js
module.exports = {
    themeConfig: {
        // 博客配置
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
        // 友情链接
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
        // 顶部导航栏
        nav: [           
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            { text: '首页', link: '/' },    
            
            //格式三：跳转至外部网页，需http/https前缀
            { text: 'Github', link: 'https://github.com/CyanDong/-vuepress-' },
        ],
    }
}
```

## 文档编写

1、编写
```javascript
// docs/blogs/技能/vuepress-theme-reco.md
---
title: 【vuepress】主题vuepress-theme-reco使用及配置
date: 2022-08-09
sidebar: 'auto'
categories:
  - 技能
tags:
  - vuepress
  - vuepress-theme-reco
---
内容内容内容

```
2、效果
![alt 属性文本](/-vuepress-/首页效果.png)
![alt 属性文本](/-vuepress-/内容效果.png)

