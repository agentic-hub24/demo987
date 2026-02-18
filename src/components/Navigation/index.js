import React from "react";
import { ContactInfo } from "@kohler-dsm-library/kohler-modules";
import {
  formatContactLinks,
  formatHeading,
} from "@utils/contentful/formatters";
import { renderRichText } from "@utils/contentful/richText";

/**
 * Renders a Navigation Module based on the provided type and data.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the module.
 * @param {Object} props.data - The data for the module.
 * @returns {JSX.Element|null} The rendered Navigation Module.
 */

const Navigation = ({ type, data }) => {
  switch (type) {
    case "contactInfo":
      return (
        <ContactInfo
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          eyebrow={{ text: renderRichText(data?.fields?.eyebrow) }}
          contactLinks={formatContactLinks(data?.fields.contactLinks)}
        />
      );
    default:
      return null;
  }
};

export default Navigation;
