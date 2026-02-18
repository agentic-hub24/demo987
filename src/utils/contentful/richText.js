import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

/**
 * Renders a component that indicates that the feature is not supported.
 *
 * @returns {null} Returns null.
 */
const NotSupported = () => null;

/**
 * Renders rich text content using the Contentful rich text renderer.
 * @param {object} copy - The rich text content to be rendered.
 * @returns {React.Component} - The rendered React components.
 */
export const renderRichText = (copy) => {
  if (!copy) {
    return null;
  }
  return documentToReactComponents(copy, {
    renderMark: {
      bold: (_text) => <b>{_text}</b>,
      italic: (_text) => <i>{_text}</i>,
      underline: NotSupported,
      code: NotSupported,
      superscript: NotSupported,
      subscript: NotSupported,
      strikethrough: NotSupported,
    },
    renderNode: {
      paragraph: (_node, children) => <>{children}</>,
      "unordered-list": NotSupported,
      "heading-1": NotSupported,
      "heading-2": NotSupported,
      "heading-3": NotSupported,
      "heading-4": NotSupported,
      "heading-5": NotSupported,
      "heading-6": NotSupported,
      "ordered-list": NotSupported,
      "unordered-list": NotSupported,
      "list-item": NotSupported,
      hr: NotSupported,
      blockquote: NotSupported,
      "embedded-entry-block": NotSupported,
      "embedded-asset-block": NotSupported,
      "embedded-resource-block": NotSupported,
      table: NotSupported,
      "table-row": NotSupported,
      "table-cell": NotSupported,
      "table-header-cell": NotSupported,
    },
  });
};

export const renderRichTexttoHTML = (copy) => {
  if (!copy) {
    return null;
  }
  return documentToHtmlString(copy)
};
