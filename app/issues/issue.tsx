import React from "react";

interface IssueProps {
  id: number;
  title: string;
  complete: boolean;
  date_opened: Date;
}

const Issue = ({ id, title, complete, date_opened }: IssueProps) => {
  return (
    <div className="flex border-2 p-5 space-x-5 bg-slate-50 hover:bg-slate-100">
      <div className="border-1">{id}</div>
      <div className="w-3/4">{title}</div>
      <div className="w-1/8">{complete.toString()}</div>
      <div className="w-1/8">{date_opened.toDateString()}</div>
    </div>
  );
};

export default Issue;
