import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManageLearningPage() {
  const [learningItems, setLearningItems] = useState([
    "Advanced Docker & Kubernetes",
    "AWS Cloud Services",
    "Infrastructure as Code (Terraform)",
    "Jenkins CI/CD Pipelines",
    "System Design & Architecture",
  ]);

  useEffect(() => {
    const savedLearning = localStorage.getItem("portfolioLearning");
    if (savedLearning) {
      setLearningItems(JSON.parse(savedLearning));
    }
  }, []);

  const handleChange = (index, value) => {
    const updatedItems = [...learningItems];
    updatedItems[index] = value;
    setLearningItems(updatedItems);
  };

  const addNewItem = () => {
    setLearningItems([...learningItems, ""]);
  };

  const removeItem = (index) => {
    const updatedItems = learningItems.filter((_, i) => i !== index);
    setLearningItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("portfolioLearning", JSON.stringify(learningItems));
    alert("Learning section saved successfully");
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white md:px-12">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl">
        <h1 className="bg-gradient-to-r from-cyan-400 to-indigo-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Manage Learning
        </h1>

        <p className="mt-3 text-slate-300">
          Update the topics shown in your Currently Learning section.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {learningItems.map((item, index) => (
            <div key={index} className="flex gap-3">
              <input
                type="text"
                value={item}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder={`Learning topic ${index + 1}`}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-lg outline-none"
              />

              <button
                type="button"
                onClick={() => removeItem(index)}
                className="rounded-2xl bg-red-500 px-5 py-3"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addNewItem}
            className="w-full rounded-2xl border border-cyan-500/30 bg-cyan-500/10 py-4 text-lg font-semibold text-cyan-300"
          >
            + Add New Topic
          </button>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-xl font-semibold"
          >
            Save Learning
          </button>
        </form>

        <div className="mt-6">
          <Link to="/admin/dashboard" className="text-cyan-400">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ManageLearningPage;