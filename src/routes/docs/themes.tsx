import DocsLayout from "~/layouts/DocsLayout";
import { ThemeGallery, themes } from "~/components/ThemeGallery";

export default function Themes() {
  return (
    <DocsLayout>
      <ThemeGallery themes={themes} />
    </DocsLayout>
  );
}
