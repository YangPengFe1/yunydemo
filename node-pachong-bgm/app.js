const fs = require("fs");
const path = require("path");
const request = require("request");
const cheerio = require("cheerio");
const async = require("async");
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

function fileDownload(item, callback) {
  request(item.url)
    .pipe(
      fs.createWriteStream(path.join(__dirname, `./BGM/史诗级/${item.name.split('/')[1]}`))
    )
    .on("error", function (err) {
      callback(item);
    })
    .on("close", () => {
      callback(item);
    });
}

function bulkDownloads(filesList) {
  async.eachSeries(
    filesList,
    (item, callback) => {
      fileDownload(item, (item) => {
        console.log(`----下载${item.name.split('/')[1]}成功----`);
        callback()
      });
    },
    (err) => {
      console.log(err);
      callback();
    }
  );
}

let __init__ = function () {
  getDownloadList().then((res) => {
    bulkDownloads(res);
  });
};

__init__();
