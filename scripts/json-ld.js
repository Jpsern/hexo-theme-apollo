/**
 * Builds JSON-LD structured data for current page according to its type (page or post).
 *
 * @returns {string} - JSON-LD structured data
 */
 function jsonLd() {
    const page = this.page;
    const config = this.config;
    const author = {
      '@type': 'Person',
      name: config.author,
      url: "https://jpsern.com/about/"
    };
    // Google does not accept `Person` as item type for the publisher property
    const publisher = Object.assign({}, author, {'@type': 'Organization'});
    let schema = {};
  
    publisher.logo = {
      '@type': 'ImageObject',
      url: this.full_url_for('/images/dokan.svg')
    };
  
    if (this.is_post()) {
      schema = {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        author: author,
        articleBody: this.strip_html(page.content),
        dateCreated: page.date.format(),
        dateModified: page.updated.format(),
        datePublished: page.date.format(),
        description: this.strip_html(page.excerpt),
        headline: page.title,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': this.url_for(page.permalink)
        },
        publisher,
        url: this.url_for(page.permalink)
      };
  
      if (page.tags && page.tags.length > 0) {
        schema.keywords = page.tags.map((tag) => tag.name).join(', ');
      }
    }
    else if (this.is_page() || this.is_home()) {
      schema = {
        '@context': 'http://schema.org',
        '@type': 'Website',
        '@id': config.url,
        author: author,
        name: config.title,
        description: config.description,
        url: config.url
      };
  
      if (config.keywords && config.keywords.length) {
        schema.keywords = config.keywords.join(', ');
      }
    }
  
    return '<script type="application/ld+json">' + JSON.stringify(schema) + '</script>';
  }
  
  hexo.extend.helper.register('json_ld', jsonLd);
