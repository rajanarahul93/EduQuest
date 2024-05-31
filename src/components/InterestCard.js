import React from "react";

export default function InterestCard() {
  return (
    <div className="flex flex-wrap pt-2">
      <div className="flex flex-no-wrap">
        <img src="../jee.jpg" className="rounded-circle w-10 h-10" />
        <div>
          <h5 className="text-md font-semibold px-4">JEE Mains 2023</h5>
          <p className="text-gray-400 text-sm flex-wrap mb-2 px-4">
            National Testing Agency
          </p>
        </div>
      </div>
      <hr className="bg-gray-200"></hr>
      <p className="text-gray-700 text-base pl-6 flex-nowrap">
        <div className="flex flex-nowrap pt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="15"
            height="15"
          >
            <path d="M12,17a4,4,0,1,1,4-4A4,4,0,0,1,12,17Zm6,4a3,3,0,0,0-3-3H9a3,3,0,0,0-3,3v3H18ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8Zm0,5A5.968,5.968,0,0,1,7.537,9H3a3,3,0,0,0-3,3v3H6.349A5.971,5.971,0,0,1,6,13Zm11.651,2H24V12a3,3,0,0,0-3-3H16.463a5.952,5.952,0,0,1,1.188,6Z" />
          </svg>
          <p className="flex-nowrap pl-4 text-sm">More than 20 lakh people</p>
        </div>
        <div className="flex flex-nowrap py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="15"
            height="15"
          >
            <path d="M21,6H5c-.859,0-1.672-.372-2.235-.999,.55-.614,1.349-1.001,2.235-1.001H23c1.308-.006,1.307-1.995,0-2H5C2.239,2,0,4.239,0,7v10c0,2.761,2.239,5,5,5H21c1.657,0,3-1.343,3-3V9c0-1.657-1.343-3-3-3Zm-1,9c-1.308-.006-1.308-1.994,0-2,1.308,.006,1.308,1.994,0,2Z" />
          </svg>
          <p className="flex-nowrap pl-4 text-sm">
            Fees: Rs. 650 (General), Rs. 325 (SC/ST)
          </p>
        </div>
      </p>
    </div>
  );
}
