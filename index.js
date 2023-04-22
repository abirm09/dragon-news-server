const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());
//test API
app.get("/", (req, res) => {
  res.send(["API is working successfully."]);
});
//get categories
app.get("/categories", (req, res) => {
  res.send(categories);
});
//all news
app.get("/news/all", (req, res) => {
  res.send(news);
});
//gte news by id
app.get("/news/:id", (req, res) => {
  const newsId = req.params.id;
  const reqNews = news.find(singleNews => singleNews._id === newsId);
  res.send(reqNews);
});

//get news by category
app.get("/category/:id", (req, res) => {
  const categoryId = parseInt(req.params.id);
  if (categoryId === 0) {
    res.send(news);
  } else {
    const foundedNews = news.filter(
      n => parseInt(n.category_id) === categoryId
    );
    res.send(foundedNews);
  }
});

app.get("/news/search/:searchString", (req, res) => {
  const searchString = req.params.searchString;
  const searchResult = [];
  for (const singleNews of news) {
    const singleTitle = singleNews.title.toLowerCase();
    if (singleTitle.includes(searchString.toLowerCase())) {
      searchResult.push(singleNews);
    }
  }
  res.send({ count: searchResult.length, searchResult });
});

app.listen(port, () => {
  console.log("server is started successfully");
});
