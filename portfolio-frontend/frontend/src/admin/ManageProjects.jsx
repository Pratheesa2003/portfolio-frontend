import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const defaultProjects = [
  {
    title: "Portfolio Management System",
    description:
      "A full stack portfolio website with admin dashboard to update profile, skills, projects, and learning content dynamically.",
    tech: "React, Tailwind, Spring Boot, MySQL",
    status: "Ongoing",
  },
  {
    title: "Virtual Network Lab",
    description:
      "Built Linux virtual machines to practice IP addressing, SSH connectivity, and network troubleshooting.",
    tech: "Ubuntu, VirtualBox, SSH, Networking",
    status: "Completed",
  },
  {
    title: "DevOps Learning Tracker",
    description:
      "A personal section to track DevOps and cloud topics and move them into real projects.",
    tech: "React, UI Design",
    status: "Upcoming",
  },
];

function ManageProjects() {
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    const savedProjects = localStorage.getItem("portfolioProjects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const handleChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        description: "",
        tech: "",
        status: "Ongoing",
      },
    ]);
  };

  const removeProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleSave = () => {
    localStorage.setItem("portfolioProjects", JSON.stringify(projects));
    alert("Projects saved successfully!");
  };

  return (
    <div className="min-h-screen bg-[#020b2d] text-white px-6 py-10 md:px-16">
      <div className="max-w-6xl mx-auto bg-[#101936] rounded-3xl p-8 border border-white/10">
        <h1 className="text-5xl font-bold text-cyan-400 mb-3">
          Manage Projects
        </h1>
        <p className="text-white/80 mb-8">Add and update your projects.</p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl p-5 bg-[#0b1533]"
            >
              <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
                Project {index + 1}
              </h2>

              <input
                type="text"
                placeholder="Project title"
                value={project.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                className="w-full mb-4 p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
              />

              <textarea
                placeholder="Project description"
                value={project.description}
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
                rows="4"
                className="w-full mb-4 p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
              />

              <input
                type="text"
                placeholder="Tech stack"
                value={project.tech}
                onChange={(e) => handleChange(index, "tech", e.target.value)}
                className="w-full mb-4 p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
              />

              <select
                value={project.status}
                onChange={(e) => handleChange(index, "status", e.target.value)}
                className="w-full mb-4 p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
              >
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Upcoming">Upcoming</option>
              </select>

              <button
                onClick={() => removeProject(index)}
                className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={addProject}
            className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20"
          >
            + Add Project
          </button>

          <button
            onClick={handleSave}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold"
          >
            Save Projects
          </button>
        </div>

        <Link to="/admin/dashboard" className="inline-block mt-8 text-cyan-400">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default ManageProjects;