const web_tab = [
  {
    name: '前端论坛',
    src: 'bbs',
    hao: [
      { name: '掘金', href: 'https://juejin.cn/', description: '稀土掘金' },
      { name: 'Stackover Flow', href: 'https://stackoverflow.com/', description: '技术问答交流' },
      { name: 'Segmentfault', href: 'https://segmentfault.com/', description: '课程问答设置' },
      { name: '印记中文', href: 'https://docschina.org/', description: '前端导航' },
    ]
  },
  {
    name: '代码hub',
    src: 'hub',
    hao: [
      { name: 'Github', href: 'https://github.com/damonchugs', description: '国外代码托管平台' },
      { name: 'Gitee', href: 'https://gitee.com/', description: '国内代码托管平台' },
    ]
  },
  {
    name: '博客手册',
    src: 'blog',
    hao: [
      { name: '阮一峰网络博客', href: 'http://www.ruanyifeng.com/', description: '前端web技术nginx，node，https等' },
      { name: '廖雪峰网络博客', href: 'https://www.liaoxuefeng.com/', description: '官方网站' },
      { name: '酷 壳', href: 'https://coolshell.cn/', description: '享受编程和技术所带来的快乐 – Coding Your Ambition' },
      { name: '京东凹凸实验室', href: 'https://jelly.jd.com/', description: '欢迎来到全新的 JELLY 官网， 设计师的经验能量补给站！' },
      { name: '百度 FEX', href: 'http://fex.baidu.com/', description: 'FEX 原属于「Web 前端研发部」，现在核心成员都在百度云，致力于将前端技术做成技术产品，我们现在主要产品有 aipage、sugar 和 amis' },
      { name: 'threejs', href: 'https://threejs.org/', description: 'webgl手册' },
      { name: 'mapbox', href: 'https://www.mapbox.cn/', description: '地图使用' },
      { name: '前端相关网站收集整理', href: 'https://github.com/hoc2019/blog/blob/master/article/%E5%89%8D%E7%AB%AF%E5%B7%A5%E4%BD%9C%E5%AD%A6%E4%B9%A0%E7%9B%B8%E5%85%B3%E7%BD%91%E7%AB%99%E6%94%B6%E9%9B%86%E6%95%B4%E7%90%86.md', description: '前端工作学习相关网站收集整理' },
    ]
  },
  {
    name: '设计配色',
    src: 'color',
    hao: [
      { name: 'ant.design', href: 'https://ant.design/docs/spec/colors-cn', description: '阿里设计颜色设计' },
      { name: 'Color Drop', href: 'https://colordrop.io/', description: 'Color Drop' },
      { name: '设计师导航', href: 'https://color.uisdc.com/pick.html', description: '每周更新，一网打尽' },
      { name: 'JSONS.CN', href: 'http://www.jsons.cn/rgbhex/', description: 'HEX配色和RGBA转换' },
    ]
  },
  {
    name: '图片导航',
    src: 'image',
    hao: [
      { name: 'Stockio', href: 'https://www.stockio.com/', description: 'Free Photos, Vectors, Icons, Fonts and Videos' },
      { name: 'Khroma', href: 'http://khroma.co/', description: 'Design with colors you love.' },
      { name: 'LOADING.IO', href: 'https://loading.io/', description: 'Animation Made Easy.Ajax Loader, Animated Icons, Live Background in GIF / SVG / APNG / CSS !' },
    ]
  },
  {
    name: '字体导航',
    src: 'font',
    hao: [
      { name: '有字体', href: 'https://www.webfont.com/', description: '在线云字体，简单易用，阿里云cdn' },
      { name: 'wordmark', href: 'https://wordmark.it/', description: '展示系统字体样式' },
      { name: '字体传奇', href: 'http://www.ziticq.com/', description: '有免费，有商用字体' },
      { name: '图翼', href: 'http://www.tuyiyi.com/show-79', description: 'UI网页字体' },
      { name: 'Font Awesome', href: 'https://fontawesome.dashgame.com/', description: '一套绝佳的图标字体库和CSS框架' },
      { name: '字客网', href: 'https://www.fontke.com/', description: '中英文字体和字体格式转换' },
      { name: 'FREE CHINESE FONTS', href: 'https://www.freechinesefont.com/', description: '176+ traditional/simplified Chinese fonts for free! 中文字体下载试用' },
      { name: 'Free Font Utopia', href: 'https://www.fontsquirrel.com/', description: `Free fonts have met their match. We know how hard it is to find quality freeware that is licensed for commercial work. We've done the hard work, hand-selecting these typefaces and presenting them in an easy-to-use format. ` },
    ]
  },
  {
    name: '前端工具',
    src: 'tools',
    hao: [
      { name: '在线工具', href: 'https://tool.lu/', description: '在线前端工具' },
      { name: 'WordHtml', href: 'https://wordhtml.com/', description: 'Word Document to HTML Online Converter' },
      { name: '123APPS', href: 'https://123apps.com/cn/', description: 'Web Apps by 123apps 编辑、转换、创建' },
      { name: 'IPH', href: 'https://iph.href.lu/100x100?text=%E6%9A%82%E6%97%A0%E6%96%87%E5%AD%97', description: '填充图片，可中文（https://iph.href.lu/100x100?text=%E6%9A%82%E6%97%A0%E6%96%87%E5%AD%97）' },
      { name: 'DummyImage', href: 'https://dummyimage.com/', description: '填充图片，英文' },
    ]
  },
]
export default { name: '前端学习', src: 'web', tab: web_tab }