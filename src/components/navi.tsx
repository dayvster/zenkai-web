export type NavItem = {
  label: string;
  href: string;
  icon?: string | HTMLElement;
}

export const NavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: "home",
  },
  {
    label: "Features",
    href: "/features",
    icon: "features",
  },
  {
    label: "Docs",
    href: "/docs",
    icon: "docs",
  },
 
];


import { GitHub } from "./svgs/GitHub";

export const Navi = () => {
  const title = "Zenkai";
  const mainIcon = "";
  return <nav class="sticky top-0 z-50 backdrop-blur-sm bg-base/80 flex items-center gap-4 border-b border-border px-6 py-3">
    <div class="flex items-center gap-4">
      <a href="/" class="font-bold text-primary transition-colors">
        <img src="imgs/logo.png" alt="Zenkai Logo" class="max-h-6" />
      </a>
      {NavItems.map((item) => {
        return <a href={item.href} class="text-fg hover:text-primary transition-colors">{item.label}</a>
      })}
    </div>
    <div class="ml-auto">
      <a href="https://github.com/dayvster/zenkai" target="_blank" class="block text-fg hover:text-primary fill-white hover:fill-primary transition-all">
        <GitHub size={20} />
      </a>
    </div>
  </nav>
}