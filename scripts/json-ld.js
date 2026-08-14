/**
 * Builds JSON-LD structured data for current page according to its type (page or post).
 *
 * @returns {string} - JSON-LD structured data
 */
function jsonLd() {
  const page = this.page;
  const config = this.config;

  const authorId = `${config.url}/#person`;
  const websiteId = `${config.url}/#website`;

  const author = {
    '@type': 'Person',
    '@id': authorId,
    name: config.author,
    url: `${config.url}/about/`
  };

  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: `${config.url}/`,
    name: config.title,
    description: config.description,
    inLanguage: config.language,
    author: {
      '@id': authorId
    }
  };

  if (config.keywords && config.keywords.length) {
    website.keywords = config.keywords.join(', ');
  }

  let graph = [];

  if (this.is_post()) {
    const permalink = this.full_url_for(page.permalink);

    const post = {
      '@type': 'BlogPosting',
      '@id': `${permalink}#article`,
      url: permalink,
      headline: page.title,
      author: {
        '@id': authorId
      },
      datePublished: page.date.format(),
      dateModified: page.updated.format(),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${permalink}#webpage`
      },
      isPartOf: {
        '@id': websiteId
      },
      inLanguage: config.language
    };

    if (page.excerpt) {
      post.description = this.strip_html(page.excerpt);
    }

    if (page.og_image) {
      post.image = this.full_url_for(page.og_image);
    }

    if (page.tags && page.tags.length > 0) {
      post.keywords = page.tags
        .map((tag) => tag.name)
        .join(', ');
    }

    graph = [
      website,
      author,
      post
    ];
  }
  else if (this.is_home()) {
    graph = [
      website,
      author
    ];
  }
  else if (this.is_page()) {
    const permalink = this.full_url_for(page.permalink);

    const webPage = {
      '@type': 'WebPage',
      '@id': `${permalink}#webpage`,
      url: permalink,
      name: page.title,
      isPartOf: {
        '@id': websiteId
      },
      author: {
        '@id': authorId
      },
      inLanguage: config.language
    };

    if (page.excerpt) {
      webPage.description = this.strip_html(page.excerpt);
    }

    graph = [
      website,
      author,
      webPage
    ];
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': graph
  };

  return '<script type="application/ld+json">'
    + JSON.stringify(schema)
    + '</script>';
}

hexo.extend.helper.register('json_ld', jsonLd);
