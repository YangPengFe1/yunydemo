let toolsfun = {};

// 下载地址集合
toolsfun.getDownloadFileUrl = function (domain, url) {
  return `${domain}/${encodeURI(url)}`
}

module.exports = toolsfun;