// 定义最大fontsize
const MAX_FONT_SIZE = 42

// 监听 html文档被解析完成事件
document.addEventListener('DOMContentLoaded', () => {
  // 获取 HTML标签
  const html = document.querySelector('html')
  // 获取html元素fontsize标准值， 屏幕宽度/10
  let fontSize = window.innerWidth / 10
  // 获取到的 fontsize 不允许超过我们定义的最大值
  fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
  // 定义 html的fontsize
  html.style.fontSize = fontSize + 'px'
})
