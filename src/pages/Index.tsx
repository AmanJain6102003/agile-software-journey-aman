
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CourseContent from "@/components/CourseContent";
import LabExercises from "@/components/LabExercises";
import KeyLearnings from "@/components/KeyLearnings";
import FutureApplications from "@/components/FutureApplications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <CourseContent />
      <LabExercises />
      <KeyLearnings />
      <FutureApplications />
      <Footer />
    </div>
  );
};

export default Index;
