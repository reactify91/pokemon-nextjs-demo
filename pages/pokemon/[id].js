import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Pokemon() {
  const id = useRouter().query.id;
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const data = fetch(
      `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
    )
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);
  if (pokemon) {
    return (
      <>
        <Head>
          <title>{pokemon?.name}</title>
        </Head>
        <div className=" p-4 bg-indigo-400 mx-auto text-center text-3xl font-bold text-gray-50 ">
          I am {pokemon.name}
        </div>
        <div className="my-4 p-3 flex flex-col items-center justify-center  w-full ">
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-full max-w-[200px] h-[200px] object-cover p-4 bg-gray-300 rounded-md"
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
              alt={pokemon.name}
            />
            <div className="my-2 text-2xl text-gray-600 font-semibold">
              {pokemon.name}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}
