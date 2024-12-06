import React, { useState, useEffect, forwardRef } from "react";
import { Image } from "antd";

interface imageUrlType {
  imageUrl: string;
}

const ProductGallery = forwardRef<HTMLDivElement, imageUrlType>(({ imageUrl }, ref) => {
  const [selectedImage, setSelectedImage] = useState<string>(imageUrl);

  const images = [
    imageUrl,
    imageUrl,
    imageUrl,
    imageUrl,
  ];

  useEffect(() => {
    if (imageUrl) {
      setSelectedImage(imageUrl);
    }
  }, [imageUrl]);

  return (
    <div className="flex">
      <div className="flex flex-col gap-2 pr-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              selectedImage === img ? "border-green-500 border-2" : "border-none"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index}`}
              width={93}
              height={93}
              style={{ objectFit: "cover", borderRadius: 5 }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={selectedImage}
          alt="Selected Product"
          width={430}
          height={430}
          style={{ borderRadius: 10 }}
        />
      </div>
    </div>
  );
});

export default ProductGallery;
