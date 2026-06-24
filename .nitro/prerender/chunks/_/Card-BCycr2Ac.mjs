import { ssrElement, mergeProps, escape } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { splitProps } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';

const Card = (props) => {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return ssrElement("div", mergeProps(rest, {
    get ["class"]() {
      var _a;
      return `border border-border-primary-muted rounded-lg ${(_a = local.class) != null ? _a : ""}`;
    }
  }), () => escape(local.children), true);
};

export { Card as C };
//# sourceMappingURL=Card-BCycr2Ac.mjs.map
