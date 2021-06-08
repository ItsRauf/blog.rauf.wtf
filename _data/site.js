module.exports = {
  meta: {
    title: "Rauf",
    description: "Blog posts from Rauf.",
    lang: "en",
    siteUrl: "https://blog.rauf.wtf/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Blog posts from Rauf.",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://blog.rauf.wtf/",
    authorName: "Rauf Islam",
    authorEmail: "rauf@rauf.wtf"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Welcome to Rauf's Blog",
    description: "See posts and content from Rauf."
  }
}
