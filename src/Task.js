import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import React from "react";

const Task = ({ taskObj, onComplete }) => {

  const distance = formatDistanceToNow(

    new Date(taskObj.deadline), {
    addSuffix: true,
    locale: tr,
  }
  );

  const isDeadlineClose = differenceInDays(
    new Date(taskObj.deadline),
    new Date()
  ) <= 3;


  return (
    <div className="bg-[#fff] shadow-md p-6 rounded leading-normal mt-4">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-sm pt-1">son teslim: <span className={isDeadlineClose ? "bg-[#ffd9d4]" : "bg-[#d3d3d8]"}>{distance}</span></div>
      <p className="text-sm pt-3 py-0 pb-2 text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-1 px-3 text-sm mr-1 mb-2 rounded-3xl border border-solid border-gray-200" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
