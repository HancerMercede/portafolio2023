import "./workexpirience.css";
import { companies } from "../db/companies.js";
import { Company } from "./Company";

export const WorkExpirience = () => {
  return (
    <div className="workexpirience-container">
      <h2>Work Expirience</h2>
      <lu className="companies-list">
        {companies.map((company) => (
          <Company key={company.id} props={company} />
        ))}
      </lu>
    </div>
  );
};
