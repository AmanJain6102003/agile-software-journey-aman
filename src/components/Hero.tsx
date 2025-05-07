
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 pt-16"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c')] bg-cover bg-center opacity-5"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-primary md:text-6xl">
          Software Engineering & <br /> Project Management
        </h1>
        <p className="mb-8 text-xl font-medium text-gray-700">
          Course Portfolio | CSC303J | January 2025 – April 2025
        </p>
        <div className="mb-12">
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A comprehensive exploration of software engineering principles,
            methodologies, and tools essential for delivering high-quality
            software systems
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Portfolio
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => document.getElementById("course-content")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Course Content
          </Button>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <p className="mb-2 font-medium text-gray-500">Scroll to learn more</p>
          <div className="animate-bounce rounded-full bg-white p-2 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
