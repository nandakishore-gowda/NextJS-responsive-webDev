import Head from 'next/head'
import '../styles/globals.css'
import Nav from '../components/utilities/Navbar';

function MyApp({ Component, pageProps }) {
  return (
<>
    <Head>
      <title>SandHut Studios</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, user-scalable=1, viewport-fit=cover"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
      <meta name="format-detection" content="telephone=no"/>
      <meta property="og:site_name" content="SandHut Studios (IN)"/>
      <meta property="og:title" content="SandHut Studios"/>
      <meta property="og:url" content="https://www.sandhut.in"/>
      <meta property="og:type" content="Television company"/>
      <meta property="og:image" content="https://yt3.ggpht.com/dniar_9MeGyY62E1UiMGPyGS6yF3BjVS5WOqHBr41a3I3X-4RNCgt9ojPhhvlr1SEeE5Kmyq=s88-c-k-c0x00ffffff-no-rj"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="og:locale" content="en_IN"/>
      <meta property="og:description" content="SandHut Studios is an entertainment brand defined the stories ,The SandHut Cinematic Universe multi-film franchises, SandHut is a universe filled with creativity, innovation and collaboration."/>
      <meta name="youtube:site" content="https://www.youtube.com/c/SandHutStudios"/>
      <meta name="instagram:site" content="@sandhut_studios"/>
      <meta name="twitter:site" content="@sandhutstudios"/>
      <link rel="shortcut icon" type="image/x-icon" href="/logo/SandHut_Studios_Round_Logo.png" alt="Sandhut Studios"></link>
      <link rel="apple-touch-icon" sizes="180x180" href="/logo/SandHut_Studios_Round_Logo.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/logo/SandHut_Studios_Round_Logo.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/logo/SandHut_Studios_Round_Logo.png"/>
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
    
<Nav/>
<Component {...pageProps} />
</>

  );
  
 
}

export default MyApp
