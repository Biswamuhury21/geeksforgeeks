# DevFix: Turn Coding Errors into Understandable Solutions

> **"Turn coding errors into understandable solutions."**

**DevFix** is a web-based developer tool engineered to solve confusing error messages, stack traces, and compiler exceptions through an intuitive, 4-step workflow.

---

## 🎯 The 4-Step Problem Statement

| Step | Stage | Description |
|:---:|---|---|
| **Step 1** | **Enter an Error** | Paste any raw stack trace, exception, compiler warning, or runtime crash message (or test with 1-click Quick Samples). |
| **Step 2** | **Select a Programming Language** | Choose from Python, JavaScript / TypeScript, Java, C++, Go, Rust, or SQL (with Auto-Detect capability). |
| **Step 3** | **Understand the Problem** | Breaks down the error into **Plain English**, isolates the **Root Cause**, and highlights **Common Triggers**. |
| **Step 4** | **Provide a Suggested Solution** | Delivers an actionable, tested **Code Fix**, side-by-side comparison, copyable snippet, and **Proactive Prevention Tips**. |

---

## 🚀 Live Demo & How to Run

The application runs locally without any extra build dependencies (pure HTML5, CSS3, and JavaScript):

```bash
# Navigate to the workspace
cd /Users/biswadeepmuhury/geeksforgeeks

# Start the local HTTP server
python3 -m http.server 8080
```

Open **[http://localhost:8080](http://localhost:8080)** in your browser.

---

## 🛠️ Key Features

- **Multi-Language Knowledge Engine**:
  - **Python**: `IndexError: list index out of range`, `TypeError`, `KeyError`, `AttributeError`, `IndentationError`, etc.
  - **JavaScript / TS**: `TypeError: Cannot read properties of undefined`, `... is not a function`, Promise rejections.
  - **Java**: `NullPointerException`, `ArrayIndexOutOfBoundsException`, `ClassCastException`.
  - **C++**: `Segmentation fault (core dumped)`, pointer dereference faults, bounds violations.
  - **Git & CLI**: Merge conflicts, unmerged paths, command errors.
  - **Heuristic Fallback Analyzer**: Formats and analyzes any arbitrary custom error log.
- **Developer-Centric UX**:
  - Dark mode glassmorphic UI with responsive layout.
  - Quick Samples selector for testing with 1 click.
  - Step Progress tracker visually linking Steps 1 → 2 → 3 → 4.
  - One-click copy buttons for solutions with toast feedback.
  - Light/Dark theme toggle.

---

## 📂 Project Structure

```text
geeksforgeeks/
├── index.html     # DevFix Web UI & 4-step workflow structure
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
