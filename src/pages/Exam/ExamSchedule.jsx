import React from "react";
import { examTiming } from "../../data/ExamTimiing";

function ExamSchedule() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center pt-10 pb-4">
        Fee Voucher
      </h1>
      <div className="w-[90%] m-auto flex flex-col gap-5">
        {examTiming.map((value, index) => {
          return (
            <div
              key={index}
              className=" px-2 py-2   shadow-[0_5px_20px_-10px_rgba(0,0,0,0.3)] border-2 "
            >
              <div>
                <h3 className="font-semibold">
                  Class {value.class} - {value.subject}
                </h3>
                <p className="text-black/80">Date : {value.date}</p>
                <p className="text-black/80">
                  Start Time: {value.starttime} | End Time: {value.endtime}
                </p>
                <div className="mt-2">
                  <button className="px-2 py-1 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Veiw Details now{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExamSchedule;
