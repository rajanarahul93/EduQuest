import React from "react";
import Card from "../components/Card";
import recent_exams from "../recent_exams.js";
import recommend_exams from "../recommend_exams.js";

export default function homePage() {
  var items = [
    "Engineering",
    "IIT-JEE Advanced",
    "JEE Mains",
    "BITSAT",
    "GATE",
    "AIIMS",
    "PCM",
  ];

  return (
    <>
    <br />
      <main className="w-3/4 mx-auto">
        <div className="grid grid-cols-2">
          <h6 className="text-bold pb-5">Recommended Exams</h6>
          <a className="text-bold text-right pb-5 text-indigo-500" href="#">
            See all
          </a>
        </div>

        <div class="container mx-auto flex overflow-x-auto pb-10 hide-scroll-bar">
          <div class="flex space-x-6 flex-nowrap">
            {recommend_exams.map((exam) => (
              <Card
                exam_name={exam.exam_name}
                Agency={exam.Agency}
                No_of_participants={exam.No_of_participants}
                Fees={exam.Fees}
                img={exam.img}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2">
          <h6 className="text-bold pb-5">Popular Exams</h6>
          <a className="text-bold text-right pb-5 text-indigo-500" href="/info">
            See all
          </a>
        </div>
        <div className="flex pb-5">
          {items.map((item) => (
            <p className="border border-solid border-2 border-blue-400 rounded-3xl mx-2 px-4 py-2 text-sm text-indigo-500">
              {item}
            </p>
          ))}
        </div>
        <div className="container mx-auto flex overflow-x-auto pb-10 hide-scroll-bar">
          <div className="flex space-x-6 flex-nowrap">
            {recent_exams.map((exam) => (
              <Card
                exam_name={exam.exam_name}
                Agency={exam.Agency}
                No_of_participants={exam.No_of_participants}
                Fees={exam.Fees}
                img={exam.img}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
