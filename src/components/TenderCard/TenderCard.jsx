import React from "react";
import Logo from "../../assets/Logo.png";
import Service from "../../supabase/config";

function TenderCard({
  id,
  createdAt,
  email,
  name,
  description,
  tenderAmount,
  category,
  onDelete,
}) {
  return (
    <>
      <div className="w-72 h-full bg-white m-2 border-gray-300 border shadow-lg ">
        <div className="w-full h-full flex flex-wrap justify-center items-center p-2">
          <img
            className="bg-center overflow-hidden max-w-40 max-h-40"
            src={Logo}
            alt="logo"
          ></img>
          <button
            type="button"
            onClick={()=> Service.deleteSingleData(id).then(onDelete(id))}
            className="text-orange-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-orange-600 dark:hover:text-white"
            data-modal-toggle="crud-modal"
          >
            <svg
              className="text-orange-700 hover:text-orange-800 w-11 h-11 mb-3.5 mx-auto"
              aria-hidden="true"              
              viewBox="0 -4 20 20"
              fill="#e72027"              
              stroke="#e72027"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="border border-gray-400 bg-white  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-xl text-gray-900 font-bold flex items-center">
              Tender Amount : {tenderAmount} &#8377;
            </p>
            <p className="text-xl text-gray-900 font-bold flex items-center">
              Category : {category}
            </p>
            <div className="text-gray-700 font-bold text-lg mb-2">{name}</div>
            <p className="text-gray-500 text-base">{description}</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{email}</p>
              <p className="text-gray-600">{createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TenderCard;
