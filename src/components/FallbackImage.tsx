type Props = {
  src?: string;
  alt: string;
  className?: string;
};

export const FallbackImage = ({ src, alt, className }: Props) => {
  const placeholder = "/fallback.png";

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = placeholder;
  };

  return (
    <img
      src={src || placeholder}
      alt={alt}
      onError={handleError}
      className={className}
    />
  );
};
