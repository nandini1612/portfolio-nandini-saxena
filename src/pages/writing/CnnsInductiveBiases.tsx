import { Navigation } from "@/components/Navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CnnsInductiveBiases = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-3xl mx-auto">
          <Link 
            to="/writing" 
            className="inline-flex items-center gap-2 text-accent hover:underline mb-8 text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Writing
          </Link>

          <header className="border-b-2 border-foreground pb-6 mb-8">
            <h1 className="font-serif text-4xl md:text-6xl font-black mb-4">
              CNNs & Inductive Biases: Why Architecture Matters
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                December 28, 2024
              </span>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </header>

          <section className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed text-xl mb-6">
              Understanding how Convolutional Neural Networks encode assumptions about images through translation invariance and local connectivity. A look at what makes CNNs so effective for computer vision.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">What Are Inductive Biases?</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Inductive biases are the assumptions a machine learning model makes about the problem it's trying to solve. Think of them as the "prior knowledge" baked into the architecture—constraints that guide learning toward certain types of solutions.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              For CNNs, these biases aren't bugs—they're features. They're precisely what makes CNNs so powerful for computer vision tasks.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">Translation Invariance: Recognizing Patterns Anywhere</h2>
            <p className="text-foreground leading-relaxed mb-6">
              CNNs encode a crucial assumption about images: <strong>features that matter in one part of an image matter everywhere.</strong> A cat is still a cat whether it's in the top-left corner or bottom-right corner of an image.
            </p>
            <div className="bg-secondary border border-border p-6 mb-6">
              <p className="text-foreground text-sm leading-relaxed">
                <strong>How it works:</strong> Convolutional layers apply the same filter across the entire image. Instead of learning separate detectors for "edge in top-left" and "edge in bottom-right," CNNs learn a single edge detector that slides across the image. This shared parameter approach dramatically reduces the number of learnable parameters.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mb-4">Local Connectivity: Spatial Hierarchies Matter</h2>
            <p className="text-foreground leading-relaxed mb-6">
              CNNs assume that <strong>nearby pixels are more relevant to each other than distant ones.</strong> This reflects the hierarchical nature of visual information: edges combine into textures, textures into parts, and parts into objects.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              Convolutional filters only look at small local regions (e.g., 3×3 or 5×5 patches). Early layers detect simple patterns like edges and colors. Deeper layers combine these to recognize complex structures—a process called hierarchical feature learning.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">Pooling: Building Robustness</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Pooling layers (max pooling, average pooling) introduce another inductive bias: <strong>exact spatial position doesn't matter, only approximate location.</strong>
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              This creates robustness to small translations and distortions. Whether an eye is 2 pixels left or right shouldn't drastically change face recognition. Pooling achieves this by downsampling feature maps while retaining the most important information.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">Why These Biases Work for Vision</h2>
            <ul className="space-y-3 text-foreground mb-6">
              <li><strong>Parameter efficiency:</strong> Shared weights across spatial locations means fewer parameters to learn</li>
              <li><strong>Sample efficiency:</strong> The model needs less training data because it's not learning redundant position-specific features</li>
              <li><strong>Generalization:</strong> Models trained on images of objects in certain positions generalize to new positions</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mb-4">When Inductive Biases Break Down</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Not all problems benefit from CNN-style inductive biases. Translation invariance isn't always desirable:
            </p>
            <ul className="space-y-3 text-foreground mb-6">
              <li><strong>Medical imaging:</strong> The position of a tumor matters—upper-left lung vs. lower-right lung affects diagnosis</li>
              <li><strong>Text and sequences:</strong> Word order matters in language (CNNs struggle compared to Transformers)</li>
              <li><strong>Graphs and non-Euclidean data:</strong> No clear notion of "local neighborhood"</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mb-4">The Bigger Picture</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Understanding inductive biases helps you choose the right architecture. CNNs dominate computer vision because their assumptions align with the structure of visual data. But for other domains—text, graphs, audio—different architectures with different biases (RNNs, Transformers, GNNs) might be more appropriate.
            </p>
            <div className="bg-accent/10 border-2 border-accent p-6">
              <p className="text-foreground leading-relaxed">
                <strong>Key takeaway:</strong> Architecture isn't just about layers and neurons—it's about encoding the right assumptions for your problem domain.
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default CnnsInductiveBiases;
