import React, { useEffect, useState } from "react";
import Service from "../../supabase/config";
import TenderCard from "../TenderCard/TenderCard";

function Home() {
  const [finalData, setFinalData] = useState(null);
  useEffect(() => {
    Service.fetchDatabaseData()
      .then((data) => setFinalData(data))
      .catch(() => setFinalData(null));
  }, []);
  console.log(finalData);

  const handleDelete = (id) => {
    setFinalData((prevData) => prevData.filter((data) => data.id !== id));
  };
  return (
    <>
      {finalData && (
        <div className="flex flex-wrap p-4 m-2">
          {finalData.map((d) => (
            <TenderCard
              key={d.id}
              id={d.id}
              createdAt={d.created_at}
              name={d.name}
              email={d.email}
              tenderAmount={d.tender_amount}
              description={d.description}
              category={d.category}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
