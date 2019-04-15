self.onmessage = function(event) {
  importScripts('./test.js');
  var data = event.data;
  console.log(data)
  var ans = fibonacci(data);
  this.postMessage(ans);
};

function fibonacci(n) {
  return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2);
}