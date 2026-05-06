import { useEffect, useState } from "react";

function HomePage() {
  const [profile, setProfile] = useState({
    name: "Pratheesa Sureshkumaran",
    role: "Computer Systems Engineering Student",
    bio: "Building practical full stack, networking, and deployment-focused projects.",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    email: "yourmail@example.com",
    image: "/profile.jpeg",
    cv: "/cv.pdf",
  });

  const [skills, setSkills] = useState([
    { title: "Linux VMs", description: "Ubuntu Server Management", tag: "Server Admin" },
    { title: "Docker", description: "Containerization & Deployment", tag: "Containers" },
    { title: "Git Workflows", description: "Version Control & Collaboration", tag: "VCS" },
    { title: "SSH", description: "Secure Remote Access", tag: "Networking" },
    { title: "Cloud Deploy", description: "CI/CD Automation", tag: "Automation" },
    { title: "Security", description: "Best Practices & Hardening", tag: "Hardening" },
  ]);

  const [learning, setLearning] = useState([
    "Advanced Docker & Kubernetes",
    "AWS Cloud Services",
    "Infrastructure as Code (Terraform)",
    "Jenkins CI/CD Pipelines",
    "System Design & Architecture",
  ]);

  const [projects, setProjects] = useState([
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
  ]);

  const [contact, setContact] = useState({
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    email: "yourmail@example.com",
    phone: "",
    location: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const savedProfile = localStorage.getItem("portfolioProfile");
    const savedSkills = localStorage.getItem("portfolioSkills");
    const savedLearning = localStorage.getItem("portfolioLearning");
    const savedProjects = localStorage.getItem("portfolioProjects");
    const savedContact = localStorage.getItem("portfolioContact");

    if (savedProfile) setProfile(JSON.parse(savedProfile));
    if (savedSkills) setSkills(JSON.parse(savedSkills));
    if (savedLearning) setLearning(JSON.parse(savedLearning));
    if (savedProjects) setProjects(JSON.parse(savedProjects));
    if (savedContact) setContact(JSON.parse(savedContact));
  }, []);

  const getStatusColor = (status) => {
    if (status === "Completed") return "bg-green-600/30 text-green-200";
    if (status === "Upcoming") return "bg-yellow-600/30 text-yellow-200";
    return "bg-cyan-600/30 text-cyan-200";
  };

  const handleContactChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setFormStatus("");

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Message sending failed");
      }

      setFormStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormStatus("Message sending failed. Backend may not be running.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-[#020b2d] text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block px-6 py-3 rounded-full border border-cyan-500/40 text-cyan-300 mb-8">
              {profile.role}
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400 leading-tight mb-6">
              {profile.name}
            </h1>

            <p className="text-lg text-white/80 max-w-xl mb-8">
              {profile.bio}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold"
              >
                View Projects
              </a>

              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
              >
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={contact.github || profile.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
              >
                GitHub
              </a>

              <a
                href={contact.linkedin || profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href={`mailto:${contact.email || profile.email}`}
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
              >
                Email
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={profile.image}
              alt="Profile"
              className="w-full max-w-md h-[520px] object-cover rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#0c1638] to-[#1a3150] p-8 md:p-12">
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 text-center mb-12">
            DevOps & Infrastructure
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-white/80 mb-6">{skill.description}</p>
                <span className="inline-block px-5 py-2 rounded-full bg-cyan-600/30 text-cyan-200">
                  {skill.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-10">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#0c1638] to-[#1a3150] p-8 md:p-12">
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 text-center mb-12">
            Currently Learning
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {learning.map((item, index) => (
              <div
                key={index}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-xl"
              >
                • {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#0c1638] to-[#1a3150] p-8 md:p-12">
          <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 text-center mb-12">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
              >
                <div className="flex justify-between items-start gap-4 mb-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span
                    className={`px-4 py-2 rounded-lg text-sm ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-white/85 mb-6">{project.description}</p>

                <p className="text-white/60">
                  <span className="font-medium">Tech:</span> {project.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-10 pb-20">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#0c1638] to-[#1a3150] p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-10">
            Get In Touch
          </h2>

          <form onSubmit={handleContactSubmit} className="grid gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleContactChange}
              required
              className="w-full rounded-2xl bg-white/5 border border-white/10 p-5 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleContactChange}
              required
              className="w-full rounded-2xl bg-white/5 border border-white/10 p-5 outline-none"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              value={formData.message}
              onChange={handleContactChange}
              required
              className="w-full rounded-2xl bg-white/5 border border-white/10 p-5 outline-none"
            ></textarea>

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-5 text-lg font-medium disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {formStatus && (
              <p className="text-center text-cyan-300 font-medium">
                {formStatus}
              </p>
            )}
          </form>

          <div className="mt-10 text-white/70 space-y-2">
            <p>Email: {contact.email || profile.email}</p>
            {contact.phone && <p>Phone: {contact.phone}</p>}
            {contact.location && <p>Location: {contact.location}</p>}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;