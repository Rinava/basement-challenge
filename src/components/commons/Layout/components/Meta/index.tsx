import {NextSeo} from "next-seo";

const Meta = () => (
  <NextSeo
    additionalLinkTags={[
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon.ico",
      },
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ]}
    additionalMetaTags={[
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      {
        name: "theme-color",
        content: "#000000",
      },
      {
        name: "chartSet",
        content: "utf-8",
      },
      {
        name: "X-UA-Compatible",
        content: "IE=edge",
      },
      {
        name: "copyright",
        content: "Property of Basement Studio",
      },
      {
        name: "author",
        content: "Basement Studio",
      },
      {
        name: "keywords",
        content: "Basement supply, merchandise, swag, basement, store, shop",
      },
    ]}
    canonical="https://basement.supply/"
    defaultTitle="Basement Supply | We make cool shit that looks good"
    description="The store where to find real Basement swag."
    openGraph={{
      url: "https://basement.supply/",
      title: "Basement Supply | We make cool shit that looks good",
      description: "The store where to find real Basement swag.",
      images: [
        {
          url: "https://basementchallenge.laramateo.com//og-image.png",
          width: 800,
          height: 420,
          alt: "Basement Supply",
        },
      ],
    }}
    title="Basement Supply | We make cool shit that looks good"
    titleTemplate="Basement Supply | We make cool shit that looks good"
    twitter={{
      handle: "@basementstudio",
      site: "@basementstudio",
      cardType: "summary_large_image",
    }}
  />
);

export default Meta;
