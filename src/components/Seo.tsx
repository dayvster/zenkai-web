import { Link, Meta, Title } from "@solidjs/meta";
import { useLocation } from "@solidjs/router";

export const SITE_URL = "https://zenkai-launcher.netlify.app";
const SITE_TITLE = "Zenkai - Fast App Launcher & Window Switcher";

export type Props = {
  // Shown as "Title | Zenkai"; leave it out for the site's own title.
  title?: string;
  description: string;
};

// The title, description and canonical URL for one page, used by search engines and link
// previews. Netlify serves every prerendered page with a trailing slash, so the canonical
// URL has one too.
export const Seo = (props: Props) => {
  const location = useLocation();
  const title = () => (props.title ? `${props.title} | Zenkai` : SITE_TITLE);
  const url = () => SITE_URL + location.pathname.replace(/\/?$/, "/");

  return (
    <>
      <Title>{title()}</Title>
      <Meta name="description" content={props.description} />
      <Link rel="canonical" href={url()} />
      <Meta property="og:title" content={title()} />
      <Meta property="og:description" content={props.description} />
      <Meta property="og:url" content={url()} />
      <Meta name="twitter:title" content={title()} />
      <Meta name="twitter:description" content={props.description} />
    </>
  );
};

export default Seo;
