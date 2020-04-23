const event = {
  on: (target, type, handler) => {
    if (target.addEventListener) {
      target.addEventListener(type, handler, true);
    } else {
      // 兼容ie
      target.attachEvent('on' + type, event => handler.call(target, event), false);
    }
  }
};
