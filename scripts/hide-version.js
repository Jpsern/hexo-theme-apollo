hexo.extend.filter.register('after_render:html', (str, data) => {
    return str.replace(
        /<meta name=\"generator\" content=\"Hexo\s(.+)\"/, 
        '<meta name="generator" content="Hexo"'
    );
})
