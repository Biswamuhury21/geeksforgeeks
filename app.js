/**
 * AlgoTester - Turn Coding Errors into Understandable Solutions
 * 4-Step Interactive Developer Tool Engine
 */

// Error Database containing curated diagnoses and solutions
const ERROR_KNOWLEDGE_BASE = [
  // --- PYTHON ---
  {
    id: "py_index",
    lang: "python",
    match: /(IndexError|list index out of range)/i,
    errorType: "IndexError: list index out of range",
    severity: "Medium",
    plainEnglish: "Your program attempted to access an element at an index that doesn't exist in the list. Python lists are 0-indexed, meaning a list with 3 elements only has indices 0, 1, and 2.",
    rootCause: "The requested index is equal to or greater than `len(your_list)`, or a negative index exceeded `-len(your_list)`.",
    triggers: [
      "Accessing `arr[len(arr)]` instead of `arr[len(arr) - 1]` (off-by-one error).",
      "Attempting to read from an empty list `[]` without verifying its length.",
      "A loop counter or pointer incrementing beyond the array boundaries."
    ],
    strategy: "Safeguard list accesses by validating the length with `if len(arr) > index:`, or iterate directly over items rather than indexing.",
    codeSolution: `# ❌ Problematic Code:
arr = [10, 20, 30]
print(arr[3])  # IndexError: only indices 0, 1, 2 exist!

# ✅ Fixed Code (Option 1: Safe bounds check):
index = 3
if index < len(arr):
    print(arr[index])
else:
    print(f"Index {index} is out of bounds (length: {len(arr)})")

# ✅ Fixed Code (Option 2: Direct iteration):
for item in arr:
    print(item)`,
    preventionTip: "Prefer Pythonic iterations like `for item in arr:` or `for i, item in enumerate(arr):` over manual index increments."
  },
  {
    id: "py_type",
    lang: "python",
    match: /(TypeError: can only concatenate str|unsupported operand type)/i,
    errorType: "TypeError: unsupported operand type(s)",
    severity: "Low to Medium",
    plainEnglish: "You are trying to perform an operation (like adding `+`, subtracting, or multiplying) between two incompatible data types, such as combining an integer with a string.",
    rootCause: "Python is strongly typed and will not implicitly convert types like numbers to strings when using the `+` operator.",
    triggers: [
      "Adding a string and integer directly: `'Score: ' + 100`.",
      "Reading user input via `input()` (which returns a `str`) and using it directly in arithmetic without `int()`.",
      "Passing `None` to a mathematical or string function."
    ],
    strategy: "Explicitly cast values to their appropriate type (`int()`, `float()`, or `str()`), or use modern f-strings for string interpolation.",
    codeSolution: `# ❌ Problematic Code:
age = 25
message = "I am " + age + " years old"  # TypeError!

# ✅ Fixed Code (Recommended - f-strings):
age = 25
message = f"I am {age} years old"
print(message)

# ✅ Fixed Code (Explicit type cast):
message = "I am " + str(age) + " years old"`,
    preventionTip: "Use Python 3 f-strings `f'{variable}'` for formatting instead of string concatenation."
  },
  {
    id: "py_key",
    lang: "python",
    match: /(KeyError)/i,
    errorType: "KeyError",
    severity: "Low",
    plainEnglish: "Your program tried to retrieve a value from a dictionary using a key that does not exist.",
    rootCause: "Accessing `dict[key]` raises `KeyError` when `key` is absent from the dictionary mapping.",
    triggers: [
      "Typo in key name (e.g. `'username'` vs `'userName'`).",
      "Assuming an API response or JSON payload always contains a specific optional key.",
      "Accessing a nested dictionary before ensuring the parent key exists."
    ],
    strategy: "Use the safe dictionary method `.get(key, default)` or verify membership using `if key in dict:`.",
    codeSolution: `# ❌ Problematic Code:
user = {"name": "Alice"}
email = user["email"]  # KeyError: 'email'

# ✅ Fixed Code (Option 1: Safe .get() with fallback):
email = user.get("email", "no-email@example.com")
print(email)

# ✅ Fixed Code (Option 2: Membership check):
if "email" in user:
    print(user["email"])
else:
    print("Email key not found.")`,
    preventionTip: "Always use `dict.get('key', fallback)` when dealing with external API data, user inputs, or optional fields."
  },
  {
    id: "py_attr",
    lang: "python",
    match: /(AttributeError: 'NoneType' object has no attribute)/i,
    errorType: "AttributeError",
    severity: "Medium",
    plainEnglish: "You tried to access a property or call a method on a variable that is currently `None`.",
    rootCause: "The variable evaluated to `NoneType` instead of the expected object type, meaning the expected method doesn't exist on it.",
    triggers: [
      "A function returning `None` instead of an object.",
      "An API call failing and returning `None` silently.",
      "Forgetting to return a value from a function."
    ],
    strategy: "Check where the variable is assigned and ensure it handles `None` cases properly.",
    codeSolution: `# ❌ Problematic Code:
user = get_user()
print(user.name)  # AttributeError if get_user() returned None

# ✅ Fixed Code:
user = get_user()
if user is not None:
    print(user.name)
else:
    print("User not found.")`,
    preventionTip: "Use type hints `Optional[User]` and always add `is not None` checks for nullable variables."
  },
  {
    id: "py_indent",
    lang: "python",
    match: /(IndentationError|expected an indented block)/i,
    errorType: "IndentationError",
    severity: "Low",
    plainEnglish: "Python uses indentation (spaces or tabs) to define blocks of code. Your code has inconsistent spacing.",
    rootCause: "A structural block (like `if`, `for`, `def`) expects the next line to be indented, but it wasn't, or spaces and tabs were mixed.",
    triggers: [
      "Forgetting to indent the body of an `if` statement or `for` loop.",
      "Mixing tabs and spaces in the same file."
    ],
    strategy: "Configure your editor to use spaces instead of tabs (usually 4 spaces) and check the line mentioned in the error.",
    codeSolution: `# ❌ Problematic Code:
def hello():
print("Hello")  # IndentationError

# ✅ Fixed Code:
def hello():
    print("Hello")`,
    preventionTip: "Use a linter or formatter like `black` or `ruff` to automatically format your Python code."
  },

  // --- JAVASCRIPT / TYPESCRIPT ---
  {
    id: "js_undef",
    lang: "javascript",
    match: /(Cannot read propert(y|ies) of undefined|Cannot read propert(y|ies) of null)/i,
    errorType: "TypeError: Cannot read properties of undefined/null",
    severity: "High",
    plainEnglish: "You attempted to access a property or call a method on a variable that evaluates to `undefined` or `null` instead of an actual object.",
    rootCause: "The object on the left side of the dot `.` operator does not exist or has not been initialized yet.",
    triggers: [
      "Accessing nested fields before an asynchronous API call completes (`user.profile.avatar`).",
      "Calling `.map()` or `.filter()` on an array variable before data has loaded.",
      "A function returning nothing (which defaults to `undefined`)."
    ],
    strategy: "Use Optional Chaining (`?.`) and Nullish Coalescing (`??`) to safely access nested properties without crashing.",
    codeSolution: `// ❌ Problematic Code:
const response = {};
console.log(response.user.name); // TypeError: Cannot read properties of undefined

// ✅ Fixed Code (Modern Optional Chaining):
console.log(response?.user?.name ?? "Guest User");

// ✅ Fixed Code (Conditional Guard):
if (response && response.user) {
  console.log(response.user.name);
} else {
  console.log("User data unavailable.");
}`,
    preventionTip: "Adopt optional chaining `obj?.prop` and always define fallback default states (e.g., `useState([])`) in UI frameworks."
  },
  {
    id: "js_func",
    lang: "javascript",
    match: /(is not a function)/i,
    errorType: "TypeError: ... is not a function",
    severity: "Medium",
    plainEnglish: "Your script called something with parentheses `()` expecting a function, but the variable held a different data type (or was `undefined`).",
    rootCause: "Invoking a value whose type is not `Function` (e.g. `undefined()`, `string()`, or `null()`).",
    triggers: [
      "Mismatched import/export (e.g. named import `{ foo }` instead of default `import foo`).",
      "Calling an array method on an object or string.",
      "A callback prop not being passed into a component."
    ],
    strategy: "Verify the variable's type before invoking with `typeof fn === 'function'` or inspect your module import statements.",
    codeSolution: `// ❌ Problematic Code:
let calculateTotal;
calculateTotal(); // TypeError: calculateTotal is not a function

// ✅ Fixed Code (Safe invocation guard):
if (typeof calculateTotal === "function") {
  calculateTotal();
} else {
  console.warn("calculateTotal handler was not provided.");
}`,
    preventionTip: "Double check export styles (`module.exports` vs `export default`) and validate callback props with default no-op functions (`() => {}`)."
  },
  {
    id: "js_ref",
    lang: "javascript",
    match: /(ReferenceError: .* is not defined)/i,
    errorType: "ReferenceError",
    severity: "Medium",
    plainEnglish: "You are trying to use a variable or function that hasn't been declared yet.",
    rootCause: "The JavaScript engine looked for the identifier in the current and global scope but couldn't find it.",
    triggers: [
      "Typo in a variable name.",
      "Using a variable outside of its block scope (`let` or `const` used outside their `{}`).",
      "Forgetting to import a module or library."
    ],
    strategy: "Check for spelling mistakes, ensure the variable is declared before use, or check your imports.",
    codeSolution: `// ❌ Problematic Code:
console.log(myVar); // ReferenceError

// ✅ Fixed Code:
const myVar = "Hello";
console.log(myVar);`,
    preventionTip: "Always declare variables using `const` or `let` at the top of their scope and double-check spelling."
  },
  {
    id: "js_promise",
    lang: "javascript",
    match: /(UnhandledPromiseRejectionWarning|Uncaught \(in promise\))/i,
    errorType: "Unhandled Promise Rejection",
    severity: "Medium",
    plainEnglish: "An asynchronous operation (like fetching data) failed, but you didn't provide a way to handle the error.",
    rootCause: "A Promise was rejected (threw an error), but there was no `.catch()` block or `try...catch` around the `await` statement.",
    triggers: [
      "A network request failing.",
      "An async function throwing an error internally."
    ],
    strategy: "Always attach `.catch()` to Promises, or wrap `await` calls in a `try...catch` block.",
    codeSolution: `// ❌ Problematic Code:
async function fetchData() {
  const res = await fetch('/api/data');
}

// ✅ Fixed Code:
async function fetchData() {
  try {
    const res = await fetch('/api/data');
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}`,
    preventionTip: "Make it a habit to always handle potential errors in asynchronous code."
  },

  // --- JAVA ---
  {
    id: "java_npe",
    lang: "java",
    match: /(NullPointerException)/i,
    errorType: "java.lang.NullPointerException",
    severity: "High",
    plainEnglish: "Java tried to execute an operation on an object reference that currently points to nothing (`null`).",
    rootCause: "Dereferencing a variable whose memory pointer has not been allocated to a concrete instance.",
    triggers: [
      "Invoking a method on an uninstantiated object (`User u = null; u.getName();`).",
      "Autoboxing a `null` wrapper object (`Integer`) into a primitive (`int`).",
      "Calling `.length` on a null array."
    ],
    strategy: "Add null checks, leverage `Optional<T>`, or place constant strings on the left side in `.equals()` comparisons.",
    codeSolution: `// ❌ Problematic Code:
String input = null;
if (input.equals("ADMIN")) { ... } // Throws NullPointerException!

// ✅ Fixed Code (Option 1: YODA conditions for string constants):
if ("ADMIN".equals(input)) {
    System.out.println("Authorized");
}

// ✅ Fixed Code (Option 2: Null check):
if (input != null && input.equals("ADMIN")) {
    System.out.println("Authorized");
}

// ✅ Fixed Code (Option 3: Modern Java Optional):
Optional.ofNullable(input).ifPresent(System.out::println);`,
    preventionTip: "Use `Objects.requireNonNull()` or `Optional<T>` and never return raw `null` from methods that produce collections."
  },
  {
    id: "java_oob",
    lang: "java",
    match: /(ArrayIndexOutOfBoundsException|IndexOutOfBoundsException)/i,
    errorType: "ArrayIndexOutOfBoundsException",
    severity: "Medium",
    plainEnglish: "You tried to access an array element at an index that doesn't exist.",
    rootCause: "The index is negative or greater than or equal to the array's length.",
    triggers: [
      "Looping `<= array.length` instead of `< array.length`.",
      "Accessing an empty array."
    ],
    strategy: "Ensure your loop conditions use `< length` and validate the index before accessing.",
    codeSolution: `// ❌ Problematic Code:
int[] arr = {1, 2, 3};
System.out.println(arr[3]); // Throws Exception

// ✅ Fixed Code:
if (arr.length > 3) {
    System.out.println(arr[3]);
}`,
    preventionTip: "Use enhanced for-loops (`for (int item : arr)`) or bounds checking."
  },

  // --- C / C++ ---
  {
    id: "cpp_segfault",
    lang: "cpp",
    match: /(segmentation fault|core dumped|SIGSEGV)/i,
    errorType: "Segmentation Fault (core dumped)",
    severity: "Critical",
    plainEnglish: "The operating system forcibly terminated your program because it attempted to access a memory location it is not allowed to read or write.",
    rootCause: "Hardware-level memory protection fault caused by invalid pointer dereferencing or buffer overruns.",
    triggers: [
      "Dereferencing a null or dangling pointer.",
      "Writing past the bounds of an allocated array (`arr[100]` on size 10).",
      "Stack overflow caused by infinite recursion."
    ],
    strategy: "Use modern C++ smart pointers (`std::unique_ptr`, `std::shared_ptr`), `std::vector::at()` for bounds-checked access, and initialize pointers to `nullptr`.",
    codeSolution: `// ❌ Problematic Code:
int *ptr = nullptr;
*ptr = 42; // Segmentation fault!

// ✅ Fixed Code (Pointers check):
int value = 42;
int *ptr = &value;
if (ptr != nullptr) {
    std::cout << *ptr << std::endl;
}

// ✅ Recommended (Modern C++ std::vector with bounds checking):
#include <vector>
std::vector<int> numbers = {1, 2, 3};
try {
    std::cout << numbers.at(5); // Throws std::out_of_range instead of crashing!
} catch (const std::out_of_range& e) {
    std::cerr << "Safe catch: " << e.what() << std::endl;
}`,
    preventionTip: "Compile with debug flags and AddressSanitizer (`g++ -g -fsanitize=address main.cpp`) to instantly pinpoint memory violations."
  },
  {
    id: "cpp_undefined",
    lang: "cpp",
    match: /(undefined reference to|unresolved external symbol)/i,
    errorType: "Linker Error: Undefined Reference",
    severity: "Medium",
    plainEnglish: "The compiler found your function declaration, but the linker couldn't find the actual implementation (the code for the function) when building the final program.",
    rootCause: "A function or variable was declared but not defined, or a necessary library wasn't linked during compilation.",
    triggers: [
      "Forgetting to write the body of a declared function.",
      "Not compiling all `.cpp` files together.",
      "Missing a library flag (like `-lm` or `-lpthread`) during linking."
    ],
    strategy: "Ensure all source files are included in the compilation command and check for missing function bodies.",
    codeSolution: `// ❌ Problematic (Declaration without definition):
void doSomething();
int main() { doSomething(); return 0; }

// ✅ Fixed (Add definition):
void doSomething() {
    // implementation
}
int main() { doSomething(); return 0; }`,
    preventionTip: "Use build systems like CMake or Makefiles to ensure all source files and libraries are linked correctly."
  },

  // --- GO ---
  {
    id: "go_bounds",
    lang: "go",
    match: /(panic: runtime error: index out of range)/i,
    errorType: "Panic: Index out of range",
    severity: "High",
    plainEnglish: "Your Go program crashed because it tried to access an element in a slice or array using an index that is outside its boundaries.",
    rootCause: "The index was negative or >= the length of the slice/array.",
    triggers: [
      "Off-by-one errors in `for` loops.",
      "Accessing a slice before appending items to it."
    ],
    strategy: "Check the length of the slice using `len()` before accessing it by index.",
    codeSolution: `// ❌ Problematic Code:
var mySlice []int
mySlice[0] = 10 // Panic!

// ✅ Fixed Code:
var mySlice []int
mySlice = append(mySlice, 10)
// OR
if len(mySlice) > 0 {
    mySlice[0] = 10
}`,
    preventionTip: "Use `range` to iterate over slices safely: `for i, val := range mySlice`."
  },

  // --- RUST ---
  {
    id: "rust_borrow",
    lang: "rust",
    match: /(cannot borrow .* as mutable more than once at a time)/i,
    errorType: "Borrow Checker Error",
    severity: "Medium",
    plainEnglish: "Rust's strict memory safety rules prevent you from having two mutable (changeable) references to the same data at the same time.",
    rootCause: "You tried to create a second `&mut` reference to a variable while the first one is still active.",
    triggers: [
      "Passing a mutable reference to two different functions simultaneously.",
      "Trying to mutate a collection while iterating over it."
    ],
    strategy: "Limit the scope of the mutable references using blocks `{}`, or restructure your code to avoid overlapping mutable borrows.",
    codeSolution: `// ❌ Problematic Code:
let mut x = 5;
let r1 = &mut x;
let r2 = &mut x; // Error!

// ✅ Fixed Code (Use scopes):
let mut x = 5;
{
    let r1 = &mut x;
    *r1 += 1;
} // r1 goes out of scope here
let r2 = &mut x;`,
    preventionTip: "Understand Rust's ownership and borrowing rules. Scopes `{}` are your friend for managing reference lifetimes."
  },

  // --- SQL ---
  {
    id: "sql_syntax",
    lang: "sql",
    match: /(Syntax error near|ERROR 1064)/i,
    errorType: "SQL Syntax Error",
    severity: "Low",
    plainEnglish: "Your database couldn't understand the SQL query because it has a typo or is missing a required keyword.",
    rootCause: "The query violates the SQL grammar rules for the specific database engine (MySQL, PostgreSQL, etc.).",
    triggers: [
      "Missing a comma between columns in a `SELECT` statement.",
      "Unclosed string quotes.",
      "Misspelled keywords (e.g., `SELEC` instead of `SELECT`)."
    ],
    strategy: "Carefully check the query around the area mentioned in the error message for typos or missing punctuation.",
    codeSolution: `-- ❌ Problematic Code:
SELECT id name FROM users;

-- ✅ Fixed Code:
SELECT id, name FROM users;`,
    preventionTip: "Format your SQL queries across multiple lines and use a database client with syntax highlighting."
  },

  // --- GENERAL / GIT ---
  {
    id: "git_conflict",
    lang: "general",
    match: /(Automatic merge failed|CONFLICT|merge conflict)/i,
    errorType: "Git Merge Conflict",
    severity: "Medium",
    plainEnglish: "Git cannot automatically combine changes from two branches because both modified the exact same lines in a file.",
    rootCause: "Divergent commit histories with overlapping changes.",
    triggers: [
      "Two developers edited the same lines and pushed to the same remote branch.",
      "Merging an outdated feature branch into `main` without recent rebase."
    ],
    strategy: "Open the conflicting file, locate the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), choose the desired code, then commit.",
    codeSolution: `# 1. View files in conflict:
git status

# 2. Inside the conflicted file, you will see:
<<<<<<< HEAD
your current branch changes
=======
incoming branch changes
>>>>>>> main

# 3. Edit the file to keep the correct lines and remove all markers.

# 4. Stage and complete the merge:
git add <conflicted-file>
git commit -m "chore: Resolve merge conflicts"`,
    preventionTip: "Pull frequently (`git pull --rebase origin main`) and keep feature branches small and short-lived."
  }
];

