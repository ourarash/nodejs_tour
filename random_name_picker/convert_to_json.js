const fs = require("fs");

function main() {
  let randomNumber = Math.floor(Math.random() * 40) + 1; // returns a random integer from 1 to 10
  console.log("randomNumber: ", randomNumber);
}
const csv = require("csvtojson");

async function convert() {
  let csvStr = `NAME,DEGREE OBJECTIVE,MAJOR,CLASS LEVEL,EMAIL ADDRESS,USC ID,WITHDRAWN,Grade Option,Units,Midterm
"Andre, Charles, Michel",MS,CENG,G,candre@usc.edu,3128977707,N,Letter Grade,2,
"Bruner, Samuel",MS,CENG,G,sbruner@usc.edu,3198542984,N,Letter Grade,2,
"Chen, Shi-Lin",MS,EE,G,shilinch@usc.edu,2991911997,N,Letter Grade,2,
"Cui, Wenhao",MS,EE,G,wenhaocu@usc.edu,6153876930,N,Letter Grade,2,
"Ding, Lei",MS,EE,G,leid@usc.edu,3032832007,N,Letter Grade,2,
"Gallegos, Miguel",MS,CENG,G,gall562@usc.edu,8771887936,N,Letter Grade,2,
"Gu, Zixi",MS,EE,G,zixigu@usc.edu,6974574312,N,Letter Grade,2,
"Guo, Haoyu",MS,CENG,G,haoyuguo@usc.edu,2462355241,N,Letter Grade,2,
"Hong, Jingkai",MS,EE,G,jingkaih@usc.edu,6334949156,N,Letter Grade,2,
"Kingsley, Arshine","MS,MS","EEWN,EEWH",G,akingsle@usc.edu,3940957181,N,Letter Grade,2,
"Lai, Chun-Hao","MS,MS","EE,CENG",G,laichunh@usc.edu,8107709872,N,Letter Grade,2,
"Lin, Yen-Ting",MS,EE,G,ylin2150@usc.edu,8670297229,N,Letter Grade,2,
"Mahindar, Rudrendu",MS,EE,G,mahindar@usc.edu,6343999513,N,Letter Grade,2,
"Mai, Linxin",MS,EE,G,linxinma@usc.edu,9000526525,N,Letter Grade,2,
"McDonough, Spencer, Hill",MS,CENG,G,shmcdono@usc.edu,6341617166,N,Letter Grade,2,
"Pasupuleti, Krishna Sai Tarun",MS,EE,G,kpasupul@usc.edu,3006073420,N,Letter Grade,2,
"Patil, Anuj, Sudhir",MS,CENG,G,aspatil@usc.edu,5704035814,N,Letter Grade,2,
"Su, Binling",MS,EE,G,binlings@usc.edu,4926781326,N,Letter Grade,2,
"Sun, Guiquan","MS,NONE","EE,IAPR",G,gsun@usc.edu,3937104003,N,Letter Grade,2,
"Sun, Tieming",MS,EE,G,tiemings@usc.edu,4911224942,N,Letter Grade,2,
"Wang, Yingnan",MS,CENG,G,yingnanw@usc.edu,4616805578,N,Letter Grade,2,
"Wu, Jiawei",MS,EE,G,jwu64409@usc.edu,4102816653,N,Letter Grade,2,
"Xu, Jingwei",MS,CENG,G,jingweix@usc.edu,6618878051,N,Letter Grade,2,
"Xu, Mingang",MS,EE,G,mingangx@usc.edu,7106265797,N,Letter Grade,2,
"Xu, Siqi",MS,EE,G,siqixu@usc.edu,1426832163,N,Letter Grade,2,
"Xu, Tianyi",MS,EEMC,G,xutianyi@usc.edu,3860934574,N,Letter Grade,2,
"Yang, Yueyi",MS,EE,G,yueyiyan@usc.edu,3620535601,N,Letter Grade,2,
"Yang, Zhiyong",MS,EE,G,zhiyongy@usc.edu,5019319659,N,Letter Grade,2,
"Yuan, Weiheng",MS,EE,G,yuanweih@usc.edu,4788364379,N,Letter Grade,2,
"Zha, Haiqiang",MS,EE,G,haiqianz@usc.edu,6719728693,N,Letter Grade,2,
"Zhang, Chuang",MS,EE,G,chuangzh@usc.edu,7590871231,N,Letter Grade,2,
"Zhang, Yue",MS,EE,G,yzhang10@usc.edu,5825691156,N,Letter Grade,2,
"Zhang, Yuheng",MS,EE,G,yuhengzh@usc.edu,7230140245,N,Letter Grade,2,
"Zhao, Ruiyu",MS,EE,G,ruiyuzha@usc.edu,4057818955,N,Letter Grade,2,
"Zheng, Zhiwen",MS,EE,G,zhiwenzh@usc.edu,8859890371,N,Letter Grade,2,
"Zhong, Jingbang",MS,EE,G,jingbanz@usc.edu,1356144978,N,Letter Grade,2,
"Zhou, Jingchao","MS,MS","EE,EEWN",G,jingchao@usc.edu,6361657578,N,Letter Grade,2,
"Zhu, Jiaao",MS,EE,G,jiaaozhu@usc.edu,6970206329,N,Letter Grade,2,`;

  let json = await csv({}).fromString(csvStr);

  let obj = json.map(e => {
    return { name: e.NAME, major: e.MAJOR };
  });

  fs.writeFileSync("./data.json", JSON.stringify(obj, null, 2), "utf-8");
}
convert();
main();
