import "./Project.css";
import { Link } from "react-router-dom";

export const Project = ({ props }) => {
  const { image, name, Description, Tools, url } = props;
  return (
    <div className="project-container">
      <Link to={url} target="_blank">
        <img className="image" src={image} alt={name} />
      </Link>

      <div className="project-info">
        <h2>{name}</h2>
        <p>{Description}</p>
      </div>
      <hr />
      <div className="card-footer">
        <p>{Tools}</p>
      </div>
    </div>
  );
};
