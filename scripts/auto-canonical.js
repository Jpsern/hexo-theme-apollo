/**
 * 元の autoCanonical は toLowerCase しててウチでは都合わるいので流用して自前においてます
 */
hexo.extend.helper.register('autoCanonical', function (config, page) {
  var base_url = config.url;
  if (config.url.charAt(config.url.length - 1) !== '/') base_url += '/';

  var canonical_url = base_url + page.canonical_path.replace('index.html', '');
  canonical_url = canonical_url.replace(/[&<>"']/g, function (character) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[character];
  });

  return `<link rel="canonical" href="${canonical_url}">`;
});
