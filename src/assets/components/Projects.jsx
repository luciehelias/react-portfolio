import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div>
      <h1 className="my-20 text-center text-4xl">Mes projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {project.image && (
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="mb-6 rounded"
                />
              </div>
            )}
            <div
              className={`w-full max-w-xl ${
                project.image ? "lg:w-3/4" : "lg:w-full"
              }`}
            >
              <h2 className="mb-2 font-semibold">{project.title}</h2>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <p className="mb-4 text-neutral-600">{project.link}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-pink-200 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
