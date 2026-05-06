import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManageProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    bio: "",
    github: "",
    linkedin: "",
    email: "",
    image: "/profile.jpeg",
    cv: "/cv.pdf",
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem("portfolioProfile");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("portfolioProfile", JSON.stringify(profile));
    alert("Profile saved successfully");
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white md:px-12">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl">
        <h1 className="bg-gradient-to-r from-cyan-400 to-indigo-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Manage Profile
        </h1>

        <p className="mt-3 text-slate-300">
          Update your homepage profile details.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={profile.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-lg outline-none"
          />

          <input
            type="text"
            name="role"
            placeholder="Role / Title"
            value={profile.role}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-lg outline-none"
          />

          <textarea
            name="bio"
            placeholder="Short bio"
            value={profile.bio}
            onChange={handleChange}
            rows="5"
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-lg outline-none"
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub link"
            value={profile.github}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-lg outline-none"
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn link"
            value={profile.linkedin}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-lg outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={profile.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-lg outline-none"
          />

          <input
            type="text"
            name="image"
            placeholder="Image path e.g. /profile.jpeg"
            value={profile.image}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-lg outline-none"
          />

          <input
            type="text"
            name="cv"
            placeholder="CV path e.g. /cv.pdf"
            value={profile.cv}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-lg outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-xl font-semibold"
          >
            Save Profile
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

export default ManageProfilePage;