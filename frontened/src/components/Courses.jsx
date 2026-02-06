import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Backend API: GET /api/courses
        const res = await axios.get("/api/courses");
        setCourses(res.data);
      } catch (error) {
        console.error("Error fetching courses", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900 px-6 py-10">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-10">
          Our Courses 🎓
        </h1>

        {loading ? (
          <p className="text-white text-center">Loading courses...</p>
        ) : courses.length === 0 ? (
          <p className="text-gray-400 text-center">
            No courses available right now.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
              >
                <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                  {course.title}
                </h2>

                <p className="text-gray-300 mb-4">
                  {course.description}
                </p>

                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Courses;
