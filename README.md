# generator-catberry [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Yeoman generator for Catberry Framework

## Install
```bash
npm install yo -g
npm install generator-catberry -g
```

## Generate a new Catberry app
```
mkdir my-new-catberry-app
cd my-new-catberry-app
yo catberry [--preset=<preset>] [<appName>]
```
Presets are
* `handlebars` Empty project with [Handlebars](https://github.com/catberry/catberry-handlebars#readme) as template engine
(default preset)
* `dust` Empty project with [Dust](https://github.com/catberry/catberry-dust#readme) as template engine
* `pug` Empty project with [Pug](https://github.com/catberry/catberry-pug#readme) as template engine
* `example` Complete [example application](https://github.com/catberry/catberry-example#readme)

## Generate a store
```
yo catberry:store <storeName>
```

## Generate a component
```
yo catberry:component [--preset=<preset>] <componentName>
```
Where `preset` is `handlebars`, `dust` or `pug`. If omitted, app preset is used (`handlebars` for `example`).

[npm-image]: https://badge.fury.io/js/generator-catberry.svg
[npm-url]: https://npmjs.org/package/generator-catberry
[travis-image]: https://travis-ci.org/catberry/generator-catberry.svg?branch=master
[travis-url]: https://travis-ci.org/catberry/generator-catberry
[daviddm-image]: https://david-dm.org/catberry/generator-catberry.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/catberry/generator-catberry
