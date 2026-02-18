import contentfulClient, {
  contentfulPreviewClient,
} from "@services/contentful/client";
import { draftMode } from "next/headers";

/**
 * Retrieves the landing page data based on the provided options.
 * @param {Object} options - The options for retrieving the landing page.
 * @param {string} options.slug - The slug of the landing page.
 * @param {string} options.locale - The locale of the landing page.
 * @returns {Object} - The landing page data.
 */
export const getLandingPage = async (options) => {
  const { isEnabled } = draftMode();

  if (!options?.slug) {
    return {};
  }

  const pageData = await (
    isEnabled ? contentfulPreviewClient : contentfulClient
  ).getEntries({
    content_type: "landingPage",
    include: 10,
    "fields.slug": options?.slug,
    locale: options?.locale,
  });

  return {
    sections: pageData?.items[0]?.fields,
  };
};

/**
 * Retrieves the footer data from Contentful.
 * @param {Object} options - The options for retrieving the footer data.
 * @param {string} options.locale - The locale for the footer data.
 * @returns {Object} - The footer data.
 */
export const getFooter = async (options) => {
  const { isEnabled } = draftMode();

  const footerData = await (
    isEnabled ? contentfulPreviewClient : contentfulClient
  ).getEntries({
    content_type: "footer",
    include: 10,
    locale: options?.locale,
  });

  return {
    footer: footerData?.items[0]?.fields,
  };
};

export const getHeader = async (options) => {
  const { isEnabled } = draftMode();

  const headerData = await (
    isEnabled ? contentfulPreviewClient : contentfulClient
  ).getEntries({
    content_type: "header",
    include: 10,
    locale: options?.locale,
  });
  return {
    header: headerData?.items[0]?.fields,
  };
};
