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
yo catberry [<appTemplate>]
```

See [catberry-cli](https://github.com/catberry/catberry-cli#create-catberry-applications-using-a-project-template) for available app templates, `empty-handlebars` is default.

## Generate a store

```bash
yo catberry:store <storeName>
```

## Generate a component

```bash
yo catberry:component [--preset=handlebars|dust|jade] <componentName>
```

See [catberry-cli](https://github.com/catberry/catberry-cli#add-cat-component-into-your-project) for available component presets, `handlebars` is default.

[npm-image]: https://badge.fury.io/js/generator-catberry.svg
[npm-url]: https://npmjs.org/package/generator-catberry
[travis-image]: https://travis-ci.org/catberry/generator-catberry.svg?branch=master
[travis-url]: https://travis-ci.org/catberry/generator-catberry
[daviddm-image]: https://david-dm.org/catberry/generator-catberry.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/catberry/generator-catberry
