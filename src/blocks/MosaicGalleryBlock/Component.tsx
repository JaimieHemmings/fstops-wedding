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

  // Distribute images across columns to create a masonry/mosaic effect
  const distributeImages = () => {
    if (!images) return Array(columns).fill([]);

    const cols: Column[][] = Array(columns).fill([]).map(() => []);

    
    // Distribute images across columns
    images.forEach((image, index) => {
      if (image && image.media) {
        const columnIndex = index % columns;
        // @ts-ignore
        cols[columnIndex].push(image);
      }
    });
    
    return cols;
  };

  const imageColumns = distributeImages();

  return (
    <div className="w-full">
      <div className="flex">
        {imageColumns.map((column, colIndex) => (
          <div key={`column-${colIndex}`} className="flex-1 flex flex-col">
          {/* @ts-ignore */}
            {column.map((image, imgIndex) => (
              <div 
                key={`image-${colIndex}-${imgIndex}`} 
                className="relative overflow-hidden"
              >
                <div
                  className="absolute w-full h-full top-0 left-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300 max-md:hidden"
                  style={{ zIndex: 1 }}
                />
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