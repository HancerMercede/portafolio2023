import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <>
      <h3 className={styles.SectionTitle} id="About">
        About me
      </h3>
      <div className={styles.container}>
        <p className={styles.content}>
          Proactive fullstack Developer, focus on results, giving smart
          solutions and helping the team to improve the existing apps and
          develope eficient code, I have more than 5 years of expirience in
          tech, working with tools like .NET, C#, Entity Framework, Dapper,
          JavaScript and Sql Server. I also have over 3 years working with
          React.js and Node.js, MariaDB, MongoDB, Express.js and others tools. I
          think if you are looking for a good fit for your team I`m what you
          need.
        </p>
      </div>
    </>
  );
};
