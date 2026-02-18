import React from "react";
import Heros from "@components/Heros";
import TextModules from "@components/textModules";
import VideoAndPhoto from "@components/VideoAndPhoto";
import MultiColumnContent from "@components/MultiColumnContent";
import SitewideMessagingModule from "@components/SitewideMessagingModule";
import Carousel from "@components/Carousel";
import Feature from "@components/Feature";
import Navigation from "@components/Navigation";
import Article from "@components/Article";
import StoreAndServices from "@components/StoreAndServices";
import HistoryModule from "@components/History";
import Promo from "@components/Promo";

/**
 * Renders a section based on the provided type and data.
 *
 * @param {Object} props - The props object.
 * @param {string} props.type - The type of section to render.
 * @param {Object} props.data - The data to pass to the section component.
 * @returns {JSX.Element} The rendered section component.
 */
const Section = ({ type, data }) => {
  switch (type) {
    // Renders all Hero components
    case "globalHero":
    case "fullBleedHeroImageVideo":
    case "articleTextHeroOnly":
    case "curatedHero":
    case "textOnlyHero":
    case "fullBleedHeroShort":
    case "serviceHero":
      return <Heros type={type} data={data} />;

    // Renders all TextModules components
    case "highlightedTextBlock":
    case "basicTextPromo":
    case "twoColumnTextBlock":
    case "faq":
    case "basicTextBlock":
    case "keyTakeaways":
    case "professionalListItem":
    case "sponsoredArticleBlock":
      return <TextModules type={type} data={data} />;

    case "inspiredBanner":
    case "bannerWithImage":
    case "fullBleedVideo":
      return <VideoAndPhoto type={type} data={data} />;

    case "inspiredSelling":
    case "multipleColumn":
    case "twoUpContent":
    case "processAndInspiration":
      return <MultiColumnContent type={type} data={data} />;

    case "iPerceptionsBar":
    case "featuredImages":
      return <SitewideMessagingModule type={type} data={data} />;

    case "fullBleedImageCarousel":
    case "collectionSlider":
    case "subNavigationSlider":
    case "simpleProductCardCarousel":
    case "fourUpSliderBanner":
    case "inspirationCarousel":
    case "carouselFeatured":
    case "eventsSlider":
    case "collectionCarousel":
    case "gallerySlider":
      return <Carousel type={type} data={data} />;

    case "imageAndTextBlock":
    // case "featuredCollectionTwoUpSpotlight":
    case "doubleCollectionSpotlight":
    case "twoUpFeaturedCards":
    case "featuredBanner":
    case "featuredContent":
    case "productTilesSlider":
      return <Feature type={type} data={data} />;

    case "contactInfo":
      return <Navigation type={type} data={data} />;

    case "historyBlock":
      return <HistoryModule type={type} data={data} />;

    // case "toolBox":
    case "brandLogoLinks":
      return <Promo type={type} data={data} />;

    case "articleTilesSlider":
    case "articleShare":
      return <Article type={type} data={data} />;

    case "threeUpFeaturedCards":
    case "infoCardSlider":
    case "twoImageShowcase":
    case "storeVirtualTourModel":
      return <StoreAndServices type={type} data={data} />;

    default:
      return <h2>{type}</h2>;
  }
};

export default Section;
