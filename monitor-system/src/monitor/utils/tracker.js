class SendTracker {
  constructor() {
    // 信息上传的路径
    this.url = '';
    this.xhr = new XMLHttpRequest();
  }
  send(data = {}) {}
}

export default new SendTracker();
