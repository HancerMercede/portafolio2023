import styles from './AboutMe.module.css';

export const AboutMe = () => {
  return (
    <>
      <div>
        <h3 className={styles.SectionTitle}>About me</h3>
        <div className={styles.container}>
            <p className={styles.content}>
            Proactive Software Engineer, Diligent and focus, working smart in my skills as developer, I work with modern .NET platform, but open to adopt any other tech such as JavaScript, TypeScript, Node.js, Express.js, Nest.js, React.js and much more. In my day to day I use tools like Azure DevOps, EF Core, Dapper, ASP.NET Core, Microsoft SQL Server, Postman and Swagger. I enjoy to learn new things and keeping updated and growing in my career.
            </p>
        </div>
      </div>
    </>
  );
};
