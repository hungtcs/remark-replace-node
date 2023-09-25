import { Root, Node, Parent, RootContent } from "mdast";
import { Transformer } from "unified";
import { visit } from "unist-util-visit";

export type Options = Record<string, (node: Node) => RootContent>;

export default function remarkReplaceNode(
  options?: null | Options
): Transformer<Root> {
  return (tree) => {
    if (!options) {
      return;
    }

    visit(tree, (node) => {
      const parent = node as Parent;
      if (parent.children) {
        parent.children = parent.children.map((child) => {
          const mapper = options[child.type];
          if (mapper) {
            return mapper(child);
          }
          return child;
        });
      }
    });
  };
}
