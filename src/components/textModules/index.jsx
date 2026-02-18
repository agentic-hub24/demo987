import React from "react";
import {
  BasicTextBlock,
  BasicTextPromo,
  FAQ,
  HighlightedTextBlock,
  TwoColumnTextBlock,
  KeyTakeaways,
  ProfessionalListItem,
  SponsoredArticleBlock,
} from "@kohler-dsm-library/kohler-modules";

import { renderRichText } from "@utils/contentful/richText";
import {
  formatAccordions,
  formatCTA,
  formatHeading,
  formatImage,
} from "@utils/contentful/formatters";

/**
 * TextModules component renders different types of text modules based on the provided type and data.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of text module to render.
 * @param {Object} props.data - The data for the text module.
 * @param {Object} props.data.fields - The fields containing the data for the text module.
 * @returns {JSX.Element|null} The rendered text module component or null if the type is not recognized.
 */
const TextModules = ({ type, data }) => {
  switch (type) {
    case "highlightedTextBlock":
      return (
        <HighlightedTextBlock
          mod={data?.fields?.mod}
          copy={{
            text: renderRichText(data?.fields?.copy),
          }}
        />
      );
    case "basicTextPromo":
      return (
        <BasicTextPromo
          mod={data?.fields?.mod}
          copy={{
            text: renderRichText(data?.fields?.copy),
          }}
          heading={formatHeading(data?.fields?.heading)}
          primaryCTA={formatCTA(data?.fields?.primaryCta)}
          secondaryCTA={formatCTA(data?.fields?.secondaryCta)}
        />
      );

    case "twoColumnTextBlock":
      return (
        <TwoColumnTextBlock
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          copy={{
            text: renderRichText(data?.fields?.copy),
          }}
        />
      );

    case "faq":
      return (
        <FAQ
          heading={formatHeading(data?.fields?.heading)}
          description={{ text: renderRichText(data?.fields?.description) }}
          mod={data?.fields?.mod}
          CTA={formatCTA(data?.fields?.cta)}
          accordions={formatAccordions(data?.fields?.accordions)}
        />
      );

    case "basicTextBlock":
      return (
        <BasicTextBlock
          heading={formatHeading(data?.fields?.heading)}
          copy={{
            text: renderRichText(data?.fields?.copy),
          }}
          subheading={{ text: renderRichText(data?.fields?.subheading) }}
          CTA={formatCTA(data?.fields?.cta)}
          align={data?.fields?.align}
        />
      );
    case "keyTakeaways":
      return (
        <KeyTakeaways
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          bulletPoints={data?.fields?.bulletPoints}
        />
      );
    case "professionalListItem":
      return (
        <ProfessionalListItem
          mod={data?.fields?.mod}
          hasPaddingTop={data?.fields?.hasPaddingTop}
          hasPaddingBottom={data?.fields?.hasPaddingBottom}
          heading={formatHeading(data?.fields?.heading)}
          caption={renderRichText(data?.fields?.caption)}
          label={{ text: data?.fields?.label }}
          title={formatHeading(data?.fields?.title)}
          rating={data?.fields?.rating}
          image={formatImage(data?.fields?.image)}
          address={renderRichText(data?.fields?.address)}
          professional={{ text: data?.fields?.professional }}
          availabilityLabel={{ text: data?.fields?.availabilityLabel }}
          specialties={data?.fields?.specialties}
          contact={data?.fields?.contact.map((cont) => ({
            email: formatCTA(cont?.fields?.email),
            phone: formatCTA(cont?.fields?.phone),
          }))}
        />
      );
    case "sponsoredArticleBlock":
      return (
        <SponsoredArticleBlock
          mod={data?.fields?.mod}
          brand={data?.fields?.brand}
          copy={{
            text: renderRichText(data?.fields?.copy),
          }}
        />
      );
    default:
      return null;
  }
};

export default TextModules;
