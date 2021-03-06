import { useEffect, useState } from "react";
import Head from "next/head";
import litany from "../data/litany";
import Phase1Line from "../phases/components/Phase1Line";

const lines = litany.split("\n").filter((line) => line !== "");

export const alterArray = (unsolved, ind, valSet) => {
  let newArray = [...unsolved];
  newArray[ind] = valSet;
  return newArray;
};

export const firstNonFalseEl = (unsolved) =>
  unsolved.findIndex((c) => c !== false);

export const Home = () => {
  const [linesSolved, setLinesSolved] = useState(lines.map((i) => false));
  const [visibleLines, setVisibleLines] = useState(
    lines.map((i, ind) => ind === 0)
  );

  const onLineSolved = (ind) => {
    const newStuff = alterArray(linesSolved, ind, true);
    const newVisible = alterArray(visibleLines, ind + 1, true);
    setLinesSolved(newStuff);
    setVisibleLines(newVisible);
  };

  return (
    <div className="container">
      <Head>
        <title>Litany Against Fear</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Litany Against Fear</h1>

        {lines.map((line, ind) => {
          return (
            <Phase1Line
              solution={line}
              onLineSolved={onLineSolved}
              lineIndex={ind}
              key={ind}
              isVisible={visibleLines[ind]}
            />
          );
        })}
      </main>

      <footer>
        <a
          href="https://stevebarman.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Steve Barman
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
        }

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
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title {
          text-align: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
};

export default Home;
