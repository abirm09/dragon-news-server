const news = require("./data/news.json");
const searchString = "Biden";
const searchResult = [];
for (const singleNews of news) {
  const title = singleNews.title.toLowerCase;
  console.log(title);
  //   if (title.includes(searchString.toLowerCase)) {
  //     searchResult.push(singleNews);
  //   }
}
console.log(searchResult);
