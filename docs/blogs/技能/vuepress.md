---
title: 【vuepress】使用vuepress搭建blog
date: 2022-08-08
sidebar: 'auto'
categories:
  - 技能
tags:
  - vuepress
---

## 安装

参考官方文档 <https://www.vuepress.cn/guide/getting-started.html>

1、安装vuepress
```javascript
npm install -D vuepress
```

2、创建文档
```js
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

3、配置package.json
```js
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
```

4、启动项目
```js
npm run docs:dev
```

## 部署到github上

参考文档：
* <https://blog.csdn.net/zn740395858/article/details/125239304>

* <https://wangtunan.github.io/blog/vuepress/>

* <https://www.vuepress.cn/guide/deploy.html#github-pages>

1、新建仓库
![alt 属性文本](/-vuepress-/新建仓库.png)
点击README后，复制ssh地址，https地址容易有认证问题，导致代码push报错


2、在 docs/.vuepress/config.js 中设置正确的 base。

如果你打算发布到 ```https://<USERNAME>.github.io/```，则可以省略这一步，因为 base 默认即是 "/"。

如果你打算发布到 ```https://<USERNAME>.github.io/<REPO>/```（也就是说你的仓库在 ```https://github.com/<USERNAME>/<REPO>```），则将 base 设置为 "```/<REPO>/```"。

3、创建deploy.sh文件
在package.json统计目录下创建deploy.sh文件
```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:CyanDong/-vuepress-.git master:gh-pages

cd -
```
在终端输入 sh deploy.sh 会自动执行sh文件，并且在发布到gh-pages分支

4、选择Settings->Pages->Branch
![alt 属性文本](/-vuepress-/github-page.jpg)
github会自动构建发布，需要等待几分钟

5、github查看构建状态
![alt 属性文本](/-vuepress-/构建状态.png)

6、最后生成地址
![alt 属性文本](/-vuepress-/生成链接.jpg)




