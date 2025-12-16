import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: 'https://i.theojs.cn/logo/ap_logo.webp' }],
  [
    'meta',
    {
      name: 'keywords',
      content:
        '机场推荐与测评, 机场推荐, 性价比机场, 低价机场, 云加速, 全球加速, IPLC 专线, 低延迟, 多终端接入, 跨境团队, 远程办公, 网络加速, 游戏加速, 视频加速, 极连云, JilianCloud, 青云梯, lightspeed, 光速云, TNT Cloud, Totoro Cloud, 龙猫云, onlyrabbit, 唯兔云, FatCat Cloud, 肥猫云, FlyingBird, 飞鸟机场'
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
