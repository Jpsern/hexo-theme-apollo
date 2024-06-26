/**
 * 元の autoCanonical は toLowerCase しててウチでは都合わるいので流用して自前においてます
 */
hexo.extend.helper.register('autoCanonical', function (config, page) {
  var base_url = config.url;
  if (config.url.charAt(config.url.length - 1) !== '/') base_url += '/';

  return `<link rel="canonical" href="${base_url}${page.canonical_path.replace('index.html', '')}"/>`;
});
