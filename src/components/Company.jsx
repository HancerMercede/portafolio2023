import "./Company.css";

export const Company = ({ props }) => {
  const { years, company, position, description } = props;
  return (
    <div className="company-container">
      <li>
        <h3>{company}</h3>
        <p className="position">{position}</p>
        <p className="years">{years}</p>
        <p className="description">{description}</p>
      </li>
    </div>
  );
};
