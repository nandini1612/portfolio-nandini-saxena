import { Navigation } from "@/components/Navigation";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="border-b-2 border-foreground pb-6 mb-12">
            <h1 className="font-serif text-5xl md:text-7xl font-black mb-4">Let's Collaborate</h1>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              Get in Touch
            </p>
          </header>

          {/* Introduction */}
          <div className="mb-12 border-2 border-foreground p-8 bg-card">
            <p className="text-foreground text-lg leading-relaxed mb-4">
              I am always interested in discussing <strong>Data Science</strong>, <strong>Model Robustness</strong>, and <strong>Tech Community Building</strong>.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              I am currently seeking <strong>Summer 2026 Internships (June–July)</strong> in Data Science or Machine Learning/AI or Research. Whether you are a startup looking for end-to-end prototyping or a lab focused on algorithmic research, I'd love to chat.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6 mb-12">
            <div className="border border-border p-6 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h2 className="font-serif text-xl font-bold mb-2">Email</h2>
                  <a
                    href="mailto:nandinisaxenawork@gmail.com"
                    className="text-accent hover:underline"
                  >
                    nandinisaxenawork@gmail.com
                  </a>
                  <p className="text-muted-foreground text-sm mt-2">
                    Best for professional inquiries and detailed discussions.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border p-6 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <Linkedin className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h2 className="font-serif text-xl font-bold mb-2">LinkedIn</h2>
                  <a
                    href="https://linkedin.com/in/nandini-saxena1111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    linkedin.com/in/nandini-saxena1111
                  </a>
                  <p className="text-muted-foreground text-sm mt-2">
                    Connect for professional networking and updates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div className="border-t-2 border-foreground pt-8">
            <h2 className="font-serif text-2xl font-bold mb-6">Find Me Online</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/nandini1612"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-4 py-3 hover:border-accent hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="font-body text-sm">GitHub</span>
              </a>
              <a
                href="https://medium.com/@nandinisaxenawork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-4 py-3 hover:border-accent hover:text-accent transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                <span className="font-body text-sm">Medium</span>
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="mt-12 bg-secondary border border-border p-6">
            <h3 className="font-serif text-lg font-bold mb-4 flex items-center gap-2">
              Current Status & Logistics
            </h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="font-semibold min-w-[140px]">Internships:</span>
                <span>Actively interviewing for Summer 2026.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold min-w-[140px]">Location Preference:</span>
                <span>Open to Remote & On-site.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold min-w-[140px]">Note for German Teams:</span>
                <span>For Berlin-based roles, I have self-funded accommodation and travel already secured. I am B1 German proficient and require no relocation assistance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold min-w-[140px]">Freelance:</span>
                <span>Available for technical writing and dashboard development.</span>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Contact;
