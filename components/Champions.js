import { useState } from "react";
import { leagueChampions } from "../data/champions";

const Champions = ({ title, description, filter }) => {
  const numberOfCharacters = leagueChampions.length;
  const champions = leagueChampions.slice(0, 12);
  const [champion, setChampion] = useState();
  const filters = [
    "Assassins",
    "Fighters",
    "Mages",
    "Marksmen",
    "Support",
    "Tanks",
  ];
  let kindOfButton;

  const getRandomNumber = () => {
    return Math.floor(Math.random() * numberOfCharacters);
  };

  const handleClick = () => {
    setChampion(leagueChampions[getRandomNumber()]);
  };

  if (filter) {
    kindOfButton = (
      <>
        <style jsx>{`
          .grid {
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            grid-auto-rows: 240px;
          }
        `}</style>

        <aside className="inline-flex rounded-md shadow-sm py-8" role="group">
          {filters.map((filter, id) => (
            <button
              type="button"
              key={id}
              className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              {filter}
            </button>
          ))}
        </aside>
        <aside className="grid">
          {champions.map((champ, id) => (
            <span
              className="py-4 bg-gray-700 text-white hover:bg-gray-600"
              key={id}
            >
              <p>{champ.name}</p>
              <p>{champ.title}</p>
            </span>
          ))}
        </aside>
      </>
    );
  } else
    kindOfButton = (
      <>
        <p className="mt-6 text-2xl italic">{champion?.name}</p>
        <p className="mb-4 text-l italic">{champion?.title}</p>

        <button
          type="button"
          onClick={handleClick}
          className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 mr-2 mb-2"
        >
          Get Random Champion!
        </button>
      </>
    );

  return (
    <>
      <h1 className="title text-4xl">{title}</h1>
      <aside>{description}</aside>

      {kindOfButton}
    </>
  );
};

export default Champions;
