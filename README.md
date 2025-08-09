# vue-test

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### 项目在配置完之后，安装husky。进行git的hook，commit的时候进行检验

首先，进行commit init
然后，使用命令:pnpm dlx husky-init && pnpm install
通过以上操作之后，会在项目根目录下生成一个.husky文件夹，之下还有有一个pre-commit文件。然后对其进行修改为：pnpm lint

### 如果只想对后来的代码进行检查，就是说对前面的代码不关注，我只关注我自己的代码，那么还好

pnpm install lint-staged -D

首先，在package.json中进行配置，1、在script中设置lint-staged的启动命令。2、增加一个lint-staged条目

然后在 husky中的，pre-commit中配置
