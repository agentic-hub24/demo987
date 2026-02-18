import React from "react";
import {
  DoubleCollectionSpotlight,
  // FeaturedCollectionTwoUpSpotlight,
  ImageAndTextBlock,
  TwoUpFeaturedCards,
  FeaturedBanner,
  FeaturedContent,
  // ProductTilesSlider
} from "@kohler-dsm-library/kohler-modules";
import {
  formatCTA,
  formatHeading,
  formatImage,
} from "@utils/contentful/formatters";
import { renderRichText } from "@utils/contentful/richText";

/**
 * Renders a Feature Module based on the provided type and data.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the module.
 * @param {Object} props.data - The data for the module.
 * @returns {JSX.Element|null} The rendered Feature Module.
 */
const Feature = ({ type, data }) => {
  switch (type) {
    case "imageAndTextBlock":
      return (
        <ImageAndTextBlock
          mod={data?.fields?.mod}
          imageOrientation={data?.fields?.imageOrientation}
          number={data?.fields?.number}
          caption={{ text: data?.fields?.caption }}
          image={formatImage(data?.fields?.image)}
          heading={formatHeading(data?.fields?.heading)}
        />
      );
    case "doubleCollectionSpotlight":
      return (
        <DoubleCollectionSpotlight
          mod={data?.fields?.mod}
          cards={data?.fields?.cards?.map((card) => ({
            heading: formatHeading(card?.fields?.heading),
            copy: {
              text: renderRichText(card?.fields?.copy),
            },
            image: formatImage(card?.fields?.image),
            aspectRatio: card?.fields?.aspectRatio,
            cta: formatCTA(card?.fields?.cta),
          }))}
        />
      );
    // case "featuredCollectionTwoUpSpotlight":
    //   return (
    //     <FeaturedCollectionTwoUpSpotlight
    //       mod={data?.fields?.mod}
    //       heading={formatHeading(data?.fields?.heading)}
    //       copy={{
    //         text: renderRichText(data?.fields?.copy),
    //       }}
    //       CTA={formatCTA(data?.fields?.cta)}
    //       caption={{ text: data?.fields?.caption }}
    //       portraitImage={formatImage(data?.fields?.portraitImage)}
    //       landscapeImage={formatImage(data?.fields?.landscapeImage)}
    //     />
    //   );
    case "twoUpFeaturedCards":
      return (
        <TwoUpFeaturedCards
          mod={data?.fields?.mod}
          cards={data?.fields?.cards?.map((card) => ({
            title: formatHeading(card?.fields?.title),
            image: formatImage(card?.fields?.image),
            opacity: card?.fields?.opacity,
            gradientDirection: card?.fields?.gradientDirection,
            CTA: formatCTA(card?.fields?.cta),
          }))}
        />
      );
    case "featuredBanner":
      return (
        <FeaturedBanner
          mod={data?.fields?.mod}
          eyebrow={{ text: data?.fields?.eyebrow }}
          heading={formatHeading(data?.fields?.heading)}
          subheading={{
            text: renderRichText(data?.fields?.subheading),
          }}
          copy={{
            text: renderRichText(data?.fields?.copy),
          }}
          CTA={formatCTA(data?.fields?.cta)}
          image={formatImage(data?.fields?.image)}
          imageOrientation={data?.fields?.imageOrientation}
          alignment={data?.fields?.alignment}
        />
      );
    case "featuredContent":
      return (
        <FeaturedContent
          mod={data?.fields?.mod}
          eyebrow={{ text: renderRichText(data?.fields?.eyebrow) }}
          heading={formatHeading(data?.fields?.heading)}
          highlightText={{
            text: renderRichText(data?.fields?.highlightedText),
          }}
          copy={{ text: renderRichText(data?.fields?.copy) }}
          landscapeImage={formatImage(
            data?.fields?.landscapeImage?.fields?.src
          )}
          portraitImage={formatImage(data?.fields?.portraitImage?.fields?.src)}
        />
      );
    // case "productTilesSlider":
    //   return (
    //     <ProductTilesSlider
    //       mod={data?.fields?.mod}
    //       showCarouselScroller={data?.fields?.showCarouselScroller}
    //       productFeatureTiles={data?.fields?.productFeatureTiles?.map((card) => ({
    //         mod: card?.fields?.mod,
    //         title: formatHeading(card?.fields?.title),
    //         copy: {
    //           text: renderRichText(data?.fields?.copy),
    //         },
    //         image: formatImage(card?.fields?.image),
    //         cta: formatCTA(card?.fields?.cta),
    //       }))}
    //       />
    //   )

    default:
      return null;
  }
};

export default Feature;
