var urls = [
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
  "https://hexo-blog-12561.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      console.log("一张图片加载完成");
      resolve(img);
    };
    img.onerror = function () {
      reject(new Error("Could not load image at" + url));
    };
    img.src = url;
  });
}
function scheduler(urls, limit = 3) {
  return new Promise((resolve) => {
    let index = 0;
    let result = [];
    function innerLoad(promise) {
      promise.then(
        (res) => {
          result.push(res);
          if (index === urls.length) {
            resolve(result);
            return;
          }
          innerLoad(loadImg(urls[index++]));
        },
        (err) => result.push(err)
      );
    }
    for (; index < limit; index++) {
      innerLoad(loadImg(urls[index]));
    }
  });
}
scheduler(urls).then((res) => {
  console.log(res);
});
