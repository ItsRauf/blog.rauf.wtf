---
author: "Me"
title: "Dynamic Meta Tags with Cloudflare Workers"
date: 2021-06-14
description: "A synopsis on how I utilize Cloudflare Workers to dynamically set HTML meta tags."
tags:
  - webdev
  - serverless
---

_**This is not a tutorial on how to use Cloudflare Workers or any of its features**_

<br />

At [embed.rauf.wtf](https://embed.rauf.wtf/) I allow users to pass in data and get a web embed which uses plain HTML and meta tags.

Dynamically set meta tags sound difficult at first using only plain HTML without a template language/view engine. However, with **[Cloudflare Workers](https://workers.dev/)** it is 100% possible and fairly easy to do.

<br />

### What is Cloudflare Workers?

"Cloudflare Workers is a serverless application platform running on Cloudflare’s global cloud network in over 200 cities around the world, offering both free and paid plans." ([https://developers.cloudflare.com/workers/get-started/guide](https://developers.cloudflare.com/workers/get-started/guide))

<br />

### Dynamic Meta Tags

Workers provides a [HTMLRewriter](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter) which allows you to pass in a HTML request and modify it.

Content for the meta tags gets passed in through Query Params on the request url and I use the HTMLRewriter to select all the meta tag elements and add the content using a custom **`MetaHandler`** class.

```js
class MetaHandler {
  element(element) {
    // Figure out which element it is
    // Find the corresponding query param
    // set the element's content: element.setAttribute('content', param data)
  }
}

return new HTMLRewriter().on("head > meta", new MetaHandler()).transform(req);
```

In return it provides back the HTML but with the meta tag content modified to use the content from the request url which then gets send as the response body.

<br />

###### And that is how I use **Cloudflare Workers** and **HTMLRewriter** to dynamically set meta tag content for [embed.rauf.wtf](https://embed.rauf.wtf).

###### The actual process is a bit more technical but I hope this shows some insight into how the general process works.
