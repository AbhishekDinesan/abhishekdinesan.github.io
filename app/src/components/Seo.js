import { useEffect } from "react";

const SITE_URL = "https://abhishekdinesan.github.io";
const DEFAULT_TITLE = "Abhi Dinesan | Product Engineer and Builder";
const DEFAULT_DESCRIPTION =
  "Abhi Dinesan builds production-grade products across private equity, media, and big tech with a focus on AI systems and high-leverage engineering.";

const upsertMetaTag = (selector, attributes) => {
  let metaTag = document.head.querySelector(selector);
  if (!metaTag) {
    metaTag = document.createElement("meta");
    document.head.appendChild(metaTag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    metaTag.setAttribute(key, value);
  });
};

const upsertCanonical = (href) => {
  let canonicalTag = document.head.querySelector("link[rel='canonical']");
  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute("href", href);
};

const Seo = ({ title, description, path = "/", type = "website" }) => {
  useEffect(() => {
    const resolvedTitle = title
      ? (title.includes("Abhi Dinesan") ? title : `${title} | Abhi Dinesan`)
      : DEFAULT_TITLE;
    const resolvedDescription = description || DEFAULT_DESCRIPTION;
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const canonicalUrl = new URL(normalizedPath, `${SITE_URL}/`).toString();

    document.title = resolvedTitle;
    upsertCanonical(canonicalUrl);

    upsertMetaTag("meta[name='description']", {
      name: "description",
      content: resolvedDescription
    });
    upsertMetaTag("meta[property='og:title']", {
      property: "og:title",
      content: resolvedTitle
    });
    upsertMetaTag("meta[property='og:description']", {
      property: "og:description",
      content: resolvedDescription
    });
    upsertMetaTag("meta[property='og:type']", {
      property: "og:type",
      content: type
    });
    upsertMetaTag("meta[property='og:url']", {
      property: "og:url",
      content: canonicalUrl
    });
    upsertMetaTag("meta[property='twitter:title']", {
      property: "twitter:title",
      content: resolvedTitle
    });
    upsertMetaTag("meta[property='twitter:description']", {
      property: "twitter:description",
      content: resolvedDescription
    });
  }, [description, path, title, type]);

  return null;
};

export default Seo;
