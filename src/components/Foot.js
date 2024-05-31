import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

export default function Foot() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 px-24 py-6 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <div className="pl-8">
              <img
                src="../logo.jpg"
                alt="Logo"
                className="w-24 px-4 h-auto"
              />
            </div>
            <div className="flex space-x-6 py-6 p-4">
            <a
                href="https://www.linkedin.com/in/vara-rahul-rajana/"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/rajanarahul93"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>

              <a
                href="https://www.instagram.com/rajanarahul7/"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
              <a
                href="https://x.com/rajanarahul7"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-1 lg:grid-cols-3">
            <div>
              <h5 className="font-semibold mb-2">About</h5>
              <ul>
                <li className="pb-2">
                  <a href="#" className="hover:underline text-sm">
                    Sitemap
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:underline text-sm">
                    Credits
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:underline text-sm">
                    Help Center
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:underline text-sm">
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Accessibility</h5>
              <ul>
                <li className="pb-2">
                  <a href="#" className="hover:underline text-sm">
                    Mobile
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:underline text-sm">
                    Marketing
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:underline text-sm">
                    Advertising
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:underline text-sm">
                    Report Issue
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Privacy Policy</h5>
              <ul>
                <li className="pb-2">
                  <a href="#" className="hover:underline text-sm">
                    Trust &amp; Safety
                  </a>
                </li>
                <li className="pb-2">
                  <a href="#" className="hover:underline text-sm">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-rows-2 justify-center">
            <a
              href="#"
              className="h-fit w-fit sm:w-fit bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="me-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">Download on the</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Mac App Store
                </div>
              </div>
            </a>
            <a
              href="#"
              className="h-fit w-fit sm:w-fit bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="me-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google-play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                ></path>
              </svg>
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">Download on the</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="border-t-2 border-gray-700 pt-4 pb-5">
          <div className="pl-12">
            <div className="w-full md:w-auto">
              <p className="text-sm text-gray-400">
                All rights reserved © 2024 EduQuest Tech Pvt. Ltd.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
                All trademarks and service marks are the properties of their
                respective owners.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}