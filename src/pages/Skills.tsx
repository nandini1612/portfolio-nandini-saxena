import { Navigation } from "@/components/Navigation";
import { 
  Brain,
  Database, 
  Palette
} from "lucide-react";

const skillColumns = [
  {
    title: "Research & Data Science",
    subtitle: "The Focus",
    icon: Brain,
    skills: [
      { name: "Graph Neural Networks", detail: "PyTorch Geometric, GraphSAGE, Node Embeddings" },
      { name: "Econometrics & Forecasting", detail: "Vector Autoregression (VAR), Granger Causality, Stationarity Tests (ADF)" },
      { name: "Machine Learning", detail: "Scikit-learn, XGBoost, TensorFlow" },
      { name: "Robustness Analysis", detail: "Failure Analysis, Distribution Shift Detection" }
    ]
  },
  {
    title: "Data Engineering & Systems",
    subtitle: "The Backbone",
    icon: Database,
    skills: [
      { name: "Pipelines", detail: "ETL Design, Web Scraping" },
      { name: "Backend", detail: "FastAPI, Flask, REST API Design" },
      { name: "Data Storage", detail: "PostgreSQL, SQLite optimization" },
      { name: "Cloud & Tools", detail: "Google Cloud Platform, Git/GitHub, Docker" }
    ]
  },
  {
    title: "Visualization & Leadership",
    subtitle: "The Delivery",
    icon: Palette,
    skills: [
      { name: "Interactive Dashboards", detail: "React.js (TypeScript), Streamlit, Plotly" }
    ]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="border-b-2 border-foreground pb-6 mb-12">
            <h1 className="font-serif text-5xl md:text-7xl font-black mb-4">Technical Arsenal</h1>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              T-Shaped Skill Profile
            </p>
          </header>

          {/* 3-Column T-Shaped Layout */}
          <div className="grid md:grid-cols-3 gap-6">
            {skillColumns.map((column, index) => {
              const Icon = column.icon;
              return (
                <div 
                  key={index} 
                  className="border-2 border-foreground hover:shadow-lg transition-shadow"
                >
                  <div className="bg-accent text-accent-foreground p-4 border-b-2 border-foreground">
                    <div className="flex items-center gap-3 mb-1">
                      <Icon className="h-5 w-5" />
                      <h2 className="font-serif text-lg font-bold uppercase tracking-wider">
                        {column.title}
                      </h2>
                    </div>
                    <p className="text-xs uppercase tracking-widest opacity-80">{column.subtitle}</p>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-4">
                      {column.skills.map((skill, skillIndex) => (
                        <li 
                          key={skillIndex}
                          className="text-foreground"
                        >
                          <p className="font-semibold mb-1">{skill.name}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{skill.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Proficiency Note */}
          <div className="mt-12 border-2 border-accent bg-accent/10 p-8">
            <h3 className="font-serif text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-foreground leading-relaxed mb-4">
              I'm constantly expanding my technical toolkit through hands-on projects, research papers, 
              and building real-world applications. Currently exploring advanced topics in graph neural 
              networks, real-time ML systems, and distributed computing.
            </p>
            <p className="text-foreground leading-relaxed">
              Beyond technical skills, I've developed strong abilities in technical communication, 
              community leadership (600+ developers at GDG BVP), and cross-functional collaboration 
              through both professional work and cultural activities like Bharatnatyam.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Skills;
