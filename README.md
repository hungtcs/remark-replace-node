# remark-replace-node

[![npm version](https://badge.fury.io/js/remark-replace-node.svg)](https://badge.fury.io/js/remark-replace-node)

Remark plugin to replace the markdown node of the specified type with another type.

## When should I use this?

When you don't want to render a certain type of node, you can use this plugin to convert it into a regular text node.

## Install

```shell
npm install remark-replace-node
# or
pnpm add remark-replace-node
```

## Use

Say we have the following module example.js:

```ts
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkReplaceNode from "remark-replace-node";

const replacements = {
  image: (node) => ({
    type: "text",
    value: node.alt || node.url,
  }),
};

const file = await unified()
  .use(remarkParse)
  .use(remarkReplaceNode, replacements)
  .use(remarkStringify)
  .process(`[![abc.png](https://abc.png)](https://abc.link)`);

console.log(file.value);
```

Now running node example.js yields:

```markdown
[abc.png](https://abc.link)
```

## API

This package exports no identifiers. The default export is remarkReplaceNode.

### Options

```ts
Record<string, (node: Node) => RootContent>;
```

## License

[MIT](./LICENSE) © [hungtcs](https://github.com/hungtcs)
