var ig = require("instagram-scraping");
const Entities = require("html-entities").XmlEntities;
const fsPromises = require("fs").promises;

async function main() {
  const entities = new Entities();
  let html = "";
  let result = await ig.scrapeTag("coronavirus");
  console.log("result: ", result);
  let decoded = [];

  for (let m of result.medias) {
    // decoded.push(entities.decode(m.display_url));
    html += `<img src="${entities.decode(m.display_url)}" alt="${
      m.text}" title="${m.text}" height="100" width="100">\n\n`;
  }
  await fsPromises.writeFile("./result.html", html);
}

main();
