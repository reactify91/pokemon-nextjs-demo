import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const data = fetch(
      "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <div className=" p-4 bg-indigo-400 mx-auto text-center text-3xl font-bold text-gray-50 ">
        Welcome to Pokemon List
      </div>
      <div className=" container mx-auto  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-10 ">
        {pokemons.slice(0, 20).map((pokemon) => (
          <div
            key={pokemon.id}
            className="  border-2 border-gray-700  rounded-md p-1 max-w-[300px] mx-auto"
          >
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <img
                  className="w-full max-w-[200px] h-[200px] object-cover"
                  src={
                    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/" +
                    pokemon.image
                  }
                  alt={pokemon.name}
                />
              </a>
            </Link>

            <div className="text-center text-xl font-bold text-gray-700 py-2">
              {pokemon.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
