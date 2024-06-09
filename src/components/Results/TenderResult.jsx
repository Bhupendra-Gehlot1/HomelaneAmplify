import React, { useEffect, useState } from "react";
import TenderResultCard from "../Results/TenderResultCard";
import Service from "../../supabase/config";

function TenderResult() {
  const [finalResDataforWood, setFinalResDataforWood] = useState(null);
  const [finalResDataforSteel, setFinalResDataforSteel] = useState(null);
  const [forWood, setForWood] = useState(false);
  const [forSteel, setForSteel] = useState(false);
  const [category, setCategory] = useState("wood");

  useEffect(() => {
    Service.fetchResultData("steel").then((data) =>
      setFinalResDataforSteel(data)
    );
    Service.fetchResultData("wood").then((data) =>
      setFinalResDataforWood(data)
    );
  }, []);
  console.log(finalResDataforSteel);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category === "wood") {
      setForWood(true);
      setForSteel(false);
    }
    if (category === "steel") {
      setForSteel(true);
      setForWood(false);
    }
  };

  return (
    <div className="flex flex-wrap p-4 m-2 justify-center item-center flex-col">
      <h3 className="text-center text-5xl">
        Tender Result for Bangalore Location
      </h3>
      <form
        className="p-8 flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex">
          <label
            htmlFor="category"
            className="mb-2 px-4 font-medium text-gray-900 dark:text-white text-2xl"
          >
            Select Category:
          </label>
          <select
            id="category"
            value={category}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="wood">Wood</option>
            <option value="steel">Steel</option>
          </select>
        </div>
        <button
          type="submit"
          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none cursor-pointer m-5"
        >
          Submit
        </button>
      </form>
      {forSteel && finalResDataforSteel && (
        <div className="flex justify-center items-center">
          {finalResDataforSteel.map((d) => (
            <TenderResultCard
              key={d.id}
              name={d.name}
              tenderAmount={d.tender_amount}
              category={d.category}
            />
          ))}
        </div>
      )}
      {forWood && finalResDataforWood && (
        <div className="flex justify-center items-center">
          {finalResDataforWood.map((d) => (
            <TenderResultCard
              key={d.id}
              name={d.name}
              tenderAmount={d.tender_amount}
              category={d.category}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TenderResult;
