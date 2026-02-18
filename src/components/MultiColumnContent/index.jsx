import {
  InspiredSellingModule,
  MultipleColumnContent,
  ProcessAndInspiration,
  TwoUpContent,
} from "@kohler-dsm-library/kohler-modules";
import {
  formatCTA,
  formatHeading,
  formatImage,
  formatInspiredSellingCards,
  formatMultiColumnContentCards,
} from "@utils/contentful/formatters";
import { renderRichText } from "@utils/contentful/richText";

/**
 * Renders a multi-column content component based on the provided data and type.
 *
 * @param {Object} data - The data object containing the fields for the component.
 * @param {string} type - The type of the component (inspiredSelling or multipleColumn).
 * @returns {JSX.Element|null} The rendered multi-column content component.
 */
const MultiColumnContent = ({ data, type }) => {
  switch (type) {
    case "inspiredSelling":
      return (
        <InspiredSellingModule
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          cards={formatInspiredSellingCards(data?.fields?.cards)}
          CTA={formatCTA(data?.fields?.cta)}
        />
      );

    case "multipleColumn":
      return (
        <MultipleColumnContent
          mod={data?.fields?.mod}
          numberOfColumns={data?.fields?.numberOfColumns}
          eyebrow={{ text: renderRichText(data?.fields?.eyebrow) }}
          heading={formatHeading(data?.fields?.heading)}
          copy={{ text: renderRichText(data?.fields?.copy) }}
          CTA={formatCTA(data?.fields?.cta)}
          cards={formatMultiColumnContentCards(data?.fields?.cards)}
        />
      );
    case "twoUpContent":
      return (
        <TwoUpContent
          mod={data?.fields?.mod}
          type={data?.fields?.type}
          imageOrientation={data?.fields?.imageOrientation}
          heading={formatHeading(data?.fields?.heading)}
          CTA={formatCTA(data?.fields?.cta)}
          description={{ text: renderRichText(data?.fields?.description) }}
          eyebrow={data?.fields?.eyebrow}
          cards={data?.fields?.cards.map((card) => ({
            title: formatHeading(card?.fields?.title),
            description: { text: renderRichText(card?.fields?.description) },
            CTA: formatCTA(card?.fields?.cta),
            image: formatImage(card?.fields?.image),
          }))}
        />
      );

    case "processAndInspiration":
      return (
        <ProcessAndInspiration
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          CTA={formatCTA(data?.fields?.cta)}
          copy={{ text: renderRichText(data?.fields?.copy) }}
          eyebrow={data?.fields?.eyebrow}
          cards={formatMultiColumnContentCards(data?.fields?.cards)}
        />
      );
    default:
      return null;
  }
};

export default MultiColumnContent;
