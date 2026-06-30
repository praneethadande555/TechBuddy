export default function TechBuddy() {
  const articles = [
    {
      title: "Introduction to Microsoft Fabric",
      category: "Microsoft Fabric",
      level: "Beginner",
    },
    {
      title: "DP-800 Certification Study Guide",
      category: "Certification",
      level: "Intermediate",
    },
    {
      title: "Getting Started with Sigma Computing",
      category: "Analytics",
      level: "Beginner",
    },
    {
      title: "Azure Data Factory Fundamentals",
      category: "Azure",
      level: "Beginner",
    },
    {
      title: "Python Automation for Data Professionals",
      category: "Python",
      level: "Intermediate",
    },
    {
      title: "Microsoft Copilot Productivity Guide",
      category: "AI & Copilot",
      level: "Beginner",
    },
  ];

  const technologies = [
    "Microsoft Fabric",
    "Azure",
    "AI & Copilot",
    "Sigma Computing",
    "Power BI",
    "Python",
    "SQL",
    "Data Engineering",
    "Cloud Architecture",
  ];

  const certifications = [
    "DP-800 Data Engineering",
    "DP-600 Microsoft Fabric",
    "PL-300 Power BI Analyst",
    "AZ-900 Azure Fundamentals",
    "AI-900 AI Fundamentals",
    "Microsoft Applied Skills",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">
            TechBuddy
          </h1>

          <div className="hidden md:flex gap-8 text-slate-300">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Tutorials</a>
            <a href="#" className="hover:text-white">Certifications</a>
            <a href="#" className="hover:text-white">Projects</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 text-sm mb-6">
            Learn • Build • Certify • Grow
          </span>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            TechBuddy
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Master Microsoft Fabric, Azure, AI & Copilot, Data Analytics,
            Python, and Cloud Technologies through practical tutorials,
            certification guides, real-world projects, and learning roadmaps.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl font-medium">
              Explore Tutorials
            </button>

            <button className="border border-slate-700 hover:border-slate-500 px-8 py-3 rounded-xl font-medium">
              Certification Hub
            </button>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Explore Technologies
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500 transition"
            >
              <h3 className="text-lg font-semibold">{tech}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* TUTORIALS */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Latest Tutorials
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500 transition"
            >
              <div className="text-sm text-blue-400 mb-2">
                {article.category}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {article.title}
              </h3>

              <p className="text-slate-400">
                Difficulty: {article.level}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Certification Hub
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-slate-800 p-6 rounded-2xl text-center hover:bg-slate-700 transition"
              >
                <p className="font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-8">
          About TechBuddy
        </h2>

        <p className="text-slate-400 leading-8 text-lg">
          TechBuddy is a modern technology learning platform dedicated to helping
          professionals, students, and technology enthusiasts master cloud,
          data, analytics, AI, and software technologies. From Microsoft Fabric
          tutorials and certification preparation to Python automation,
          Azure solutions, and emerging technology insights, TechBuddy simplifies
          complex topics into practical learning experiences.
        </p>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold">
          Stay Updated
        </h2>

        <p className="mt-4 text-slate-400">
          Get new tutorials, certification guides, project ideas,
          and technology insights delivered to your inbox.
        </p>

        <div className="mt-8 flex justify-center flex-wrap gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-xl text-black w-80"
          />

          <button className="bg-blue-600 px-6 py-3 rounded-xl">
            Subscribe
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500">
            © 2026 TechBuddy • Learn. Build. Certify. Grow.
          </p>

          <div className="mt-4 flex justify-center gap-6 text-slate-400">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}