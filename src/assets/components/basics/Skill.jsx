const Skill = ({ skill, tech }) => {
  return (
    <div>
      {skill ? (
        <span className="rounded bg-pink-200 text-purple-800 px-2 py-1 text-sm lg:text-base 2xl:text-xl font-medium">
          {skill}
        </span>
      ) : (
        <span className="rounded bg-purple-400 text-white px-2 py-1 font-medium lg:text-base 2xl:text-xl">
          {tech}
        </span>
      )}
    </div>
  );
};

export default Skill;
