import { PROJECTS } from "../constants";

import { FaLink } from "react-icons/fa6";

const Projects = () => {
  return (
    <div>
      <h1 className="my-20 text-center text-4xl">Mes projets</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div
              className={`w-full max-w-xl ${
                project.image ? "lg:w-3/4" : "lg:w-full"
              }`}
            >
              <h2 className="mb-2 font-semibold">{project.title}</h2>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="flex gap-2 items-center text-blue-500 mb-4"
                >
                  <FaLink /> Découvrir le site {project.title}
                </a>
              )}

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-pink-200 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.image && (
              <div className="w-full lg:w-1/4 ">
                <a
                  href={project.link}
                  target="_blank"
                  className="flex gap-2 items-center text-blue-500 mb-4"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="mt-6 rounded overflow-scroll ml-10"
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
