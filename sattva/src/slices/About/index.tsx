import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{ textAlign: "center", padding: "2rem" }}
    >
      <div className="text-3xl font-bold">
        <PrismicRichText field={slice.primary.heading} />
        </div>
        <div className="text-xl">
        <PrismicRichText field={slice.primary.subheading} />
      </div>
    </section>
  );
};

export default About;

