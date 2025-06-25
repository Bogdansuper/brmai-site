'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes,
  fill = false,
  style,
  quality = 90,
  placeholder = 'empty',
  blurDataURL,
  loading,
  onLoad
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  // Default sizes for responsive images
  const defaultSizes = sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  // Common styles to prevent CLS
  const imageStyle: React.CSSProperties = {
    ...style,
    ...(fill ? {} : { width: '100%', height: 'auto' })
  };

  return (
    <div className={`relative ${className}`} style={fill ? {} : { aspectRatio: width && height ? `${width}/${height}` : undefined }}>
      <Image
        src={src}
        alt={alt}
        {...(fill ? { fill: true } : { width, height })}
        priority={priority}
        sizes={defaultSizes}
        style={imageStyle}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        loading={loading || (priority ? 'eager' : 'lazy')}
        onLoad={handleLoad}
        className={`${isLoading ? 'animate-pulse bg-gray-200' : ''}`}
      />
    </div>
  );
}

// Hero Image Component with LCP optimization
export function HeroImage({ src, alt, ...props }: Omit<OptimizedImageProps, 'priority' | 'loading'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      priority={true}
      loading="eager"
      sizes="100vw"
      {...props}
    />
  );
}

// Thumbnail Component
export function ThumbnailImage({ src, alt, ...props }: Omit<OptimizedImageProps, 'sizes'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      sizes="(max-width: 640px) 50vw, 25vw"
      quality={75}
      {...props}
    />
  );
} 