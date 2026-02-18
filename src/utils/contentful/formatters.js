import {
  FacebookFilledIcon,
  InstagramFilledIcon,
  LinkedInFilledIcon,
  PinterestFilledIcon,
  XIcon,
  YoutubeFilledIcon,
} from "@kohler-dsm-library/kohler-icons";
import { renderRichText, renderRichTexttoHTML } from "./richText";
import React from "react";
import HTMLReactParser from "html-react-parser";

/**
 * Formats metadata object.
 *
 * @param {Object} metadata - The metadata object to be formatted.
 * @returns {Object} - The formatted metadata object.
 */
export const formatMetadata = (metadata = {}) => {
  return {
    title: metadata?.fields?.pageTitle ?? "Kohler Co.",
    description: metadata?.fields?.pageDescription,
    canonical: metadata?.fields?.canonicalUrl,
    openGraph: {
      title: metadata?.fields?.ogTitle,
      url: metadata?.fields?.ogUrl,
      image: metadata?.fields?.ogImage?.fields?.file?.url,
      description: metadata?.fields?.ogDescription,
    },
  };
};

/**
 * Formats the breadcrumbs array into an array of objects with text and href properties.
 *
 * @param {Array} breadcrumbs - The array of breadcrumbs to be formatted.
 * @returns {Array} - The formatted array of breadcrumb objects.
 */
export const formatBreadcrumbs = (breadcrumbs = []) => {
  return breadcrumbs?.map((breadcrumb) => {
    return {
      text: breadcrumb?.fields?.label,
      href: breadcrumb?.fields?.href,
    };
  });
};

/**
 * Formats a heading object.
 *
 * @param {Object} heading - The heading object to format.
 * @returns {Object} - The formatted heading object with `text` and `component` properties.
 */
export const formatHeading = (heading) => {
  return {
    text: heading?.fields?.text,
    component: heading?.fields?.component || "h1",
  };
};

/**
 * Formats a CTA (Call to Action) object.
 *
 * @param {object} cta - The CTA object to format.
 * @returns {object} - The formatted CTA object with properties: href, text, and target.
 */
export const formatCTA = (cta) => {
  if (!cta) {
    return null;
  }
  return {
    href: cta?.fields?.href,
    text: cta?.fields?.label,
    target: cta?.fields?.target,
  };
};

/**
 * Formats an array of action icons.
 *
 * @param {Array} actionIcons - The array of action icons to be formatted.
 * @returns {Array} The formatted array of action icons.
 */
export const formatActionIcons = (actionIcons = []) => {
  return actionIcons?.map((icon) => ({
    text: icon?.fields?.label,
    type: icon?.fields?.actionIcons,
  }));
};

/**
 * Formats the dotWhack object.
 *
 * @param {Object} dotWhack - The dotWhack object to be formatted.
 * @returns {Object} - The formatted dotWhack object.
 */
export const formatDotWhack = (dotWhack) => {
  return {
    heading: formatHeading(dotWhack?.fields?.heading),
    CTA: formatCTA(dotWhack?.fields?.cta),
    copy: {
      text: renderRichText(dotWhack?.fields?.copy),
    },
  };
};

/**
 * Formats a video object and its poster image.
 *
 * @param {Object} video - The video object.
 * @param {Object} poster - The poster image object.
 * @returns {Object|undefined} - The formatted video object or undefined if video URL is missing.
 */
export const formatVideo = (video, poster) => {
  return video?.fields?.file?.url
    ? {
        src: video?.fields?.file?.url,
        poster: poster?.fields?.file?.url,
        autoPlay: true,
        loop: true,
        controls: false,
        muted: true,
      }
    : undefined;
};

/**
 * Formats an array of accordions.
 *
 * @param {Array} accordions - The array of accordions to be formatted.
 * @returns {Array} The formatted array of accordions.
 */
export const formatAccordions = (accordions = []) => {
  return accordions?.map((accordion) => {
    return {
      title: {
        text: accordion?.fields?.title?.fields?.text,
        component: accordion?.fields?.title?.fields?.component,
      },
      children: renderRichText(accordion?.fields?.children),
      size: accordion?.fields?.size,
      divider: accordion?.fields?.divider,
      type: accordion?.fields?.type,
    };
  });
};

