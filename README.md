
h5canvas
----
使用场景：在手机端通过canvas生成图片并保存

[原始项目预览](https://loveviagra.xin/H5/index.html)

由于是公司项目，所以我给出的代码已经删除了大部分图片以及代码，只留下canvas的部分

[github上代码的效果预览](https://loveviagra.xin/H5canvas/index.html)

## 主要遇到的问题

 1. 保存出来的图片是透明的
	 解决方法，页面onload的时候渲染一次画布，把原始图片先渲染进去
	 
 2. canvas生成base64的图片时存在跨域问题，当时被这个问题搞了好久，具体解决方法看这个链接
	 img.crossOrigin = 'anonymous';
	 
	 [链接](https://www.jianshu.com/p/6fe06667b748)
	 
3. canvas在手机上保存的图片失真，导致原因是宽高设置问题，属性的宽高跟style里设置的宽高是不一样的，如下：
`<canvas class="mycanvas" id="main" width="750" height="1148" style="width: 375px;height: 574px;"></canvas>`
width代表画布的默认宽度，style代表画布渲染出来的宽度，之后画布里面的内容设置都按照大图的位置尺寸来做，具体原理看如下链接

[canvas的宽高设置问题](https://www.cnblogs.com/regina1123/p/6234719.html)

由于这个活动是一时兴起，也没经过过多的测试，有BUG请无视
