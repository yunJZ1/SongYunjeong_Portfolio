import Container from "../Container";

type HeroImageProps = {
  label?: string;
  src?: string;
  alt?: string;
};

export default function HeroImage({
  label = "Hero Visual",
  src,
  alt,
}: HeroImageProps) {
  return (
    <Container variant="hero-image" className="pb-[48px]">
      <div className="w-full aspect-[16/10] rounded-[20px] bg-[#f5f5f5] overflow-hidden flex items-center justify-center">
        {src ? (
          <img src={src} alt={alt ?? label} className="w-full h-full object-cover" />
        ) : (
          <span className="text-[15px] font-medium text-[#c8c8c8] tracking-[-0.45px]">
            {label}
          </span>
        )}
      </div>
    </Container>
  );
}
