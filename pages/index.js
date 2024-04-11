import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link
          rel="icon"
          href="http://www.alfredorafael.com/wp-content/uploads/2019/02/myLogo.png"
        />
      </Head>

      <main>
        <h1 className={styles.title}>Morlan's Website Planning</h1>

        <p className={styles.description}>
          A quick exploration of your website's posibilities/structure before we
          meet via zoom!
        </p>

        <div className={styles.grid}>
          <a
            href="https://alfredodeveloper.com/resume"
            target="_blank nooppener noreferrer"
            className={styles.card}
          >
            <h3>An Example &rarr;</h3>
            <p>
              My resume here! Please share yours so we can plan on how to build
              it :)
            </p>
          </a>

          <a
            href="https://www.namecheap.com/domains/registration/results/?domain=scottmorlan"
            target="_blank nooppener noreferrer"
            className={styles.card}
          >
            <h3>Domain Name &rarr;</h3>
            <p>
              I found we can buy the domain{" "}
              <span style={{ color: "blue" }}>ScottMorlan.com</span> for just
              $12 a year!
            </p>
          </a>

          <a
            href="https://startbootstrap.com/templates?showAngular=false&showVue=false&showPro=false"
            className={styles.card}
          >
            <h3>Explore Templates &rarr;</h3>
            <p>
              I see you have a LinkedIn blog! Look at templates we can use and
              modify to fit your needs
            </p>
          </a>

          <a
            href="https://thedigitalprojectmanager.com/personal/job-seeking/project-manager-portfolio-resume/"
            className={styles.card}
          >
            <h3>Read Others &rarr;</h3>
            <p>
              Until our meeting next week, find out what other project managers
              are doing to stand out!
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coded with ♥ by
          <img
            src="http://www.alfredorafael.com/wp-content/uploads/2019/02/myLogo.png"
            alt="Vercel"
            className={styles.logo}
          />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
