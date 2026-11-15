hexo.extend.filter.register('after_post_render', function(data){
    var imageIndex = 0;
    data.content = data.content.replace(/<img\b[^>]*>/gi, function(image) {
        imageIndex += 1;
        if (imageIndex === 1 || /\bloading\s*=/.test(image)) return image;
        return image.replace(/<img\b/i, '<img loading="lazy"');
    });
    return data;
});
