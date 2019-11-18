hexo.extend.helper.register('getMenu', () => {
    'use strict'
    const relative_url = hexo.extend.helper.get('relative_url').bind(hexo)
    const navs = hexo.theme.config.navs
    const pages = hexo.locals.get('pages').filter(page => page.displayedInTheMenu).map(page => ({
        name: page.title,
        link: relative_url(hexo.config.root, page.path)
    }))
    return navs.concat(pages)
})