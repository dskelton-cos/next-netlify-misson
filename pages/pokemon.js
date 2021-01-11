import Head from "next/head";

function Pokemon({ pokemon }) {
  return (
    <>
      <Head>
        <title>Pokemon : {pokemon?.name}</title>
      </Head>
      <div>
        Welcome, {pokemon?.name} !
        <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      </div>
    </>
  );
}

//gets called at build time
export async function getStaticProps(params) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}

export default Pokemon;
