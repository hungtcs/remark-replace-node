import { Root, Node, RootContent } from "mdast";
import { Transformer } from "unified";
export type Options = Record<string, (node: Node) => RootContent>;
export default function remarkReplaceNode(options?: null | Options): Transformer<Root>;
