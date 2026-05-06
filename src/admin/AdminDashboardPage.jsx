import { Link } from "react-router-dom";

function AdminDashboard() {
  const cards = [
    {
      title: "Manage Profile",
      desc: "Edit your name, bio, links, image, and CV.",
      path: "/admin/profile",
    },
    {
      title: "Manage Skills",
      desc: "Edit your skills cards shown on homepage.",
      path: "/admin/skills",
    },
    {
      title: "Manage Learning",
      desc: "Update your currently learning section.",
      path: "/admin/learning",
    },
    {
      title: "Manage Projects",
      desc: "Add and edit your portfolio projects.",
      path: "/admin/projects",
    },
    {
      title: "Manage Contact",
      desc: "Update your contact details.",
      path: "/admin/contact",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020b2d] text-white px-6 py-10 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-cyan-400">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.path}
              className="bg-[#101936] border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition duration-300 shadow-lg"
            >
              <p className="text-sm text-cyan-300 mb-2">Dashboard Section</p>
              <h2 className="text-3xl font-bold mb-3">{card.title}</h2>
              <p className="text-white/80">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;