/**
 * Formats an image object from Contentful.
 *
 * @param {object} image - The image object to format.
 * @returns {object} - The formatted image object with `src` and `alt` properties.
 */
export const formatImage = (image) => {
  return {
    src: image?.fields?.file?.url,
    alt: image?.fields?.description,
  };
};

/**
 * Maps social media icons to their corresponding icons.
 *
 * @param {string} platform - The social media platform name.
 * @returns {React.Component | null} - The corresponding icon component or null if no match found.
 */
const mapSocialMediaIcons = (platform) => {
  switch (platform) {
    case "facebook":
      return FacebookFilledIcon;
    case "twitter":
    case "x":
      return XIcon;
    case "instagram":
      return InstagramFilledIcon;
    case "linkedin":
      return LinkedInFilledIcon;
    case "youtube":
      return YoutubeFilledIcon;
    case "pinterest":
      return PinterestFilledIcon;
    default:
      return () => null;
  }
};

/**
 * Formats the footer data.
 *
 * @param {Object} footer - The footer data to be formatted.
 * @returns {Object} - The formatted footer data.
 */
export const formatFooter = (footer) => {
  const footerSections = footer?.footerSections?.map((section) => ({
    heading: formatHeading(section.fields?.heading),
    CTAs: section.fields?.cta?.map((cta) => {
      const formattedCTA = formatCTA(cta);
      return formattedCTA;
    }),
  }));

  const footerLinks = footer?.footerLinks?.map((link) => formatCTA(link));
  const socialMediaSection = {
    heading: formatHeading(footer?.socialMediaSection?.fields?.heading),
    CTAs: footer?.socialMediaSection?.fields.cta?.map((cta) => ({
      icon: mapSocialMediaIcons(cta.fields?.platform),
      ...formatCTA(cta),
    })),
  };

  return {
    footerSections,
    footerLinks,
    mod: footer?.mod,
    copyright: footer?.copyright,
    socialMediaSection: socialMediaSection,
  };
};

/**
 * Formats the header data.
 *
 * @param {Object} header - The header data to be formatted.
 * @returns {Object} - The formatted header data.
 */
export const formatHeader = (header) => {
  const { mainNavigation = {}, utilityBar, globalBanner, promoBanner } = header;
  const mainNavigationData = {
    mod: mainNavigation?.fields?.mod,
    backgroundColor: mainNavigation?.fields?.backgroundColor,
    showDesktopActions: mainNavigation?.fields?.showDesktopActions,
    brandCTA: {
      brand: mainNavigation?.fields?.brandCta?.fields?.brand,
      href: formatCTA(mainNavigation?.fields?.brandCta?.fields?.cta)?.href,
    },
    showDivider: true,
    cartBadgeCTA: { href: "/cart" },
    favoritesCTA: { isFilled: false, href: "/favorites" },
    menuItems: mainNavigation?.fields?.menuItems?.map((cta) => {
      const formattedCTA = formatCTA(cta);
      return formattedCTA;
    }),
  };
  const utilityBarData = {
    brands: utilityBar?.map((cta) => {
      const formattedCTA = formatCTA(cta);
      return formattedCTA;
    }),
    utilityLinks: {
      isLoggedIn: true,
      languagePicker: {
        // languagePickerCTA: { onClick: () => console.log('clicked  button') },
        location: "Canada",
        currentLanguage: "EN",
        secondLanguageCTA: { text: "FR", href: "/fr" },
      },
      locationPickerCTA: {
        text: "Where to buy",
        // onlick: () => {
        //   window.location.href = '/find-a-store'
        // }
      },
      userName: "User",
    },
  };
  const globalBannerData = globalBanner?.map((banner) => {
    return HTMLReactParser(renderRichTexttoHTML(banner?.fields?.content));
  });

  const promoBannerData = promoBanner?.map((banner) => {
    return {
      content: HTMLReactParser(renderRichTexttoHTML(banner?.fields?.content)),
      CTAs: banner?.fields?.cta?.map((ban) => {
        const formattedCTA = formatCTA(ban);
        return formattedCTA;
      }),
    };
  });

  return {
    mainNavigation: mainNavigationData,
    infoBanner: header?.infoBanner
      ? { content: header?.infoBanner }
      : undefined,
    mod: header?.mod,
    utilityBar: utilityBar ? utilityBarData : [],
    globalBanner: globalBanner?.length
      ? {
          globalBannerMessages: globalBannerData,
        }
      : undefined,
    promoBanner: promoBanner?.length
      ? { contentList: promoBannerData }
      : undefined,
  };
};

