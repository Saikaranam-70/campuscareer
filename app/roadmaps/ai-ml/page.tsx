import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, BookOpen, Code, CheckCircle, Brain } from "lucide-react"

export const metadata = {
  title: "AI/ML Engineer Roadmap - CareerCompanion",
  other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
  description: "Complete AI and Machine Learning path from fundamentals to advanced deep learning",
}

export default function AIMLRoadmapPage() {
  const roadmapSteps = [
    {
      level: "Prerequisites & Foundations",
      duration: "3-4 months",
      skills: [
        {
          name: "Python Programming",
          time: "4-6 weeks",
          topics: [
            "Python basics, data structures, and OOP",
            "NumPy for numerical computing",
            "Pandas for data manipulation",
            "Matplotlib and Seaborn for visualization",
            "Jupyter notebooks and Google Colab",
          ],
          keyPoints: [
            "Python is the primary language for AI/ML",
            "Master data manipulation with Pandas early",
            "Practice on real datasets from Kaggle",
            "Learn to visualize data effectively",
          ],
          projects: [
            "Data analysis of COVID-19 dataset",
            "Stock price visualization dashboard",
            "Customer segmentation analysis",
          ],
        },
        {
          name: "Mathematics for ML",
          time: "6-8 weeks",
          topics: [
            "Linear algebra (vectors, matrices, operations)",
            "Calculus (derivatives, gradients, chain rule)",
            "Probability and statistics",
            "Optimization fundamentals",
            "Information theory basics",
          ],
          keyPoints: [
            "Don't skip math—it's crucial for understanding ML",
            "Focus on intuition alongside formulas",
            "Practice implementing concepts in code",
            "Learn matrix operations in NumPy",
          ],
          projects: [
            "Implement gradient descent from scratch",
            "Linear regression using matrix operations",
            "Statistical analysis of datasets",
          ],
        },
      ],
    },
    {
      level: "Machine Learning Fundamentals",
      duration: "4-5 months",
      skills: [
        {
          name: "Supervised Learning Algorithms",
          time: "6-8 weeks",
          topics: [
            "Linear and logistic regression",
            "Decision trees and random forests",
            "Support Vector Machines (SVM)",
            "K-Nearest Neighbors (KNN)",
            "Ensemble methods (bagging, boosting)",
          ],
          keyPoints: [
            "Understand when to use each algorithm",
            "Learn the bias-variance tradeoff",
            "Practice on diverse datasets",
            "Focus on model evaluation metrics",
          ],
          projects: ["House price prediction", "Email spam classifier", "Customer churn prediction"],
        },
        {
          name: "Unsupervised Learning",
          time: "3-4 weeks",
          topics: [
            "K-Means clustering",
            "Hierarchical clustering",
            "Principal Component Analysis (PCA)",
            "Dimensionality reduction techniques",
            "Anomaly detection",
          ],
          keyPoints: [
            "Learn when supervision isn't available",
            "Understand clustering evaluation metrics",
            "Practice feature engineering",
            "Use PCA for visualization",
          ],
          projects: [
            "Customer segmentation for marketing",
            "Image compression using PCA",
            "Anomaly detection in network traffic",
          ],
        },
        {
          name: "Scikit-Learn & Model Development",
          time: "4-5 weeks",
          topics: [
            "Scikit-learn API and workflows",
            "Data preprocessing and feature engineering",
            "Model selection and hyperparameter tuning",
            "Cross-validation techniques",
            "Pipeline creation and model persistence",
          ],
          keyPoints: [
            "Master scikit-learn for classical ML",
            "Always split data properly (train/val/test)",
            "Learn to prevent data leakage",
            "Practice end-to-end ML pipelines",
          ],
          projects: [
            "End-to-end ML pipeline for classification",
            "Automated hyperparameter tuning system",
            "Model comparison framework",
          ],
        },
      ],
    },
    {
      level: "Deep Learning",
      duration: "5-6 months",
      skills: [
        {
          name: "Neural Networks Fundamentals",
          time: "5-6 weeks",
          topics: [
            "Perceptrons and multilayer networks",
            "Activation functions and backpropagation",
            "Loss functions and optimizers",
            "Regularization techniques (dropout, L1/L2)",
            "Batch normalization and layer normalization",
          ],
          keyPoints: [
            "Understand backpropagation deeply",
            "Implement neural networks from scratch first",
            "Learn to debug training issues",
            "Master gradient descent variants",
          ],
          projects: [
            "Neural network from scratch (no frameworks)",
            "MNIST digit classification",
            "Fashion MNIST classification",
          ],
        },
        {
          name: "TensorFlow & PyTorch",
          time: "4-5 weeks",
          topics: [
            "TensorFlow/Keras API fundamentals",
            "PyTorch tensors and autograd",
            "Building custom layers and models",
            "Training loops and callbacks",
            "Model checkpointing and saving",
          ],
          keyPoints: [
            "Choose one framework and master it (PyTorch recommended)",
            "Learn to read framework documentation",
            "Practice debugging GPU training",
            "Understand computational graphs",
          ],
          projects: [
            "Image classifier using transfer learning",
            "Custom neural network architecture",
            "Multi-output regression model",
          ],
        },
        {
          name: "Computer Vision",
          time: "6-7 weeks",
          topics: [
            "Convolutional Neural Networks (CNNs)",
            "Image preprocessing and augmentation",
            "Popular architectures (ResNet, VGG, EfficientNet)",
            "Object detection (YOLO, R-CNN)",
            "Image segmentation and GANs",
          ],
          keyPoints: [
            "Understand convolution operations deeply",
            "Learn transfer learning for efficiency",
            "Practice with real image datasets",
            "Experiment with data augmentation",
          ],
          projects: [
            "Custom image classifier for your domain",
            "Object detection system",
            "Face recognition application",
          ],
        },
        {
          name: "Natural Language Processing",
          time: "6-7 weeks",
          topics: [
            "Text preprocessing and tokenization",
            "Word embeddings (Word2Vec, GloVe)",
            "Recurrent Neural Networks (RNNs, LSTMs)",
            "Transformers and attention mechanisms",
            "BERT, GPT, and large language models",
          ],
          keyPoints: [
            "Understand transformer architecture thoroughly",
            "Learn to use pre-trained models (Hugging Face)",
            "Practice on diverse NLP tasks",
            "Stay updated with latest LLM developments",
          ],
          projects: ["Sentiment analysis system", "Text summarization tool", "Chatbot using transformers"],
        },
      ],
    },
    {
      level: "Advanced Topics & Deployment",
      duration: "3-4 months",
      skills: [
        {
          name: "MLOps & Model Deployment",
          time: "5-6 weeks",
          topics: [
            "Model versioning and experiment tracking",
            "Model serving (FastAPI, Flask)",
            "Docker containerization",
            "Cloud deployment (AWS, GCP, Azure)",
            "CI/CD for ML pipelines",
          ],
          keyPoints: [
            "Learn to productionize models",
            "Practice monitoring model performance",
            "Understand model drift and retraining",
            "Master at least one cloud platform",
          ],
          projects: ["REST API for ML model", "Dockerized ML application", "End-to-end MLOps pipeline"],
        },
        {
          name: "Advanced Deep Learning",
          time: "4-5 weeks",
          topics: [
            "Generative Adversarial Networks (GANs)",
            "Reinforcement Learning basics",
            "AutoML and neural architecture search",
            "Model optimization and quantization",
            "Edge deployment and TensorFlow Lite",
          ],
          keyPoints: [
            "Experiment with cutting-edge techniques",
            "Understand trade-offs in model complexity",
            "Learn to optimize for production",
            "Stay current with research papers",
          ],
          projects: ["GAN for image generation", "RL agent for game playing", "Optimized model for mobile deployment"],
        },
        {
          name: "Ethics & Best Practices",
          time: "2-3 weeks",
          topics: [
            "AI ethics and responsible AI",
            "Bias detection and mitigation",
            "Model interpretability (SHAP, LIME)",
            "Privacy-preserving ML",
            "Fairness in machine learning",
          ],
          keyPoints: [
            "Always consider ethical implications",
            "Learn to explain model decisions",
            "Test for bias in your models",
            "Practice transparent AI development",
          ],
          projects: [
            "Bias audit of existing model",
            "Interpretable ML model with explanations",
            "Fair ML system design",
          ],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/roadmaps" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to Roadmaps
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">AI/ML Engineer Roadmap</h1>
            </div>
            <p className="text-lg text-muted-foreground text-balance">
              Build intelligent systems with machine learning and artificial intelligence from fundamentals to advanced
              topics
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Steps */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {roadmapSteps.map((step, stepIndex) => (
            <div key={stepIndex}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {stepIndex + 1}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{step.level}</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Estimated: {step.duration}</span>
                  </div>
                </div>
              </div>

              <div className="ml-6 pl-6 border-l-2 space-y-6">
                {step.skills.map((skill, skillIndex) => (
                  <Card key={skillIndex} className="border-2">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-lg mb-2">{skill.name}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>Time to learn: {skill.time}</span>
                          </div>
                        </div>
                        <BookOpen className="w-6 h-6 text-primary shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold mb-3">
                          <Code className="w-4 h-4 text-primary" />
                          <span>Topics to Learn:</span>
                        </div>
                        <ul className="space-y-2">
                          {skill.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-sm font-semibold mb-3">Key Learning Points:</div>
                        <ul className="space-y-2">
                          {skill.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-primary font-bold shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-sm font-semibold mb-3">Suggested Projects:</div>
                        <div className="grid gap-2">
                          {skill.projects.map((project, i) => (
                            <div key={i} className="text-sm px-3 py-2 bg-primary/5 border border-primary/20 rounded-md">
                              {project}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-muted/50 border-y">
        <div className="container mx-auto px-4 py-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Build AI Solutions?</h3>
          <p className="text-muted-foreground mb-6 text-balance">
            Start with Kaggle competitions and build a strong ML portfolio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/preparation">Practice ML Interview Questions</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/roadmaps/data-science">View Data Science Roadmap</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
