import "./TechStack.css";

// Usando iconos desde CDN de devicon para mejor compatibilidad
export const TechStack = () => {
  const techIcons = [
    { name: "HTML5", icon: "devicon-html5-plain colored", type: "devicon" },
    { name: "CSS3", icon: "devicon-css3-plain colored", type: "devicon" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", type: "devicon" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored", type: "devicon" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", type: "devicon" },
    { name: "C#", icon: "devicon-csharp-plain colored", type: "devicon" },
    { name: "React", icon: "devicon-react-original colored", type: "devicon" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored", type: "devicon" },
    { name: "TanStack Query", icon: "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg", type: "image" },
    { name: "React Router", icon: "devicon-reactrouter-plain colored", type: "devicon" },
    { name: "Oracle", icon: "devicon-oracle-original colored", type: "devicon" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", type: "devicon" },
    { name: "Azure", icon: "devicon-azure-plain colored", type: "devicon" }
  ];

  return (
    <>
      {techIcons.map((tech, index) => (
        <li key={index} title={tech.name}>
          {tech.type === "devicon" ? (
            <i className={tech.icon}></i>
          ) : (
            <img src={tech.icon} alt={tech.name} className="tech-custom-icon" />
          )}
        </li>
      ))}
    </>
  );
};
