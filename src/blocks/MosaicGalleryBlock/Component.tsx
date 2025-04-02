'use client';
import { Media } from '@/components/Media';
import React, { useState, useEffect } from 'react';

interface Column {
  media: {
    id: string;
    url: string;
  };
}

interface MosaicGalleryBlockProps {
  images: Column[];
}

const MosaicGalleryBlock: React.FC<MosaicGalleryBlockProps> = ({ images }) => {
  const [columns, setColumns] = useState(3);
  const [imageHeights, setImageHeights] = useState<{ [key: string]: number }>({});

  // Responsive column adjustment based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else if (window.innerWidth < 1280) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    handleResize(); // Set initial columns
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload images and get their aspect ratios
  useEffect(() => {
    if (!images) return;

    images.forEach((image) => {
      if (image?.media?.url) {
        const img = new Image();
        img.src = image.media.url;
        img.onload = () => {
          setImageHeights(prev => ({
            ...prev,
            [image.media.id]: img.height / img.width // Store aspect ratio instead of raw height
          }));
        };
      }
    });
  }, [images]);

  const distributeImages = () => {
    if (!images) return Array(columns).fill([]);
    const cols: Column[][] = Array(columns).fill([]).map(() => []) || [];
    const columnHeights = new Array(columns).fill(0);

    const getShortestColumnIndex = () => {
      return (
        columnHeights.indexOf(Math.min(...columnHeights)) || 0
      )
    };

    // Sort images by height (descending) before distribution
    const sortedImages = [...images].sort((a, b) => {
      if (!a?.media || !b?.media) return 0;
      const heightA = imageHeights[a.media.id] ?? 1;
      const heightB = imageHeights[b.media.id] ?? 1;
      return heightB - heightA;
    });

    sortedImages.forEach((image) => {
      if (image && image.media) {
        const targetColumn = getShortestColumnIndex();
        // @ts-ignore
        cols[targetColumn].push(image);
        // Use the actual aspect ratio for height calculation
        columnHeights[targetColumn] += imageHeights[image.media.id] || 1;
      }
    });
    
    return cols;
  };

  const imageColumns = distributeImages();

  return (
    <div className="w-full pb-16">
      <div className="flex">
        {imageColumns.map((column, colIndex) => (
          <div key={`column-${colIndex}`} className="flex-1 flex flex-col">
            {/* @ts-ignore */}
            {column.map((image, imgIndex) => (
              <div 
                key={`image-${colIndex}-${imgIndex}`} 
                className="relative overflow-hidden"
              >
                <Media
                  resource={image.media}
                  imgClassName='w-full h-auto'
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MosaicGalleryBlock;