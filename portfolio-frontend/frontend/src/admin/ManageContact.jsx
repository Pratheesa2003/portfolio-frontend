import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const defaultContact = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  email: "yourmail@example.com",
  phone: "",
  location: "",
};

function ManageContact() {
  const [contact, setContact] = useState(defaultContact);

  useEffect(() => {
    const savedContact = localStorage.getItem("portfolioContact");
    if (savedContact) {
      setContact(JSON.parse(savedContact));
    }
  }, []);

  const handleChange = (field, value) => {
    setContact({ ...contact, [field]: value });
  };

  const handleSave = () => {
    localStorage.setItem("portfolioContact", JSON.stringify(contact));
    alert("Contact details saved successfully!");
  };

  return (
    <div className="min-h-screen bg-[#020b2d] text-white px-6 py-10 md:px-16">
      <div className="max-w-6xl mx-auto bg-[#101936] rounded-3xl p-8 border border-white/10">
        <h1 className="text-5xl font-bold text-cyan-400 mb-3">
          Manage Contact
        </h1>
        <p className="text-white/80 mb-8">Update your contact details.</p>

        <input
          type="text"
          placeholder="GitHub link"
          value={contact.github}
          onChange={(e) => handleChange("github", e.target.value)}
          className="w-full mb-4 p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
        />

        <input
          type="text"
          placeholder="LinkedIn link"
          value={contact.linkedin}
          onChange={(e) => handleChange("linkedin", e.target.value)}
          className="w-full mb-4 p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          value={contact.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full mb-4 p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
        />

        <input
          type="text"
          placeholder="Phone number"
          value={contact.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full mb-4 p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
        />

        <input
          type="text"
          placeholder="Location"
          value={contact.location}
          onChange={(e) => handleChange("location", e.target.value)}
          className="w-full mb-4 p-4 rounded-2xl bg-[#0a1638] border border-white/10 outline-none"
        />

        <button
          onClick={handleSave}
          className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold"
        >
          Save Contact
        </button>

        <Link to="/admin/dashboard" className="inline-block mt-8 text-cyan-400">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default ManageContact;