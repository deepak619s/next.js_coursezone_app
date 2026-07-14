import React from "react";
import CourseList from "./components/CourseList";

export const metadata = {
  title: "CourseZone",
  description: "Best CouseZone Project",
};

const page = () => {
  return (
    <div>
      <CourseList />
    </div>
  );
};

export default page;
