import { Navigation } from "@/components/Navigation";

const experiences = [
  {
    year: "June 2025 - Present",
    role: "Vice President & Co-organiser",
    company: "Google Developer Groups BVP Pune",
    location: "Pune, Maharashtra, India",
    description: "Leading a 600+ member tech community, organizing technical workshops and hackathons. Managing event logistics, speaker coordination, and community engagement initiatives.",
  },
  {
    year: "October 2025 - Present",
    role: "Scholar",
    company: "SheFi",
    description: "Selected for web3 education program focusing on blockchain technology and decentralized finance.",
  },
  {
    year: "March 2025 - October 2025",
    role: "Head of Public Relations",
    company: "Null Student Chapter - Bharati Vidyapeeth",
    location: "Pune, Maharashtra, India",
    description: "Managed all external communications and partnerships for cybersecurity-focused student chapter. Coordinated with industry professionals for workshops and events.",
  },
  {
    year: "June 2025 - July 2025",
    role: "Software Development Intern",
    company: "MCarbon Tech",
    location: "Noida, Uttar Pradesh, India",
    description: "Built smart ticketing system using Spring Boot, Flask, Vue.js, Python, and PostgreSQL. Developed scalable backend services and responsive frontend interfaces.",
  },
  {
    year: "October 2023 - August 2024",
    role: "Design Team Member & Cloud Team Member",
    company: "Google Developer Student Club BVP Pune",
    description: "Designed UI/UX for club projects using Figma and Adobe XD. Programmed cloud-based applications using Google Cloud Platform for internal projects.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="border-b-2 border-foreground pb-6 mb-12">
            <h1 className="font-serif text-5xl md:text-7xl font-black mb-4">Experience</h1>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              Professional Timeline
            </p>
          </header>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 border-accent pl-6 pb-8 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-2 top-0 w-3 h-3 bg-accent rounded-full"></div>
                
                {/* Content */}
                <div className="border border-border p-6 bg-card">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h2 className="font-serif text-2xl font-bold mb-1">{exp.role}</h2>
                      <p className="font-body text-accent font-semibold">{exp.company}</p>
                      {exp.location && (
                        <p className="text-muted-foreground text-sm mt-1">{exp.location}</p>
                      )}
                    </div>
                    <span className="font-body text-sm text-muted-foreground uppercase tracking-wider bg-secondary px-3 py-1">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="border-t-2 border-foreground pt-12 mt-12">
            <h2 className="font-serif text-3xl font-bold mb-8">Education</h2>
            <div className="border border-border p-6 bg-card">
              <h3 className="font-serif text-xl font-bold mb-2">Bachelor of Technology in Computer Science and Engineering</h3>
              <p className="text-accent font-semibold mb-2">Bharati Vidyapeeth's College of Engineering, Pune</p>
              <p className="text-muted-foreground text-sm mb-3">Expected Graduation: May 2027</p>
              <div className="mb-3">
                <p className="font-semibold">CGPA: 9.3/10</p>
              </div>
              <div>
                <p className="font-semibold text-sm mb-2">Relevant Coursework:</p>
                <p className="text-foreground text-sm leading-relaxed">
                  DSA, AI, Algorithms, OS, DBMS, CN, Probability & Statistics, Calculus
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Experience;