// Fallback intelligent parser for any arbitrary error
function parseGenericError(rawError, lang) {
  const lines = rawError.trim().split("\n");
  const firstLine = lines[0] || "Unknown Error";
  const lastLine = lines[lines.length - 1] || firstLine;

  let errorName = "Runtime / Execution Error";
  const errorMatch = rawError.match(/([A-Za-z]+Error|[A-Za-z]+Exception|error:\s*[^\n]+)/i);
  if (errorMatch) {
    errorName = errorMatch[0];
  }

  // Extract line numbers if available
  const lineMatch = rawError.match(/line\s+(\d+)/i) || rawError.match(/:(\d+):\d+/);
  const location = lineMatch ? \` around line \${lineMatch[1]}\` : "";

  return {
    errorType: errorName,
    severity: "Medium",
    plainEnglish: \`An exception occurred during execution\${location}. The runtime encountered an unexpected state or statement that halted execution: "\${lastLine}".\`,
    rootCause: \`The execution environment halted because a command, variable, or syntax rule did not conform to \${lang.toUpperCase()} runtime specifications.\`,
    triggers: [
      \`Syntax or structural anomaly\${location}.\`,
      "Mismatched function arguments or unhandled return states.",
      "Missing module dependencies or environment variables."
    ],
    strategy: \`Inspect the file\${location}. Check variable states right before the error using debug statements or try-catch blocks.\`,
    codeSolution: \`// 💡 Suggested Debugging Wrapper for \${lang.toUpperCase()}:

// 1. Wrap the suspect section in a defensive try/catch block:
try {
    // Suspect code here...
} catch (error) {
    console.error("Diagnostic catch:", error);
}

// 2. Validate input variables before executing the operation.\`,
    preventionTip: "Use static type analysis, linters (like ESLint, Ruff, or Clang-Tidy), and unit tests to catch runtime exceptions during development."
  };
}

// Application Controller
class AlgoTesterApp {
  constructor() {
    this.cacheDom();
    this.bindEvents();
    this.updateCharCount();
  }

  cacheDom() {
    this.dom = {
      errorInput: document.getElementById("error-input"),
      errorCharCount: document.getElementById("error-char-count"),
      codeContextInput: document.getElementById("code-context-input"),
      languageSelect: document.getElementById("language-select"),
      sampleSelect: document.getElementById("sample-select"),
      btnAnalyze: document.getElementById("btn-analyze-error"),
      btnClearInput: document.getElementById("btn-clear-input"),
      btnDetectLang: document.getElementById("btn-detect-lang"),
      toggleCodeContext: document.getElementById("toggle-code-context"),
      codeChevron: document.getElementById("code-chevron"),
      codeContextWrap: document.getElementById("code-context-wrap"),
      btnThemeToggle: document.getElementById("btn-theme-toggle"),
      
      stepNav1: document.getElementById("step-nav-1"),
      stepNav2: document.getElementById("step-nav-2"),
      stepNav3: document.getElementById("step-nav-3"),
      stepNav4: document.getElementById("step-nav-4"),
      
      emptyState: document.getElementById("empty-state"),
      solutionContent: document.getElementById("solution-content"),
      resultHeaderActions: document.getElementById("result-header-actions"),
      
      resErrorType: document.getElementById("res-error-type"),
      resSeverity: document.getElementById("res-severity"),
      resLangTag: document.getElementById("res-lang-tag"),
      resPlainEnglish: document.getElementById("res-plain-english"),
      resRootCause: document.getElementById("res-root-cause"),
      resTriggersList: document.getElementById("res-triggers-list"),
      resStrategy: document.getElementById("res-strategy"),
      resCodeSolution: document.getElementById("res-code-solution"),
      resPreventionTip: document.getElementById("res-prevention-tip"),
      
      btnCopySolution: document.getElementById("btn-copy-solution"),
      btnCopyCode: document.getElementById("btn-copy-code"),
      toast: document.getElementById("toast")
    };
  }

  bindEvents() {
    this.dom.errorInput.addEventListener("input", () => {
      this.updateCharCount();
    });

    this.dom.btnAnalyze.addEventListener("click", () => {
      this.analyzeError();
    });

    this.dom.btnClearInput.addEventListener("click", () => {
      this.dom.errorInput.value = "";
      this.dom.codeContextInput.value = "";
      this.updateCharCount();
      this.resetResults();
    });

    this.dom.sampleSelect.addEventListener("change", (e) => {
      this.loadSample(e.target.value);
    });

    this.dom.btnDetectLang.addEventListener("click", () => {
      this.autoDetectLanguage();
    });

    this.dom.toggleCodeContext.addEventListener("click", () => {
      const isOpen = this.dom.codeContextWrap.classList.toggle("open");
      this.dom.codeChevron.classList.toggle("open", isOpen);
    });

    this.dom.btnCopySolution.addEventListener("click", () => {
      this.copyAllSolution();
    });

    this.dom.btnCopyCode.addEventListener("click", () => {
      this.copyCodeSolution();
    });

    this.dom.btnThemeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
    });
  }

  updateCharCount() {
    const count = this.dom.errorInput.value.length;
    this.dom.errorCharCount.textContent = \`\${count} characters\`;
  }

  loadSample(sampleId) {
    const item = ERROR_KNOWLEDGE_BASE.find((x) => x.id === sampleId);
    if (!item) return;

    this.dom.languageSelect.value = item.lang;
    let sampleText = item.errorType;

    if (item.id === "py_index") {
      sampleText = \`Traceback (most recent call last):\\n  File "code.py", line 18, in question1\\n    print("Largest element:", find_largest(arr))\\n  File "code.py", line 11, in find_largest\\n    if arr[i] > max_num:\\nIndexError: list index out of range\`;
    } else if (item.id === "py_attr") {
      sampleText = \`AttributeError: 'NoneType' object has no attribute 'name'\`;
    } else if (item.id === "py_indent") {
      sampleText = \`IndentationError: expected an indented block\`;
    } else if (item.id === "js_undef") {
      sampleText = \`Uncaught TypeError: Cannot read properties of undefined (reading 'map')\\n    at renderList (app.js:42:15)\\n    at onLoad (index.html:12:3)\`;
    } else if (item.id === "js_ref") {
      sampleText = \`ReferenceError: myVar is not defined\`;
    } else if (item.id === "js_promise") {
      sampleText = \`UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().\`;
    } else if (item.id === "java_npe") {
      sampleText = \`Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.length()" because "str" is null\\n    at com.example.Main.process(Main.java:23)\\n    at com.example.Main.main(Main.java:8)\`;
    } else if (item.id === "java_oob") {
      sampleText = \`Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3\`;
    } else if (item.id === "cpp_segfault") {
      sampleText = \`Segmentation fault (core dumped)\\n./a.out terminated with signal 11\`;
    } else if (item.id === "cpp_undefined") {
      sampleText = \`undefined reference to 'doSomething()'\ncollect2: error: ld returned 1 exit status\`;
    } else if (item.id === "go_bounds") {
      sampleText = \`panic: runtime error: index out of range [0] with length 0\`;
    } else if (item.id === "rust_borrow") {
      sampleText = \`error[E0499]: cannot borrow \`x\` as mutable more than once at a time\`;
    } else if (item.id === "sql_syntax") {
      sampleText = \`ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'name FROM users' at line 1\`;
    } else if (item.id === "git_conflict") {
      sampleText = \`CONFLICT (content): Merge conflict in code.py\\nAutomatic merge failed; fix conflicts and then commit the result.\`;
    }

    this.dom.errorInput.value = sampleText;
    this.updateCharCount();
    this.analyzeError();
  }

  autoDetectLanguage() {
    const text = this.dom.errorInput.value;
    let detected = "python";

    if (/Traceback|File ".*\.py"|IndentationError|KeyError|IndexError/i.test(text)) {
      detected = "python";
    } else if (/TypeError: Cannot read|undefined|ReferenceError|\.js:\d+|\.ts:\d+/i.test(text)) {
      detected = "javascript";
    } else if (/java\.lang|NullPointerException|ArrayIndexOutOfBounds/i.test(text)) {
      detected = "java";
    } else if (/Segmentation fault|std::|g\+\+|clang/i.test(text)) {
      detected = "cpp";
    } else if (/panic: runtime error|goroutine/i.test(text)) {
      detected = "go";
    } else if (/git|conflict|merge/i.test(text)) {
      detected = "general";
    }

    this.dom.languageSelect.value = detected;
    this.showToast(\`Auto-detected language: \${detected.toUpperCase()}\`);
  }

  analyzeError() {
    const errorText = this.dom.errorInput.value.trim();
    if (!errorText) {
      this.dom.errorInput.focus();
      this.showToast("Please enter an error message first!");
      return;
    }

    const selectedLang = this.dom.languageSelect.value;

    // Search knowledge base
    let match = ERROR_KNOWLEDGE_BASE.find(
      (item) => (item.lang === selectedLang || item.lang === "general") && item.match.test(errorText)
    );

    // If no exact language match, try matching across all languages
    if (!match) {
      match = ERROR_KNOWLEDGE_BASE.find((item) => item.match.test(errorText));
    }

    // Fallback to intelligent generic diagnosis if not in database
    const diagnosis = match || parseGenericError(errorText, selectedLang);

    this.renderDiagnosis(diagnosis, selectedLang);
  }

  renderDiagnosis(diag, lang) {
    // Update Stepper Progress
    this.dom.stepNav3.classList.add("active");
    this.dom.stepNav4.classList.add("active");

    // Populate Classification Banner
    this.dom.resErrorType.textContent = diag.errorType;
    this.dom.resSeverity.textContent = \`\${diag.severity} Severity\`;
    this.dom.resLangTag.textContent = lang.toUpperCase();

    // STEP 3: Understand the Problem
    this.dom.resPlainEnglish.textContent = diag.plainEnglish;
    this.dom.resRootCause.textContent = diag.rootCause;
    this.dom.resTriggersList.innerHTML = diag.triggers
      .map((t) => \`<li>\${t}</li>\`)
      .join("");

    // STEP 4: Suggested Solution
    this.dom.resStrategy.textContent = diag.strategy;
    this.dom.resCodeSolution.textContent = diag.codeSolution;
    this.dom.resPreventionTip.textContent = diag.preventionTip;

    // Reveal UI
    this.dom.emptyState.style.display = "none";
    this.dom.solutionContent.style.display = "flex";
    this.dom.resultHeaderActions.style.display = "flex";

    // Scroll into view on smaller screens
    if (window.innerWidth <= 1024) {
      this.dom.solutionContent.scrollIntoView({ behavior: "smooth" });
    }
  }

  resetResults() {
    this.dom.stepNav3.classList.remove("active");
    this.dom.stepNav4.classList.remove("active");
    this.dom.emptyState.style.display = "flex";
    this.dom.solutionContent.style.display = "none";
    this.dom.resultHeaderActions.style.display = "none";
  }

  copyCodeSolution() {
    const code = this.dom.resCodeSolution.textContent;
    navigator.clipboard.writeText(code).then(() => {
      this.showToast("Code fix copied to clipboard!");
    });
  }

  copyAllSolution() {
    const error = this.dom.resErrorType.textContent;
    const plain = this.dom.resPlainEnglish.textContent;
    const code = this.dom.resCodeSolution.textContent;
    const prevention = this.dom.resPreventionTip.textContent;

    const fullText = \`### AlgoTester Diagnostic Report\\n**Error:** \${error}\\n\\n**Plain English Explanation:**\\n\${plain}\\n\\n**Recommended Solution:**\\n\`\`\`\\n\${code}\\n\`\`\`\\n\\n**Prevention:**\\n\${prevention}\`;

    navigator.clipboard.writeText(fullText).then(() => {
      this.showToast("Full diagnosis copied to clipboard!");
    });
  }

  showToast(msg) {
    this.dom.toast.textContent = msg;
    this.dom.toast.classList.add("show");
    setTimeout(() => {
      this.dom.toast.classList.remove("show");
    }, 2800);
  }
}

// Instantiate on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.algoTesterApp = new AlgoTesterApp();
});
