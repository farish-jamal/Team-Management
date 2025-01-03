import React from "react";
import ProjectSection from "./ProjectSection";
import TeamMember from "./TeamMember";
import TimeSection from "./TimeSection";
import { Button } from "./ui/button";

interface Project {
  name: string;
  active: boolean;
  avatar: string;
}
interface TeamMemberProps {
  name: string;
  status: string;
  time: string;
  avatar: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    { name: "Piper Enterprise", active: true, avatar: "🟠" },
    { name: "Web platform", active: false, avatar: "🟡" },
    { name: "Mobile Loop", active: false, avatar: "🟡" },
    { name: "Wiro Mobile App", active: false, avatar: "🟡" },
  ];

  const teamMembers: TeamMemberProps[] = [
    { name: "Karen Smith", status: "Online", time: "08:23:26", avatar: "🟠" },
    { name: "Steve McConnell", status: "Online", time: "12:04:35", avatar: "🟡" },
    { name: "Sarah Green", status: "Offline", time: "06:12:52", avatar: "🟣" },
    { name: "Bred Smith", status: "Offline", time: "11:03:48", avatar: "🟢" },
    { name: "Alice Cornell", status: "Online", time: "05:44:16", avatar: "🔵" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-sm mx-auto bg-white overflow-hidden">
        <ProjectSection projects={projects} />
        <TeamMember teamMembers={teamMembers} />
        <TimeSection />
        <div className="p-2 mt-4">
          <Button className="w-full">+ Add Project</Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
