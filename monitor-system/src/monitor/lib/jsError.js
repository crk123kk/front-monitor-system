import getLastEvent from '../utils/getLastEvent';
import getSelector from '../utils/getSelector';
import tracker from '../utils/tracker';

export function injectJsError() {
  // console.log('injectJsError');
  // 监听全局未捕获的错误
  // event：错误事件对象
  window.addEventListener('error', function (event) {
    //最后一个交互事件
    let lastEvent = getLastEvent();
    console.log(event);
    let log = {
      kind: 'stability', //监控指标的大类
      type: 'error', // 小类型：这是一个错误类型
      errorType: 'jsError', // js执行错误
      // url: '', // 访问哪个路径，哪里报错了
      message: event.message, // 报错信息
      filename: event.filename, //哪个文件报错
      position: `${event.lineno}: ${event.colno}`, //报错的行和列
      stack: getLines(event.error.stack),
      // body div#container div.content input
      selector: lastEvent ? getSelector(lastEvent.path) : '', //代表最后一个操作元素
    };
    console.log(log);
    tracker.send(log);
  });

  function getLines(stack) {
    return stack
      .split('\n')
      .slice(1)
      .map((item) => item.replace(/^\s+at\s+/g, ''))
      .join('^');
  }
}
