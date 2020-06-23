const fs = require("fs");
const ora = require("ora");
const chalk = require("chalk");
const path = require("path");
const request = require("request");
const cheerio = require("cheerio");
let params_config = require("./params.config");
let toolsfun = require("./utils/tools");

function getDownloadList() {
  return new Promise((resolve, reject) => {
    request(params_config.url, (err, res, body) => {
      if (err) return;
      const $ = cheerio.load(body);
      let domList = $(".LineDOuterSpaceContent tbody tr td [href]");
      // 带下载的文件详情集合
      let filesList = [];
      for (let i = 0; i < domList.length; i++) {
        const element = domList.eq(i);
        filesList.push({
          url: toolsfun.getDownloadFileUrl(
            params_config.url,
            element.attr("href")
          ),
          name: element.attr("href").replace(".mpe", ""),
        });
      }
      resolve(filesList);
    });
  });
}

function fileDownload(item) {
  return new Promise((resolve, reject) => {
    let tip = chalk.hex("#ffa34d")(`--- 正在下载 => ${item.name} ---`);
    const spinner = ora(`Loading ${tip}`).start();
    request(item.url)
      .pipe(
        fs.createWriteStream(
          path.join(__dirname, `./BGM/史诗级/${item.name.split("/")[1]}`)
        )
      )
      .on("error", function (err) {
        console.log(res);
        console.log("error");
        let tip = chalk.hex("#eb4559")(`--- ${item.name} => 下载失败 ---`);
        spinner.fail(tip);
        reject({ success: false, data: err });
      })
      .on("finish", (res) => {
        console.log(res);
        console.log("finish");
        let tip = chalk.hex("#008000")(`--- ${item.name} => 下载成功 ---`);
        spinner.succeed(tip);
        resolve({ success: true, data: item });
      })
      .on("close", (res) => {
        console.log(res);
        console.log("close");
        let tip = chalk.hex("#008000")(`--- ${item.name} => 下载成功 ---`);
        spinner.succeed(tip);
        resolve({ success: true, data: item });
      });
  });
}

function __downloads__(list) {
  (async () => {
    let results = [];
    for (let i = 0; i < list.length; i++) {
      console.log(i);
      const res = await fileDownload(list[i]);
      console.log(res);
      res.success ? results.push(res) : "";
    }
    downloadsComplete(results);
  })();
}

function downloadsComplete(results) {
  console.log(`下载完成，共下载${results.length}首`);
}

let __init__ = function () {
  let sssss = [
    {
      url:
        "https://freepd.com/Page2/music/Monplaisir%20-%20Relaxing%20Ukulele%20-%2008%20Hop.mp3",
      name: "music/Monplaisir - Relaxing Ukulele - 08 Hop.mp3",
    },
    {
      url: "https://freepd.com/Page2/music/Monster.mp3",
      name: "music/Monster.mp3",
    },
    {
      url: "https://freepd.com/Page2/music/Montageur.mp3",
      name: "music/Montageur.mp3",
    },
    {
      url: "https://freepd.com/Page2/music/Moogalicious.mp3",
      name: "music/Moogalicious.mp3",
    },
    {
      url: "https://freepd.com/Page2/music/Morning%20Snowflake.mp3",
      name: "music/Morning Snowflake.mp3",
    },
    {
      url:
        "https://freepd.com/Page2/music/Music%20for%20Funeral%20Home%20-%20Part%201.mp3",
      name: "music/Music for Funeral Home - Part 1.mp3",
    },
    {
      url:
        "https://freepd.com/Page2/music/Music%20for%20Funeral%20Home%20-%20Part%2010.mp3",
      name: "music/Music for Funeral Home - Part 10.mp3",
    },
    {
      url:
        "https://freepd.com/Page2/music/Music%20for%20Funeral%20Home%20-%20Part%202.mp3",
      name: "music/Music for Funeral Home - Part 2.mp3",
    },
    {
      url:
        "https://freepd.com/Page2/music/Music%20for%20Funeral%20Home%20-%20Part%203.mp3",
      name: "music/Music for Funeral Home - Part 3.mp3",
    },
    {
      url:
        "https://freepd.com/Page2/music/Music%20for%20Funeral%20Home%20-%20Part%204.mp3",
      name: "music/Music for Funeral Home - Part 4.mp3",
    },
  ];
  __downloads__(sssss);
  // getDownloadList().then((res) => {
  //   bulkDownloads(res);
  // });
};

__init__();
