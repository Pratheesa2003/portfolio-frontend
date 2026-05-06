import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const defaultSkills = [
  { title: "Linux VMs", description: "Ubuntu Server Management", tag: "Server Admin" },
  { title: "Docker", description: "Containerization & Deployment", tag: "Containers" },
  { title: "Git Workflows", description: "Version Control & Collaboration", tag: "VCS" },
  { title: "SSH", description: "Secure Remote Access", tag: "Networking" },
  { title: "Cloud Deploy", description: "CI/CD Automation", tag: "Automation" },
  { title: "Security", description: "Best Practices & Hardening", tag: "Hardening" },
];

function ManageSkills() {
  const [skills, setSkills] = useState(defaultSkills);

  useEffect(() => {
    const savedSkills = localStorage.getItem("portfolioSkills");
    if (savedSkills) {
      setSkills(JSON.parse(savedSkills));
    }
  }, []);

  const handleChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, { title: "", description: "", tag: "" }]);
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleSave = () => {
    localStorage.setItem("portfolioSkills", JSON.stringify(skills));
    alert("Skills saved successfully!");
  };

  return (
    <div className="min-h-screen bg-[#020b2d] text-white px-6 py-10 md:px-16">
      <div className="max-w-6xl mx-auto bg-[#101936] rounded-3xl p-8 border border-white/10">
        <h1 className="text-5xl font-bold text-cyan-400 mb-3">Manage Skills</h1>
        <p className="text-white/80 mb-8">Update your homepage skills cards.</p>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl p-5 bg-[#0b1533]"
            >
              <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
                Skill {index + 1}
              </h2>

              <input
                type="text"
                placeholder="Skill title"
                value={skill.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                className="w-full mb-4 p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
              />

              <input
                type="text"
                placeholder="Description"
                value={skill.description}
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
                className="w-full mb-4 p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
              />

              <input
                type="text"
                placeholder="Tag"
                value={skill.tag}
                onChange={(e) => handleChange(index, "tag", e.target.value)}
                className="w-full mb-4 p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
              />

              <button
                onClick={() => removeSkill(index)}
                className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={addSkill}
            className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20"
          >
            + Add Skill
          </button>

          <button
            onClick={handleSave}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold"
          >
            Save Skills
          </button>
        </div>

        <Link to="/admin/dashboard" className="inline-block mt-8 text-cyan-400">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default ManageSkills;