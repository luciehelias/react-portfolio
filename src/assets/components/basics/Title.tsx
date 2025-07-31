type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <div>
      <h1 className="my-2 sm:my-8 lg:my-20 text-center text-2xl lg:text-6xl font-light">
        {title}
      </h1>
    </div>
  );
};

export default Title;
