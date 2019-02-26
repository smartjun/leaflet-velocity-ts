# leaflet-velocity-ts

## 本地调试

git clone 源码之后，使用 npm link 方式链接源码文件

修改源码之后需要执行 **yarn build** 操作，才可以在 project 里面相应的体现出来更新

## DOC
与 [leaflet-velocity](https://github.com/danwild/leaflet-velocity) 使用方法基本相同，多一个参数，与 data 同级
```
options: {
    isZqSource: true  // 是否是真气网数据源，默认 false 
}
```

## TODO

- [ ] 完善本地调试过程，使用 hot reload 的方式更新
