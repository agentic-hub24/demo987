import React from "react";
import {
  FullBleedImageCarousel,
  CollectionSlider,
  SubnavigationSlider,
  SimpleProductCardCarousel,
  CardSlider,
  InspirationCarousel,
  CarouselFeaturedContent,
  EventsSlider,
  CollectionCarousel,
  GallerySlider,
} from "@kohler-dsm-library/kohler-modules";
import {
  formatCTA,
  formatImage,
  formatHeading,
  formatCollectionSliderCards,
  formatMultiColumnContentCards,
  formatInspiredCarouselCards,
  formatSliderCards,
} from "@utils/contentful/formatters";
import { renderRichText } from "@utils/contentful/richText";

/**
 * Renders a carousel component based on the provided type and data.
 *
 * @param {string} type - The type of carousel to render.
 * @param {object} data - The data used to populate the carousel.
 * @returns {JSX.Element|null} The rendered carousel component or null if the type is not recognized.
 */
const Carousel = ({ type, data }) => {
  switch (type) {
    case "fullBleedImageCarousel":
      return (
        <FullBleedImageCarousel
          mod={data?.fields?.mod}
          cards={formatMultiColumnContentCards(data?.fields?.cards)}
        />
      );

    case "collectionSlider":
      return (
        <CollectionSlider
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          copy={{ text: renderRichText(data?.fields?.copy) }}
          CTA={formatCTA(data?.fields?.cta)}
          W
          productCards={formatCollectionSliderCards(data?.fields?.productCards)}
        />
      );

    case "subNavigationSlider":
      return (
        <SubnavigationSlider
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          productCards={formatCollectionSliderCards(data?.fields?.productCards)}
        />
      );

    case "simpleProductCardCarousel":
      return (
        <SimpleProductCardCarousel
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          eyebrow={{ text: data?.fields?.eyebrow }}
          cards={formatInspiredCarouselCards(data?.fields?.simpleProductCards)}
        />
      );
    case "cardSlider":
      return (
        <CardSlider
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          eyebrow={{ text: data?.fields?.eyebrow }}
          copy={{ text: renderRichText(data?.fields?.copy) }}
          CTA={formatCTA(data?.fields?.cta)}
          sliderCards={formatSliderCards(data?.fields?.sliderCards)}
        />
      );
    case "inspirationCarousel":
      return (
        <InspirationCarousel
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          eyebrow={{ text: data?.fields?.eyebrow }}
          copy={{ text: renderRichText(data?.fields?.copy) }}
          CTA={formatCTA(data?.fields?.cta)}
          cards={data?.fields?.cards?.map((card) => ({
            heading: formatHeading(card?.fields?.heading),
            image: formatImage(card?.fields?.image),
            copy: { text: renderRichText(card?.fields?.copy) },
          }))}
        />
      );
    case "carouselFeatured":
      return (
        <CarouselFeaturedContent
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          eyebrow={{ text: data?.fields?.eyebrow }}
          withControls={data?.fields?.withControls}
          CTA={formatCTA(data?.fields?.cta)}
          cards={data?.fields?.cards?.map((card) => ({
            CTA: formatCTA(data?.fields?.cta),
            image: formatImage(card?.fields?.image),
            copy: formatHeading(card?.fields?.copy),
          }))}
        />
      );
    case "eventsSlider":
      return (
        <EventsSlider
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          eyebrow={{ text: data?.fields?.eyebrow }}
          copy={{ text: renderRichText(data?.fields?.copy) }}
          eventInfoCards={data?.fields?.eventInfoCards?.map((card) => ({
            title: formatHeading(card?.fields?.title),
            CTA: formatCTA(data?.fields?.cta),
            image: formatImage(card?.fields?.image),
            date: card?.fields?.date,
          }))}
        />
      );
    case "collectionCarousel":
      return (
        <CollectionCarousel
          mod={data?.fields?.mod}
          headingType={data?.fields?.headingType}
          withControls={data?.fields?.withControls}
          cards={formatMultiColumnContentCards(data?.fields?.cards)}
        />
      );
    case "gallerySlider":
      return (
        <GallerySlider
          mod={data?.fields?.mod}
          size={data?.fields?.size}
          heading={formatHeading(data?.fields?.heading)}
          CTA={formatCTA(data?.fields?.cta)}
          images={data?.fields?.images?.map((image) => ({
            ...formatImage(image?.fields?.src),
          }))}
        />
      );

    default:
      return null;
  }
};

export default Carousel;
