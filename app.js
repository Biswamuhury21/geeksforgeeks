/**
 * AlgoTester - Turn Coding Errors into Understandable Solutions
 * Comprehensive Multi-Language Error Knowledge Base & Engine
 */

const ERROR_KNOWLEDGE_BASE = [
  {
    id: "py_zero",
    lang: "python",
    match: /(ZeroDivisionError|division by zero|integer division or modulo by zero)/i,
    errorType: "ZeroDivisionError: division by zero",
    severity: "Medium",
    plainEnglish: "Your code attempted to divide a number or calculate a modulo by zero (0). In mathematics and programming, division by zero is undefined and causes an immediate crash.",
    rootCause: "A division `/`, integer division `//`, or modulo `%` operation evaluated with a denominator equal to 0.",
    triggers: [
      "A divisor variable calculated or passed dynamically evaluated to 0 (e.g. `total / count` when `count == 0`).",
      "Dividing by the length of an empty list (`len(items)` is 0).",
      "Loop counter or denominator decrementing down to zero."
],
    strategy: "Check if the denominator is zero before dividing, or provide a default fallback value.",
    codeSolution: "# \u274c Problematic Code:\ntotal_score = 150\nstudents = 0\naverage = total_score / students  # ZeroDivisionError: division by zero\n\n# \u2705 Fixed Code (Option 1: Guard condition):\nif students > 0:\n    average = total_score / students\nelse:\n    average = 0.0\nprint(f\"Average: {average}\")\n\n# \u2705 Fixed Code (Option 2: Defensive try/except):\ntry:\n    average = total_score / students\nexcept ZeroDivisionError:\n    average = 0.0",
    preventionTip: "Always validate denominators before dividing, especially when calculating averages, percentages, or ratios from user input or query results."
  },
  {
    id: "py_index",
    lang: "python",
    match: /(IndexError|list index out of range|pop from empty list)/i,
    errorType: "IndexError: list index out of range",
    severity: "Medium",
    plainEnglish: "Your program attempted to access an element at an index that doesn't exist in the list. Python lists are 0-indexed, meaning a list with 3 elements only has indices 0, 1, and 2.",
    rootCause: "The requested index is equal to or greater than `len(your_list)`, or a negative index exceeded `-len(your_list)`.",
    triggers: [
      "Accessing `arr[len(arr)]` instead of `arr[len(arr) - 1]` (classic off-by-one error).",
      "Attempting to read or pop from an empty list `[]` without verifying its length.",
      "A loop counter or pointer incrementing beyond array boundaries."
],
    strategy: "Safeguard list accesses by validating the length with `if len(arr) > index:`, or iterate directly over items rather than indexing.",
    codeSolution: "# \u274c Problematic Code:\narr = [10, 20, 30]\nprint(arr[3])  # IndexError: only indices 0, 1, 2 exist!\n\n# \u2705 Fixed Code (Option 1: Safe bounds check):\nindex = 3\nif index < len(arr):\n    print(arr[index])\nelse:\n    print(f\"Index {index} is out of bounds (length: {len(arr)})\")\n\n# \u2705 Fixed Code (Option 2: Direct iteration):\nfor item in arr:\n    print(item)",
    preventionTip: "Prefer Pythonic iterations like `for item in arr:` or `for i, item in enumerate(arr):` over manual index increments."
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
    codeSolution: "# \u274c Problematic Code:\nuser = {\"name\": \"Alice\"}\nemail = user[\"email\"]  # KeyError: 'email'\n\n# \u2705 Fixed Code (Option 1: Safe .get() with fallback):\nemail = user.get(\"email\", \"no-email@example.com\")\nprint(email)\n\n# \u2705 Fixed Code (Option 2: Membership check):\nif \"email\" in user:\n    print(user[\"email\"])\nelse:\n    print(\"Email key not found.\")",
    preventionTip: "Always use `dict.get('key', fallback)` when dealing with external API data, user inputs, or optional fields."
  },
  {
    id: "py_type",
    lang: "python",
    match: /(TypeError: can only concatenate str|unsupported operand type|object is not subscriptable|object is not callable|takes \d+ positional arguments? but)/i,
    errorType: "TypeError: unsupported operand / mismatched type",
    severity: "Medium",
    plainEnglish: "You are trying to perform an operation (like arithmetic `+`, indexing `[]`, or calling `()`) on an incompatible data type.",
    rootCause: "Python is strongly typed and will not implicitly convert types like numbers to strings when using the `+` operator, or calling a non-function.",
    triggers: [
      "Concatenating a string and integer directly: `'Score: ' + 100`.",
      "Calling a non-function object with parentheses: `x = 5; x()`.",
      "Subscripting an object that does not support indexing (e.g. `None[0]`)."
],
    strategy: "Explicitly cast values to their appropriate type (`int()`, `float()`, `str()`), or use modern f-strings for string interpolation.",
    codeSolution: "# \u274c Problematic Code:\nage = 25\nmessage = \"I am \" + age + \" years old\"  # TypeError!\n\n# \u2705 Fixed Code (Recommended - f-strings):\nage = 25\nmessage = f\"I am {age} years old\"\nprint(message)\n\n# \u2705 Fixed Code (Explicit type cast):\nmessage = \"I am \" + str(age) + \" years old\" ",
    preventionTip: "Use Python 3 f-strings `f'{variable}'` for formatting instead of manual string concatenation."
  },
  {
    id: "py_attr",
    lang: "python",
    match: /(AttributeError: 'NoneType' object has no attribute|AttributeError: '[a-zA-Z0-9_]+' object has no attribute)/i,
    errorType: "AttributeError: object has no attribute",
    severity: "Medium",
    plainEnglish: "You tried to access a property or call a method on a variable that does not have that attribute (commonly because the variable is `None`).",
    rootCause: "The object evaluates to `NoneType` or a type that does not define the requested member or function.",
    triggers: [
      "A function returned `None` due to an early exit or missing `return` statement.",
      "Calling a list method on a string, or a string method on an integer.",
      "Querying a database or API that returned no match (`None`)."
],
    strategy: "Check whether the variable is `None` before dereferencing, or verify the available methods using `dir(object)`.",
    codeSolution: "# \u274c Problematic Code:\ndef get_user():\n    return None\n\nuser = get_user()\nprint(user.name)  # AttributeError: 'NoneType' object has no attribute 'name'\n\n# \u2705 Fixed Code:\nuser = get_user()\nif user is not None:\n    print(user.name)\nelse:\n    print(\"User not found.\")",
    preventionTip: "Use Python type hints `Optional[User]` and check `if obj is not None:` before accessing attributes."
  },
  {
    id: "py_name",
    lang: "python",
    match: /(NameError: name '?[a-zA-Z0-9_]+'? is not defined)/i,
    errorType: "NameError: name is not defined",
    severity: "Low",
    plainEnglish: "Python does not recognize the variable or function name you used because it hasn't been declared or imported yet.",
    rootCause: "The interpreter searched local, enclosing, global, and built-in scopes and found no identifier with that name.",
    triggers: [
      "Typo in variable or function name (case sensitivity: `counter` vs `Counter`).",
      "Using a variable before the line where it is defined.",
      "Forgetting to import a module (e.g. using `math.sqrt()` without `import math`)."
],
    strategy: "Check for spelling and casing mistakes, ensure imports are present at the top of the file, and verify definition order.",
    codeSolution: "# \u274c Problematic Code:\nresult = math.sqrt(16)  # NameError: name 'math' is not defined\n\n# \u2705 Fixed Code:\nimport math\nresult = math.sqrt(16)\nprint(result)",
    preventionTip: "Use an IDE with Python language server (PyLance/Ruff) to catch undefined variables before running code."
  },
  {
    id: "py_value",
    lang: "python",
    match: /(ValueError: invalid literal for int\(\)|ValueError: math domain error|ValueError: not enough values to unpack)/i,
    errorType: "ValueError: invalid literal / domain error",
    severity: "Low to Medium",
    plainEnglish: "A function received an argument that has the correct data type (e.g. a string) but an inappropriate or invalid value (e.g. trying to parse 'hello' as a number).",
    rootCause: "The value violates mathematical constraints or parsing rules of the receiving function.",
    triggers: [
      "Calling `int('abc')` on non-numeric user input.",
      "Calling `math.sqrt(-1)` on negative numbers.",
      "Unpacking mismatched tuples: `a, b = [1, 2, 3]`."
],
    strategy: "Sanitize and validate strings before parsing with `.isdigit()`, or wrap the conversion in `try/except ValueError:`.",
    codeSolution: "# \u274c Problematic Code:\nuser_input = \"forty-two\"\nnumber = int(user_input)  # ValueError: invalid literal for int()\n\n# \u2705 Fixed Code (Safe parsing with try/except):\ntry:\n    number = int(user_input)\nexcept ValueError:\n    number = 0\n    print(\"Invalid input, defaulting to 0.\")",
    preventionTip: "Always wrap string-to-number casts in `try/except ValueError` when processing external inputs."
  },
  {
    id: "py_indent",
    lang: "python",
    match: /(IndentationError|expected an indented block|unindent does not match|TabError)/i,
    errorType: "IndentationError: unexpected / missing indent",
    severity: "Low",
    plainEnglish: "Python uses indentation (whitespace) instead of braces `{}` to define code blocks. Your indentation is uneven or missing.",
    rootCause: "A block opener (`def`, `if`, `for`, `while`, `class`) was not followed by an indented line, or tabs and spaces were mixed.",
    triggers: [
      "Leaving a block empty without a `pass` statement.",
      "Mixing tabs and spaces in the same source file.",
      "Inconsistent indent levels (e.g. 2 spaces on line 5, 4 spaces on line 6)."
],
    strategy: "Configure your editor to insert 4 spaces when pressing Tab, and never mix raw tabs with spaces.",
    codeSolution: "# \u274c Problematic Code:\ndef calculate_sum(a, b):\nreturn a + b  # IndentationError: expected an indented block\n\n# \u2705 Fixed Code:\ndef calculate_sum(a, b):\n    return a + b",
    preventionTip: "Enable 'Convert Tabs to Spaces' in your editor settings and use auto-formatters like Black or Ruff."
  },
  {
    id: "py_syntax",
    lang: "python",
    match: /(SyntaxError: invalid syntax|SyntaxError: unterminated string literal|SyntaxError: expected ':')/i,
    errorType: "SyntaxError: invalid syntax",
    severity: "Medium",
    plainEnglish: "Python encountered a grammatical violation of the language syntax, making it impossible to parse or execute the file.",
    rootCause: "Unmatched parentheses, missing colons `:`, unclosed string quotes, or misplaced keywords.",
    triggers: [
      "Missing colon `:` at the end of an `if`, `def`, `class`, or `for` statement.",
      "Unclosed brackets `[`, `(`, or `{` spanning across lines.",
      "Using a reserved keyword as a variable name (e.g. `class = 5`)."
],
    strategy: "Inspect the line highlighted in the error traceback, and check the line directly above it for unclosed parentheses or quotes.",
    codeSolution: "# \u274c Problematic Code:\nif x > 10\n    print(\"Greater\")  # SyntaxError: expected ':'\n\n# \u2705 Fixed Code:\nif x > 10:\n    print(\"Greater\")",
    preventionTip: "Lint your code continuously with Ruff or Flake8 to catch syntax violations before execution."
  },
  {
    id: "py_recursion",
    lang: "python",
    match: /(RecursionError: maximum recursion depth exceeded)/i,
    errorType: "RecursionError: maximum recursion depth exceeded",
    severity: "High",
    plainEnglish: "Your recursive function called itself too many times without stopping, exhausting Python's call stack limit (default 1000).",
    rootCause: "Missing or unreachable base case in a recursive algorithm, causing an infinite loop of function calls.",
    triggers: [
      "Omitting the base case in a recursive factorial, fibonacci, or tree traversal function.",
      "Base case condition is never met (e.g. decrementing the wrong argument).",
      "Circular object reference in serialization or traversal."
],
    strategy: "Verify the base case condition and ensure every recursive call strictly moves parameters toward that base case.",
    codeSolution: "# \u274c Problematic Code:\ndef countdown(n):\n    return countdown(n - 1)  # No base case! RecursionError\n\n# \u2705 Fixed Code (With base case):\ndef countdown(n):\n    if n <= 0:\n        return 0\n    return countdown(n - 1)",
    preventionTip: "For deep recursive operations, either convert the algorithm to an iterative loop with a stack, or use memoization."
  },
  {
    id: "py_unbound",
    lang: "python",
    match: /(UnboundLocalError: local variable '?[a-zA-Z0-9_]+'? referenced before assignment)/i,
    errorType: "UnboundLocalError: referenced before assignment",
    severity: "Medium",
    plainEnglish: "You tried to read or modify a variable inside a function before assigning a value to it locally.",
    rootCause: "If a function assigns to a variable anywhere in its body, Python treats it as local to that scope throughout the entire function.",
    triggers: [
      "Doing `count += 1` inside a function referring to an outer/global `count` without the `global` keyword.",
      "Referencing a local variable before its assignment line in an `if` branch."
],
    strategy: "Pass the variable as an argument and return the updated value, or use `global` / `nonlocal` if mutating outer state.",
    codeSolution: "# \u274c Problematic Code:\ncount = 0\ndef increment():\n    count += 1  # UnboundLocalError: local variable 'count' referenced before assignment\n\n# \u2705 Fixed Code (Recommended - pass & return):\ndef increment(count):\n    return count + 1\n\ncount = increment(count)\n\n# \u2705 Fixed Code (Option 2 - global keyword):\ndef increment_global():\n    global count\n    count += 1",
    preventionTip: "Avoid relying on mutable global state inside functions. Explicit parameters and return values are cleaner and thread-safe."
  },
  {
    id: "py_file_not_found",
    lang: "python",
    match: /(FileNotFoundError: \[Errno 2\] No such file or directory)/i,
    errorType: "FileNotFoundError: No such file or directory",
    severity: "Medium",
    plainEnglish: "Your script tried to open or read a file, but Python could not locate it at the specified path.",
    rootCause: "The file does not exist, or the relative path was computed from a different working directory than where the script was launched.",
    triggers: [
      "Running the script from a parent or sibling directory with relative paths like `'data.csv'`.",
      "Typo in file name or file extension (e.g. `.txt` vs `.csv`).",
      "File has not been created yet or was deleted."
],
    strategy: "Use `pathlib.Path` or `os.path.exists()` to verify file presence and construct absolute paths based on `__file__`.",
    codeSolution: "# \u274c Problematic Code:\nwith open(\"config.json\", \"r\") as f:\n    data = f.read()\n\n# \u2705 Fixed Code (Using pathlib relative to script location):\nfrom pathlib import Path\n\nscript_dir = Path(__file__).resolve().parent\nfile_path = script_dir / \"config.json\"\n\nif file_path.exists():\n    with open(file_path, \"r\") as f:\n        data = f.read()\nelse:\n    print(f\"File not found at: {file_path}\")",
    preventionTip: "Always build paths relative to `pathlib.Path(__file__).parent` instead of assuming the current working directory."
  },
  {
    id: "py_module",
    lang: "python",
    match: /(ModuleNotFoundError: No module named|ImportError: cannot import name)/i,
    errorType: "ModuleNotFoundError: No module named",
    severity: "Medium",
    plainEnglish: "Python cannot find the third-party library or local package you are trying to import.",
    rootCause: "The package is not installed in the active virtual environment, or there is a circular import in local project files.",
    triggers: [
      "Forgetting to install the library using `pip install <package>`.",
      "Using the wrong Python virtual environment in your terminal or IDE.",
      "Naming your file the same as a standard library (e.g. naming your file `math.py` or `random.py`)."
],
    strategy: "Install the required package with pip, check your active virtual environment, and ensure your filenames don't shadow standard modules.",
    codeSolution: "# \u274c In Terminal:\n# ModuleNotFoundError: No module named 'requests'\n\n# \u2705 Fix Step 1 (Install package):\n# pip install requests\n\n# \u2705 Fix Step 2 (In Python):\ntry:\n    import requests\nexcept ModuleNotFoundError:\n    print(\"Please run: pip install requests\")",
    preventionTip: "Always use virtual environments (`venv` or `uv`) and keep a `requirements.txt` or `pyproject.toml` file."
  },
  {
    id: "cpp_segfault",
    lang: "cpp",
    match: /(segmentation fault|core dumped|SIGSEGV)/i,
    errorType: "Segmentation Fault (SIGSEGV - core dumped)",
    severity: "Critical",
    plainEnglish: "The operating system forcibly killed your program because it attempted to access restricted memory that it does not own or have permission to read/write.",
    rootCause: "Hardware-level memory protection fault triggered by dereferencing `nullptr`, using a dangling pointer, or overrunning an array buffer.",
    triggers: [
      "Dereferencing a pointer that points to `nullptr` or unallocated memory.",
      "Accessing an array or `std::vector` outside its bounds (e.g. `arr[10]` when size is 5).",
      "Using a pointer after the memory it points to has been `free()`'d or `delete`'d (dangling pointer)."
],
    strategy: "Compile with AddressSanitizer (`-fsanitize=address -g`) to locate the exact source line and memory violation immediately.",
    codeSolution: "// \u274c Problematic Code:\nint *ptr = nullptr;\n*ptr = 42; // Segmentation fault (SIGSEGV)!\n\n// \u2705 Fixed Code (Defensive pointer check):\nint value = 42;\nint *ptr = &value;\nif (ptr != nullptr) {\n    std::cout << *ptr << std::endl;\n}\n\n// \u2705 Recommended (Modern C++ Smart Pointers):\n#include <memory>\nauto safePtr = std::make_unique<int>(42);\nstd::cout << *safePtr << std::endl;",
    preventionTip: "Prefer modern C++ smart pointers (`std::unique_ptr`, `std::shared_ptr`) and `std::vector::at()` over raw C pointers and raw arrays."
  },
  {
    id: "cpp_double_free",
    lang: "cpp",
    match: /(double free or corruption|free\(\): invalid pointer|SIGABRT)/i,
    errorType: "Double Free / Invalid Pointer (SIGABRT)",
    severity: "Critical",
    plainEnglish: "Your program called `free()` or `delete` on the same memory block more than once, corrupting the heap memory manager.",
    rootCause: "Invoking `free()` on already freed memory, or calling `free()` on stack-allocated memory that wasn't created via `malloc()`/`new`.",
    triggers: [
      "Calling `delete` twice on the same raw pointer in separate code branches.",
      "Shallow-copying a class with raw pointer members without defining a custom copy constructor (Rule of Three/Five).",
      "Calling `free()` on an address pointing into the middle of a buffer or to stack memory."
],
    strategy: "Set pointers to `nullptr` immediately after freeing them (`delete ptr; ptr = nullptr;`), or use `std::unique_ptr`.",
    codeSolution: "// \u274c Problematic Code:\nint *data = new int(100);\ndelete data;\ndelete data; // Crash: double free detected!\n\n// \u2705 Fixed Code (Set pointer to nullptr):\nint *data = new int(100);\ndelete data;\ndata = nullptr; // Deleting nullptr is a safe no-op in C++\ndelete data;    // Safe, does nothing\n\n// \u2705 Best Practice (RAII):\n#include <memory>\nauto data = std::make_unique<int>(100);\n// Memory is automatically and cleanly freed when data goes out of scope",
    preventionTip: "Follow RAII (Resource Acquisition Is Initialization). Use smart pointers so memory lifecycle is handled automatically."
  },
  {
    id: "cpp_fpe",
    lang: "cpp",
    match: /(floating point exception|SIGFPE)/i,
    errorType: "Floating Point Exception (SIGFPE)",
    severity: "High",
    plainEnglish: "An illegal arithmetic operation occurred\u2014most commonly integer division by zero or integer modulo by zero.",
    rootCause: "Hardware arithmetic trap generated by the CPU when an integer divide or modulo has a divisor of 0.",
    triggers: [
      "Dividing by a variable that evaluates to 0: `int c = a / b;` when `b == 0`.",
      "Calculating modulo with zero: `int rem = a % 0;`.",
      "Integer overflow with `INT_MIN / -1` on 32-bit/64-bit systems."
],
    strategy: "Check that the divisor is not zero before any division or modulo operation.",
    codeSolution: "// \u274c Problematic Code:\nint a = 10;\nint b = 0;\nint result = a / b; // SIGFPE: division by zero!\n\n// \u2705 Fixed Code:\nif (b != 0) {\n    int result = a / b;\n    std::cout << \"Result: \" << result << std::endl;\n} else {\n    std::cerr << \"Error: Division by zero attempted!\" << std::endl;\n}",
    preventionTip: "Always validate user input and computed denominators before arithmetic division operations."
  },
  {
    id: "cpp_linker",
    lang: "cpp",
    match: /(undefined reference to|unresolved external symbol|ld returned 1 exit status)/i,
    errorType: "Linker Error: Undefined Reference",
    severity: "Medium",
    plainEnglish: "The compiler successfully parsed your syntax and function declarations, but the linker could not find the actual function implementations when assembling the binary.",
    rootCause: "A function or variable was declared in a header file, but its definition in a `.cpp` file was not compiled, or a required library was omitted.",
    triggers: [
      "Forgetting to compile secondary `.cpp` files: running `g++ main.cpp` instead of `g++ main.cpp utils.cpp`.",
      "Forgetting to link an external library (e.g. missing `-lpthread`, `-lm`, or `-lcurl`).",
      "Declaring a member function in a class declaration but forgetting to define it."
],
    strategy: "Make sure all `.cpp` files are included in your compile command, or use CMake/Makefiles to manage build targets.",
    codeSolution: "// \u274c Problematic: Declared in header but never defined in any .cpp\nvoid calculateScores(); // Declared\nint main() {\n    calculateScores();  // Linker Error: undefined reference to 'calculateScores()'\n    return 0;\n}\n\n// \u2705 Fixed Code: Provide the definition\nvoid calculateScores() {\n    std::cout << \"Scores calculated!\" << std::endl;\n}\nint main() {\n    calculateScores();\n    return 0;\n}\n\n// In terminal when building multiple files:\n// g++ -Wall -Wextra main.cpp utils.cpp -o app",
    preventionTip: "Use CMake or a modern build system to automatically track source dependencies and link libraries."
  },
  {
    id: "cpp_out_of_range",
    lang: "cpp",
    match: /(std::out_of_range|basic_string::substr|vector::_M_range_check)/i,
    errorType: "std::out_of_range Exception",
    severity: "Medium",
    plainEnglish: "You tried to access an element of a `std::vector`, `std::string`, or `std::array` at an index that exceeds its current size.",
    rootCause: "Calling bounds-checked methods like `.at(index)` or `.substr()` with an index greater than or equal to the container's `.size()`.",
    triggers: [
      "Using `.at(i)` in a loop with condition `i <= vec.size()` instead of `i < vec.size()`.",
      "Calling `.at()` on an empty container.",
      "String substring start position exceeding string length."
],
    strategy: "Verify that `index < vec.size()` before accessing, or wrap container access in a `try/catch` block.",
    codeSolution: "// \u274c Problematic Code:\n#include <vector>\nstd::vector<int> numbers = {10, 20, 30};\nint val = numbers.at(5); // std::out_of_range exception!\n\n// \u2705 Fixed Code:\nsize_t index = 5;\nif (index < numbers.size()) {\n    std::cout << numbers.at(index) << std::endl;\n} else {\n    std::cout << \"Index out of bounds!\" << std::endl;\n}",
    preventionTip: "Use range-based for loops (`for (const auto& item : numbers)`) whenever you don't specifically need manual indices."
  },
  {
    id: "cpp_bad_alloc",
    lang: "cpp",
    match: /(std::bad_alloc)/i,
    errorType: "std::bad_alloc (Heap Allocation Failed)",
    severity: "High",
    plainEnglish: "Your program ran out of heap memory while trying to allocate new memory with `new` or resizing a container like `std::vector`.",
    rootCause: "The system cannot satisfy the memory request due to physical RAM exhaustion, virtual memory limits, or an enormous allocation size.",
    triggers: [
      "Unbounded dynamic array growth in an infinite loop.",
      "Allocating memory using an uninitialized or negative size variable cast to unsigned `size_t`.",
      "Severe memory leaks over a long-running process."
],
    strategy: "Check your container size calculations and ensure loops terminate properly.",
    codeSolution: "// \u274c Problematic Code:\nsize_t bad_size = -1; // Wraps around to 18 quintillion bytes!\nint *arr = new int[bad_size]; // std::bad_alloc!\n\n// \u2705 Fixed Code:\nsize_t safe_size = 1000;\ntry {\n    int *arr = new int[safe_size];\n    // use arr...\n    delete[] arr;\n} catch (const std::bad_alloc& e) {\n    std::cerr << \"Memory allocation failed: \" << e.what() << std::endl;\n}",
    preventionTip: "Sanitize size parameters before memory allocation and monitor heap usage in memory-intensive operations."
  },
  {
    id: "cpp_stack_overflow",
    lang: "cpp",
    match: /(stack overflow|SIGSEGV.*stack|infinite recursion)/i,
    errorType: "Stack Overflow (Exhausted Stack Space)",
    severity: "Critical",
    plainEnglish: "Your program ran out of call stack memory, typically caused by infinite recursive function calls or allocating huge arrays directly on the stack.",
    rootCause: "Exceeding the thread stack limit (typically 1MB to 8MB) by pushing too many stack frames or huge local stack variables.",
    triggers: [
      "Missing base case in recursion.",
      "Declaring huge arrays on the stack: `int huge[10000000];` instead of heap `std::vector`.",
      "Mutual recursive dependency between two functions."
],
    strategy: "Add a proper base case to recursive calls, or move large buffers from stack to heap (`std::vector`).",
    codeSolution: "// \u274c Problematic Code:\nint buffer[50000000]; // Stack overflow! (Stack is usually only a few MBs)\n\n// \u2705 Fixed Code (Allocate on Heap):\n#include <vector>\nstd::vector<int> buffer(50000000); // Allocated safely on heap!",
    preventionTip: "Never allocate megabytes of memory as local stack variables. Use `std::vector` or `std::unique_ptr` for large buffers."
  },
  {
    id: "cpp_syntax",
    lang: "cpp",
    match: /(expected ';' before|expected '}' at end of input|stray '\\' in program)/i,
    errorType: "Compiler Syntax Error: Missing ';' or '}'",
    severity: "Low",
    plainEnglish: "The C/C++ compiler stopped because a required semicolon `;` or closing brace `}` is missing.",
    rootCause: "C and C++ require every statement to terminate with a semicolon `;` and all blocks `{}` to be closed.",
    triggers: [
      "Omitting `;` at the end of a variable declaration or struct definition.",
      "Missing closing brace `}` on a function or class.",
      "Typo in preprocessor directive."
],
    strategy: "Inspect the line immediately before the line number reported in the compiler diagnostic.",
    codeSolution: "// \u274c Problematic Code:\nint main() {\n    int x = 10\n    std::cout << x; // Error: expected ';' before 'std'\n    return 0;\n}\n\n// \u2705 Fixed Code:\nint main() {\n    int x = 10;\n    std::cout << x;\n    return 0;\n}",
    preventionTip: "Enable `-Wall -Wextra -pedantic` in your compiler options to get helpful diagnostics."
  },
  {
    id: "java_npe",
    lang: "java",
    match: /(NullPointerException)/i,
    errorType: "java.lang.NullPointerException",
    severity: "High",
    plainEnglish: "Java tried to execute an operation on an object reference that currently points to nothing (`null`).",
    rootCause: "Dereferencing a variable whose memory pointer has not been initialized to a concrete object instance.",
    triggers: [
      "Invoking a method on an uninstantiated object (`User u = null; u.getName();`).",
      "Autoboxing a `null` wrapper object (`Integer`) into a primitive (`int`).",
      "Calling `.length` on a null array reference."
],
    strategy: "Add null checks, leverage `Optional<T>`, or place constant strings on the left side in `.equals()` comparisons.",
    codeSolution: "// \u274c Problematic Code:\nString input = null;\nif (input.equals(\"ADMIN\")) { ... } // Throws NullPointerException!\n\n// \u2705 Fixed Code (Option 1: YODA conditions for string constants):\nif (\"ADMIN\".equals(input)) {\n    System.out.println(\"Authorized\");\n}\n\n// \u2705 Fixed Code (Option 2: Null check):\nif (input != null && input.equals(\"ADMIN\")) {\n    System.out.println(\"Authorized\");\n}\n\n// \u2705 Fixed Code (Option 3: Modern Java Optional):\nOptional.ofNullable(input).ifPresent(System.out::println);",
    preventionTip: "Use `Objects.requireNonNull()`, modern Java `Optional<T>`, and never return raw `null` for collections (return `Collections.emptyList()`)."
  },
  {
    id: "java_arithmetic",
    lang: "java",
    match: /(ArithmeticException: \/ by zero)/i,
    errorType: "java.lang.ArithmeticException: / by zero",
    severity: "Medium",
    plainEnglish: "Your Java program attempted to perform integer division or modulo with a divisor equal to zero.",
    rootCause: "Integer division by zero is undefined in JVM specification and throws `ArithmeticException` (note: floating point `1.0 / 0.0` yields `Infinity` instead).",
    triggers: [
      "Integer division where the divisor variable evaluates to 0: `int avg = sum / count;` when `count == 0`.",
      "Modulo by zero: `int mod = x % 0;`.",
      "Uninitialized integer field used as denominator (defaults to 0)."
],
    strategy: "Check that the denominator is non-zero before dividing, or use floating-point types (`double`).",
    codeSolution: "// \u274c Problematic Code:\nint total = 100;\nint count = 0;\nint average = total / count; // Throws java.lang.ArithmeticException: / by zero\n\n// \u2705 Fixed Code:\nif (count != 0) {\n    int average = total / count;\n    System.out.println(\"Average: \" + average);\n} else {\n    System.out.println(\"Cannot divide by zero count.\");\n}",
    preventionTip: "Defensively check all dynamic denominators before executing integer division."
  },
  {
    id: "java_oob",
    lang: "java",
    match: /(ArrayIndexOutOfBoundsException|IndexOutOfBoundsException)/i,
    errorType: "java.lang.ArrayIndexOutOfBoundsException",
    severity: "Medium",
    plainEnglish: "You tried to access an array element at an index that doesn't exist (either negative or >= array.length).",
    rootCause: "The index requested is outside the valid range `[0, array.length - 1]`.",
    triggers: [
      "Looping with condition `i <= array.length` instead of `i < array.length`.",
      "Accessing an index on an empty array.",
      "Using a calculated index without bounds validation."
],
    strategy: "Ensure loop bounds use `< length` or use enhanced for-loops (`for (int item : array)`).",
    codeSolution: "// \u274c Problematic Code:\nint[] arr = {10, 20, 30};\nfor (int i = 0; i <= arr.length; i++) { // Off-by-one! i = 3 is out of bounds\n    System.out.println(arr[i]);\n}\n\n// \u2705 Fixed Code (Option 1: Correct loop boundary):\nfor (int i = 0; i < arr.length; i++) {\n    System.out.println(arr[i]);\n}\n\n// \u2705 Fixed Code (Option 2: Enhanced for-each loop):\nfor (int item : arr) {\n    System.out.println(item);\n}",
    preventionTip: "Prefer enhanced for-each loops or Java Streams over manual index tracking."
  },
  {
    id: "java_class_cast",
    lang: "java",
    match: /(ClassCastException)/i,
    errorType: "java.lang.ClassCastException",
    severity: "Medium",
    plainEnglish: "Your code attempted to cast an object to a subclass or interface that it does not actually inherit or implement.",
    rootCause: "Explicit type casting `(TargetType) obj` failed at runtime because `obj` is not an instance of `TargetType`.",
    triggers: [
      "Casting an `Object` from a legacy collection to the wrong type.",
      "Casting a parent class instance directly down to a child class without checking.",
      "Deseralizing polymorphic data without type validation."
],
    strategy: "Use the `instanceof` operator or Java 16+ Pattern Matching for `instanceof` before casting.",
    codeSolution: "// \u274c Problematic Code:\nObject value = \"Hello World\";\nInteger number = (Integer) value; // Throws ClassCastException!\n\n// \u2705 Fixed Code (Modern Pattern Matching for instanceof):\nif (value instanceof Integer number) {\n    System.out.println(\"Number: \" + number);\n} else if (value instanceof String text) {\n    System.out.println(\"String text: \" + text);\n}",
    preventionTip: "Use generics (`List<String>` instead of raw `List`) to let the compiler enforce type safety at compile time."
  },
  {
    id: "java_number_format",
    lang: "java",
    match: /(NumberFormatException: For input string)/i,
    errorType: "java.lang.NumberFormatException",
    severity: "Low",
    plainEnglish: "Java tried to convert a String into a number (like `Integer.parseInt()`), but the String did not contain a valid numeric format.",
    rootCause: "The string contains non-digit characters, leading/trailing spaces, empty content, or exceeds integer range.",
    triggers: [
      "Calling `Integer.parseInt(\"abc\")` on non-numeric input.",
      "Parsing a string with surrounding whitespace without calling `.trim()`.",
      "Parsing an empty string `\"\"` or `null`."
],
    strategy: "Sanitize strings with `.trim()`, validate with a regex or `try/catch (NumberFormatException e)`.",
    codeSolution: "// \u274c Problematic Code:\nString raw = \" 42 \";\nint val = Integer.parseInt(raw); // Throws NumberFormatException due to spaces!\n\n// \u2705 Fixed Code:\nString raw = \" 42 \";\ntry {\n    int val = Integer.parseInt(raw.trim());\n    System.out.println(\"Parsed: \" + val);\n} catch (NumberFormatException e) {\n    System.err.println(\"Invalid numeric string: \" + e.getMessage());\n}",
    preventionTip: "Always wrap string-to-number parsing methods (`Integer.parseInt`, `Double.parseDouble`) in defensive try-catch blocks."
  },
  {
    id: "java_concurrent_mod",
    lang: "java",
    match: /(ConcurrentModificationException)/i,
    errorType: "java.util.ConcurrentModificationException",
    severity: "Medium",
    plainEnglish: "A collection was structurally modified (elements added or removed) while iterating over it with an Iterator or enhanced for-loop.",
    rootCause: "The collection's internal modification count changed unexpectedly during iteration.",
    triggers: [
      "Calling `list.remove(item)` inside an enhanced `for (Item item : list)` loop.",
      "Modifying a collection across multiple threads without synchronization."
],
    strategy: "Use `Iterator.remove()`, `list.removeIf()`, or modern concurrent collections like `CopyOnWriteArrayList`.",
    codeSolution: "// \u274c Problematic Code:\nList<String> list = new ArrayList<>(List.of(\"A\", \"B\", \"C\"));\nfor (String s : list) {\n    if (\"B\".equals(s)) list.remove(s); // Throws ConcurrentModificationException!\n}\n\n// \u2705 Fixed Code (Recommended - removeIf):\nlist.removeIf(s -> \"B\".equals(s));\n\n// \u2705 Fixed Code (Option 2 - Iterator):\nIterator<String> it = list.iterator();\nwhile (it.hasNext()) {\n    if (\"B\".equals(it.next())) {\n        it.remove(); // Safe remove!\n    }\n}",
    preventionTip: "Use `collection.removeIf(predicate)` to remove items during collection processing in Java 8+."
  },
  {
    id: "java_oom",
    lang: "java",
    match: /(OutOfMemoryError: Java heap space)/i,
    errorType: "java.lang.OutOfMemoryError: Java heap space",
    severity: "Critical",
    plainEnglish: "The Java Virtual Machine cannot allocate any more memory to the heap because available JVM RAM has been completely exhausted.",
    rootCause: "Memory leak retaining objects in static collections, or data set too large for JVM maximum heap allocation (`-Xmx`).",
    triggers: [
      "Appending objects indefinitely to a static list or unevicted cache map.",
      "Loading an enormous file or database table entirely into memory at once.",
      "Heap configured too small for workload."
],
    strategy: "Stream large files in chunks, clear caches with WeakReferences, or increase JVM heap limit with `-Xmx` (e.g. `-Xmx4g`).",
    codeSolution: "// \u274c Problematic: Loading entire 10GB file into RAM at once\nList<String> allLines = Files.readAllLines(hugeFilePath);\n\n// \u2705 Fixed Code: Stream lines lazily without buffering all in heap\ntry (Stream<String> lines = Files.lines(hugeFilePath)) {\n    lines.filter(line -> line.contains(\"ERROR\"))\n         .forEach(System.out::println);\n}",
    preventionTip: "Process streams and large datasets lazily using `Stream<T>` and avoid retaining references in static caches."
  },
  {
    id: "java_stack_overflow",
    lang: "java",
    match: /(StackOverflowError)/i,
    errorType: "java.lang.StackOverflowError",
    severity: "High",
    plainEnglish: "A method called itself recursively without terminating, overflowing the thread execution stack limit.",
    rootCause: "Infinite recursion or circular method calls exceeding the thread stack size.",
    triggers: [
      "Missing base case in recursive algorithm.",
      "Overridden `toString()`, `hashCode()`, or `equals()` method calling itself cyclically.",
      "Circular bean dependencies or bi-directional parent-child entity traversal."
],
    strategy: "Verify the termination base case and ensure state variables advance toward the base case on each recursive call.",
    codeSolution: "// \u274c Problematic: Circular reference in toString()\nclass Node {\n    Node next;\n    public String toString() {\n        return \"Node{\" + next + \"}\"; // StackOverflowError if circular!\n    }\n}\n\n// \u2705 Fixed Code: Check for base case and break circularity\npublic int factorial(int n) {\n    if (n <= 1) return 1; // Base case\n    return n * factorial(n - 1);\n}",
    preventionTip: "Prefer iteration for deep traversals or configure `-Xss` if deep recursion is mathematically necessary."
  },
  {
    id: "rust_borrow",
    lang: "rust",
    match: /(cannot borrow .* as mutable more than once at a time|error\[E0499\])/i,
    errorType: "error[E0499]: cannot borrow as mutable more than once",
    severity: "Medium",
    plainEnglish: "Rust's borrow checker prevents data races at compile time by ensuring you can never have more than one mutable reference to the same data active simultaneously.",
    rootCause: "Creating a second `&mut` reference to a variable while a previous `&mut` reference is still active in the same scope.",
    triggers: [
      "Attempting to mutate a collection while simultaneously holding an active mutable reference to one of its items.",
      "Passing two mutable references to the same variable to a function call."
],
    strategy: "Use curly braces `{}` to limit the scope and lifetime of the first mutable borrow so it ends before the second begins.",
    codeSolution: "// \u274c Problematic Code:\nlet mut x = 5;\nlet r1 = &mut x;\nlet r2 = &mut x; // error[E0499]: cannot borrow `x` as mutable more than once at a time\nprintln!(\"{}, {}\", r1, r2);\n\n// \u2705 Fixed Code (Limit lifetime using scope block):\nlet mut x = 5;\n{\n    let r1 = &mut x;\n    *r1 += 10;\n} // r1's borrow ends here!\n\nlet r2 = &mut x; // Allowed!\n*r2 += 20;\nprintln!(\"{}\", x); // 35",
    preventionTip: "Keep mutable borrows as short and localized as possible. Structure functions to take ownership or borrow immutably."
  },
  {
    id: "rust_move",
    lang: "rust",
    match: /(use of moved value|error\[E0382\])/i,
    errorType: "error[E0382]: use of moved value",
    severity: "Medium",
    plainEnglish: "You tried to use a variable after its ownership was transferred (moved) to another variable or function.",
    rootCause: "Non-`Copy` types (like `String`, `Vec`) transfer ownership when assigned or passed by value. Once moved, the original variable is invalid.",
    triggers: [
      "Passing a `String` or `Vec` into a function by value and then reading it again afterwards.",
      "Assigning `let y = x;` and then attempting to access `x`."
],
    strategy: "Borrow the value by reference (`&x` or `&mut x`) instead of moving ownership, or clone it explicitly with `.clone()` if a deep copy is needed.",
    codeSolution: "// \u274c Problematic Code:\nlet s1 = String::from(\"hello\");\nlet s2 = s1; // Ownership moved to s2!\nprintln!(\"{}\", s1); // error[E0382]: use of moved value: `s1`\n\n// \u2705 Fixed Code (Option 1: Borrow with reference):\nlet s1 = String::from(\"hello\");\nlet s2 = &s1; // Borrow s1 immutably\nprintln!(\"s1: {}, s2: {}\", s1, s2);\n\n// \u2705 Fixed Code (Option 2: Explicit clone if independent copy needed):\nlet s1 = String::from(\"hello\");\nlet s2 = s1.clone();\nprintln!(\"s1: {}, s2: {}\", s1, s2);",
    preventionTip: "Pass references `&str` or `&[T]` to functions unless the function truly needs to own or consume the data."
  },
  {
    id: "rust_lifetime",
    lang: "rust",
    match: /(does not live long enough|error\[E0597\]|borrowed value does not live long enough)/i,
    errorType: "error[E0597]: borrowed value does not live long enough",
    severity: "Medium",
    plainEnglish: "You attempted to create a reference that points to data that will be destroyed (dropped) before the reference itself is finished being used.",
    rootCause: "Returning a reference to a local variable created inside a function, or holding a reference across a scope where the owner is dropped.",
    triggers: [
      "Returning a reference `&String` to a local `String` created inside a function.",
      "Storing a reference to a temporary variable in an outer struct or variable."
],
    strategy: "Return the owned value (e.g. `String` instead of `&String`), or ensure the owner outlives all references.",
    codeSolution: "// \u274c Problematic Code:\nfn get_greeting() -> &String {\n    let s = String::from(\"hello\");\n    &s // error[E0597]: `s` does not live long enough (dropped at end of function)\n}\n\n// \u2705 Fixed Code (Return owned String):\nfn get_greeting() -> String {\n    let s = String::from(\"hello\");\n    s // Ownership safely returned to caller\n}",
    preventionTip: "Return owned types from constructors and functions rather than trying to return references to local variables."
  },
  {
    id: "rust_panic_bounds",
    lang: "rust",
    match: /(panicked at 'index out of bounds|index out of bounds: the len is \d+ but the index is \d+)/i,
    errorType: "panic: index out of bounds",
    severity: "High",
    plainEnglish: "Your Rust program panicked at runtime because it attempted to access an element of a vector or slice at an index greater than or equal to its length.",
    rootCause: "Direct indexing `vec[i]` performs runtime bounds checking in Rust and calls `panic!` if out of range.",
    triggers: [
      "Off-by-one errors in loop boundaries.",
      "Indexing an empty vector.",
      "Using unchecked index from user input."
],
    strategy: "Use the safe `.get(index)` method which returns an `Option<&T>` instead of panicking.",
    codeSolution: "// \u274c Problematic Code:\nlet items = vec![1, 2, 3];\nprintln!(\"{}\", items[10]); // Panics at runtime!\n\n// \u2705 Fixed Code (Safe .get() method):\nlet items = vec![1, 2, 3];\nmatch items.get(10) {\n    Some(val) => println!(\"Found: {}\", val),\n    None => println!(\"Index is out of bounds!\"),\n}\n\n// Or with if-let:\nif let Some(val) = items.get(10) {\n    println!(\"Found: {}\", val);\n}",
    preventionTip: "Always use `.get(index)` when dealing with external or unverified indices."
  },
  {
    id: "rust_unwrap_none",
    lang: "rust",
    match: /(called `Option::unwrap\(\)` on a `None` value|panicked at 'called `Option::unwrap\(\)` on a `None` value')/i,
    errorType: "panic: Option::unwrap() on None",
    severity: "High",
    plainEnglish: "You called `.unwrap()` on an `Option` that held `None`, forcing the runtime to panic and terminate.",
    rootCause: "Calling `.unwrap()` is an assertion that the value is guaranteed to be `Some`. When it is `None`, Rust aborts execution.",
    triggers: [
      "Calling `.unwrap()` on `.find()`, `dict.get()`, or regex match when no element matched.",
      "Assuming environment variables or CLI arguments are always present."
],
    strategy: "Handle the `None` case using `match`, `if let`, or provide a default fallback with `.unwrap_or(default)`.",
    codeSolution: "// \u274c Problematic Code:\nlet opt: Option<i32> = None;\nlet val = opt.unwrap(); // Panics!\n\n// \u2705 Fixed Code (Option 1: unwrap_or fallback):\nlet val = opt.unwrap_or(0);\n\n// \u2705 Fixed Code (Option 2: match pattern):\nmatch opt {\n    Some(n) => println!(\"Value is: {}\", n),\n    None => println!(\"Defaulted because option was None\"),\n}",
    preventionTip: "Avoid `.unwrap()` in production code. Use `?` operator, `.unwrap_or()`, or explicit pattern matching."
  },
  {
    id: "rust_div_zero",
    lang: "rust",
    match: /(attempt to divide by zero|panicked at 'attempt to divide by zero')/i,
    errorType: "panic: attempt to divide by zero",
    severity: "High",
    plainEnglish: "An integer division or modulo operation in Rust was attempted with a denominator of 0.",
    rootCause: "Integer division by zero triggers an unconditional runtime panic in Rust.",
    triggers: [
      "Dividing by an unvalidated numeric argument.",
      "Calculating percentage with an empty count."
],
    strategy: "Check that the denominator is not zero, or use `checked_div()` which safely returns `Option<T>`.",
    codeSolution: "// \u274c Problematic Code:\nlet a = 10;\nlet b = 0;\nlet c = a / b; // Panics at runtime!\n\n// \u2705 Fixed Code (Using checked_div):\nlet a: i32 = 10;\nlet b: i32 = 0;\nif let Some(c) = a.checked_div(b) {\n    println!(\"Result: {}\", c);\n} else {\n    println!(\"Cannot divide by zero!\");\n}",
    preventionTip: "Use numeric methods like `checked_div`, `checked_rem`, or `checked_add` when handling untrusted inputs."
  },
  {
    id: "go_bounds",
    lang: "go",
    match: /(panic: runtime error: index out of range)/i,
    errorType: "panic: runtime error: index out of range",
    severity: "High",
    plainEnglish: "Your Go program crashed because it tried to access an element in a slice or array using an index that is outside its boundaries.",
    rootCause: "The index was negative or >= the current `len()` of the slice or array.",
    triggers: [
      "Off-by-one errors in `for` loops (e.g. `i <= len(slice)` instead of `i < len(slice)`).",
      "Accessing index 0 on an empty slice before appending.",
      "Accessing slice results from `strings.Split` without verifying length."
],
    strategy: "Check the slice length using `len()` before indexing, or use `for _, val := range slice`.",
    codeSolution: "// \u274c Problematic Code:\nvar mySlice []int\nmySlice[0] = 10 // panic: runtime error: index out of range [0] with length 0\n\n// \u2705 Fixed Code (Option 1: Append to dynamic slice):\nvar mySlice []int\nmySlice = append(mySlice, 10)\n\n// \u2705 Fixed Code (Option 2: Bounds guard):\nif len(mySlice) > 0 {\n    fmt.Println(mySlice[0])\n}",
    preventionTip: "Use `range` to iterate over slices safely: `for i, val := range mySlice`."
  },
  {
    id: "go_nil_pointer",
    lang: "go",
    match: /(panic: runtime error: invalid memory address or nil pointer dereference)/i,
    errorType: "panic: nil pointer dereference",
    severity: "Critical",
    plainEnglish: "Your Go program crashed because it attempted to access a struct field or invoke a method on a pointer that is `nil`.",
    rootCause: "Dereferencing a pointer variable whose value is `nil`.",
    triggers: [
      "Invoking a method on an uninitialized pointer: `var u *User; u.GetName()`.",
      "Forgetting to check `if err != nil` after a function returns `(result, err)`.",
      "Uninitialized struct pointer returned from a constructor."
],
    strategy: "Always check for `nil` before accessing pointer members, and handle errors immediately.",
    codeSolution: "// \u274c Problematic Code:\ntype User struct {\n    Name string\n}\nvar u *User\nfmt.Println(u.Name) // panic: invalid memory address or nil pointer dereference\n\n// \u2705 Fixed Code:\nif u != nil {\n    fmt.Println(u.Name)\n} else {\n    fmt.Println(\"User pointer is nil\")\n}\n\n// Or instantiate properly:\nu = &User{Name: \"Alice\"}\nfmt.Println(u.Name)",
    preventionTip: "Follow idiomatic Go error handling: `if err != nil { return err }` before reading returned pointer values."
  },
  {
    id: "go_deadlock",
    lang: "go",
    match: /(fatal error: all goroutines are asleep - deadlock!)/i,
    errorType: "fatal error: deadlock!",
    severity: "Critical",
    plainEnglish: "All running goroutines in your Go program are blocked waiting for channels or locks that can never be unlocked.",
    rootCause: "A channel operation (send or receive) is waiting, but no other active goroutine exists to send or receive.",
    triggers: [
      "Reading from an unbuffered channel in the same goroutine before sending to it.",
      "Writing to an unbuffered channel without another goroutine receiving.",
      "Locking a `sync.Mutex` twice in the same goroutine."
],
    strategy: "Ensure channel operations happen across separate concurrent goroutines or use buffered channels.",
    codeSolution: "// \u274c Problematic Code:\nch := make(chan int)\nch <- 42 // Blocks forever! fatal error: all goroutines are asleep - deadlock!\nfmt.Println(<-ch)\n\n// \u2705 Fixed Code (Option 1: Send in separate goroutine):\nch := make(chan int)\ngo func() {\n    ch <- 42\n}()\nfmt.Println(<-ch)\n\n// \u2705 Fixed Code (Option 2: Buffered channel):\nch := make(chan int, 1) // Buffer size 1\nch <- 42\nfmt.Println(<-ch)",
    preventionTip: "Always ensure sends and receives on unbuffered channels run concurrently in separate goroutines."
  },
  {
    id: "go_div_zero",
    lang: "go",
    match: /(panic: runtime error: integer divide by zero)/i,
    errorType: "panic: integer divide by zero",
    severity: "High",
    plainEnglish: "Your Go program crashed because an integer division or modulo was performed with a denominator of 0.",
    rootCause: "In Go, integer division `/` or remainder `%` by zero causes a runtime panic.",
    triggers: [
      "Dividing by an unvalidated count or denominator.",
      "Calculating modulo `x % 0`."
],
    strategy: "Check if the divisor is 0 before dividing.",
    codeSolution: "// \u274c Problematic Code:\na := 10\nb := 0\nc := a / b // panic: runtime error: integer divide by zero\n\n// \u2705 Fixed Code:\nif b != 0 {\n    c := a / b\n    fmt.Println(c)\n} else {\n    fmt.Println(\"Error: divisor cannot be zero\")\n}",
    preventionTip: "Guard arithmetic operations with validation checks when denominators come from inputs or dynamic calculations."
  },
  {
    id: "go_unused",
    lang: "go",
    match: /([a-zA-Z0-9_]+ declared and not used|imported and not used)/i,
    errorType: "Go Compiler Error: declared and not used",
    severity: "Low",
    plainEnglish: "Go strictly refuses to compile any program that contains declared variables or imported packages that are never used.",
    rootCause: "Go's compiler design enforces clean code by treating unused variables and imports as compile errors.",
    triggers: [
      "Declaring a variable with `:=` and never reading it.",
      "Importing a package like `\"math\"` and not invoking any functions from it."
],
    strategy: "Remove the unused variable/import, or discard it using the blank identifier `_`.",
    codeSolution: "// \u274c Problematic Code:\npackage main\nimport \"fmt\"\nfunc main() {\n    x := 10 // Error: x declared and not used\n    fmt.Println(\"Hello\")\n}\n\n// \u2705 Fixed Code (Option 1: Use variable):\nfunc main() {\n    x := 10\n    fmt.Println(\"Value:\", x)\n}\n\n// \u2705 Fixed Code (Option 2: Blank identifier):\nfunc main() {\n    _ = 10 // Explicitly discarded\n    fmt.Println(\"Hello\")\n}",
    preventionTip: "Use `goimports` tool to automatically add required imports and remove unused imports when saving files."
  },
  {
    id: "go_nil_map",
    lang: "go",
    match: /(panic: assignment to entry in nil map)/i,
    errorType: "panic: assignment to entry in nil map",
    severity: "High",
    plainEnglish: "You tried to insert a key-value pair into a Go map that was declared as a `nil` reference without being initialized.",
    rootCause: "In Go, reading from a nil map is safe (returns zero value), but writing to a nil map triggers a runtime panic.",
    triggers: [
      "Declaring `var m map[string]int` and immediately assigning `m[\"key\"] = 1` without calling `make()`."
],
    strategy: "Initialize maps using `make(map[KeyType]ValueType)` or map literals `map[KeyType]ValueType{}`.",
    codeSolution: "// \u274c Problematic Code:\nvar userScores map[string]int\nuserScores[\"Alice\"] = 95 // panic: assignment to entry in nil map\n\n// \u2705 Fixed Code (Option 1: Using make):\nuserScores := make(map[string]int)\nuserScores[\"Alice\"] = 95\n\n// \u2705 Fixed Code (Option 2: Map literal):\nuserScores := map[string]int{\n    \"Alice\": 95,\n}",
    preventionTip: "Always initialize maps with `make(map[K]V)` before assigning key-value pairs."
  },
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
    codeSolution: "// \u274c Problematic Code:\nconst response = {};\nconsole.log(response.user.name); // TypeError: Cannot read properties of undefined\n\n// \u2705 Fixed Code (Modern Optional Chaining):\nconsole.log(response?.user?.name ?? \"Guest User\");\n\n// \u2705 Fixed Code (Conditional Guard):\nif (response && response.user) {\n  console.log(response.user.name);\n} else {\n  console.log(\"User data unavailable.\");\n}",
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
    codeSolution: "// \u274c Problematic Code:\nlet calculateTotal;\ncalculateTotal(); // TypeError: calculateTotal is not a function\n\n// \u2705 Fixed Code (Safe invocation guard):\nif (typeof calculateTotal === \"function\") {\n  calculateTotal();\n} else {\n  console.warn(\"calculateTotal handler was not provided.\");\n}",
    preventionTip: "Double check export styles (`module.exports` vs `export default`) and validate callback props with default no-op functions (`() => {}`)."
  },
  {
    id: "js_ref",
    lang: "javascript",
    match: /(ReferenceError: .* is not defined)/i,
    errorType: "ReferenceError: variable is not defined",
    severity: "Medium",
    plainEnglish: "You are trying to use a variable or function that hasn't been declared yet.",
    rootCause: "The JavaScript engine looked for the identifier in the current and global scope but couldn't find it.",
    triggers: [
      "Typo in a variable name.",
      "Using a variable outside of its block scope (`let` or `const` used outside their `{}`).",
      "Forgetting to import a module or library."
],
    strategy: "Check for spelling mistakes, ensure the variable is declared before use, or check your imports.",
    codeSolution: "// \u274c Problematic Code:\nconsole.log(myVar); // ReferenceError\n\n// \u2705 Fixed Code:\nconst myVar = \"Hello\";\nconsole.log(myVar);",
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
    codeSolution: "// \u274c Problematic Code:\nasync function fetchData() {\n  const res = await fetch('/api/data');\n}\n\n// \u2705 Fixed Code:\nasync function fetchData() {\n  try {\n    const res = await fetch('/api/data');\n  } catch (error) {\n    console.error(\"Fetch failed:\", error);\n  }\n}",
    preventionTip: "Make it a habit to always handle potential errors in asynchronous code."
  },
  {
    id: "sql_syntax",
    lang: "sql",
    match: /(Syntax error near|ERROR 1064)/i,
    errorType: "SQL Syntax Error (ERROR 1064)",
    severity: "Low",
    plainEnglish: "Your database couldn't understand the SQL query because it has a typo or is missing a required keyword.",
    rootCause: "The query violates the SQL grammar rules for the specific database engine (MySQL, PostgreSQL, etc.).",
    triggers: [
      "Missing a comma between columns in a `SELECT` statement.",
      "Unclosed string quotes.",
      "Misspelled keywords (e.g., `SELEC` instead of `SELECT`)."
],
    strategy: "Carefully check the query around the area mentioned in the error message for typos or missing punctuation.",
    codeSolution: "-- \u274c Problematic Code:\nSELECT id name FROM users;\n\n-- \u2705 Fixed Code:\nSELECT id, name FROM users;",
    preventionTip: "Format your SQL queries across multiple lines and use a database client with syntax highlighting."
  },
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
    codeSolution: "# 1. View files in conflict:\ngit status\n\n# 2. Inside the conflicted file, you will see:\n<<<<<<< HEAD\nyour current branch changes\n=======\nincoming branch changes\n>>>>>>> main\n\n# 3. Edit the file to keep the correct lines and remove all markers.\n\n# 4. Stage and complete the merge:\ngit add <conflicted-file>\ngit commit -m \"chore: Resolve merge conflicts\" ",
    preventionTip: "Pull frequently (`git pull --rebase origin main`) and keep feature branches small and short-lived."
  },
];


