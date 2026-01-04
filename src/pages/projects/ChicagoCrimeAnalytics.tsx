import { Navigation } from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ChicagoCrimeAnalytics = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-accent hover:underline mb-8 text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          <header className="border-b-2 border-foreground pb-6 mb-8">
            <p className="text-accent font-semibold mb-3 uppercase text-sm tracking-wider">
              Data Science | Machine Learning | Full-Stack
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-black mb-4">
              Chicago Crime Analytics Platform
            </h1>
            <p className="text-muted-foreground text-lg">
              Transforming 7+ million crime records into actionable insights
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="font-serif text-3xl font-bold mb-4">What I Built</h2>
            <p className="text-foreground leading-relaxed mb-6">
              A comprehensive analytics platform that transforms 7+ million crime records into actionable insights for public safety decision-making. The system features three core components working in harmony:
            </p>
            <ul className="space-y-2 text-foreground mb-6">
              <li><strong>Interactive React Dashboard:</strong> Real-time visualization of crime patterns with dynamic filtering and drill-down capabilities</li>
              <li><strong>Advanced Analysis Engine:</strong> Temporal and spatial analytics with 7-day crime forecasting</li>
              <li><strong>Flask REST API:</strong> Backend service delivering predictive data and serving analytical insights</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mb-4">The Data Science Behind It</h2>
            
            <div className="bg-secondary border border-border p-6 mb-6">
              <h3 className="font-serif text-xl font-bold mb-3">Dataset Overview</h3>
              <ul className="space-y-2 text-foreground">
                <li>7.2M+ records from Chicago Data Portal (2001-present)</li>
                <li>33 distinct crime types across 25 police districts</li>
                <li>Temporal coverage spanning two decades of crime data</li>
              </ul>
            </div>

            <h3 className="font-serif text-2xl font-bold mb-3">Feature Engineering</h3>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Temporal Features:</strong>
            </p>
            <ul className="space-y-2 text-foreground mb-4">
              <li>Hourly patterns and day-of-week analysis</li>
              <li>Weekend flags and holiday indicators</li>
              <li>Seasonal classification (summer/winter crime variations)</li>
            </ul>

            <p className="text-foreground leading-relaxed mb-4">
              <strong>Spatial Features:</strong>
            </p>
            <ul className="space-y-2 text-foreground mb-6">
              <li>District-level clustering using DBSCAN</li>
              <li>Hotspot intensity mapping with Kernel Density Estimation</li>
              <li>Geographic concentration analysis</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold mb-3">Analytical Methods</h3>
            <ul className="space-y-2 text-foreground mb-6">
              <li><strong>Time Series Decomposition:</strong> Separated trend, seasonal, and residual components</li>
              <li><strong>DBSCAN Clustering:</strong> Identified spatial crime clusters without predefined cluster counts</li>
              <li><strong>Kernel Density Estimation:</strong> Generated continuous hotspot intensity maps</li>
              <li><strong>Forecasting Models:</strong> Moving averages and exponential smoothing for predictions</li>
            </ul>

            <div className="bg-accent/10 border-2 border-accent p-6 mb-6">
              <h3 className="font-serif text-xl font-bold mb-3">Model Performance</h3>
              <ul className="space-y-2 text-foreground">
                <li>95.2% accuracy for 1-day crime forecasts</li>
                <li>87.5% accuracy for 7-day crime forecasts</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mb-4">Key Discoveries</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-border p-4">
                <h4 className="font-serif font-bold mb-2">Temporal Patterns</h4>
                <p className="text-foreground text-sm">Peak crime hour at 12:00 PM with 15% weekend spike on Fridays and Saturdays</p>
              </div>
              <div className="border border-border p-4">
                <h4 className="font-serif font-bold mb-2">Geographic Concentration</h4>
                <p className="text-foreground text-sm">Top 3 districts account for 25% of all crimes; top 10 represent 60% of total volume</p>
              </div>
              <div className="border border-border p-4">
                <h4 className="font-serif font-bold mb-2">Crime Type Analysis</h4>
                <p className="text-foreground text-sm">Theft peaks in commercial areas during business hours (23.2% of all crimes)</p>
              </div>
              <div className="border border-border p-4">
                <h4 className="font-serif font-bold mb-2">Seasonal Trends</h4>
                <p className="text-foreground text-sm">Summer months show 20% spike compared to winter baseline</p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mb-4">Technical Stack</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Python", "Pandas", "Scikit-learn", "Statsmodels", "Flask", "React.js", "Plotly", "NumPy"].map((tag) => (
                <span
                  key={tag}
                  className="border border-foreground px-3 py-1 text-sm uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default ChicagoCrimeAnalytics;
