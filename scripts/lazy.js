hexo.extend.filter.register('after_render:html', (str, data) => {
    return str.replace(/<img src=/g, '<img loading="lazy" src=');
});
