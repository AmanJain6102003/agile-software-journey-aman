
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Student Info */}
          <Card className="highlight-card">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              
              <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
                Student Details
              </h3>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">Name:</span> Aman Jain
                </p>
                <p>
                  <span className="font-semibold">Section:</span> J1
                </p>
                <p>
                  <span className="font-semibold">Registration Number:</span> RA2211003010630
                </p>
                <p>
                  <span className="font-semibold">Program:</span> B.Tech., Computer Science and Engineering (3rd Year, SRM IST)
                </p>
              </div>
              
              <div className="mt-4 text-gray-600">
                <p>
                  An enthusiastic third-year CSE student, I have actively engaged with course concepts, 
                  applied practical lab exercises, and leveraged insights from Dr. R. Yamini's mentorship 
                  to deepen my understanding of software engineering processes.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Faculty Info */}
          <Card className="highlight-card">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-blue-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
              
              <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
                Faculty In-Charge
              </h3>
              
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">Name:</span> Dr. R. Yamini
                </p>
                <p>
                  <span className="font-semibold">Position:</span> Assistant Professor
                </p>
                <p>
                  <span className="font-semibold">Department:</span> Computing Technologies
                </p>
                <p>
                  <span className="font-semibold">Course Title:</span> Software Engineering and Project Management (CSC303J)
                </p>
                <p>
                  <span className="font-semibold">Course Duration:</span> January 2025 – April 2025
                </p>
              </div>
              
              <div className="mt-4 text-gray-600">
                <p>
                  Dr. R. Yamini has guided this course with her extensive expertise in software process 
                  improvement and project leadership, bringing real-world case studies on agile transformations, 
                  leading interactive workshops on risk management, and mentoring students through lab exercises.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <Card className="highlight-card">
            <CardContent className="p-6">
              <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
                Course Overview
              </h3>
              
              <p className="text-gray-600">
                The Software Engineering and Project Management course provides a comprehensive exploration
                of principles, methodologies, and tools essential for delivering high-quality software systems on
                schedule and within budget. Combining theoretical frameworks with practical lab sessions, the
                course emphasizes collaboration, iterative development, and risk-aware decision-making
                throughout the software life cycle.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
