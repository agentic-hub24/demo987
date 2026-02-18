// import { describe } from "jest";
import {
  formatBreadcrumbs,
  formatHeading,
  formatMetadata,
  formatCTA,
  formatActionIcons,
} from "./formatters";

describe("Formatters", () => {
  describe("formatMetadata", () => {
    it("should return formatted metadata object with default values", () => {
      const metadata = {};
      const result = formatMetadata(metadata);
      expect(result).toEqual({
        title: "Kohler Co.",
        description: undefined,
        canonical: undefined,
        openGraph: {
          title: undefined,
          url: undefined,
          image: undefined,
          description: undefined,
        },
      });
    });

    it("should return formatted metadata object with provided values", () => {
      const metadata = {
        fields: {
          pageTitle: "Page Title",
          description: "Page Description",
          canonicalUrl: "https://example.com",
          ogTitle: "Open Graph Title",
          ogUrl: "https://example.com/og",
          ogImage: {
            fields: {
              file: {
                url: "https://example.com/image.jpg",
              },
            },
          },
          ogDescription: "Open Graph Description",
        },
      };
      const result = formatMetadata(metadata);
      expect(result).toEqual({
        title: "Page Title",
        description: "Page Description",
        canonical: "https://example.com",
        openGraph: {
          title: "Open Graph Title",
          url: "https://example.com/og",
          image: "https://example.com/image.jpg",
          description: "Open Graph Description",
        },
      });
    });
  });

  describe("formatBreadcrumbs", () => {
    it("should return formatted array of breadcrumb objects", () => {
      const breadcrumbs = [
        {
          fields: {
            label: "Home",
            href: "/",
          },
        },
        {
          fields: {
            label: "Category",
            href: "/category",
          },
        },
        {
          fields: {
            label: "Product",
            href: "/category/product",
          },
        },
      ];
      const result = formatBreadcrumbs(breadcrumbs);
      expect(result).toEqual([
        {
          text: "Home",
          href: "/",
        },
        {
          text: "Category",
          href: "/category",
        },
        {
          text: "Product",
          href: "/category/product",
        },
      ]);
    });

    it("should return empty array if breadcrumbs is undefined", () => {
      const result = formatBreadcrumbs(undefined);
      expect(result).toEqual([]);
    });
  });

  describe("formatHeading", () => {
    it("should return formatted heading object with default values", () => {
      const heading = {};
      const result = formatHeading(heading);
      expect(result).toEqual({
        text: undefined,
        component: undefined,
      });
    });

    it("should return formatted heading object with provided values", () => {
      const heading = {
        fields: {
          text: "Heading Text",
          component: "h1",
        },
      };
      const result = formatHeading(heading);
      expect(result).toEqual({
        text: "Heading Text",
        component: "h1",
      });
    });
  });

  describe("formatCTA", () => {
    it("should return formatted CTA object with default values", () => {
      const cta = {};
      const result = formatCTA(cta);
      expect(result).toEqual({
        href: undefined,
        text: undefined,
        target: undefined,
      });
    });

    it("should return formatted CTA object with provided values", () => {
      const cta = {
        fields: {
          href: "/cta",
          label: "CTA",
          target: "_blank",
        },
      };
      const result = formatCTA(cta);
      expect(result).toEqual({
        href: "/cta",
        text: "CTA",
        target: "_blank",
      });
    });
  });

  describe("formatActionIcons", () => {
    it("should return formatted array of action icon objects", () => {
      const actionIcons = [
        {
          fields: {
            label: "Icon 1",
            actionIcons: "icon1",
          },
        },
        {
          fields: {
            label: "Icon 2",
            actionIcons: "icon2",
          },
        },
        {
          fields: {
            label: "Icon 3",
            actionIcons: "icon3",
          },
        },
      ];
      const result = formatActionIcons(actionIcons);
      expect(result).toEqual([
        {
          text: "Icon 1",
          type: "icon1",
        },
        {
          text: "Icon 2",
          type: "icon2",
        },
        {
          text: "Icon 3",
          type: "icon3",
        },
      ]);
    });

    it("should return empty array if actionIcons is undefined", () => {
      const result = formatActionIcons(undefined);
      expect(result).toEqual([]);
    });
  });
});
