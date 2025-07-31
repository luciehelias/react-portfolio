import { FaGithub } from "react-icons/fa";

type GithubLinkProps = {
  url: string;
  title: string;
};

const GithubLink = ({ url, title }: GithubLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex gap-2 items-center text-black mb-2 lg:text-sm 2xl:text-base"
    >
      <FaGithub />
      {title}
    </a>
  );
};

export default GithubLink;
