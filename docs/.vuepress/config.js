module.exports = {
  title: 'Jackson Miller',
  description: 'Just playing around',
  base: '/',
  contentLoading: true,
  plugins: [
    '@vuepress/blog',
    '@vuepress/pwa',
    '@vuepress/pagination',
    '@vuepress/active-header-links',
    '@vuepress/search',
    '@vuepress/register-components'
  ],
  themeConfig: {
    nav: [
      { text: 'About', link: '/about/' }
    ]
  }
}