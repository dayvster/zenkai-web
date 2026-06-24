import { JSX } from "solid-js";

export type Props = {
  children: JSX.Element;
};

export const Table = (props: Props) => {
  return (
    <div class="overflow-x-auto mb-4">
      <table class="w-full text-sm border-collapse">
        {props.children}
      </table>
    </div>
  );
};

export const Th = (props: { children: JSX.Element }) => (
  <th class="text-left py-2 pr-4 text-muted font-semibold border-b border-border">
    {props.children}
  </th>
);

export const Td = (props: { children: JSX.Element }) => (
  <td class="py-2 pr-4 text-fg border-b border-border/50 font-mono">
    {props.children}
  </td>
);

export const TdDesc = (props: { children: JSX.Element }) => (
  <td class="py-2 text-fg border-b border-border/50">
    {props.children}
  </td>
);

export default Table;