// Fallback intelligent parser for any arbitrary error
function parseGenericError(rawError, lang) {
  const lines = rawError.trim().split("\n");
  const firstLine = lines[0] || "Unknown Error";
  const lastLine = lines[lines.length - 1] || firstLine;

  let errorName = "Runtime / Execution Error";
  const errorMatch = rawError.match(/([A-Za-z]+Error|[A-Za-z]+Exception|error\[E\d+\]|error:\s*[^\n]+|panic:[^\n]+|SIG[A-Z]+)/i);
  if (errorMatch) {
    errorName = errorMatch[0];
  }

  // Extract line numbers if available
  const lineMatch = rawError.match(/line\s+(\d+)/i) || rawError.match(/:(\d+):\d+/);
  const location = lineMatch ? ` around line ${lineMatch[1]}` : "";

  return {
    errorType: errorName,
    severity: "Medium",
    plainEnglish: `An exception occurred during execution${location}. The runtime encountered an unexpected state or statement: "${lastLine}".`,
    rootCause: `The execution environment halted because a variable state, memory access, or syntax rule did not conform to ${lang.toUpperCase()} specifications.`,
    triggers: [
      `Anomaly or unexpected state${location}.`,
      "Mismatched function arguments or unhandled return states.",
      "Missing module dependencies or environment variables."
    ],
    strategy: `Inspect the file${location}. Check variable values right before the error using logging or debugging breakpoints.`,
    codeSolution: `// 💡 Suggested Defensive Debugging Template for ${lang.toUpperCase()}:

// 1. Guard against null/zero states before invoking operations.
// 2. Wrap risky operations in defensive exception handling blocks:
try {
    // Suspect code here...
} catch (error) {
    console.error("Diagnostic catch:", error);
}`,
    preventionTip: "Use static analyzers, compiler warnings (-Wall), and defensive precondition checks before arithmetic or memory operations."
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
    this.dom.errorCharCount.textContent = `${count} characters`;
  }

  loadSample(sampleId) {
    const item = ERROR_KNOWLEDGE_BASE.find((x) => x.id === sampleId);
    if (!item) return;

    this.dom.languageSelect.value = item.lang;
    let sampleText = item.errorType;

    switch (item.id) {
      case "py_zero":
        sampleText = "Traceback (most recent call last):\\n  File \"main.py\", line 2, in <module>\\n    print(10//0)\\nZeroDivisionError: division by zero";
        break;
      case "py_index":
        sampleText = "Traceback (most recent call last):\\n  File \"code.py\", line 18, in question1\\n    print(\"Largest element:\", find_largest(arr))\\n  File \"code.py\", line 11, in find_largest\\n    if arr[i] > max_num:\\nIndexError: list index out of range";
        break;
      case "py_key":
        sampleText = "Traceback (most recent call last):\\n  File \"app.py\", line 12, in get_email\\n    return user[\"email\"]\\nKeyError: 'email'";
        break;
      case "py_type":
        sampleText = "Traceback (most recent call last):\\n  File \"script.py\", line 4, in <module>\\n    msg = \"Age: \" + age\\nTypeError: can only concatenate str (not \"int\") to str";
        break;
      case "py_attr":
        sampleText = "Traceback (most recent call last):\\n  File \"service.py\", line 45, in process\\n    name = user.get_full_name()\\nAttributeError: 'NoneType' object has no attribute 'get_full_name'";
        break;
      case "py_name":
        sampleText = "Traceback (most recent call last):\\n  File \"calc.py\", line 5, in compute\\n    val = calculate_total(prices)\\nNameError: name 'calculate_total' is not defined";
        break;
      case "py_value":
        sampleText = "Traceback (most recent call last):\\n  File \"parse.py\", line 8, in to_int\\n    return int(raw_text)\\nValueError: invalid literal for int() with base 10: 'abc'";
        break;
      case "py_indent":
        sampleText = "  File \"main.py\", line 6\\n    return total\\n    ^\\nIndentationError: expected an indented block after 'for' statement on line 5";
        break;
      case "py_syntax":
        sampleText = "  File \"main.py\", line 3\\n    if user_role == \"admin\"\\n                           ^\\nSyntaxError: expected ':'";
        break;
      case "py_recursion":
        sampleText = "Traceback (most recent call last):\\n  [Previous line repeated 996 more times]\\n  File \"fib.py\", line 4, in recurse\\n    return recurse(n)\\nRecursionError: maximum recursion depth exceeded in comparison";
        break;
      case "py_unbound":
        sampleText = "Traceback (most recent call last):\\n  File \"counter.py\", line 8, in increment\\n    count += 1\\nUnboundLocalError: local variable 'count' referenced before assignment";
        break;
      case "py_file_not_found":
        sampleText = "Traceback (most recent call last):\\n  File \"loader.py\", line 14, in load_config\\n    with open(\"config.json\", \"r\") as f:\\nFileNotFoundError: [Errno 2] No such file or directory: 'config.json'";
        break;
      case "py_module":
        sampleText = "Traceback (most recent call last):\\n  File \"server.py\", line 2, in <module>\\n    import requests\\nModuleNotFoundError: No module named 'requests'";
        break;
      case "cpp_segfault":
        sampleText = "Segmentation fault (core dumped)\\n./a.out terminated with signal 11 (SIGSEGV)";
        break;
      case "cpp_double_free":
        sampleText = "free(): double free or corruption (out)\\nAborted (core dumped)";
        break;
      case "cpp_fpe":
        sampleText = "Floating point exception (core dumped)\\n./solver terminated with signal 8 (SIGFPE)";
        break;
      case "cpp_linker":
        sampleText = "/usr/bin/ld: /tmp/ccXyZ1.o: in function `main':\\nmain.cpp:(.text+0x1a): undefined reference to `calculateScores()'\\ncollect2: error: ld returned 1 exit status";
        break;
      case "cpp_out_of_range":
        sampleText = "terminate called after throwing an instance of 'std::out_of_range'\\n  what():  vector::_M_range_check: __n (which is 10) >= this->size() (which is 3)\\nAborted (core dumped)";
        break;
      case "cpp_bad_alloc":
        sampleText = "terminate called after throwing an instance of 'std::bad_alloc'\\n  what():  std::bad_alloc\\nAborted (core dumped)";
        break;
      case "cpp_stack_overflow":
        sampleText = "Segmentation fault (core dumped)\\nProgram received signal SIGSEGV, Segmentation fault (stack overflow in deep recursion).";
        break;
      case "cpp_syntax":
        sampleText = "main.cpp:6:5: error: expected ';' before 'return'\\n    6 |     return 0;\\n      |     ^~~~~~";
        break;
      case "java_npe":
        sampleText = "Exception in thread \"main\" java.lang.NullPointerException: Cannot invoke \"String.length()\" because \"str\" is null\\n    at com.example.Main.process(Main.java:23)\\n    at com.example.Main.main(Main.java:8)";
        break;
      case "java_arithmetic":
        sampleText = "Exception in thread \"main\" java.lang.ArithmeticException: / by zero\\n    at com.example.Calculator.divide(Calculator.java:15)\\n    at com.example.Main.main(Main.java:10)";
        break;
      case "java_oob":
        sampleText = "Exception in thread \"main\" java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3\\n    at com.example.ArrayDemo.main(ArrayDemo.java:12)";
        break;
      case "java_class_cast":
        sampleText = "Exception in thread \"main\" java.lang.ClassCastException: class java.lang.String cannot be cast to class java.lang.Integer\\n    at com.example.App.main(App.java:18)";
        break;
      case "java_number_format":
        sampleText = "Exception in thread \"main\" java.lang.NumberFormatException: For input string: \"forty-two\"\\n    at java.base/java.lang.NumberFormatException.forInputString(NumberFormatException.java:67)\\n    at java.base/java.lang.Integer.parseInt(Integer.java:668)";
        break;
      case "java_concurrent_mod":
        sampleText = "Exception in thread \"main\" java.util.ConcurrentModificationException\\n    at java.base/java.util.ArrayList$Itr.checkForComodification(ArrayList.java:1013)\\n    at java.base/java.util.ArrayList$Itr.next(ArrayList.java:967)";
        break;
      case "java_oom":
        sampleText = "Exception in thread \"main\" java.lang.OutOfMemoryError: Java heap space\\n    at java.base/java.util.Arrays.copyOf(Arrays.java:3537)\\n    at com.example.DataCache.cacheAll(DataCache.java:42)";
        break;
      case "java_stack_overflow":
        sampleText = "Exception in thread \"main\" java.lang.StackOverflowError\\n    at com.example.Recursion.factorial(Recursion.java:14)\\n    at com.example.Recursion.factorial(Recursion.java:14)";
        break;
      case "rust_borrow":
        sampleText = "error[E0499]: cannot borrow `x` as mutable more than once at a time\\n --> src/main.rs:4:14\\n  |\\n3 |     let r1 = &mut x;\\n  |              ------ first mutable borrow occurs here\\n4 |     let r2 = &mut x;\\n  |              ^^^^^^ second mutable borrow occurs here";
        break;
      case "rust_move":
        sampleText = "error[E0382]: use of moved value: `s1`\\n --> src/main.rs:5:20\\n  |\\n2 |     let s1 = String::from(\"hello\");\\n  |         -- move occurs because `s1` has type `String`\\n3 |     let s2 = s1;\\n  |              -- value moved here\\n4 |     println!(\"{}\", s1);\\n  |                    ^^ value borrowed here after move";
        break;
      case "rust_lifetime":
        sampleText = "error[E0597]: `s` does not live long enough\\n --> src/main.rs:4:5\\n  |\\n2 |     let s = String::from(\"hello\");\\n  |         - binding `s` declared here\\n3 |     &s\\n  |     ^^ borrowed value does not live long enough\\n4 | }\\n  | - `s` dropped here while still borrowed";
        break;
      case "rust_panic_bounds":
        sampleText = "thread 'main' panicked at 'index out of bounds: the len is 3 but the index is 5', src/main.rs:6:14\\nnote: run with `RUST_BACKTRACE=1` environment variable to display a backtrace";
        break;
      case "rust_unwrap_none":
        sampleText = "thread 'main' panicked at 'called `Option::unwrap()` on a `None` value', src/main.rs:4:23\\nnote: run with `RUST_BACKTRACE=1` environment variable to display a backtrace";
        break;
      case "rust_div_zero":
        sampleText = "thread 'main' panicked at 'attempt to divide by zero', src/main.rs:3:13\\nnote: run with `RUST_BACKTRACE=1` environment variable to display a backtrace";
        break;
      case "go_bounds":
        sampleText = "panic: runtime error: index out of range [3] with length 3\\n\\ngoroutine 1 [running]:\\nmain.main()\\n\\t/app/main.go:12 +0x45";
        break;
      case "go_nil_pointer":
        sampleText = "panic: runtime error: invalid memory address or nil pointer dereference\\n[signal SIGSEGV: segmentation violation code=0x1 addr=0x0 pc=0x493f12]\\n\\ngoroutine 1 [running]:\\nmain.main()\\n\\t/app/main.go:18 +0x22";
        break;
      case "go_deadlock":
        sampleText = "fatal error: all goroutines are asleep - deadlock!\\n\\ngoroutine 1 [chan send]:\\nmain.main()\\n\\t/app/main.go:8 +0x50";
        break;
      case "go_div_zero":
        sampleText = "panic: runtime error: integer divide by zero\\n\\ngoroutine 1 [running]:\\nmain.main()\\n\\t/app/main.go:7 +0x3a";
        break;
      case "go_unused":
        sampleText = "# command-line-arguments\\n./main.go:6:5: x declared and not used\\n./main.go:3:8: \"math\" imported and not used";
        break;
      case "go_nil_map":
        sampleText = "panic: assignment to entry in nil map\\n\\ngoroutine 1 [running]:\\nmain.main()\\n\\t/app/main.go:9 +0x40";
        break;
      case "js_undef":
        sampleText = "Uncaught TypeError: Cannot read properties of undefined (reading 'map')\\n    at renderList (app.js:42:15)\\n    at onLoad (index.html:12:3)";
        break;
      case "js_func":
        sampleText = "Uncaught TypeError: calculateTotal is not a function\\n    at HTMLButtonElement.<anonymous> (app.js:105:7)";
        break;
      case "js_ref":
        sampleText = "Uncaught ReferenceError: myVar is not defined\\n    at processData (app.js:28:13)";
        break;
      case "js_promise":
        sampleText = "UnhandledPromiseRejectionWarning: Unhandled promise rejection: Error: Network request failed\\n    at fetchData (api.js:15:11)";
        break;
      case "sql_syntax":
        sampleText = "ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'name FROM users' at line 1";
        break;
      case "git_conflict":
        sampleText = "CONFLICT (content): Merge conflict in code.py\\nAutomatic merge failed; fix conflicts and then commit the result.";
        break;
      default:
        sampleText = item.errorType;
    }

    this.dom.errorInput.value = sampleText;
    this.updateCharCount();
    this.analyzeError();
  }

  autoDetectLanguage() {
    const text = this.dom.errorInput.value;
    let detected = "python";

    if (/Traceback|File ".*\.py"|ZeroDivisionError|IndentationError|KeyError|IndexError|NameError|AttributeError|ValueError|FileNotFoundError|ModuleNotFoundError|RecursionError|UnboundLocalError/i.test(text)) {
      detected = "python";
    } else if (/error\[E\d+\]|borrow of moved value|cannot borrow|thread 'main' panicked at|does not live long enough|mismatched types|\.rs:\d+/i.test(text)) {
      detected = "rust";
    } else if (/panic: runtime error|goroutine \d+|all goroutines are asleep|imported and not used|declared and not used|\.go:\d+/i.test(text)) {
      detected = "go";
    } else if (/java\.lang\.|java\.util\.|Exception in thread "main"|NullPointerException|ArrayIndexOutOfBoundsException|ArithmeticException|ClassCastException|StackOverflowError|OutOfMemoryError|ConcurrentModificationException/i.test(text)) {
      detected = "java";
    } else if (/segmentation fault|SIGSEGV|SIGFPE|SIGBUS|SIGABRT|double free or corruption|free\(\): invalid pointer|undefined reference to|unresolved external symbol|ld returned 1 exit status|std::out_of_range|std::bad_alloc/i.test(text)) {
      detected = "cpp";
    } else if (/TypeError: Cannot read|undefined|ReferenceError|PromiseRejection|\.js:\d+|\.ts:\d+/i.test(text)) {
      detected = "javascript";
    } else if (/ERROR \d+ \([0-9A-Z]+\)|SQL syntax|syntax error near/i.test(text)) {
      detected = "sql";
    } else if (/git|conflict|merge|HEAD/i.test(text)) {
      detected = "general";
    }

    this.dom.languageSelect.value = detected;
    this.showToast(`Auto-detected language: ${detected.toUpperCase()}`);
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
    this.dom.resSeverity.textContent = `${diag.severity} Severity`;
    this.dom.resLangTag.textContent = lang.toUpperCase();

    // STEP 3: Understand the Problem
    this.dom.resPlainEnglish.textContent = diag.plainEnglish;
    this.dom.resRootCause.textContent = diag.rootCause;
    this.dom.resTriggersList.innerHTML = diag.triggers
      .map((t) => `<li>${t}</li>`)
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

    const fullText = `### AlgoTester Diagnostic Report\n**Error:** ${error}\n\n**Plain English Explanation:**\n${plain}\n\n**Recommended Solution:**\n\`\`\`\n${code}\n\`\`\`\n\n**Prevention:**\n${prevention}`;

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
