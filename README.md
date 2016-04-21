# generator-catberry [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Yeoman generator for Catberry Framework

## Install

```bash
npm install yo -g
npm install generator-catberry -g
```

## Generate a new Catberry app

```bash
mkdir my-new-catberry-app
cd my-new-catberry-app
yo catberry [--preset=handlebars | dust | jade | example] [<appName>]
```

Presets are
<dl>
  <dt><code>handlebars</code> (default)</dt>
  <dd>Empty project with [Handlebars](https://github.com/catberry/catberry-handlebars#readme) as template engine</dd>

  <dt><code>dust</code></dt>
  <dd>Empty project with [Dust](https://github.com/catberry/catberry-dust#readme) as template engine</dd>

  <dt><code>jade</code></dt>
  <dd>Empty project with [Jade](https://github.com/catberry/catberry-jade#readme) as template engine</dd>

  <dt><code>example</code></dt>
  <dd>Complete example that uses GitHub API and almost all Catberry features</dd>
</dl>

## Generate a store

```bash
yo catberry:store <storeName>
```

## Generate a component

```bash
yo catberry:component [--preset=handlebars | dust | jade] <componentName>
```

See [catberry-cli](https://github.com/catberry/catberry-cli#add-cat-component-into-your-project) for available component presets, `handlebars` is default.

[npm-image]: https://badge.fury.io/js/generator-catberry.svg
[npm-url]: https://npmjs.org/package/generator-catberry
[travis-image]: https://travis-ci.org/catberry/generator-catberry.svg?branch=master
[travis-url]: https://travis-ci.org/catberry/generator-catberry
[daviddm-image]: https://david-dm.org/catberry/generator-catberry.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/catberry/generator-catberry
