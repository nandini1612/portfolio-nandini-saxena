import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="border-b-2 border-foreground pb-6 mb-12">
            <h1 className="font-serif text-5xl md:text-7xl font-black mb-4">About Me</h1>
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">
              Who I Am & What I Do
            </p>
            <div className="bg-accent/10 border-2 border-accent p-6">
              <h2 className="font-serif text-xl font-bold mb-3">TL;DR</h2>
              <p className="text-foreground text-lg leading-relaxed">
                I analyze large datasets, build ML systems, and design end-to-end dashboards. Vice President at GDG BVP Pune and SheFi Scholar.
              </p>
            </div>
          </header>

          {/* Fast Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="border-2 border-foreground p-4 text-center">
              <p className="font-serif text-3xl font-black text-accent mb-2">50K+</p>
              <p className="text-sm uppercase tracking-wider">Records Analyzed</p>
            </div>
            <div className="border-2 border-foreground p-4 text-center">
              <p className="font-serif text-3xl font-black text-accent mb-2">100+</p>
              <p className="text-sm uppercase tracking-wider">Developers Led</p>
            </div>
            <div className="border-2 border-foreground p-4 text-center">
              <p className="font-serif text-3xl font-black text-accent mb-2">3</p>
              <p className="text-sm uppercase tracking-wider">ML Publications</p>
            </div>
            <div className="border-2 border-foreground p-4 text-center">
              <p className="font-serif text-3xl font-black text-accent mb-2">8+</p>
              <p className="text-sm uppercase tracking-wider">Years Dance Training</p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4 border-b border-border pb-2">
                Introduction
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Hi! I'm Nandini, a Computer Science student at BVP Pune with a 9.3 CGPA. I work on data science and ML projects, which basically means I spend a lot of time turning messy datasets into something that actually tells you something useful.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                My recent work involves investigating <strong>Temporal Concept Drift</strong> in financial fraud detection (proving why simple models often beat GNNs) and using <strong>Vector Autoregression</strong> to mathematically correlate fashion trends with economic volatility.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold mb-4 border-b border-border pb-2">
                Beyond The Code
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                On campus, I serve as Vice President of Google Developer Groups (GDG). It has been a crash course in leadership—managing a community of 100+ developers and organizing events is chaotic but rewarding.
              </p>
              <p className="text-foreground leading-relaxed">
                I also dance Bharatnatyam with my college team. People are always surprised when they find out I do both tech and classical dance, but honestly? The discipline and collaboration skills overlap more than you'd think. Plus, it keeps me from spending every waking hour in front of a screen. My current personal goal is reaching C2 proficiency in German before I graduate in 2027.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="border-t-2 border-foreground pt-8">
            <h2 className="font-serif text-3xl font-bold mb-6">Areas of Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border p-4">
                <h3 className="font-serif text-xl font-bold mb-3">Data Science & Machine Learning</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    End-to-end data analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    PyTorch Geometric, TensorFlow, Hugging Face
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Statistical modeling & forecasting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Feature engineering & EDA
                  </li>
                </ul>
              </div>
              <div className="border border-border p-4">
                <h3 className="font-serif text-xl font-bold mb-3">Data Engineering & Infrastructure</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    ETL pipelines & web scraping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    FastAPI, Flask, REST APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    PostgreSQL, SQLite optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Google Cloud Platform, Docker, Git
                  </li>
                </ul>
              </div>
              <div className="border border-border p-4">
                <h3 className="font-serif text-xl font-bold mb-3">Product & Leadership</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Interactive dashboards (React, Streamlit)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Data visualization & storytelling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Technical writing & public speaking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Community leadership (100+ developers)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default About;
