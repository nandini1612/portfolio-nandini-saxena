import { Navigation } from "@/components/Navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const GradientDescentOptimizers = () => {
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
              Gradient Descent & Optimizers: The Engine of Machine Learning
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                January 15, 2025
              </span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          <section className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed text-xl mb-6">
              A deep dive into how neural networks learn—exploring gradient descent variations, momentum, adaptive learning rates, and why choosing the right optimizer matters.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">The Core Idea: Gradient Descent</h2>
            <p className="text-foreground leading-relaxed mb-6">
              At its heart, training a neural network is an optimization problem. We have a loss function that measures how wrong our predictions are, and we want to minimize it. Gradient descent is the workhorse algorithm that makes this happen.
            </p>
            <div className="bg-secondary border border-border p-6 mb-6">
              <p className="text-foreground text-sm leading-relaxed">
                <strong>The algorithm in one sentence:</strong> Compute the gradient of the loss with respect to each parameter, then update parameters in the opposite direction of the gradient.
              </p>
            </div>
            <p className="text-foreground leading-relaxed mb-6">
              Think of it as hiking down a mountain in fog—you can only see the slope at your current position, so you take small steps in the direction that goes downward most steeply.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">Vanilla Gradient Descent: The Baseline</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Batch gradient descent computes the gradient using the entire training dataset. It's stable and guaranteed to converge to a minimum (local or global, depending on the loss landscape), but it's slow for large datasets.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Stochastic Gradient Descent (SGD):</strong> Instead of using all data, update parameters after each training example. Fast, but noisy—the loss doesn't decrease smoothly.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Mini-Batch SGD:</strong> The sweet spot. Use a small batch of examples (e.g., 32, 64, 128) to estimate the gradient. This balances computational efficiency with gradient accuracy.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-4">Momentum: Adding Inertia</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Vanilla SGD oscillates in narrow valleys of the loss landscape—it zigzags instead of moving smoothly toward the minimum. Momentum fixes this by accumulating a velocity vector in directions of persistent gradient.
            </p>
            <div className="bg-secondary border border-border p-6 mb-6">
              <p className="text-foreground text-sm leading-relaxed mb-3">
                <strong>How it works:</strong> Instead of just using the current gradient, maintain a moving average of past gradients. Parameters move faster in directions where gradients consistently point the same way.
              </p>
              <p className="text-foreground text-sm leading-relaxed">
                Think of a ball rolling down a hill—it builds up speed in consistent directions and dampens oscillations.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mb-4">Adaptive Learning Rates: RMSprop and Adam</h2>
            <p className="text-foreground leading-relaxed mb-6">
              A fixed learning rate treats all parameters equally, but some parameters should update faster than others. Adaptive optimizers adjust learning rates per parameter based on gradient history.
            </p>

            <h3 className="font-serif text-2xl font-bold mb-3">RMSprop</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Divides the learning rate by a running average of recent gradient magnitudes. Parameters with consistently large gradients get smaller updates; parameters with small gradients get relatively larger updates.
            </p>

            <h3 className="font-serif text-2xl font-bold mb-3">Adam (Adaptive Moment Estimation)</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Combines momentum and RMSprop. It maintains both a moving average of gradients (momentum) and a moving average of squared gradients (adaptive learning rate).
            </p>
            <div className="bg-accent/10 border-2 border-accent p-6 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Why Adam is popular:</strong> It requires minimal tuning, works well across a wide range of architectures, and converges faster than vanilla SGD in most cases. It's the default choice for many practitioners.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mb-4">Learning Rate Scheduling</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Even with adaptive optimizers, the learning rate is crucial. Too high, and training becomes unstable; too low, and convergence is painfully slow.
            </p>
            <ul className="space-y-3 text-foreground mb-6">
              <li><strong>Step decay:</strong> Reduce learning rate by a factor every N epochs</li>
              <li><strong>Exponential decay:</strong> Gradually decrease learning rate over time</li>
              <li><strong>Cosine annealing:</strong> Follow a cosine curve, allowing periodic restarts</li>
              <li><strong>Warm-up:</strong> Start with a small learning rate and gradually increase it (prevents early instability)</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mb-4">Which Optimizer Should You Use?</h2>
            <ul className="space-y-3 text-foreground mb-6">
              <li><strong>Adam:</strong> Default choice for most deep learning tasks. Fast, stable, minimal tuning.</li>
              <li><strong>SGD with momentum:</strong> Often achieves better generalization than Adam for image classification. Requires careful learning rate tuning.</li>
              <li><strong>AdamW:</strong> Adam with weight decay decoupled from gradient updates. Better generalization than vanilla Adam.</li>
              <li><strong>RMSprop:</strong> Works well for RNNs and online learning scenarios.</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mb-4">The Takeaway</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Optimization is more than plugging in an algorithm—it's understanding the trade-offs between convergence speed, stability, and generalization. Start with Adam, but don't be afraid to experiment with SGD+momentum for final model training.
            </p>
            <p className="text-foreground leading-relaxed">
              And remember: no optimizer can fix a bad model architecture or insufficient data. Optimization is a tool, not magic.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default GradientDescentOptimizers;
