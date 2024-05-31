import React from "react";

export default function Card(props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-96">
      <div className="flex flex-no-wrap">
        <img src={props.img} className="rounded-circle w-10 h-10" />
        <div>
          <h5 className="text-xl font-semibold px-4">{props.exam_name}</h5>
          <p className="text-gray-400 text-sm flex-wrap mb-2 px-4">
            {props.Agency}
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          className="ml-auto text-blue-400 hover:text-blue-800 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <path d="M20.137,24a2.8,2.8,0,0,1-1.987-.835L12,17.051,5.85,23.169a2.8,2.8,0,0,1-3.095.609A2.8,2.8,0,0,1,1,21.154V5A5,5,0,0,1,6,0H18a5,5,0,0,1,5,5V21.154a2.8,2.8,0,0,1-1.751,2.624A2.867,2.867,0,0,1,20.137,24ZM6,2A3,3,0,0,0,3,5V21.154a.843.843,0,0,0,1.437.6h0L11.3,14.933a1,1,0,0,1,1.41,0l6.855,6.819a.843.843,0,0,0,1.437-.6V5a3,3,0,0,0-3-3Z" />
        </svg>
      </div>
      <hr className="bg-gray-200"></hr>
      <p className="text-gray-700 text-base pl-10 flex-nowrap">
        <div className="flex flex-nowrap pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M12,17a4,4,0,1,1,4-4A4,4,0,0,1,12,17Zm6,4a3,3,0,0,0-3-3H9a3,3,0,0,0-3,3v3H18ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8Zm0,5A5.968,5.968,0,0,1,7.537,9H3a3,3,0,0,0-3,3v3H6.349A5.971,5.971,0,0,1,6,13Zm11.651,2H24V12a3,3,0,0,0-3-3H16.463a5.952,5.952,0,0,1,1.188,6Z" />
          </svg>
          <p className="flex-nowrap pl-4">{props.No_of_participants}</p>
        </div>
        <div className="flex flex-nowrap py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M21,6H5c-.859,0-1.672-.372-2.235-.999,.55-.614,1.349-1.001,2.235-1.001H23c1.308-.006,1.307-1.995,0-2H5C2.239,2,0,4.239,0,7v10c0,2.761,2.239,5,5,5H21c1.657,0,3-1.343,3-3V9c0-1.657-1.343-3-3-3Zm-1,9c-1.308-.006-1.308-1.994,0-2,1.308,.006,1.308,1.994,0,2Z" />
          </svg>
          <p className="flex-nowrap pl-4">{props.Fees}</p>
        </div>
        <div className="flex justify-items-start pt-2">
          <p className="border border-solid border-2 border-gray-400 rounded-lg mx-2 px-2 text-sm">
            Engineering
          </p>
          <p className="border border-solid border-2 border-gray-400 rounded-lg mx-2 px-2 text-sm">
            IIT
          </p>
          <p className="border border-solid border-2 border-gray-400 rounded-lg mx-2 px-2 text-sm">
            PCM
          </p>
        </div>

        <div className="text-right pr-4 pt-2">
          <a href="/info" className="text-blue-500 text-sm">
            View Details
          </a>
        </div>
      </p>
    </div>
  );
}
