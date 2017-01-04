# karma-example

#### karma安装

###### 先运行`npm init`实现一个node模块
###### karma的安装命令
> 一般局部安装就可以了
```
cnpm i karma --save-dev
```

#### karma初始化
> 选择测试框架和浏览器环境等选项
```
karma init
```

#### 安装插件
```
cnpm i karma-jasmine jasmine-core karma-chorem-launcher --save-dev
```

#### 安装全局命令行工具

```
cnpm i karma-cli -g
```

#### 启动karma
```
karma start
```
> 你也可以有多个配置文件,在启动的时候进行选择
```
karma start 你的配置文件.json
```
#### 手动运行(在watch为false的情况下)
```
karma run
```
> 你也可以选择要run的文件
```
karma run index.js
```
