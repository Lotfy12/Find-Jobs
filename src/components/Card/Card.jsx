const Card = ({ title, description, button, className = "", moveTo }) => {
  return (
    <div
      className={`rounded-xl bg-gray-100 px-10  py-8
 ${className}`}
    >
      <h4 className="text-2xl font-bold">{title}</h4>
      <h6 className="pt-2 pb-3 text-base">{description}</h6>
      <button className="btn" onClick={moveTo}>
        {button}
      </button>
    </div>
  );
};

export default Card;
