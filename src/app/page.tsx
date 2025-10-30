import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.title}>
            <div>
              <Image
                src="/alan-cropped-circle.png"
                alt="Alan Profile Photo"
                width={100}
                height={100}
              />
            </div>

            <div>
              <h1>Alan França</h1>
              <h2>Full Stack Developer</h2>
            </div>
          </div>

          <div>
            <p>You can also find me on <a href="https://www.linkedin.com/in/alanjhonatan/">LinkedIn</a> and <a href="https://github.com/alanjhonatan">Github</a> ! 👋</p>
          </div>

          <div className={styles.about}>
            <p><strong>About Me</strong></p>
            <p>I&apos;m a 26 years old Full Stack Developer with 5+ years of experience using <strong>Node.js</strong>, <strong>React.js</strong>, <strong>Next.js</strong> and <strong>AWS</strong>.</p>
            <p>I enjoy creating and building Web Apps of any type.</p>
            <p>In my free time I like to play the guitar and hang out with my friends.</p>
            <p>Always shipping ! 📦</p>
          </div>

          <div className={styles.experiences}>
            <p className={styles.exptitle}><strong>Work Experience</strong></p>

            <div className={styles.expblock}>
              <div>
                <a href="https://www.smiles.com.br/home" target="_blank" className={styles.jobtitle}>Smiles (Gol Airlines miles division)🔗</a>
                <p className={styles.jobrole}><strong>Senior</strong> Full Stack Developer</p>
                <p className={styles.jobdatetime}>2023 - present</p>
              </div>
              <div className={styles.jobdescription}>
                <p>- Significantly reduced customer support tickets and issue reports through <strong>proactive maintenance and refactoring</strong> of the codebase.</p>
                <p>- Increased code test coverage from <strong>64% to 96%</strong> for new features by adopting <strong>Test-Driven Development (TDD) with Jest and SonarQube</strong> to ensure quality.</p>
                <p>- Streamlined the password recovery process, reducing wait time from <strong>days to hours</strong> by implementing <strong>biometrics validation and a dynamic security questionnaire.</strong></p>
                <p>- Accelerated the development cycle and improved code maintainability by introducing and applying modern concepts such as <strong>Context API, Custom Hooks, and Feature-Based Structure.</strong></p>
                <p>- Addressed and paid down technical debt by implementing <strong>Clean Code, Patterns and Development Best Practices.</strong></p>
                <p>- Provided technical support to other squads by maintaining <strong>MVC components built with Liferay, Java 8, and JUnit.</strong></p>
              </div>

              <div className={styles.jobbadges}>
                <span>React.js • Next.js • Typescript • Test-Driven Development (TDD) • Amazon Web Services (AWS) • Micro Frontends • Microservices</span>
              </div>
            </div>

            <div className={styles.expblock}>
              <div>
                <a href="https://www.gft.com/br/pt/" target="_blank" className={styles.jobtitle}>GFT Group - (Worked to Mapfre) 🔗</a>
                <p className={styles.jobrole}><strong>Mid-Level</strong> Full Stack Developer</p>
                <p className={styles.jobdatetime}>2022 - 2023</p>
              </div>
              <div className={styles.jobdescription}>
                <p>- Developed and maintained secure, scalable APIs for <strong>OpenFinance and OpenInsurance platforms</strong>, enabling secure data sharing between <strong>financial institutions and insurance companies</strong>.</p>
                <p>- Engineered <strong>serverless</strong> solutions using <strong>Node.js on AWS Lambda, with API Gateway and Infrastructure as Code (IaC) via Terraform</strong>.</p>
                <p>- Led cloud optimization initiatives, including a critical migration from <strong>DynamoDB to MongoDB</strong> with a more efficient and cost-effective architecture.</p>
                <p>- Championed code quality and best practices across the team by implementing and enforcing <strong>Clean Architecture, Test-Driven Development (TDD), and SOLID principles</strong>.</p>
                <p>- Led code reviews and provided <strong>technical mentorship for junior developers, starters and interns</strong>, fostering team growth and ensuring adherence to coding standards.</p>
              </div>
              <div className={styles.jobbadges}>
                <span>Node.js • React.js • Next.js • NoSQL • SQL • Typescript • Test-Driven Development (TDD) • Amazon Web Services (AWS) • Microservices • Clean Architecture</span>
              </div>
            </div>

            <div className={styles.expblock}>
              <div>
                <a href="https://www.lenovo.com" target="_blank" className={styles.jobtitle}>Lenovo (Brazil) 🔗</a>
                <p className={styles.jobrole}>Software Engineer <strong>(Junior promoted from Intern)</strong></p>
                <p className={styles.jobdatetime}>2021 - 2022</p>
              </div>
              <div className={styles.jobdescription}>
                <p>- Engineered <strong>internal systems and data-driven dashboards</strong> using <strong>Node.js, React, MongoDB, PostgreSQL, and MySQL</strong> to centralize and visualize critical business and factory metrics.</p>
                <p>- Dramatically optimized data processing performance by migrating an <strong>VBS legacy code to Node.js solution using Node Streams</strong>, reducing the generation time of complex reports and timesheets from <strong>hours to minutes while handling gigabytes of data</strong>.</p>
                <p>- Led end-to-end project lifecycle, from researching new technologies and gathering requirements directly with stakeholders to <strong>full-stack development and deployment</strong>.</p>
                <p>- Led multiple legacy system <strong>refactoring and migration</strong> initiatives, modernizing core applications with <strong>Node.js and React.js</strong> to significantly enhance scalability, performance, and long-term maintainability.</p>
              </div>
              <div className={styles.jobbadges}>
                <span>Node.js • Typescript • React.js • NoSQL • SQL • Bootstrap • JQuery • Test-Driven Development (TDD)</span>
              </div>
            </div>

            <div className={styles.expblock}>
              <div>
                <a href="https://www.seip7.com" target="_blank" className={styles.jobtitle}>SEIP7 (Tech Startup) 🔗</a>
                <p className={styles.jobrole}>Full Stack Developer <strong>(Intern)</strong></p>
                <p className={styles.jobdatetime}>2019 - 2020</p>
              </div>
              <div className={styles.jobdescription}>
                <p>- Worked on data collection, processing, and automation using <strong>Python</strong>, as well as <strong>code analysis and refactoring in C/C++</strong>.</p>
                <p>- Responsible for testing and validating final applications using <strong>Ionic</strong>, ensuring functionality and performance.</p>
                <p>- Gained hands-on experience with <strong>AWS services</strong> and collaborated with <strong>external development teams on requirements analysis and process optimization</strong>.</p>
              </div>
              <div className={styles.jobbadges}>
                <span>Node.js • Typescript • Python • C/C++ • Amazon Web Services (AWS)</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
