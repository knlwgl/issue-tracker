import React from "react";
import Issue from "./issue";

const IssuesPage = () => {
  const issues = [
    {
      id: 1,
      title: "Work on issue-tracker",
      complete: false,
      date_opened: new Date("01/01/2024"),
    },
    {
      id: 2,
      title: "Yeehaw chicken",
      complete: true,
      date_opened: new Date("12/01/2024"),
    },
  ];

  return (
    <main className="flex flex-col items-center p-24">
      <div>Issues Page</div>
      <p>This page will allow user to view all issues.</p>
      <div className="w-11/12 border-5 rounded-xl">
        {issues.map((item) => (
          <Issue
            key={item.id}
            id={item.id}
            title={item.title}
            complete={item.complete}
            date_opened={item.date_opened}
          />
        ))}
      </div>
    </main>
  );
};

export default IssuesPage;
