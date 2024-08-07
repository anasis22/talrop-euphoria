import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useData } from "../../contexts/DataContexts";
import "../../css/custom-image-gallery.css"

const PDetails = () => {
  const { selectedProducts } = useData();
  
  const imgGallery = selectedProducts.thumbnailImgs.map((img) => ({
    original : `/assets/images/${img}`,
    thumbnail: `/assets/images/${img}`
  }))

  return (
    <div>
      <hr />
      <ImageGallery
        items={imgGallery}
        showPlayButton={false}
        thumbnailPosition="left"
      />
    </div>
  );
};

export default PDetails;
