type SubtitleProps = {
  children: React.ReactNode;
};

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <p className="font-mono text-[11px] font-medium tracking-[2px] text-brand uppercase">
      {children}
    </p>
  );
}
