
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="mb-4 text-lg font-semibold text-gray-700">
          Software Engineering & Project Management Portfolio
        </h3>
        
        <p className="mb-6 text-gray-600">
          Aman Jain | RA2211003010630 | CSC303J
          <br />
          SRM Institute of Science and Technology
        </p>
        
        <div className="flex justify-center space-x-4">
          <a
            href="#about"
            className="text-gray-500 transition-colors hover:text-primary"
          >
            About
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="#course-content"
            className="text-gray-500 transition-colors hover:text-primary"
          >
            Course Content
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="#lab-exercises"
            className="text-gray-500 transition-colors hover:text-primary"
          >
            Lab Exercises
          </a>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>&copy; {currentYear} Aman Jain. All rights reserved.</p>
          <p className="mt-1">
            Created for Software Engineering and Project Management (CSC303J) Course Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
