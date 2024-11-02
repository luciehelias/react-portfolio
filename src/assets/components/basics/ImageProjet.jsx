import React from "react";

const ImageProjet = ({ link, image, title }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex gap-2 items-center text-blue-500 mb-4"
    >
      <img
        src={image}
        alt={title}
        className="mt-6 rounded object-contain lg:ml-10  "
      />
    </a>
  );
};

export default ImageProjet;
