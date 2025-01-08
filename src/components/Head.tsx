import Head from "next/head";

export default function HeadLayout() {

    return <Head>
    {/* Basic SEO Metadata */}
    <title>Rivalium - The Realm of Rivals</title>
    <meta
      name="description"
      content="Rivalium is a high-octane 2.5D competitive multiplayer platformer featuring unique characters, intense battles, and thrilling gameplay."
    />
    <meta name="keywords" content="Rivalium, multiplayer game, platformer, competitive gaming, Rivalium characters, 2.5D platformer" />
    <meta name="author" content="Rivalium Team" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  
    {/* Open Graph Metadata (for Social Media Sharing) */}
    <meta property="og:title" content="Rivalium - The Realm of Rivals" />
    <meta
      property="og:description"
      content="Dive into Rivalium, a high-octane 2.5D multiplayer platformer. Choose your Rival, master their abilities, and compete for glory!"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://rivalium.online" />
    <meta property="og:image" content="/images/splash.webp" />
    <meta property="og:image:alt" content="Rivalium gameplay screenshot featuring intense battles." />
    <meta property="og:site_name" content="Rivalium" />
    <meta property="og:locale" content="en_US" />
  
    {/* Twitter Card Metadata */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Rivalium - The Realm of Rivals" />
    <meta
      name="twitter:description"
      content="Choose your Rival, compete in thrilling multiplayer battles, and experience the best 2.5D platforming action in Rivalium!"
    />
    <meta name="twitter:image" content="/images/splash.webp" />
    <meta name="twitter:image:alt" content="Rivalium's character Kenn splash art." />
    <meta name="twitter:site" content="@rivaliumgame" />
    <meta name="twitter:creator" content="@rivaliumgame" />
  
    {/* Favicon and Icons */}
    <link rel="icon" type="image/ico" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon-180x180.png" />
    <link rel="icon" type="image/png" sizes="256x256" href="/icons/favicon-256x256.png" />
    <link rel="icon" type="image/png" sizes="180x180" href="/icons/favicon-180x180.png" />
    <link rel="icon" type="image/png" sizes="128x128" href="/icons/favicon-128x128.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  
    {/* Additional SEO Metadata */}
    <link rel="canonical" href="https://www.rivalium.online" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#0d1117" />
    <meta name="msapplication-TileColor" content="#5478c7" />
    <meta name="msapplication-config" content="/browserconfig.xml" />
  
    {/* Schema.org Structured Data (for Google Rich Snippets) */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VideoGame",
        name: "Rivalium",
        description:
          "Rivalium is a 2.5D competitive multiplayer platformer where players choose unique Rivals and compete in thrilling battles.",
        url: "https://www.rivalium.com",
        genre: ["Platformer", "Multiplayer", "Action"],
        image: "https://rivalium.online/images/splash.webp",
        publisher: {
          "@type": "Organization",
          name: "Rivalium",
          url: "https://rivalium.online",
        },
        creator: {
          "@type": "Person",
          name: "kateonbxsh",
          url: "https://rivalium.online",
        },
        keywords: "Rivalium, multiplayer platformer, competitive gaming, ranked, online, gaming, steam, download, competitive",
      })}
    </script>
  </Head>
  

}