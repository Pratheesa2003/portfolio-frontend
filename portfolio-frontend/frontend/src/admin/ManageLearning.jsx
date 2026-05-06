import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const defaultLearning = [
  "Advanced Docker & Kubernetes",
  "AWS Cloud Services",
  "Infrastructure as Code (Terraform)",
  "Jenkins CI/CD Pipelines",
  "System Design & Architecture",
];

function ManageLearning() {
  const [learning, setLearning] = useState(defaultLearning);

  useEffect(() => {
    const savedLearning = localStorage.getItem("portfolioLearning");
    if (savedLearning) {
      setLearning(JSON.parse(savedLearning));
    }
  }, []);

  const handleChange = (index, value) => {
    const updatedLearning = [...learning];
    updatedLearning[index] = value;
    setLearning(updatedLearning);
  };

  const addLearning = () => {
    setLearning([...learning, ""]);
  };

  const removeLearning = (index) => {
    const updatedLearning = learning.filter((_, i) => i !== index);
    setLearning(updatedLearning);
  };

  const handleSave = () => {
    localStorage.setItem("portfolioLearning", JSON.stringify(learning));
    alert("Learning section saved successfully!");
  };

  return (
    <div className="min-h-screen bg-[#020b2d] text-white px-6 py-10 md:px-16">
      <div className="max-w-6xl mx-auto bg-[#101936] rounded-3xl p-8 border border-white/10">
        <h1 className="text-5xl font-bold text-cyan-400 mb-3">
          Manage Learning
        </h1>
        <p className="text-white/80 mb-8">
          Update your currently learning section.
        </p>

        <div className="space-y-4">
          {learning.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 items-start md:items-center"
            >
              <input
                type="text"
                placeholder={`Learning item ${index + 1}`}
                value={item}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-full p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
              />

              <button
                onClick={() => removeLearning(index)}
                className="px-5 py-3 rounded-xl bg-red-500 hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={addLearning}
            className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20"
          >
            + Add Learning Item
          </button>

          <button
            onClick={handleSave}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold"
          >
            Save Learning
          </button>
        </div>

        <Link to="/admin/dashboard" className="inline-block mt-8 text-cyan-400">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default ManageLearning;