import { FaLink } from "react-icons/fa6";

type WebsiteLinkProps = {
  url: string;
  title: string;
};

const WebsiteLink = ({ url, title }: WebsiteLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex gap-2 items-center text-blue-700 mb-2 lg:text-sm 2xl:text-base"
    >
      <FaLink /> Découvrir mon projet {title}
    </a>
  );
};

export default WebsiteLink;
