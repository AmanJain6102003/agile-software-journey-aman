
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const CourseContent = () => {
  const [activeTab, setActiveTab] = useState("unit1");

  const units = [
    {
      id: "unit1",
      title: "Introduction to Software Engineering and Process Models",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            In the opening unit, we traced the historical evolution of software, exploring the challenges that
            gave rise to formal engineering disciplines. We examined the layered technology
            framework—hardware, tools, methods, and process—and its impact on productivity and quality.
          </p>
          
          <h4 className="text-lg font-semibold text-gray-800">Process Models</h4>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>
              <span className="font-medium">Waterfall Model:</span> Sequential phases with clear milestones; suited to stable requirements
              but rigid in change management.
            </li>
            <li>
              <span className="font-medium">Incremental Model:</span> Builds software in smaller functional slices, enabling early user
              feedback and partial delivery.
            </li>
            <li>
              <span className="font-medium">Spiral Model:</span> Risk-driven iterations combining prototyping and incremental delivery;
              emphasizes continuous risk assessment.
            </li>
            <li>
              <span className="font-medium">Agile Frameworks (Scrum, XP):</span> Adaptive planning, cross-functional teams, and frequent
              releases; promotes customer collaboration and rapid response to change.
            </li>
          </ul>
          
          <p className="text-gray-600">
            We also introduced foundational project initiation activities—charter creation, stakeholder
            identification, and scope definition—laying the groundwork for disciplined project governance.
          </p>
        </div>
      ),
    },
    {
      id: "unit2",
      title: "Requirements Engineering and Estimation",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Accurate requirements are the cornerstone of software success. This unit covered:
          </p>
          
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>
              <span className="font-medium">Requirements Classification:</span> Functional requirements (specific behaviors) vs.
              non-functional requirements (performance, usability, security), plus domain constraints.
            </li>
            <li>
              <span className="font-medium">SRS Documentation:</span> Structure, quality attributes (clarity, consistency, verifiability), and
              traceability mechanisms linking use cases to system features.
            </li>
            <li>
              <span className="font-medium">Elicitation Techniques:</span> Interviews, workshops, prototyping, and questionnaires to gather
              stakeholder needs, followed by validation sessions to resolve ambiguities.
            </li>
            <li>
              <span className="font-medium">Estimation Models:</span> We applied COCOMO I/II for macro-level cost and effort projections,
              and Function Point Analysis for size measurement. In labs, we compared LOC-based
              estimates against FP results to understand biases and calibration needs.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "unit3",
      title: "Software Design",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Building on requirements, we delved into design principles that ensure systems are maintainable,
            extensible, and cohesive:
          </p>
          
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>
              <span className="font-medium">Design Concepts:</span> Abstraction, modularity, information hiding, and separation of concerns.
            </li>
            <li>
              <span className="font-medium">Architectural Patterns:</span> Layered architecture for enterprise apps, microkernel for plugin
              extensibility, event-driven styles for reactive systems, and microservices for scalability.
            </li>
            <li>
              <span className="font-medium">UML Modeling:</span> Hands-on creation of class diagrams, sequence diagrams, component and
              deployment diagrams to document and communicate design artifacts.
            </li>
            <li>
              <span className="font-medium">User-Interface Design:</span> Heuristics for effective GUI design—consistency, feedback, error
              prevention—and prototyping with wireframes.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "unit4",
      title: "Coding Standards, Frameworks, and Testing",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            This unit focused on translating design into high-quality code:
          </p>
          
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>
              <span className="font-medium">Coding Standards:</span> Naming conventions, style guidelines (indentation, commenting), and
              automated linting for consistent codebases.
            </li>
            <li>
              <span className="font-medium">Framework Surveys:</span> Overview of popular stacks—Spring Boot for Java, Express.js for
              Node, React/Vue for frontend—and criteria for framework selection.
            </li>
            <li>
              <span className="font-medium">Peer Reviews:</span> Structured walkthroughs and inspections using checklists; roles of author,
              moderator, and recorder in code review meetings.
            </li>
            <li>
              <span className="font-medium">Testing Strategies:</span> Unit tests with JUnit or Mocha, integration tests using test harnesses,
              system tests in simulated environments, and acceptance tests in collaboration with users.
              We practiced Test-Driven Development, writing failing tests first and refactoring to green
              builds.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "unit5",
      title: "Software Release, Maintenance, and Risk Management",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            The final unit addressed post-development activities critical for long-term success:
          </p>
          
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>
              <span className="font-medium">Release Management:</span> Definition of alpha, beta, release candidate, and GA milestones;
              version numbering schemes, rollback strategies, and packaging formats.
            </li>
            <li>
              <span className="font-medium">Risk Management:</span> Development of RMMM (Risk Mitigation, Monitoring, and
              Management) plans—identifying technical, schedule, and market risks; assigning risk
              owners; defining triggers and contingency actions.
            </li>
            <li>
              <span className="font-medium">Software Maintenance:</span> Differentiating corrective (bug fixes), adaptive (platform updates),
              perfective (performance tuning), and preventive (code refactoring) activities, plus metrics
              for maintenance effort.
            </li>
            <li>
              <span className="font-medium">User Training and Support:</span> Creating training manuals, conducting workshops, and
              establishing help-desk procedures for smooth adoption.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section id="course-content" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Course Content by Unit</h2>
        
        <Tabs
          defaultValue="unit1"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="mb-6 overflow-x-auto">
            <TabsList className="inline-flex h-auto w-auto flex-nowrap space-x-2 bg-transparent p-0">
              {units.map((unit) => (
                <TabsTrigger
                  key={unit.id}
                  value={unit.id}
                  className="rounded-md border border-gray-200 bg-white px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Unit {unit.id.replace("unit", "")}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {units.map((unit) => (
            <TabsContent key={unit.id} value={unit.id}>
              <Card className="highlight-card">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold text-gray-800">
                    {unit.title}
                  </h3>
                  {unit.content}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CourseContent;
