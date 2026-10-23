import SectionTitle, { type SectionTitleProps } from "./SectionTitle";

type SectionHeadingProps = SectionTitleProps & {
  children?: React.ReactNode;
};

export default function SectionHeading({ children, ...titleProps }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-12">
      <div className="max-w-xl">
        <SectionTitle {...titleProps} />
      </div>

      {children && (
        <div className="max-w-md space-y-4 leading-relaxed text-body">{children}</div>
      )}
    </div>
  );
}
