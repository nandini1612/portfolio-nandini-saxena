import { Navigation } from "@/components/Navigation";

const activities = [
  {
    category: "Professional Organizations",
    items: [
      {
        title: "Google Developer Groups BVP Pune",
        role: "Vice President | 2025-Present",
        description: "Leading technical community initiatives, organizing workshops, and managing a team of organizers. Fostering collaboration among 600+ developers and tech enthusiasts.",
      },
      {
        title: "Null Student Chapter",
        role: "Head of Public Relations | March 2025 - October 2025",
        description: "Managed external communications and strategic partnerships for the cybersecurity-focused student organization.",
      },
      {
        title: "SheFi",
        role: "Scholar | October 2025 - Present",
        description: "Participating in web3 education program, learning about blockchain technology and decentralized finance ecosystems.",
      },
    ],
  },
  {
    category: "Volunteer & Community Service",
    items: [
      {
        title: "OpportYouNity",
        role: "Founder | January 2022 - October 2023",
        description: "Founded an organization connecting youth with opportunities in workshops, internships, and extracurricular activities. Built a Discord community for peer support and included mental health resources.",
      },
      {
        title: "Fundraising For The Girl Child",
        role: "Director of Public Relations | July 2021 - August 2023",
        description: "Managed partnerships with aligned organizations. Led projects teaching girls specific subjects and collecting supplies for orphans.",
      },
      {
        title: "Fundraising For The Girl Child",
        role: "Public Speaking Tutor | August - December 2021",
        description: "Tutored 7th graders in public speaking skills, helping them build confidence and communication abilities.",
      },
      {
        title: "I.I.M.U.N - findabed_in",
        role: "Data Collection Volunteer | May 2021",
        description: "Verified and collected quarantine center data during the pandemic to help people find available beds.",
      },
      {
        title: "Girls With Wisdom",
        role: "Mentor | April 2021 - April 2022",
        description: "Mentored high school girls in math and science using personalized teaching methods to make complex concepts accessible.",
      },
    ],
  },
  {
    category: "Personal Interests",
    items: [
      {
        title: "RAQS - College Dance Team",
        role: "Bharatnatyam Dancer | 2023-Present",
        description: "Active member of college dance team, performing at cultural events. Dance has taught me discipline, teamwork, and the art of storytelling through movement.",
      },
      {
        title: "Languages",
        role: "Multilingual Explorer",
        description: "Fluent in English and Hindi (native). Currently learning German (B1 in progress).",
      },
      {
        title: "Creative Pursuits",
        role: "Tech + Creativity",
        description: "Exploring the intersection of technology and creativity through design, writing, and data visualization.",
      },
    ],
  },
];

const Extracurricular = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="border-b-2 border-foreground pb-6 mb-12">
            <h1 className="font-serif text-5xl md:text-7xl font-black mb-4">
              Extracurricular
            </h1>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              Beyond the Professional
            </p>
          </header>

          {/* Introduction */}
          <div className="mb-12 border border-border p-6 bg-secondary">
            <p className="text-foreground text-lg leading-relaxed">
              Beyond code and data, I'm deeply involved in tech community leadership, volunteer work, 
              and classical dance. These activities shape my perspective, build diverse skills, and 
              remind me that the best solutions come from understanding people, not just problems.
            </p>
          </div>

          {/* Activities Sections */}
          <div className="space-y-12">
            {activities.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="font-serif text-3xl font-black mb-6 pb-3 border-b-2 border-accent">
                  {section.category}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border border-border p-6 hover:border-accent transition-colors"
                    >
                      <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                        {item.role}
                      </p>
                      <p className="text-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <div className="mt-12 border-t-2 border-foreground pt-8">
            <div className="bg-card border border-border p-8">
              <h2 className="font-serif text-2xl font-bold mb-4">Beyond the Resume</h2>
              <p className="text-foreground leading-relaxed">
                These experiences have taught me that leadership isn't just about technical expertise—it's 
                about empathy, communication, and creating spaces where others can thrive. Whether I'm 
                organizing a hackathon, tutoring students, or performing on stage, the skills I build 
                translate directly to building better software and stronger teams.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Extracurricular;
