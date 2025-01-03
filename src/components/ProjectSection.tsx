interface Project {
 name: string;
 avatar: string;
}

interface ProjectSectionProps {
 projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-700 mb-3">Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 rounded-lg mb-2 bg-gray-50 shadow-sm"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-3">{project.avatar}</span>
              <div>
                <h3 className="text-sm font-medium text-gray-700">
                  {project.name}
                </h3>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414L9.586 4l1.414 1.414L7.414 9h8.172a1 1 0 110 2H7.414l3.586 3.586L9.586 16l-4.293-4.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSection;
