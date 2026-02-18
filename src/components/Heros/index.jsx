import React from "react";
import {
  ArticleTextOnlyHero,
  CuratedHero,
  FullBleedHeroImage,
  FullBleedHeroShort,
  FullBleedHeroVideo,
  GlobalHero,
  ServicesHero,
  TextOnlyHero,
} from "@kohler-dsm-library/kohler-modules";

import {
  formatActionIcons,
  formatBreadcrumbs,
  formatCTA,
  formatDotWhack,
  formatHeading,
  formatImage,
  formatVideo,
} from "@utils/contentful/formatters";
import { renderRichText } from "@utils/contentful/richText";

/**
 * Renders a Hero component based on the provided type and data.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the Hero component.
 * @param {Object} props.data - The data for the Hero component.
 * @returns {JSX.Element|null} The rendered Hero component or null if the type is not supported.
 */
const Heros = ({ type, data }) => {
  switch (type) {
    case "globalHero":
      return (
        <GlobalHero
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          subheading={{ text: renderRichText(data?.fields?.subheading) }}
          button={formatCTA(data?.fields?.button)}
          image={formatImage(data?.fields?.image)}
          breadcrumbs={formatBreadcrumbs(data?.fields?.breadcrumbs)}
          CTAs={data?.fields?.cta?.map((cta) => formatCTA(cta))}
          topSpacer={data?.fields?.topSpacer}
          gradientDirection={data?.fields?.gradientDirection}
          opacity={data?.fields?.opacity}
          scrollDownButton={data?.fields?.scrollDownButton}
        />
      );
    case "fullBleedHeroImageVideo":
      return data?.fields?.video?.fields?.file?.url ? (
        <FullBleedHeroVideo
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          subheading={{ text: renderRichText(data?.fields?.subheading) }}
          breadcrumbs={formatBreadcrumbs(data?.fields?.breadcrumbs)}
          CTAs={data?.fields?.cta?.map((cta) => formatCTA(cta))}
          opacity={data?.fields?.opacity}
          showNextCTA={data?.fields?.showNextCTA}
          video={formatVideo(data?.fields?.video, data?.fields?.image)}
          gradientDirection={data?.fields?.gradientDirection}
          textPlacement={data?.fields?.textPlacement}
        />
      ) : (
        <FullBleedHeroImage
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          subheading={{ text: renderRichText(data?.fields?.subheading) }}
          image={formatImage(data?.fields?.image)}
          breadcrumbs={formatBreadcrumbs(data?.fields?.breadcrumbs)}
          CTAs={data?.fields?.cta?.map((cta) => formatCTA(cta))}
          opacity={data?.fields?.opacity}
          showNextCTA={data?.fields?.showNextCTA}
          textPlacement={data?.fields?.textPlacement}
        />
      );
    case "articleTextHeroOnly":
      return (
        <ArticleTextOnlyHero
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          subheading={{ text: renderRichText(data?.fields?.subheading) }}
          description={{ text: renderRichText(data?.fields?.description) }}
          breadcrumbs={formatBreadcrumbs(data?.fields?.breadcrumbs)}
          actionIcons={formatActionIcons(data?.fields?.actionIcons)}
        />
      );
    case "curatedHero":
      return (
        <CuratedHero
          mod={data?.fields?.mod}
          textPlacement={data?.fields?.textPlacement}
          gradientDirection={data?.fields?.gradientDirection}
          topSpacer={data?.fields?.topSpacer}
          opacity={data?.fields?.opacity}
          heading={formatHeading(data?.fields?.heading)}
          subheading={{
            text: renderRichText(data?.fields?.subheading),
          }}
          breadcrumbs={formatBreadcrumbs(data?.fields?.breadcrumbs)}
          CTA={formatCTA(data?.fields?.cta)}
          image={formatImage(data?.fields?.image)}
        />
      );
    case "textOnlyHero":
      return (
        <TextOnlyHero
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          description={{ text: renderRichText(data?.fields?.description) }}
          breadcrumbs={formatBreadcrumbs(data?.fields?.breadCrumb)}
          type={data?.fields?.type}
          align={data?.fields?.align}
          CTA={formatCTA(data?.fields?.cta)}
        />
      );
    case "fullBleedHeroShort":
      return (
        <FullBleedHeroShort
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          subheading={{ text: renderRichText(data?.fields?.subheading) }}
          image={formatImage(data?.fields?.image)}
          video={formatVideo(data?.fields?.video, data?.fields?.image)}
          breadcrumbs={formatBreadcrumbs(data?.fields?.breadCrumb)}
          CTAs={data?.fields?.cta?.map((cta) => formatCTA(cta))}
          topSpacer={data?.fields?.topSpacer}
          gradientDirection={data?.fields?.gradientDirection}
          opacity={data?.fields?.opacity}
          nextCTA={data?.fields?.nextCTA}
          textPlacement={data?.fields?.textPlacement}
          // dotWhack={formatDotWhack(data?.fields?.dotWhack)}
        />
      );
    case "serviceHero":
      return (
        <ServicesHero
          mod={data?.fields?.mod}
          heading={formatHeading(data?.fields?.heading)}
          subheading={{ text: renderRichText(data?.fields?.subheading) }}
          image={formatImage(data?.fields?.image)}
          breadcrumbs={formatBreadcrumbs(data?.fields?.breadCrumb)}
          CTA={formatCTA(data?.fields?.cta)}
        />
      );
    default:
      return null;
  }
};

export default React.memo(Heros);
