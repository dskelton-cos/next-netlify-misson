import Head from "next/head";
import Nav from "../../components/Nav";

function Blog() {
  return (
    <>
      <Head>
        <title> Pokemon Blog</title>
      </Head>

      <Nav />

      <div>Welcome, blog</div>
    </>
  );
}

export default Blog;
