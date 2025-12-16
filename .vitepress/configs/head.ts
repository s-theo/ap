import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: 'https://i.theojs.cn/logo/ap_logo.webp' }],
  [
    'meta',
    {
      name: 'keywords',
      content:
        '机场推荐, 机场测评, 机场排名, 机场排行榜, 好用的机场, 稳定机场, 高速机场, 低价机场, 性价比机场, 便宜机场, 月付机场, 年付机场, IPLC机场, IEPL专线, CN2 GIA, BGP中转, 低延迟机场, 高速节点, 全球节点, 多设备连接, 多终端接入, 跨境网络, 远程办公加速, 游戏加速, 视频加速, 流媒体解锁, Netflix解锁, Disney+解锁, ChatGPT解锁, OpenAI加速, 云加速, 全球加速, Shadowsocks, SS协议, SSR, V2Ray, VMess, VLESS, Trojan, Trojan-Go, Hysteria, Hysteria2, TUIC, WireGuard, NaiveProxy, Reality协议, 极连云, JilianCloud, 青云梯, Lightspeed, 光速云, TNT Cloud, Totoro Cloud, 龙猫云, OnlyRabbit, 唯兔云, FatCat Cloud, 肥猫云, FlyingBird, 飞鸟机场'
    }
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'author', content: 'Theo' }],
  ['meta', { name: 'copyright', content: 'Theo' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: '机场推荐与测评' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-Hans' }],
  ['meta', { property: 'og:site_name', content: '机场推荐与测评' }],
  ['meta', { name: 'twitter:card', content: 'summary' }],
  ['meta', { name: 'google-site-verification', content: 'oQ4FeE7qcmwIaIH_Vnbr8z4v9uZI5GgGHrPZd0deka0' }],
  [
    'meta',
    {
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    }
  ]
]
