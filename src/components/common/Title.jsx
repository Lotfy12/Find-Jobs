const Title = ({ title, subTitle }) => {
  return (
    <div
      className="flex h-[240px] flex-col
 items-center justify-center gap-y-6 bg-indigo-700 py-8
text-white"
    >
      <h1 className="text-6xl font-bold "> {title}</h1>
      <h5 className="text-xl font-light ">{subTitle}</h5>
    </div>
  );
};

export default Title;
