Hexo theme: Apollo
=================

This hexo theme is a fork from https://github.com/AthenaYin/hexo-theme-apollo

## Installation

### Install

Run this command from inside your hexo project
``` bash
$ git clone https://github.com/jpsern/hexo-theme-apollo.git themes/apollo
```

If your project already in Git management, please using Git submodule.
```bash
$ git submodule add https://github.com/jpsern/hexo-theme-apollo.git
```

**Apollo requires Hexo 2.4 and above.**

### Update

``` bash
cd themes/apollo
git pull
```

If using Git submodule
```bash
git submodule update
```

## Configuration

``` yml
# Header
menu:
    Home: /
    Archives: /archives
rss: /atom.xml

# Content
excerpt_link: Read More
fancybox: true

# Miscellaneous
google_analytics:
favicon: /favicon.png
```

- **menu** - Navigation menu
- **rss** - RSS link
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
