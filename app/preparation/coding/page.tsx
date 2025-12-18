"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, CheckCircle2, XCircle, Code } from "lucide-react"

export default function CodingPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [answeredToday, setAnsweredToday] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  useEffect(() => {
    const today = new Date().toDateString()
    const lastDate = localStorage.getItem("codingLastDate")
    if (lastDate === today) {
      setAnsweredToday(Number.parseInt(localStorage.getItem("codingAnsweredToday") || "0"))
      setCorrectAnswers(Number.parseInt(localStorage.getItem("codingCorrectToday") || "0"))
    } else {
      localStorage.setItem("codingLastDate", today)
      localStorage.setItem("codingAnsweredToday", "0")
      localStorage.setItem("codingCorrectToday", "0")
    }
  }, [])

  const questions = [
    {
      id: 1,
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      correctAnswer: 1,
      explanation: "Binary search divides the search space in half each time, resulting in O(log n) time complexity.",
      topic: "Algorithms",
      difficulty: "Easy",
    },
    {
      id: 2,
      question: "Which data structure uses LIFO (Last In First Out) principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correctAnswer: 1,
      explanation: "Stack follows LIFO principle where the last element added is the first one removed.",
      topic: "Data Structures",
      difficulty: "Easy",
    },
    {
      id: 3,
      question: "What will be the output of: print(type([]) == list)?",
      options: ["True", "False", "Error", "None"],
      correctAnswer: 0,
      explanation: "[] creates an empty list, and type([]) returns <class 'list'>, which equals list, so True.",
      topic: "Python",
      difficulty: "Easy",
    },
    {
      id: 4,
      question: "In a max heap with n elements, what is the time complexity to find the maximum element?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctAnswer: 0,
      explanation: "In a max heap, the maximum element is always at the root, accessible in O(1) time.",
      topic: "Heaps",
      difficulty: "Easy",
    },
    {
      id: 5,
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
      correctAnswer: 1,
      explanation: "Quick Sort has O(n log n) average-case complexity, better than O(n²) of other options.",
      topic: "Sorting",
      difficulty: "Medium",
    },
    {
      id: 6,
      question: "What is the space complexity of merge sort?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: 2,
      explanation: "Merge sort requires O(n) auxiliary space for merging the subarrays.",
      topic: "Sorting",
      difficulty: "Medium",
    },
    {
      id: 7,
      question: "In a binary search tree, what is the worst-case time complexity for search?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctAnswer: 2,
      explanation: "In worst case (skewed tree), BST degenerates to a linked list with O(n) search time.",
      topic: "Trees",
      difficulty: "Medium",
    },
    {
      id: 8,
      question: "Which of these problems can be solved using Dynamic Programming?",
      options: ["All of these", "Fibonacci numbers", "Longest Common Subsequence", "Knapsack problem"],
      correctAnswer: 0,
      explanation: "All mentioned problems have overlapping subproblems and optimal substructure, ideal for DP.",
      topic: "Dynamic Programming",
      difficulty: "Medium",
    },
    {
      id: 9,
      question: "What is the output of: console.log(0.1 + 0.2 === 0.3) in JavaScript?",
      options: ["true", "false", "undefined", "NaN"],
      correctAnswer: 1,
      explanation: "Due to floating-point precision issues, 0.1 + 0.2 equals 0.30000000000000004, not exactly 0.3.",
      topic: "JavaScript",
      difficulty: "Medium",
    },
    {
      id: 10,
      question: "Which graph algorithm finds the shortest path in a weighted graph?",
      options: ["DFS", "BFS", "Dijkstra's", "Topological Sort"],
      correctAnswer: 2,
      explanation: "Dijkstra's algorithm finds shortest paths from source to all vertices in weighted graphs.",
      topic: "Graphs",
      difficulty: "Medium",
    },
    {
      id: 11,
      question: "What is the time complexity of inserting an element at the beginning of a linked list?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: 0,
      explanation: "Inserting at the beginning just requires updating the head pointer, taking constant time O(1).",
      topic: "Linked Lists",
      difficulty: "Easy",
    },
    {
      id: 12,
      question: "Which of these is NOT a stable sorting algorithm?",
      options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Bubble Sort"],
      correctAnswer: 1,
      explanation: "Quick Sort is not stable as it may change the relative order of equal elements.",
      topic: "Sorting",
      difficulty: "Medium",
    },
    {
      id: 13,
      question: "What is a hash collision?",
      options: [
        "When hash function returns negative value",
        "When two keys map to same hash value",
        "When hash table is full",
        "When hash function fails",
      ],
      correctAnswer: 1,
      explanation: "Hash collision occurs when different keys produce the same hash value.",
      topic: "Hashing",
      difficulty: "Easy",
    },
    {
      id: 14,
      question: "In a complete binary tree with n nodes, what is the height?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(√n)"],
      correctAnswer: 1,
      explanation: "A complete binary tree has height O(log n) as each level doubles the nodes.",
      topic: "Trees",
      difficulty: "Medium",
    },
    {
      id: 15,
      question: "Which pattern is used to solve the 'Sliding Window' problems?",
      options: ["Two Pointers", "Recursion", "Divide and Conquer", "Backtracking"],
      correctAnswer: 0,
      explanation: "Sliding window problems typically use two pointers to maintain a window over data.",
      topic: "Problem Patterns",
      difficulty: "Medium",
    },
    {
      id: 16,
      question: "What is the space complexity of recursive Fibonacci implementation?",
      options: ["O(1)", "O(log n)", "O(n)", "O(2ⁿ)"],
      correctAnswer: 2,
      explanation: "Recursive Fibonacci uses O(n) space for the call stack (maximum depth of recursion).",
      topic: "Recursion",
      difficulty: "Medium",
    },
    {
      id: 17,
      question: "Which algorithm is used to detect cycles in a linked list?",
      options: ["Binary Search", "Floyd's Cycle Detection", "Kadane's Algorithm", "Dijkstra's"],
      correctAnswer: 1,
      explanation: "Floyd's Cycle Detection (Tortoise and Hare) uses two pointers to detect cycles.",
      topic: "Linked Lists",
      difficulty: "Medium",
    },
    {
      id: 18,
      question: "What is the time complexity of accessing an element in a hash table (average case)?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: 0,
      explanation: "Hash tables provide O(1) average-case access through direct key-to-index mapping.",
      topic: "Hashing",
      difficulty: "Easy",
    },
    {
      id: 19,
      question: "In BFS traversal of a graph, which data structure is primarily used?",
      options: ["Stack", "Queue", "Priority Queue", "Array"],
      correctAnswer: 1,
      explanation: "BFS uses a queue to explore nodes level by level in FIFO order.",
      topic: "Graphs",
      difficulty: "Easy",
    },
    {
      id: 20,
      question: "What is memoization in dynamic programming?",
      options: [
        "A sorting technique",
        "Storing results of expensive function calls",
        "A graph traversal method",
        "A memory allocation strategy",
      ],
      correctAnswer: 1,
      explanation: "Memoization stores results of function calls to avoid redundant computations in DP.",
      topic: "Dynamic Programming",
      difficulty: "Medium",
    },
  ]

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowAnswer(true)

    const newAnswered = answeredToday + 1
    const newCorrect = answerIndex === currentQ.correctAnswer ? correctAnswers + 1 : correctAnswers

    setAnsweredToday(newAnswered)
    setCorrectAnswers(newCorrect)

    localStorage.setItem("codingAnsweredToday", newAnswered.toString())
    localStorage.setItem("codingCorrectToday", newCorrect.toString())
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowAnswer(false)
    }
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="min-h-screen">
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link href="/preparation" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to Preparation
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-10 h-10 text-primary" />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Daily Coding Questions</h1>
                <p className="text-muted-foreground">Master data structures and algorithms with 20 daily questions</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-secondary/50 rounded-lg flex gap-6">
              <div>
                <div className="text-2xl font-bold text-primary">{answeredToday}/20</div>
                <div className="text-sm text-muted-foreground">Answered Today</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">
                  {answeredToday > 0 ? Math.round((correctAnswers / answeredToday) * 100) : 0}%
                </div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm">
              <span className="text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="ml-3 px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                {currentQ.topic}
              </span>
              <span className="ml-2 px-2 py-1 bg-secondary rounded-md text-xs font-medium">{currentQ.difficulty}</span>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl text-balance leading-relaxed">{currentQ.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswer === index
                  const isCorrect = index === currentQ.correctAnswer
                  const showResult = showAnswer && isSelected

                  return (
                    <Button
                      key={index}
                      variant={isSelected ? "default" : "outline"}
                      className={`w-full justify-start text-left h-auto py-3 px-4 ${
                        showResult && isCorrect
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : showResult && !isCorrect
                            ? "bg-destructive hover:bg-destructive text-destructive-foreground"
                            : ""
                      }`}
                      onClick={() => !showAnswer && handleAnswer(index)}
                      disabled={showAnswer}
                    >
                      <span className="flex items-center gap-3 w-full">
                        <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                        <span className="flex-1">{option}</span>
                        {showResult && isCorrect && <CheckCircle2 className="w-5 h-5" />}
                        {showResult && !isCorrect && <XCircle className="w-5 h-5" />}
                      </span>
                    </Button>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {showAnswer && (
            <Card className="mb-6 border-primary/50">
              <CardHeader>
                <CardTitle className="text-lg">
                  {selectedAnswer === currentQ.correctAnswer ? "Correct! 🎉" : "Incorrect"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Correct Answer:</strong> {String.fromCharCode(65 + currentQ.correctAnswer)}.{" "}
                  {currentQ.options[currentQ.correctAnswer]}
                </p>
                <p className="text-sm leading-relaxed">
                  <strong>Explanation:</strong> {currentQ.explanation}
                </p>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-4">
            {showAnswer && currentQuestion < questions.length - 1 && (
              <Button onClick={nextQuestion} className="flex-1">
                Next Question <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
            {showAnswer && currentQuestion === questions.length - 1 && (
              <div className="flex-1 space-y-4">
                <Card className="bg-primary/5 border-primary/30">
                  <CardContent className="pt-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="text-lg font-semibold mb-2">Excellent Work!</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      You've completed all 20 coding questions. Your score: {correctAnswers}/20 (
                      {Math.round((correctAnswers / 20) * 100)}%)
                    </p>
                    <Button asChild className="w-full">
                      <Link href="/preparation">Back to Preparation</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
