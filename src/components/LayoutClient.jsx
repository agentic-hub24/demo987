"use client";

import { MainMenu, Footer } from "@kohler-dsm-library/kohler-modules";
import "@kohler-dsm-library/kohler-core/styles.css";
import "@kohler-dsm-library/kohler-modules/styles.css";
import "@kohler-dsm-library/kohler-theme/kohler.css";
import { renderRichText } from "@utils/contentful/richText";
import { formatFooter, formatHeader } from "@utils/contentful/formatters";

export default function LayoutClient({
    children,
    footer,
    header,
    isEnabled,
}) {
    const {
        footerSections,
        footerLinks,
        mod: footerMod,
        copyright,
        socialMediaSection,
    } = formatFooter(footer);

    const {
        mainNavigation,
        infoBanner,
        mod: headerMod,
        utilityBar,
        globalBanner,
        promoBanner,
    } = formatHeader(header);

    return (
        <>
            <MainMenu
                mod={headerMod}
                mainNavigation={mainNavigation}
                infoBanner={infoBanner}
                utilityBar={utilityBar}
                globalBanner={globalBanner}
                promoBanner={promoBanner}
            />
            {children}
            <Footer
                mod={footerMod}
                copyright={{
                    text: renderRichText(copyright),
                }}
                footerSections={footerSections}
                footerLinks={footerLinks}
                socialMediaSection={socialMediaSection}
            />
            {isEnabled && (
                <a
                    className="z-10 fixed right-1 top-4 rounded-full bg-red-400 p-2 px-4"
                    href="/api/disable-draft"
                >
                    PREVIEW MODE
                </a>
            )}
        </>
    );
}
