# responsive image
1. KB size image send over wire
2. physical size of image sending to high DPI device
3. image crop in form of art direction 

```html
<img 
  src="horse-350.jpg"
  srcset="horse-350.jpg 350w, horse-500.jpg 500w,
  horse-1024.jpg 1024w, horse.jpg 2000w"
  sizes="(min-width: 64em) 70vw, (min-width: 37.5em) 95vw, 100vw"
  alt="A horse"
/>
```

# improving performance
##lazy loading
jQuery plugin, not load image until user scroll to that position
1. simple case
```html
<img src="default pic" data-lazy-src="real-pic" alt="xxx">
<noscript><img src="real pic" alt="xxx"/></noscript>
```

2. consider SEO
write normal src address in img, put js on top, js substitute src initially, when scroll to there, replace back.
```js
$("block").find("img").lazyload({effect: "fadeIn", threshold:32, placeholder:"/images/lazyload1.gif"});
```
call temporary image 'preImg'




















