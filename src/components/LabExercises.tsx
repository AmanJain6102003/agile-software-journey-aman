
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const LabExercises = () => {
  const labExercises = [
    {
      id: "lab1",
      title: "SRS Workshop",
      description:
        "Drafted a comprehensive SRS for a ridesharing application; used peer feedback to refine user stories and acceptance criteria.",
      skills: ["Requirements Engineering", "User Stories", "Documentation"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: "lab2",
      title: "UML Modeling Lab",
      description:
        "Modeled an e-commerce checkout flow with sequence and collaboration diagrams, ensuring detailed protocol design for payment services.",
      skills: ["UML", "Sequence Diagrams", "Design Communication"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      ),
    },
    {
      id: "lab3",
      title: "Design Heuristics Exercise",
      description:
        "Applied coupling and cohesion metrics to refactor a legacy codebase into well-defined modules.",
      skills: ["Refactoring", "Code Quality", "Design Patterns"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: "lab4",
      title: "COCOMO Estimation",
      description:
        "Executed Basic, Intermediate, and Detailed COCOMO analyses on sample projects; compared predicted vs. actual effort.",
      skills: ["Project Estimation", "COCOMO", "Function Points"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "lab5",
      title: "TDD and Pair Programming",
      description:
        "Developed new features for a todo application in pairs, achieving over 90% unit test coverage and practicing red-green-refactor cycles.",
      skills: ["Test-Driven Development", "Pair Programming", "Unit Testing"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "lab6",
      title: "Risk Register Activity",
      description:
        "Created a risk register for a hypothetical cloud migration project, prioritized by probability and impact, and crafted mitigation steps.",
      skills: ["Risk Management", "Mitigation Planning", "Impact Analysis"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      id: "lab7",
      title: "Release Simulation",
      description:
        "Conducted a mock beta release, gathered user feedback, managed bug triage, and scheduled a go-live event.",
      skills: ["Release Management", "User Feedback", "Beta Testing"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="lab-exercises" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Laboratory Exercises</h2>
        
        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {labExercises.map((lab, index) => (
              <AccordionItem
                key={lab.id}
                value={lab.id}
                className={cn(
                  "mb-4 overflow-hidden rounded-lg border border-gray-200 bg-white",
                  index % 2 === 0 ? "border-l-4 border-l-primary" : "border-l-4 border-l-blue-400"
                )}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                  <div className="flex items-center space-x-3 text-left">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                        index % 2 === 0 ? "bg-primary/10" : "bg-blue-400/10"
                      )}
                    >
                      {React.cloneElement(lab.icon, {
                        className: cn(
                          "h-5 w-5",
                          index % 2 === 0 ? "text-primary" : "text-blue-400"
                        ),
                      })}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{lab.title}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <div className="ml-[3.25rem] space-y-4">
                    <p className="text-gray-600">{lab.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {lab.skills.map((skill) => (
                        <span
                          key={skill}
                          className={cn(
                            "inline-block rounded-full px-3 py-1 text-sm font-medium",
                            index % 2 === 0
                              ? "bg-primary/10 text-primary"
                              : "bg-blue-400/10 text-blue-500"
                          )}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default LabExercises;
