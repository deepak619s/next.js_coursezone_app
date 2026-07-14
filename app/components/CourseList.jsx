"use client";

import React from "react";

import {
  FaCloudDownloadAlt,
  FaCode,
  FaJava,
  FaPhp,
  FaPython,
  FaReact,
  FaServer,
} from "react-icons/fa";

import { courses, courseDetails } from "../data";
import Link from "next/link.js";

const CourseList = () => {
  return (
    <div>
      <h1 className="text-center text-light my-4">
        Welcome To CourseZone - Following Courses We Offer
      </h1>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row w-100 justify-content-center">
          {courses.map((curElem) => (
            <div key={curElem.id} className="col-md-4 mb-4">
              <div
                className="card p-4 text-center"
                style={{
                  backgroundColor: "#2F2F3F",
                  borderRadius: "12px",
                  maxWidth: "300px",
                  width: "100%",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0px)")
                }
              >
                <div className="display-4 mb-3 text-light">{curElem.icon}</div>
                <h5 className="card-title text-light">{curElem.title}</h5>
                <Link
                  href={curElem.id}
                  className="btn btn-outline-warning mt-4"
                >
                  Explore Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
