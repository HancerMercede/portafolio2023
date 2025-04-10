import "./Company.css";

export const Company = ({ props }) => {
  const { logo, years, company, position, description } = props;
  return (
    <div className="company-container">
      <li>
        <div>
          <img className="company-logo" src={logo} alt={company} />
          <h3>{company}</h3>
        </div>
        <p className="position">{position}</p>
        <p className="years">{years}</p>
        <p className="description">{description}</p>
      </li>
    </div>
  );
};