/**
 * Formats an array of cards for inspired selling.
 *
 * @param {Array} cards - The array of cards to be formatted.
 * @returns {Array} - The formatted array of cards.
 */
export const formatInspiredSellingCards = (cards) => {
  return cards?.map((card) => ({
    description: renderRichText(card?.fields?.description),
    title: formatHeading(card?.fields?.title),
    image: formatImage(card?.fields?.image?.fields?.src),
  }));
};

/**
 * Formats an array of cards into a specific structure.
 *
 * @param {Array} cards - The array of cards to be formatted.
 * @returns {Array} - The formatted array of cards.
 */
export const formatMultiColumnContentCards = (cards) => {
  return cards?.map((card) => ({
    heading: formatHeading(card?.fields?.heading),
    copy: { text: renderRichText(card?.fields?.copy) },
    CTA: formatCTA(card?.fields?.cta),
    image: formatImage(card?.fields?.image?.fields?.src),
  }));
};

export const formatCollectionSliderCards = (cards) => {
  return cards?.map((card) => ({
    title: formatHeading(card?.fields.title),
    copy: { text: renderRichText(card?.fields?.copy) },
    showCTA: card?.fields?.showCTA,
    size: card?.fields?.size,
    link: card?.fields?.link,
    image: formatImage(card?.fields?.image),
  }));
};

/**
 * Formats an array of carousel cards with specific fields.
 *
 * @param {Array} cards - The array of card objects to format.
 * @param {Object} cards[].fields - The fields of each card object.
 * @param {string} cards[].fields.title - The title of the card.
 * @param {Object} cards[].fields.description - The description of the card.
 * @param {Object} cards[].fields.cta - The call-to-action object of the card.
 * @param {number} cards[].fields.price - The price of the card.
 * @param {Object} cards[].fields.image - The image object of the card.
 * @param {Object} cards[].fields.image.fields - The fields of the image object.
 * @param {string} cards[].fields.image.fields.src - The source URL of the image.
 * @returns {Array} The formatted array of carousel cards.
 */
export const formatInspiredCarouselCards = (cards) => {
  return cards?.map((card) => ({
    title: formatHeading(card?.fields.title),
    description: { text: renderRichText(card?.fields?.description) },
    CTA: formatCTA(card?.fields?.cta),
    price: card?.fields?.price,
    image: formatImage(card?.fields?.image?.fields?.src),
  }));
};

/**
 * Formats an array of contact link objects.
 *
 * @param {Array} contactLinks - An array of contact link objects to format.
 * @param {Object} contactLinks[].fields - The fields of each contact link object.
 * @param {string} contactLinks[].fields.title - The title of the contact link.
 * @param {Object} contactLinks[].fields.copy - The rich text copy of the contact link.
 * @param {Object} contactLinks[].fields.cta - The call-to-action object of the contact link.
 * @param {Array} contactLinks[].fields.labels - The labels associated with the contact link.
 * @returns {Array} An array of formatted contact link objects.
 */
export const formatContactLinks = (contactLinks) => {
  return contactLinks?.map((card) => ({
    title: { text: card?.fields.title },
    copy: renderRichText(card?.fields?.copy),
    CTA: formatCTA(card?.fields?.cta),
    labels: formatBreadcrumbs(card?.fields?.labels),
  }));
};

/**
 * Formats an array of cards into a specific structure.
 *
 * @param {Array} cards - The array of cards to be formatted.
 * @returns {Array} - The formatted array of cards.
 */
export const formatSliderCards = (cards) => {
  return cards?.map((card) => ({
    image: formatImage(card?.fields?.image),
    title: formatHeading(card?.fields.title),
    copy: { text: renderRichText(card?.fields?.copy) },
    showCTA: card?.fields?.showCTA,
    link: formatCTA(card?.fields?.link),
    size: card?.fields?.size,
  }));
};
