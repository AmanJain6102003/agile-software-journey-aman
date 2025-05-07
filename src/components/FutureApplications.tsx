
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const FutureApplications = () => {
  const applications = [
    {
      title: "Enterprise Project Leadership",
      description:
        "Guiding cross-functional teams using Scrum ceremonies, sprint planning, and retrospectives to drive continuous improvement.",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
    },
    {
      title: "Architectural Governance",
      description:
        "Leveraging design patterns and architectural decision records (ADRs) to document and justify technology choices.",
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
    },
    {
      title: "DevOps Integration",
      description:
        "Embedding automated testing, linting, and security scans into CI/CD workflows to accelerate safe deployments.",
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
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
    },
    {
      title: "Strategic Risk Oversight",
      description:
        "Maintaining dynamic risk dashboards and holding risk review boards to preemptively address emerging issues.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
      iconColor: "text-amber-600",
      iconBg: "bg-amber-100",
    },
    {
      title: "Sustainable Maintenance",
      description:
        "Planning for software evolution with modular designs and clear maintenance handbooks, reducing technical debt over time.",
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
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      iconColor: "text-red-600",
      iconBg: "bg-red-100",
    },
  ];

  return (
    <section id="future-applications" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Future Applications</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, index) => (
            <Card
              key={index}
              className={`highlight-card overflow-hidden border-none ${app.bgColor}`}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-start space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${app.iconBg}`}
                  >
                    {React.cloneElement(app.icon, {
                      className: `h-6 w-6 ${app.iconColor}`,
                    })}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800">{app.title}</h3>
                </div>
                
                <p className="text-gray-600">{app.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12">
          <Card className="highlight-card bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Conclusion</h3>
              
              <p className="text-lg text-gray-600">
                Through a blend of theoretical foundations and immersive labs, this course has instilled a
                disciplined yet adaptable mindset for software delivery. I am now equipped with the
                methodologies, tools, and collaborative skills to lead and execute software projects effectively,
                ensuring quality, stakeholder satisfaction, and sustained value over the software's lifetime.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FutureApplications;
