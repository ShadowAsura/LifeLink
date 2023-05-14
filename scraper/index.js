const fetch = require('cross-fetch');
const fs = require('fs');

const BASE_URL = "https://api.nal.usda.gov/fdc/v1/";

async function main() {
  let page_num = 0;

  for (let i=36; i < 50; i++) {
    let file_contents = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    let food_ids = file_contents.map((item) => {
      return item.fdcId;
    });
    console.log(`Page number: ${i}`);
    let resp = await fetch(BASE_URL+`foods/list?api_key=B06vl5nSj5Hgj8kvhCNFD9TGUk82tsQyICW68yTP&pageSize=200&pageNumber=${page_num}`);
    resp = await resp.json();
    for (let j=0; j < resp.length; j++) {
      if (!food_ids.includes(resp[j].fdcId)) {
        file_contents.push(resp[j]);
      }
    }
    fs.writeFileSync("data.json", JSON.stringify(file_contents));
    page_num++;
  }
}

main();
