import { Navigation } from "@/components/Navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const MarkovChains = () => {
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
              Markov's Math That Predicts Almost Anything
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                November 22, 2024
              </span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </header>

          <section className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed text-xl mb-6">
              From weather forecasting to text generation—exploring how Markov chains use probabilistic transitions to model sequential data and predict future states.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">What Is a Markov Chain?</h2>
            <p className="text-foreground leading-relaxed mb-6">
              A Markov chain is a mathematical model for systems that transition between states based on probabilities. The key property: <strong>the future depends only on the present, not the past.</strong>
            </p>
            <div className="bg-secondary border border-border p-6 mb-6">
              <p className="text-foreground text-sm leading-relaxed">
                <strong>The Markov Property:</strong> Given the current state, future states are independent of past states. This is called "memorylessness"—the chain has no memory of how it got to the current state.
              </p>
            </div>
            <p className="text-foreground leading-relaxed mb-6">
              Example: If you're modeling weather (sunny, rainy, cloudy), the probability of tomorrow's weather depends only on today's weather, not on what happened last week.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">The Components</h2>
            <h3 className="font-serif text-2xl font-bold mb-3">1. States</h3>
            <p className="text-foreground leading-relaxed mb-6">
              The distinct conditions the system can be in. In weather: {"{"}sunny, rainy, cloudy{"}"}. In text generation: individual words.
            </p>

            <h3 className="font-serif text-2xl font-bold mb-3">2. Transition Probabilities</h3>
            <p className="text-foreground leading-relaxed mb-6">
              The probability of moving from one state to another. Represented as a transition matrix where entry (i, j) is the probability of transitioning from state i to state j.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              Example: If today is sunny, tomorrow might be 70% sunny, 20% cloudy, 10% rainy.
            </p>

            <h3 className="font-serif text-2xl font-bold mb-3">3. Initial State Distribution</h3>
            <p className="text-foreground leading-relaxed mb-6">
              The probability distribution over states at the start. Where does the chain begin?
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">Applications: Where Markov Chains Shine</h2>
            
            <h3 className="font-serif text-2xl font-bold mb-3">Text Generation</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Train a Markov chain on text data by counting word transitions. "The cat" is often followed by "sat," "jumped," or "ran." Generate new text by sampling transitions: start with a word, pick the next word based on transition probabilities, repeat.
            </p>
            <div className="bg-secondary border border-border p-6 mb-6">
              <p className="text-foreground text-sm leading-relaxed">
                <strong>Simple but effective:</strong> Before transformers and LLMs, Markov chains were a go-to for probabilistic text generation. They still work well for quick prototypes.
              </p>
            </div>

            <h3 className="font-serif text-2xl font-bold mb-3">PageRank (Google's Original Algorithm)</h3>
            <p className="text-foreground leading-relaxed mb-6">
              PageRank models web surfing as a Markov chain. States are web pages, transitions are hyperlinks. The stationary distribution (equilibrium) gives each page an importance score—pages that are frequently "visited" in the long run rank higher.
            </p>

            <h3 className="font-serif text-2xl font-bold mb-3">Recommendation Systems</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Model user behavior as transitions between items (products, videos). If a user watches video A, what's the probability they watch video B next? Use transition probabilities to recommend the next item.
            </p>

            <h3 className="font-serif text-2xl font-bold mb-3">Weather Forecasting</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Historical weather data reveals transition patterns. If it's sunny today, what's the probability of rain tomorrow? Markov chains provide a simple probabilistic model for short-term forecasts.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">Limitations: When Markov Chains Fall Short</h2>
            <ul className="space-y-3 text-foreground mb-6">
              <li><strong>The memorylessness assumption:</strong> Real-world sequences often have long-term dependencies. Markov chains can't capture context beyond the current state (though higher-order Markov chains help).</li>
              <li><strong>State explosion:</strong> For complex systems with many states, transition matrices become huge and hard to estimate accurately.</li>
              <li><strong>Static transitions:</strong> Markov chains assume transition probabilities don't change over time. Real systems often evolve.</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mb-4">Modern Extensions</h2>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Hidden Markov Models (HMMs):</strong> What if you can't directly observe the states? HMMs model systems where states are hidden, and you only see noisy observations. Used in speech recognition and bioinformatics.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Markov Decision Processes (MDPs):</strong> Add actions and rewards. Used in reinforcement learning to model decision-making under uncertainty.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">Why This Matters</h2>
            <div className="bg-accent/10 border-2 border-accent p-6">
              <p className="text-foreground leading-relaxed">
                Markov chains are the foundation for understanding probabilistic models of sequential data. Even if you're using modern deep learning techniques, understanding Markov chains gives you intuition about how sequences work—and when simple models are good enough.
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default MarkovChains;
