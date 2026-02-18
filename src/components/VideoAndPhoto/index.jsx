import {
  BannerWithImage,
  InspiredBanner,
  FullBleedVideo,
} from "@kohler-dsm-library/kohler-modules";
import {
  formatCTA,
  formatHeading,
  formatImage,
  formatVideo,
} from "@utils/contentful/formatters";
import { renderRichText } from "@utils/contentful/richText";

/**
 * VideoAndPhoto component.
 *
 * @param {string} type - The type of the component.
 * @param {object} data - The data for the component.
 * @returns {JSX.Element|null} The rendered component or null if the type is not recognized.
 */
const VideoAndPhoto = ({ type, data }) => {
  switch (type) {
    case "inspiredBanner":
      return (
        <InspiredBanner
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          description={{ text: renderRichText(data?.fields?.description) }}
          image={data?.fields?.image?.map((image) => ({
            src: image?.fields?.src?.fields?.file?.url,
            alt: image?.fields?.alt,
          }))}
          CTAs={data?.fields?.cta?.map((cta) => formatCTA(cta))}
          imageSide={data?.fields?.imageSide}
          numberOfImages={data?.fields?.numberOfImages}
          showHotspotTool={data?.fields?.showHotspotTool}
          showSpacer={data?.fields?.showSpacer}
        />
      );

    case "bannerWithImage":
      return (
        <BannerWithImage
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          caption={data?.fields?.caption}
          image={formatImage(data?.fields?.image?.fields?.src)}
          copy={{ text: renderRichText(data?.fields?.copy) }}
          imageSide={data?.fields?.imageSide}
          purchaseCTA={formatCTA(data?.fields?.purchaseCTA)}
          secondaryCTA={formatCTA(data?.fields?.secondaryCTA)}
          imageOrientation={data?.fields?.imageOrientation}
        />
      );
    case "fullBleedVideo":
      return (
        <FullBleedVideo
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          copy={{ text: renderRichText(data?.fields?.copy) }}
          video={formatVideo(
            data?.fields?.video?.fields?.src,
            data?.fields?.video?.fields?.poster
          )}
        />
      );
    default:
      return null;
  }
};

export default VideoAndPhoto;
