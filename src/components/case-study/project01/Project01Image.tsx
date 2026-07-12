type Project01ImageProps = {
  src: string;
  alt?: string;
};

export default function Project01Image({ src, alt = "" }: Project01ImageProps) {
  return (
    <figure className="w-full">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-[16px] overflow-hidden"
      />
    </figure>
  );
}
