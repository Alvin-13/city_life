export default {
  formatJSON (array, key) {
		return array.map((item) => {
      if (item[key]) {
      	item[key] = item[key].split(',');
      }

      return item;
		});
	},

	jsonToArr (str) {
    return JSON.parse(str);
	},

	strToArr (str) {
    return str.split(',')
	},

	commaToSpace (str) {
    return str.replace(/,/g, ' ')
	},

	trimSpace (str) {
    return str.replace(/\s+/g, '')
	},
  
  /**
   * 事件触发后，n秒内事件再触发，定时器会重新计时。
   * 事件处理函数一直不会被执行，最终只会执行最后一次。
   *
   * 应用：
   * scroll事件（资源的加载）
   * mousemove事件（拖拽）
   * resize事件（响应式布局样式）
   * keyup事件（输入框文字停止打字后才进行校验）
   */
  debounce(fn, delay, isImmediate) {
    let timer = null;

    return function() {
      let args = arguments;

      timer && clearTimeout(timer);

      if (isImmediate && !timer) {
        fn(args);
        timer = null;
        return;
      }

      timer = setTimeout(() => {
        fn(args);
        timer = null;
      }, delay);
    };
  },

  /**
   * 事件被触发，n秒内只执行一次事件处理函数。
   * 不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数
   *
   * 应用：
   * click事件（不停快速点击按钮，减少触发频次）
   * scroll事件（返回顶部按钮出现\隐藏事件触发）
   * keyup事件（输入框文字与显示栏内容复制同步）
   * 减少发送ajax请求，降低请求频率
   */

  throttle1(fn, delay) {
    let timer = null,
      begin = new Date().getTime();

    return function() {
      let args = arguments,
        cur = new Date().getTime();

      timer && clearTimeout(timer);

      if (cur - begin >= delay) {
        fn(args);
        begin = new Date().getTime(); //不要用cur, 万一函数执行需要很久
      } else {
        timer = setTimeout(() => {
          fn(args);
        }, delay);
      }
    };
  },

  throttle(fn, delay){
    let timer = null,
        begin = new Date().getTime();

    return function() {
      let _self = this,
          cur = new Date().getTime(),
          args = arguments;

      clearTimeout(timer);

      if(cur - begin >= delay) {
        fn.call(_self, args);
        begin = new Date().getTime();
      }else {
        timer = setTimeout(() => {
          fn.call(_self, args);
        },delay)
      }

    }
  }
};
