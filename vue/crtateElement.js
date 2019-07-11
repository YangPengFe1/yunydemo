class CrtateElement {
  constructor(el, attr, child) {
    this.el = el
    this.attrs = attr
    this.child = child || []
  }
  render() {
    let virtualDom = document.createElement(this.el)
    // attr是个对象所以要遍历渲染
    for (const attr in attrs) {
      virtualDom.setAttribute(attr, this.attrs[attr])
    }

    // 深度遍历chlid
    this.child.forEach(element => {
      console.log(element instanceof CrtateElement)
      //如果子节点是一个元素的话，就调用它的render方法创建子节点的真实DOM，如果是一个字符串的话，创建一个文件节点就可以了
      // 判断一个对象是否是某个对象的实力
      let childElement = (element instanceof CrtateElement) ? element.render() : document.createTextNode(element)
      virtualDom.appendChild(childElement)
    });

    return virtualDom;
  }
}

function element(el, attr, child) {
  return new CrtateElement(el, attr, child)
}

module.exports = element