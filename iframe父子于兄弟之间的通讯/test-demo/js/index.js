const win = typeof window !== 'undefined' ? window : this;
const doc = document;

// 存储全局对象
const dom = {
  win,
  doc
};

allClickCollection = () => {
  event.on(dom.doc.body, 'click', autoClickHandler);
};

function autoClickHandler(ev) {
  console.log(ev);
};

dom.win.onload = () => {
  allClickCollection();
};
