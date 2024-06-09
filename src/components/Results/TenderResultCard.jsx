import React from "react";
import { Link } from "react-router-dom";

function TenderResultCard({category,name,tenderAmount}) {
  return (    
      <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <Link
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          to="#"
        >
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1620327445287-1bb761ae1e5e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="tender company logo"
          />          
        </Link>
        <div className="mt-4 px-5 pb-5">
          <Link to="#">
            <h5 className="text-2xl tracking-tight text-slate-900 my-2 font-bold">
              {name}
            </h5>
          </Link>
          <div>
          <h5 className="text-2xl tracking-tight text-slate-900 my-2 font-bold">
              Category: {category}
            </h5>
          </div>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-2xl font-bold text-slate-900">Tender Amount: {tenderAmount} &#8377;</span>
            </p>            
          </div>
          <Link
            to="#"
            className="flex items-center justify-center rounded-md bg-orange-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-800 hover:bg-orange-800"
          >            
            Read More
          </Link>
        </div>
      </div>    
  );
}

export default TenderResultCard;
