import Head from "next/head";
import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import favicon from "../public/icons/android-chrome-192x192.png";

export default function Header({ title, url = process.env.METADATA_BASE_URL }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>{title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#a760f9"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Swap Mobile Wallet" />
        <meta name="application-name" content="Swap Mobile Wallet" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph (Facebook) */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/icons/android-chrome-512x512.png" />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Swap Mobile Wallet" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@notRevvz" />
        <meta name="twitter:description" content="Quickly and privately send $XWP with the Swap Mobile Wallet" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content="/icons/android-chrome-512x512.png" />
        <meta name="twitter:image:alt" content="Swap ($XWP) Icon Logo" />
      </Head>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="/">
            <Image src={favicon} alt="Brand Image" width={50} height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/support">Email Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
