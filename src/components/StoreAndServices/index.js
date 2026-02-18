import React from "react";
import {
  ThreeUpFeaturedCards,
  StoreVirtualTour,
  InfoCardSlider,
  TwoImageShowcase,
} from "@kohler-dsm-library/kohler-modules";
import {
  formatCTA,
  formatHeading,
  formatImage,
} from "@utils/contentful/formatters";
import { renderRichText } from "@utils/contentful/richText";

/**
 * Renders a StoreAndServices Module based on the provided type and data.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the module.
 * @param {Object} props.data - The data for the module.
 * @returns {JSX.Element|null} The rendered StoreAndServices Module.
 */
const StoreAndServices = ({ type, data }) => {
  switch (type) {
    case "threeUpFeaturedCards":
      return (
        <ThreeUpFeaturedCards
          mod={data?.fields?.mod}
          cards={data?.fields?.cards.map((card) => ({
            heading: formatHeading(card?.fields?.heading),
            image: formatImage(card?.fields?.image),
          }))}
        />
      );
    case "storeVirtualTourModel":
      return (
        <StoreVirtualTour
          mod={data?.fields?.mod}
          image={formatImage(data?.fields?.image)}
          imagePosition={data?.fields?.imagePosition}
          heading={formatHeading(data?.fields?.heading)}
          copy={{ text: renderRichText(data?.fields.copy) }}
          openingHours={data?.fields?.openingHours}
          address={data?.fields?.address}
          phoneNumber={data?.fields?.phoneNumber}
          email={data?.fields?.email}
          primaryCTA={formatCTA(data?.fields?.primaryCTA)}
          secondaryCTA={formatCTA(data?.fields?.secondaryCTA)}
        />
      );
    case "infoCardSlider":
      return (
        <InfoCardSlider
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          copy={{ text: renderRichText(data?.fields.copy) }}
          eyebrow={{ text: data?.fields?.eyebrow }}
          showCarouselScroller={data?.fields?.showCarouselScroller}
          teamCards={data?.fields?.teamCards?.map((card) => ({
            name: formatHeading(card?.fields?.name),
            bio: { text: card?.fields?.bio },
            image: formatImage(card?.fields?.image),
            link: formatCTA(card?.fields?.link),
          }))}
        />
      );
    case "twoImageShowcase":
      return (
        <TwoImageShowcase
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          copy={{ text: renderRichText(data?.fields.copy) }}
          CTA={formatCTA(data?.fields?.cta)}
          portraitImage={formatImage(data?.fields?.portraitImage?.fields?.src)}
          landscapeImage={formatImage(
            data?.fields?.landscapeImage?.fields?.src
          )}
        />
      );
    default:
      return null;
  }
};

export default StoreAndServices;
