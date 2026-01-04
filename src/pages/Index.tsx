import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Hero Section - Newspaper Front Page Style */}
      <main className="container mx-auto px-4 py-16">
        {/* Masthead Banner */}
        <div className="border-y-4 border-foreground py-4 mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Volume 1 • Edition 2025
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-black tracking-tight mb-2">
            NANDINI SAXENA
          </h1>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Data Science • Machine Learning • Real-Time Analytics
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Lead Story */}
          <div className="md:col-span-2 border-2 border-foreground">
            <div className="bg-accent text-accent-foreground p-2 border-b-2 border-foreground">
              <span className="font-body text-xs uppercase tracking-widest font-bold">
                Featured Story
              </span>
            </div>
            <div className="p-8">
              <h2 className="font-serif text-4xl font-black mb-4 leading-tight">
                Researching Algorithmic Robustness & Econometrics
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                Computer Science student at BVP Pune. I focus on why models fail. From diagnosing Temporal Drift 
                in Bitcoin GNNs to forecasting economic volatility using Fashion Econometrics, I build systems 
                that prioritize robustness over hype.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 font-body text-sm uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                View My Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border border-border">
            <div className="bg-secondary p-3 border-b border-border">
              <h3 className="font-body text-xs uppercase tracking-widest font-bold">
                Quick Navigation
              </h3>
            </div>
            <div className="p-4 space-y-3">
              <Link
                to="/projects"
                className="block border-b border-border pb-3 hover:text-accent transition-colors"
              >
                <h4 className="font-serif font-bold mb-1">Projects</h4>
                <p className="text-sm text-muted-foreground">Featured work</p>
              </Link>
              <Link
                to="/writing"
                className="block border-b border-border pb-3 hover:text-accent transition-colors"
              >
                <h4 className="font-serif font-bold mb-1">Writing</h4>
                <p className="text-sm text-muted-foreground">Latest articles</p>
              </Link>
              <Link
                to="/experience"
                className="block hover:text-accent transition-colors"
              >
                <h4 className="font-serif font-bold mb-1">Experience</h4>
                <p className="text-sm text-muted-foreground">Professional timeline</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Latest Work */}
          <div className="border border-border">
            <div className="bg-muted p-3 border-b border-border">
              <h3 className="font-body text-xs uppercase tracking-widest font-bold">
                Latest Work
              </h3>
            </div>
            <div className="p-6">
              <h4 className="font-serif text-2xl font-bold mb-3">AI Financial Crime Detector</h4>
              <p className="text-foreground leading-relaxed mb-4">
                Conducted rigorous failure analysis on the Elliptic Bitcoin Dataset (~203k nodes) to evaluate model robustness under Temporal Concept Drift.
              </p>
              <Link
                to="/projects"
                className="text-accent hover:underline font-semibold text-sm uppercase tracking-wider"
              >
                View All Projects →
              </Link>
            </div>
          </div>

          {/* Recent Writing */}
          <div className="border border-border">
            <div className="bg-muted p-3 border-b border-border">
              <h3 className="font-body text-xs uppercase tracking-widest font-bold">
                Recent Writing
              </h3>
            </div>
            <div className="p-6">
              <h4 className="font-serif text-2xl font-bold mb-3">
                CNNs & Inductive Biases: Why Architecture Matters
              </h4>
              <p className="text-foreground leading-relaxed mb-4">
                A practical look at how CNNs encode assumptions like locality and translation invariance—and why choosing the right architecture matters more than just scaling model size
              </p>
              <Link
                to="/writing"
                className="text-accent hover:underline font-semibold text-sm uppercase tracking-wider"
              >
                Read More Articles →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 border-2 border-foreground bg-card p-8 text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">Let's Connect</h3>
          <p className="text-foreground mb-6 max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? I'm always open to
            discussing new opportunities and ideas.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 font-body text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-foreground mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Nandini Saxena. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
