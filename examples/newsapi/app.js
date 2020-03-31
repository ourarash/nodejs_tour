const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("73d8e73914b549eea612925bd6cd168e");
const fsPromises = require("fs").promises;
const Entities = require("html-entities").XmlEntities;

async function main() {
  const entities = new Entities();

  // To query top headlines
  // All options passed to topHeadlines are optional, but you need to include at least one of them
  let html = "";

  let response = await newsapi.v2.everything({
    q: "coronavirus",
    language: "en",
    // country: "us",
    pageSize: 100
  });
  console.log("response.totalResults: ", JSON.stringify(response.totalResults));
  console.log("response.articles.length: ", response.articles.length);
  for (let a of response.articles) {
    html += `<a href="${a.url}" target="_blank"> <img src="${entities.decode(
      a.urlToImage
    )}" alt="${a.title}" title="${
      a.title
    }" height="100" width="100" border="5" hspace="20" vspace="20"></a>\n`;
  }

  await fsPromises.writeFile("./result.html", html);
}

main();
