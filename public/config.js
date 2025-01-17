// 配置
window.Config = {

  // 站点名
  SiteName: '服务器状态监控',

  // 站点链接
  SiteUrl: 'http://paolu.cc',

  // UptimeRobot Api 域名 api.uptimerobot.com
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur1628409-416237d0dd1ba7c797e28662',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://paolu.cc/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/390u/uptime-status'
    }
  ]
};
