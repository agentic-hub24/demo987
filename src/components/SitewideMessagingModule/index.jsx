import {
  FeaturedImages,
  FeedbackBar,
  TwoUpContent,
} from "@kohler-dsm-library/kohler-modules";
import {
  formatCTA,
  formatHeading,
  formatImage,
} from "@utils/contentful/formatters";
import { renderRichText } from "@utils/contentful/richText";

/**
 * Renders a Sitewide Messaging Module based on the provided type and data.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the module.
 * @param {Object} props.data - The data for the module.
 * @returns {JSX.Element|null} The rendered Sitewide Messaging Module.
 */

const SitewideMessagingModule = ({ type, data }) => {
  switch (type) {
    case "iPerceptionsBar":
      return (
        <FeedbackBar
          mod={data?.fields?.mod}
          copy={{ text: renderRichText(data?.fields?.copy) }}
          CTA={formatCTA(data?.fields?.cta)}
        />
      );

    case "featuredImages":
      return (
        <FeaturedImages
          mod={data?.fields?.mod}
          images={data?.fields?.image?.map((image) => ({
            ...formatImage(image?.fields?.src),
          }))}
        />
      );
    default:
      return null;
  }
};

export default SitewideMessagingModule;
