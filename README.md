# imooc-snailbook

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 5-1: init project

```node
vue init mpvue/mpvue-quickstart imooc-snailbook

copy wechat ID
```

> copy official demo server to project, modify project.config.json

```node
"qcloudRoot": "./server",
```

> 首次上传将除‘智能上传’外全勾上上传, 第二次上传选‘智能上传’

## 5-2

> 微信开发者工具: 修改要上传部署

## 5-3: Build local development environment

> [本地环境](https://cloud.tencent.com/document/product/619/11442) server/config.js copy [本地搭建微信小程序的开发环境](https://cloud.tencent.com/developer/ask/25171) [Secretid/SecretKey](https://console.cloud.tencent.com/capi) [APPID](https://console.cloud.tencent.com/developer)

### mysql install

```node
brew intall mysql
mysql.server start
mysql -u root
```

### nodemon install, refresh node

```node
npm install -g nodemon
```

### create database

```node
mysql:
create database cAuth;
```

### run server

```node
cd server:
npm install
node tools/initdb.js
npm run dev
```

## 5-4: 原型图

## 5-5, 5-6: skeleton

## 5-7: bottom nav

## 5-8: package util.js config.js

## 5-9: summary

## 5-10: ESLint

```json
"lint": "eslint --fix --ext .js,.vue src"
```

> /* eslint-disable */

## 6-1: user center message show, bug

```node
mysql:
use cAuth
show tables;
select * from cSessionInfo;
```

```node
npm install wafer2-client-sdk -S
```

```node
mysql:
create database woniu;
create table test(id int, name varchar(100));
show tables;
select * from test;
```

### scss

```node
npm install sass-loader node-sass -D
```

## 6-2: user center yearprogress

## 7-1