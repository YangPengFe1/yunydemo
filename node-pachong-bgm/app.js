const fs = require("fs");
const https = require("https");
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

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest, { flags: "wx" });
    const request = https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
      } else {
        file.close();
        fs.unlink(dest, () => {}); // Delete temp file
        reject({
          success: false,
          data: `Server responded with ${response.statusCode}: ${response.statusMessage}`,
        });
      }
    });

    request.on("error", (err) => {
      file.close();
      fs.unlink(dest, () => {}); // Delete temp file
      reject({ success: false, data: err.message });
    });

    file.on("finish", () => {
      resolve({ success: true, data: dest });
    });

    file.on("error", (err) => {
      file.close();
      if (err.code === "EEXIST") {
        reject("File already exists");
      } else {
        fs.unlink(dest, () => {}); // Delete temp file
        reject({ success: false, data: err.message });
      }
    });
  });
}

function __downloads__(list) {
  (async () => {
    let results = [];
    for (let i = 0; i < list.length; i++) {
      let url = list[i].url;
      let dest = `./BGM/史诗级/${list[i].name.split("/")[1]}`;
      const res = await downloadFile(url, dest);
      res.success ? results.push(res) : "";
    }
    downloadsComplete(results);
  })();
}

function downloadsComplete(results) {
  console.log(`下载完成，共下载${results.length}首`);
}

function __init__() {
  downloadFile(
    "https://freepd.com/Page2/music/Monplaisir%20-%20Relaxing%20Ukulele%20-%2007%20Floating%20Temple.mp3",
    "./BGM/史诗级/shdkf.mp3"
  );
  // getDownloadList().then((res) => {
  //   __downloads__(res);
  // });
}

__init__();
