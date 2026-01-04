import { Navigation } from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const VogueAlytics = () => {
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
              Data Science | Web Scraping | Analytics
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-black mb-4">
              The Vogue-alytics
            </h1>
            <p className="text-muted-foreground text-lg">
              How macroeconomic indicators influence fashion trends
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="font-serif text-3xl font-bold mb-4">The Concept</h2>
            <p className="text-foreground leading-relaxed mb-6">
              A data-driven exploration of how macroeconomic indicators—specifically GDP and the Consumer Confidence Index—influence fashion industry trends. The project investigates whether economic confidence translates into measurable shifts in consumer fashion preferences.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">What I Did</h2>
            
            <h3 className="font-serif text-2xl font-bold mb-3">1. Data Collection Pipeline</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Built a comprehensive Python data pipeline to aggregate data from multiple sources:
            </p>
            <ul className="space-y-2 text-foreground mb-6">
              <li><strong>FRED API:</strong> Extracted GDP and Consumer Confidence Index time-series data</li>
              <li><strong>Google Trends API:</strong> Captured search interest for fashion keywords ("minimalist fashion," "extravagant fashion," "luxury brands")</li>
              <li><strong>Web Scraping (Beautiful Soup):</strong> Collected fashion retail data and trend reports</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold mb-3">2. Time-Lag Correlation Analysis</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Used Statsmodels to perform time-lag correlation analysis, testing whether changes in economic indicators precede shifts in fashion search behavior. This revealed lead-lag relationships between consumer confidence and fashion preference changes.
            </p>

            <div className="bg-secondary border border-border p-6 mb-6">
              <h3 className="font-serif text-xl font-bold mb-3">Analytical Approach</h3>
              <ul className="space-y-2 text-foreground">
                <li>Normalized time-series data to ensure comparable scales</li>
                <li>Applied cross-correlation functions to identify optimal lag periods</li>
                <li>Tested hypotheses about economic confidence and fashion spending patterns</li>
                <li>Controlled for seasonal effects and external trend cycles</li>
              </ul>
            </div>

            <h3 className="font-serif text-2xl font-bold mb-3">3. Interactive Dashboard</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Designed an interactive React dashboard with Tailwind CSS to present findings through:
            </p>
            <ul className="space-y-2 text-foreground mb-6">
              <li>Dynamic time-series visualizations showing economic indicators alongside fashion trends</li>
              <li>Correlation heatmaps revealing relationships between variables</li>
              <li>Data-driven articles explaining the findings in accessible language</li>
              <li>Interactive filters to explore different time periods and fashion categories</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mb-4">Insights Uncovered</h2>
            <div className="bg-accent/10 border-2 border-accent p-6 mb-6">
              <p className="text-foreground leading-relaxed">
                Discovered measurable correlations between economic confidence and fashion preference shifts. When consumer confidence rises, search interest for "extravagant fashion" and luxury brands increases with a 2-3 month lag. Conversely, during economic uncertainty, "minimalist fashion" searches spike as consumers adopt more conservative spending habits.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mb-4">Key Takeaways</h2>
            <ul className="space-y-2 text-foreground mb-6">
              <li>Fashion trends aren't just cultural—they're economic indicators</li>
              <li>Consumer behavior adapts to macroeconomic conditions with measurable lag periods</li>
              <li>Search data provides early signals of changing consumer preferences</li>
              <li>Economic confidence translates into tangible shifts in fashion spending patterns</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mb-4">Technical Stack</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Python", "Pandas", "Statsmodels", "Beautiful Soup", "React.js", "Tailwind CSS", "FRED API", "Google Trends API"].map((tag) => (
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

export default VogueAlytics;
