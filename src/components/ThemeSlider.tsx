import { ImageSlider } from "./ImageSlider";

const themes = [
  { src: "imgs/ayu-dark.png", label: "Ayu Dark" },
  { src: "imgs/dracula.png", label: "Dracula" },
  { src: "imgs/nord.png", label: "Nord" },
  { src: "imgs/catppuccin.png", label: "Catppuccin" },
];

export const ThemeSlider = () => {
  return (
    <ImageSlider
      images={themes.map((t) => ({ src: t.src, alt: t.label, label: t.label }))}
      labelPosition="above"
      animation="blur"
      interval={5000}
    />
  );
};
