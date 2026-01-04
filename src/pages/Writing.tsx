import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "CNNs & Inductive Biases: Why Architecture Matters",
    readTime: "6 min read",
    description: "A practical look at how CNNs encode assumptions like locality and translation invariance—and why choosing the right architecture matters more than just scaling model size.",
    tags: ["Machine Learning", "Computer Vision", "Neural Networks"],
    slug: "cnns-inductive-biases",
    medium: "https://medium.com/@nandinisaxenawork/cnns-inductive-biases-why-architecture-matters-a4bd552bdb01",
  },
  {
    title: "Bitcoin Fraud Detection Under Temporal Concept Drift",
    readTime: "8 min read",
    description: "A hands-on investigation into why complex models fail under real-world distribution shift—and how simpler baselines can generalize better in evolving fraud systems.",
    tags: ["Machine Learning", "Graph Neural Networks", "Robustness"],
    slug: "gradient-descent-optimizers",
    medium: "https://medium.com/@nandinisaxenawork/when-simpler-models-beat-gnns-lessons-from-bitcoin-fraud-detection-under-temporal-drift-5b794484295a",
  },
  {
    title: "Markov's Math That Predicts Almost Anything",
    readTime: "7 min read",
    description: "A learner's perspective on Markov chains, exploring how a simple memoryless assumption quietly powers models across probability, computation, and machine learning.",
    tags: ["Probability", "Machine Learning", "Mathematics"],
    slug: "markov-chains",
    medium: "https://medium.com/@nandinisaxenawork/markov-chains-The-Math-That-Predicts-Almost-Anything",
  },
];

const Writing = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="border-b-2 border-foreground pb-6 mb-12">
            <h1 className="font-serif text-5xl md:text-7xl font-black mb-4">Writing</h1>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              Articles & Essays
            </p>
          </header>

          {/* Featured Article */}
          <div className="border-2 border-foreground mb-12 overflow-hidden">
            <div className="bg-accent text-accent-foreground p-2 border-b-2 border-foreground">
              <span className="font-body text-xs uppercase tracking-widest font-bold">
                Latest Publication
              </span>
            </div>
            <div className="p-8">
              <h2 className="font-serif text-4xl font-black mb-3">
                {articles[0].title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {articles[0].readTime}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {articles[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent/20 text-accent px-3 py-1 text-xs uppercase tracking-wider border border-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                {articles[0].description}
              </p>
              {articles[0].medium && (
                <a
                  href={articles[0].medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 font-body text-sm uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Read on Medium <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="space-y-6">
            {articles.slice(1).map((article, index) => (
              <div
                key={index}
                className="border-b border-border pb-6 hover:border-accent transition-colors"
              >
                <h3 className="font-serif text-2xl font-bold mb-2">
                  <a href={article.medium} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    {article.title}
                  </a>
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {article.readTime}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary px-2 py-1 text-xs uppercase tracking-wider border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-3">{article.description}</p>
                {article.medium && (
                  <a
                    href={article.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-semibold uppercase tracking-wider"
                  >
                    Read on Medium <ArrowRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Writing;