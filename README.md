### 这是一个关于jQuery设计模式的学习代码

##### 下载
```
npm install -g parcel
yarn global add parcel
```
##### 运行
```
parcel src\index.html
```
```
jQuery('xxx') 返回值并不是一个元素, 而是一个 api 对象
jQuery('xxx').find('.red') 查找 #xxx 里的 .red 元素
jQuery('#xxx').parent() 获取父元素
jQuery('#xxx').children() 获取子元素
jQuery('#xxx').siblings() 获取兄弟元素
jQuery('#xxx').index() 获取排行
jQuery('#xxx').next() 获取弟弟
jQuery('#xxx').prev() 获取哥哥
jQuery('#xxx').each(fn) 遍历并对每个元素执行fn
```

```
特别注意: 
    1. 有些api要返回上次的this, 如find的实现
    2. 有些api要返回新的的api引用, 如find的实现
```