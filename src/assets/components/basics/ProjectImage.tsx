type ProjectImageProps = {
  link: string;
  title: string;
  image: string;
};

const ProjectImage = ({ link, image, title }: ProjectImageProps) => {
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

export default ProjectImage;
