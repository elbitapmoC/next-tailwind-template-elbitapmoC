import { useState } from "react";

const InCommon = ({ title, description }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1 className="title text-4xl">{title}</h1>
      <aside>{description}</aside>
      <p className="mt-4 mb-4 text-2xl italic">{count}</p>
      <button
        type="button"
        onClick={handleClick}
        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 mr-2 mb-2"
      >
        Add 1
      </button>
    </>
  );
};

export default InCommon;
