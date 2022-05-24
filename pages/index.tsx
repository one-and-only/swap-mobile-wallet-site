import Header from "./header";
import Image from "next/image";
import phoneImage from "../public/images/phone.webp";
import appStoreDownload from "../public/images/download_on_the_app_store.webp";
import Link from "next/link";

/*const swapGradient: {from: string, to: string, deg: number} = {
  from: "#a760f8",
  to: "#21b8f4",
  deg: 45
};*/

export default function Home({ redirectReason }): JSX.Element {
  return (
    <div>
      <Header title="Swap Mobile Wallet" />
      <div id="app-demo">
        <Image
          src={phoneImage}
          width={350}
          height={711}
          alt="Phone Demo Image"
          id="demo-image"
        />
        <div id="demo-text">
          <h2 id="promo-text">
            The Most Advanced Swap Mobile Wallet.{" "}
            <span style={{ color: "#0ab1ff" }}>Ever.</span>
          </h2>
          <h3 id="promo-description">
            Quickly and privately manage and transfer $XWP from the convenience
            of your phone
          </h3>
          <Link href="https://apps.apple.com/us/app/swap-mobile-wallet/id1624370757">
            <a target="_blank">
              <Image
                src={appStoreDownload}
                alt="Download on the App Store"
                width={300}
                height={100}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
