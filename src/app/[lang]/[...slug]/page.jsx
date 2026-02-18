import { getLandingPage } from "@utils/contentful/apis";
import Section from "@components/Section";
import { formatMetadata } from "@utils/contentful/formatters";
import { notFound } from "next/navigation";

export async function generateMetadata({ params, searchParams }, parent) {
  const { sections } = await getLandingPage({
    slug: params.slug || "homepage", // slug testing is added as a fallback,,
    locale: params.lang,
  });
  return formatMetadata(sections?.seoMetadata);
}

/**
 * Renders a landing page based on the provided slug.
 *
 * @param {Object} params - The parameters object.
 * @param {string} params.slug - The slug of the landing page.
 * @returns {JSX.Element} The rendered landing page.
 */
const LandingPage = async ({ params }) => {
  const { sections } = await getLandingPage({
    slug: params.slug?.join("/") || "homepage", // slug testing is added as a fallback,,
    locale: params.lang,
  });

  if (sections?.pageSections.length > 0) {
    return (
      <main>
        {sections?.pageSections?.map((section) => {
          return (
            <section key={section.sys.id}>
              <Section
                type={section.sys?.contentType?.sys?.id}
                data={section}
              />
            </section>
          );
        })}
      </main>
    );
  } else {
    notFound();
  }
};

export const revalidate = 3600;
export default LandingPage;
