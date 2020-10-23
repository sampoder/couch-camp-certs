import Head from "next/head";

const Meta = ({ name = "Couch Camp 2", title = "Certificates" }) => (
  <Head>
    <title>
      {title} - {name}
    </title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="msapplication-TileColor" content="#DD5B39" />
    <meta name="theme-color" content="#DD5B39" />
  </Head>
);

const Home = (props) => (
  <div
    style={{
      minHeight: "100vh",
      textAlign: "center",
      padding: "10px",
      paddingTop: "30px",
    }}
  >
    <Meta />
    <img
      src="https://cloud-57pt0xtsf.vercel.app/0cclogo.png"
      style={{ margin: "auto", height: "100px", marginBottom: '40px' }}
    />
    Hey there scholar! Please check your email to find your certificate. Thanks
    for joining us for Couch Camp :D
  </div>
);

export default Home;
