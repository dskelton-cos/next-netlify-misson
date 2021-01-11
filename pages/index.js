import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "../components/Nav";

function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/pokemon");
  };

  return (
    <>
      <Head>
        <title> Pokemon Home</title>
      </Head>
      <Nav />
      <div>Welcome, explorers</div>

      <h2>Dynamic Routes</h2>
      <ul>
        <li>
          <Link href="/pokemon/bulbasaur">
            <a>bulbasaur</a>
          </Link>
        </li>
        <li>
          <Link href="/pokemon/ivysaur">
            <a>ivysaur</a>
          </Link>
        </li>
        <li>
          <Link href="/pokemon/charmander">
            <a>charmander</a>
          </Link>
        </li>
      </ul>

      <button onClick={handleClick}>See Pokemon!</button>
    </>
  );
}

export default Home;
