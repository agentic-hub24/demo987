import { draftMode } from "next/headers";
import "./globals.css";
import { getFooter, getHeader } from "@utils/contentful/apis";
import LayoutClient from "@components/LayoutClient";

export default async function RootLayout({ children, params }) {
  const { isEnabled } = draftMode();
  const { footer } = await getFooter({
    locale: params.lang,
  });

  const { header } = await getHeader({
    locale: params.lang,
  });

  return (
    <html lang="en">
      <body>
        <LayoutClient
          footer={footer}
          header={header}
          isEnabled={isEnabled}
        >
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
