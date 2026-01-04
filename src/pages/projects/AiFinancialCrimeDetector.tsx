import { Navigation } from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AiFinancialCrimeDetector = () => {
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
              Machine Learning | Real-Time Systems
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-black mb-4">
              AI Financial Crime Detector
            </h1>
            <p className="text-muted-foreground text-lg">
              Real-time fraud detection using Graph Neural Networks
            </p>
          </header>

          <section className="prose prose-lg max-w-none mb-8">
            <h2 className="font-serif text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Detecting fraudulent transactions in real-time requires understanding complex relationships between entities—something traditional ML models miss. Financial fraud isn't just about isolated transactions; it's about patterns, networks, and connections that span multiple entities.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">My Approach</h2>
            <p className="text-foreground leading-relaxed mb-6">
              I implemented Graph Neural Networks (GNNs) to capture transaction patterns and entity relationships that traditional machine learning models overlook. By modeling transactions as a graph—where nodes represent entities (accounts, users, merchants) and edges represent transactions—the system can identify suspicious patterns based on network structure.
            </p>

            <div className="bg-secondary border border-border p-6 mb-6">
              <h3 className="font-serif text-xl font-bold mb-3">Key Technical Components</h3>
              <ul className="space-y-2 text-foreground">
                <li><strong>Graph Neural Networks:</strong> Implemented message-passing neural networks to learn entity embeddings based on transaction history and network topology</li>
                <li><strong>Apache Kafka Integration:</strong> Built real-time data streaming pipeline for processing transactions as they occur</li>
                <li><strong>Feature Engineering:</strong> Extracted graph-based features including node centrality, community detection, and temporal patterns</li>
                <li><strong>Anomaly Detection:</strong> Trained GNN models to identify suspicious transaction patterns based on learned representations</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold mb-4">Why Graph Neural Networks?</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Traditional ML models treat each transaction independently, missing crucial contextual information. GNNs excel at:
            </p>
            <ul className="space-y-2 text-foreground mb-6">
              <li><strong>Capturing relationships:</strong> Understanding how entities interact within the transaction network</li>
              <li><strong>Learning representations:</strong> Creating meaningful embeddings that encode both entity attributes and network structure</li>
              <li><strong>Detecting patterns:</strong> Identifying fraud rings, money laundering schemes, and coordinated attacks</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mb-4">Technical Stack</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Python", "TensorFlow", "Apache Kafka", "GNNs", "NetworkX"].map((tag) => (
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

export default AiFinancialCrimeDetector;
