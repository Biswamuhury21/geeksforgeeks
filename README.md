# AlgoTester: Turn Coding Errors into Understandable Solutions

> **"Turn coding errors into understandable solutions."**

**AlgoTester** is a web-based developer tool engineered to solve confusing error messages, stack traces, and compiler exceptions through an intuitive, 4-step workflow.

---

## 🎯 The 4-Step Problem Statement

| Step | Stage | Description |
|:---:|---|---|
| **Step 1** | **Enter an Error** | Paste any raw stack trace, exception, compiler warning, or runtime crash message (or test with 1-click Quick Samples). |
| **Step 2** | **Select a Programming Language** | Choose from Python, JavaScript / TypeScript, Java, C++, Go, Rust, or SQL (with Auto-Detect capability). |
| **Step 3** | **Understand the Problem** | Breaks down the error into **Plain English**, isolates the **Root Cause**, and highlights **Common Triggers**. |
| **Step 4** | **Provide a Suggested Solution** | Delivers an actionable, tested **Code Fix**, side-by-side comparison, copyable snippet, and **Proactive Prevention Tips**. |

---

## 🚀 Live Demo

**[👉 Try AlgoTester Live](https://Biswamuhury21.github.io/geeksforgeeks/)**

The application is deployed securely via GitHub Pages. It runs entirely on the client-side using pure HTML5, CSS3, and JavaScript, meaning no installation or local server is required to use it!


---

## 🛠️ Key Features

- **Multi-Language Knowledge Engine (45+ Curated Error Diagnoses)**:
  - **Python**: `ZeroDivisionError: division by zero`, `IndexError: list index out of range`, `KeyError`, `TypeError`, `ValueError`, `AttributeError`, `NameError`, `IndentationError`, `SyntaxError`, `RecursionError`, `UnboundLocalError`, `FileNotFoundError`, `ModuleNotFoundError`.
  - **C / C++**: `Segmentation fault (SIGSEGV core dumped)`, `Double Free / Corruption (SIGABRT)`, `Floating Point Exception (SIGFPE div/0)`, `Linker Error: Undefined reference`, `std::out_of_range`, `std::bad_alloc`, `Stack Overflow`, Compiler syntax errors.
  - **Java**: `NullPointerException`, `ArithmeticException: / by zero`, `ArrayIndexOutOfBoundsException`, `ClassCastException`, `NumberFormatException`, `ConcurrentModificationException`, `OutOfMemoryError: Java heap space`, `StackOverflowError`.
  - **Rust**: `error[E0499]: cannot borrow as mutable more than once`, `error[E0382]: use of moved value`, `error[E0597]: borrowed value does not live long enough`, `panic: index out of bounds`, `panic: Option::unwrap() on None`, `panic: attempt to divide by zero`.
  - **Go (Golang)**: `panic: runtime error: index out of range`, `panic: nil pointer dereference`, `fatal error: all goroutines are asleep (deadlock)`, `panic: integer divide by zero`, `panic: assignment to entry in nil map`, `compiler: declared and not used`.
  - **JavaScript / TypeScript**: `TypeError: Cannot read properties of undefined`, `... is not a function`, `ReferenceError`, Unhandled Promise rejections.
  - **SQL**: Syntax errors (ERROR 1064), malformed queries.
  - **Git & CLI**: Merge conflicts, unmerged paths, command errors.
  - **Heuristic Fallback Analyzer**: Formats and analyzes any arbitrary custom error log or stack trace.
- **Developer-Centric UX**:
  - Dark mode glassmorphic UI with responsive layout.
  - Quick Samples selector with 1-click test traces for all major languages.
  - Step Progress tracker visually linking Steps 1 → 2 → 3 → 4.
  - One-click copy buttons for solutions with toast feedback.
  - Light/Dark theme toggle.

---

## 📂 Project Structure

```text
geeksforgeeks/
├── index.html     # AlgoTester Web UI & 4-step workflow structure
├── style.css      # Developer-first glassmorphic styling & responsive design
├── app.js         # Core diagnosis engine, error database & interactive logic
├── code.py        # Python algorithmic solutions (GFG practice)
└── README.md      # Repository & challenge documentation
```

---

## 🐍 Python Solutions (`code.py`)

This repository also contains solutions for problem-solving questions:
1. **Find Largest Element in an Array** ([`find_largest`](code.py#L4-L14))
2. **Find Greatest Between Three Integers** ([`greatest_int`](code.py#L27-L40))

Run via terminal:
```bash
python3 code.py
```
