import "./Banner.css";
import React from "react";

interface BannerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Banner = ({ src, alt, width, height }: BannerProps) => {
  return (
    <header className="banner">
      <img src={src} alt={alt} />
    </header>
  );
};

export default Banner;
