hexo.extend.filter.register('after_post_render', function(data){
  data.content = data.content.replace(/<img src=/g, '<img loading="lazy" src=');
  return data;
});
