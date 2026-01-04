import React from "react";
import { Navigation } from "@/components/Navigation";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Financial Crime Detector",
    category: "Machine Learning | Graph Neural Networks",
    description: "Conducted rigorous failure analysis on the Elliptic Bitcoin Dataset (~203k nodes) to evaluate model robustness under Temporal Concept Drift. Demonstrated that Logistic Regression outperformed GNNs by ~4x on future data.",
    metrics: "203k nodes • Temporal Concept Drift analysis • Interactive dashboard",
    tags: ["Python", "PyTorch Geometric", "Graph Neural Networks", "XGBoost", "Scikit-learn"],
    slug: "ai-financial-crime-detector",
    github: "https://github.com/nandini1612/fraud-detection-gnn",
    filterCategories: ["Machine Learning", "Graph Neural Networks"],
  },
  {
    title: "Chicago Crime Analytics Platform",
    category: "Data Science | Machine Learning | Full-Stack",
    description: "Analysed 50,000 crime records using temporal decomposition and spatial analytics to uncover district-level risk patterns. Built a robust 3-tier architecture (Flask/React) with optimized SQLite indexing to achieve ~45ms query latency.",
    details: "Implemented a 7-day forecasting engine (SMA/Linear Regression) and interactive geospatial heatmaps for hotspot detection.",
    metrics: "50K records • ~45ms query latency • 7-day forecasting",
    tags: ["Python", "Flask", "React.js", "Scikit-learn", "Pandas", "SQLite", "Leaflet"],
    slug: "chicago-crime-analytics",
    github: "https://github.com/nandini1612/chicago-crime-analytics",
    filterCategories: ["Data Science", "Machine Learning", "Full-Stack"],
  },
  {
    title: "The Vogue-alytics",
    category: "Data Science | Time-Series | Analytics",
    description: "Engineered a trend forecasting engine using Vector Autoregression (VAR) and Granger Causality to validate runway color palettes as a leading indicator for market volatility (VIX).",
    details: "Identified a statistically significant 3-month lag between 'muted' aesthetic shifts and economic downturns through rigorous stationarity checks (ADF) and Impulse Response analysis. Built an automated ETL pipeline and deployed a FastAPI/React dashboard.",
    metrics: "VAR forecasting • Granger Causality • FastAPI/React dashboard",
    tags: ["Python", "Statsmodels", "Vector Autoregression", "FastAPI", "React"],
    slug: "vogue-alytics",
    github: "https://github.com/nandini1612/vogue-alytics",
    filterCategories: ["Data Science", "Time-Series", "Analytics"],
  },
];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = React.useState<string>("All");
  
  const allCategories = ["All", "Data Science", "Machine Learning", "Real-Time Systems", "Full-Stack", "Web Scraping", "Analytics"];
  
  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.filterCategories?.includes(selectedFilter));

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="border-b-2 border-foreground pb-6 mb-8">
            <h1 className="font-serif text-5xl md:text-7xl font-black mb-4">Projects</h1>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              Portfolio of Selected Works
            </p>
          </header>

          {/* Category Filters */}
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider font-bold mb-4">Filter by Category</p>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-2 text-sm uppercase tracking-wider border-2 transition-colors ${
                    selectedFilter === category
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background text-foreground border-border hover:border-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Project */}
          {filteredProjects.length > 0 && (
            <div className="border-2 border-foreground mb-12 overflow-hidden">
              <div className="bg-secondary p-2 border-b-2 border-foreground">
                <span className="font-body text-xs uppercase tracking-widest font-bold">
                  Featured Story
                </span>
              </div>
              <div className="p-8">
                <h2 className="font-serif text-4xl font-black mb-4">
                  {filteredProjects[0].title}
                </h2>
                <p className="text-accent font-semibold mb-3 uppercase text-sm tracking-wider">
                  {filteredProjects[0].category}
                </p>
                <p className="text-muted-foreground text-sm mb-4 uppercase tracking-wider">
                  {filteredProjects[0].metrics}
                </p>
                <p className="text-foreground text-lg leading-relaxed mb-4">
                  {filteredProjects[0].description}
                </p>
                {filteredProjects[0].details && (
                  <div className="bg-secondary border border-border p-4 mb-4">
                    <h3 className="font-serif font-bold mb-2 text-sm uppercase tracking-wider">Key Discoveries</h3>
                    <p className="text-foreground text-sm leading-relaxed">
                      {filteredProjects[0].details}
                    </p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {filteredProjects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-foreground px-3 py-1 text-xs uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`/projects/${filteredProjects[0].slug}`}
                    className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2 text-sm uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    View Case Study <ExternalLink className="h-4 w-4" />
                  </a>
                  {filteredProjects[0].github && (
                    <a
                      href={filteredProjects[0].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-foreground px-5 py-2 text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Grid of Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.slice(1).map((project, index) => (
              <div key={index} className="border border-border hover:border-foreground transition-colors">
                <div className="bg-muted p-2 border-b border-border">
                  <span className="font-body text-xs uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-xs mb-4 uppercase tracking-wider">
                    {project.metrics}
                  </p>
                  <p className="text-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary px-2 py-1 text-xs uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 text-xs uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      View Case Study <ExternalLink className="h-3 w-3" />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-foreground px-4 py-2 text-xs uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Projects;