import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function AssalafyLogo({ className = "", size = 44 }: LogoProps) {
  return (
    <Image
      src="/assalafy-mark.png"
      alt=""
      width={size}
      height={size}
      className={`shrink-0 drop-shadow-[0_0_15px_rgba(178,190,181,0.35)] transition-transform duration-300 hover:scale-105 ${className}`}
    />
  );
}