import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useData } from "../../contexts/DataContexts";
import "../../css/custom-image-gallery.css"

const PDetails = () => {
  const { data , selectedProducts } = useData();

  const imgGallery = selectedProducts.thumbnailImgs.map((img) => ({
    original : `/src/assets/images/${img}`,
    thumbnail: `/src/assets/images/${img}`
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
