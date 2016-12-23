## Cube

人机交互立方体

GitHub: [Cube](https://github.com/irmowan/Cube)

Demo: [Cube](http://irmo.me/Cube/)

#### Introduction

这是一个人机交互的项目，采用了[three.js](https://threejs.org/)作为3d WebGL库。

图片上展示了一个旋转的立方体。立方体有六个面，当点击某个面时，其会随机地切换那一面的颜色，作为人机交互。

#### Usage

打开网页即可执行，点击立方体的面可以触发换色。

#### Installation

Clone源代码，直接在Chrome浏览器执行即可。

#### File Description

```
├── Readme.md
├── index.html
├── css
│   └── style.css
└── js
    ├── main.js
    └── three.min.js
    
2 directories, 5 files
```

其中，`js`文件夹下是核心代码。

- `three.min.js`是压缩后的three.js库，用以提供3D WebGL支持。
- `main.js`则是主文件，定义了Cube的基本参数，以及Camera的位置，自动旋转的参数等。此外还绑定了交互事件onDocumentMouseDown，当点击了立方体某个面时触发，点击相当于三维空间中的一条线，计算射线同物体的交集，取第一个(也只有一个，若没有则说明没点击到立方体)，获得对应的对象，并进行随机赋色。

#### License

MIT License

---

Author: [irmo<irmowan@gmail.com>](https://github.com/irmowan)

Date: 2016.11