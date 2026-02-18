import React from "react";
import { ArticleShare, ArticleTilesSlider } from "@kohler-dsm-library/kohler-modules";
import {
  formatCTA,
  formatHeading,
  formatImage,
} from "@utils/contentful/formatters";
import { renderRichText } from "@utils/contentful/richText";

/**
 * Renders a Article Module based on the provided type and data.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the module.
 * @param {Object} props.data - The data for the module.
 * @returns {JSX.Element|null} The rendered Article Module.
 */
const Article = ({ type, data }) => {
  switch (type) {
    case "articleTilesSlider":
      return (
        <ArticleTilesSlider
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          copy={{ text: renderRichText(data?.fields?.copy) }}
          eyebrow={{ text: data?.fields?.eyebrow }}
          showCarouselScroller={data?.fields?.showCarouselScroller}
          articleTiles={data?.fields?.articleTiles.map((card) => ({
            title: formatHeading(card?.fields?.title),
            category: { text: card?.fields?.category },
            link: formatCTA(card?.fields?.link),
            image: formatImage(card?.fields?.image),
          }))}
        />
      );
    case "articleShare":
      return (
        <ArticleShare
          mod={data?.fields?.mod}
          links={data?.fields.links?.map((link) => ({
            logo: link?.fields?.logo,
            href: link?.fields?.href,
          }))}
        />
      );
    default:
      return null;
  }
};

export default Article;
