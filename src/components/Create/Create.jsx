import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import Service from "../../supabase/config";

function Create({ showModal, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tenderAmt, setTenderAmt] = useState(0);
  const [category, setCategory] = useState("wood");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  if (!showModal) return null;

  const handleSubmit = (e) => {
    e.preventDefault();  
    Service.UploadData({
      name: name,
      email: email,
      tender_amount: tenderAmt,
      description: description,
      category: category,
    })
      .then(setError(null))
      // .catch(setError("Please Input correctly"));
    setCategory("wood")
    setDescription("")
    setEmail("")
    setName("")
    setTenderAmt(0);    
    onClose();    
  };

  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full items-center max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex border-b rounded-t dark:border-gray-600 flex-col">
          <div className="flex justify-between items-center p-2">
            <img src={Logo} className="w-48 h-auto" alt="logo" />
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="text-lg">Tender for Bangalore Location</div>
          {error ? <div className="text-lg">{error}</div> : null}
        </div>
        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Please Enter Your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email:
              </label>
              <input
                type="text"
                value={email}
                name="name"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Please Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tender Amount:
              </label>
              <input
                type="number"
                value={tenderAmt}
                name="tenderAmount"
                id="amount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Tender Amount in Rupees"
                required
                onChange={(e) => setTenderAmt(e.target.value)}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category:
              </label>
              <select
                id="category"
                value={category}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="wood">Wood</option>
                <option value="steel">Steel</option>
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description(Optional)
              </label>
              <textarea
                value={description}
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tell Us About Your Previous Work"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="text-white inline-flex items-center bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Add new product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
