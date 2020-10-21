import Head from "next/head";
import Meta from "../components/meta.js";

export default ({
  name = "Couch Camp 2020 Season",
  title = "Home",
  description = `A (unofficial) virtual World Scholars Cup season,
  organised by the community.`,
  image = "https://cloud-mfm9q02p9.vercel.app/screenshot_2020-09-08_at_4.38.34_pm.png",
  url = "https://couch-camp-site.vercel.app/",
}) => (
  <Head>
    <title>{title} - {name}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="msapplication-TileColor" content="#DD5B39" />
    <meta name="theme-color" content="#DD5B39" />
  </Head>
);
