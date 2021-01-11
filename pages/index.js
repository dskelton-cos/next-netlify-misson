import Head from "next/head";

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

      <button onClick={handleClick}>See Pokemon!</button>
    </>
  );
}

export default Home;
