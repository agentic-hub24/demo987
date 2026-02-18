import React from "react";
// import { Toolbox, BrandLogoLinks } from "@kohler-dsm-library/kohler-modules";
import { BrandLogoLinks } from "@kohler-dsm-library/kohler-modules";
import { formatCTA, formatHeading } from "@utils/contentful/formatters";
import { renderRichText } from "@utils/contentful/richText";

/**
 * Renders a Promo Module based on the provided type and data.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the module.
 * @param {Object} props.data - The data for the module.
 * @returns {JSX.Element|null} The rendered Promo Module.
 */

const Promo = ({ type, data }) => {
  switch (type) {
    // case "toolBox":
    //   return (
    //     <Toolbox
    //       mod={data?.fields?.mod}
    //       underline={data?.fields?.underline}
    //       content={data?.fields?.content?.map((cont) => ({
    //         heading: formatHeading(cont?.fields?.heading),
    //         copy: renderRichText(cont?.fields?.copy),
    //         underline: cont?.fields?.underline,
    //       }))}
    //     />
    //   );
    case "brandLogoLinks":
      return (
        <BrandLogoLinks
          heading={formatHeading(data?.fields?.heading)}
          CTAs={data?.fields?.cta?.map((link) => {
            const linkCTA = formatCTA(link?.fields.cta);
            return {
              brand: link?.fields?.brand,
              href: linkCTA?.href,
              target: linkCTA?.target,
            };
          })}
        />
      );
    default:
      return null;
  }
};

export default Promo;
