import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.thorn.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.thorn.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Salty Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://thornswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://thornswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://thornswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://thornswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.thornswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/thornswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.thornswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://thornswap.medium.com',
      },
    ],
  },
]

export default config
