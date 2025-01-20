import "./TechStack.css";
export const TechStack = ({ tool }) => {
  return (
    <>
      <img className="cover" src={tool.image} alt={tool.name} />
    </>
  );
};
