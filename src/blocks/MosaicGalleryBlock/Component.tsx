'use client';
import { Media } from '@/components/Media';
import React, { useState, useEffect } from 'react';
import { MosaicGalleryBlock as GridType } from '@/payload-types'

interface Column {
  media: {
    id: string;
    url: string;
  };
}

const MosaicGalleryBlock: React.FC<GridType> = ({ images }) => {
  const [columns, setColumns] = useState(3);

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
  
  const distributeImages = () => {
    if (!images) return Array(columns).fill([]);
    const cols: Column[][] = Array(columns).fill([]).map(() => []);
    const columnHeights = new Array(columns).fill(0);
    const getShortestColumnIndex = () => {
      return columnHeights.indexOf(Math.min(...columnHeights));
    };

    images.forEach((image) => {
      if (image && image.media) {
        const targetColumn = getShortestColumnIndex();
        {/* @ts-ignore */}
        cols[targetColumn].push(image);
        columnHeights[targetColumn] += 1;
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