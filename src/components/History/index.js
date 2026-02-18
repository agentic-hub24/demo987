import React from "react";
import { HistoryBlock } from "@kohler-dsm-library/kohler-modules";
import {
  formatHeading,
  formatImage,
  formatVideo,
} from "@utils/contentful/formatters";
import { renderRichText } from "@utils/contentful/richText";

/**
 * Renders a History Module based on the provided type and data.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the module.
 * @param {Object} props.data - The data for the module.
 * @returns {JSX.Element|null} The rendered History Module.
 */

const HistoryModule = ({ type, data }) => {
  switch (type) {
    case "historyBlock": {
      const imageData = formatImage(data?.fields?.image?.fields?.src)
      return (
        <HistoryBlock
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          subheading={formatHeading(data?.fields?.subheading)}
          copy={{ text: renderRichText(data?.fields?.copy) }}
          caption={{ text: data?.fields?.caption }}
          image={{ ...imageData, orientation: data?.fields?.image?.fields?.orientation }}
          video={formatVideo(data?.fields?.video)}
        />
      )
    };
    default:
      return null;
  }
};

export default HistoryModule;
