# Equivalence Testing in Python

The provided code implements an equivalence partitioning algorithm in Python. Equivalence partitioning is a technique used to group objects into classes where each object in the same class is considered equivalent based on a given relation. The key functionality is demonstrated in the `equivalence_partition` and `equivalence_enumeration` functions.
</br>

A validation function to ensure the partitioning is consistent with the given relation.
It asserts that all objects within the same class are equivalent under the relation and that objects in different classes are not.
</br>

`test_equivalence_partition():`
This test function partitions the range of integers from -3 to 5 based on the relation `(x - y) % 4 == 0`.
The relation defines that two numbers are equivalent if the difference between them is divisible by 4.
The function then prints out the resulting equivalence classes and the partitioning.
</br>

Running the test_equivalence_partition() produces the following sets of equivalence classes:

```python
set([1, -3])
set([2, -2])
set([3, -1])
set([0, 4])
```
</br>

The output demonstrates how integers from -3 to 4 are grouped into equivalence classes based on the relation `(x - y) % 4 == 0`. For instance:
1 and -3 are in the same equivalence class because `(1 - (-3)) % 4 == 0 (i.e., 4 % 4 == 0)`.
Similarly, 0 and 4 are grouped together because `(0 - 4) % 4 == 0`.
The partitioning dictionary provides a mapping of each integer to its respective equivalence class.
</br>

The code provides a clear demonstration of how to implement equivalence partitioning based on a custom relation. The flexibility of defining the relation allows this code to be adapted to a wide range of problems involving classification, clustering, or partitioning.
</br>

One area for further investigation is experimenting with different types of relations, such as geometric distances, string similarities, or other domain-specific relationships. Additionally, the performance of the algorithm could be explored for large datasets or more complex relations.
</br>

Another note is that the structure of the code is quite modular, making it easy to extend. For example, adding support for dynamic relations or more advanced equivalence checking mechanisms would be straightforward.
</br>

# Exploring the Cyclomatic Complexity

___Is Cyclomatic Complexity Still Relevant?___
Cyclomatic Complexity measures code complexity by counting independent paths through a program. While it’s widely used for maintainability, its relevance today is debatable, especially in the context of modern software practices and security.
</br>

**Pros:**
- Maintainability: Lower complexity often correlates with easier-to-read and maintain code.
- Testing: High complexity can highlight areas requiring more rigorous testing.
- Code Reviews: It helps prioritize code refactoring.
</br>
</br>

**Cons:**
- Modern Architectures: Microservices and event-driven systems render this metric less impactful.
- Advanced Tools: IDEs and automated code analysis offer more comprehensive insights.
- Security Focus: Complexity alone doesn’t directly address key security concerns like validation, access control, or encryption.
</br>
</br>

___Relevance in Secure Software Development___
While Cyclomatic Complexity can indicate potential security risks due to overly complex code, it’s limited in addressing specific security issues. For secure development, it’s best to combine this metric with security-focused practices like threat modeling, static analysis, and secure coding guidelines.
</br>

However, Cyclomatic Complexity is still relevant because it directly ties to code maintainability, which impacts security. Complex code is harder to understand, review, and test, increasing the risk of introducing vulnerabilities. By monitoring and reducing Cyclomatic Complexity, developers can create simpler, more auditable codebases that are less likely to contain hidden flaws. However, focusing solely on this metric can be misleading, as it doesn’t cover security-specific concerns like data validation or proper access controls. Therefore, while Cyclomatic Complexity is a valuable tool, it must be complemented by other practices for a well-rounded, secure development process. (Ferrer et al., 2013; Shepperd, 1998)
</br>

**References**
- Ferrer, J., Chicano, F. & Alba, E. (2013) ‘Estimating software testing complexity’, Information and Software Technology, 55(12), pp. 2125–2139.
- Shepperd, M. (1998) ‘A critique of cyclomatic complexity as a software metric’, Software Engineering Journal, 3(2), pp. 30–36.
</br>
</br>


# Exploring Linters to Support Testing

**Question 1**
When the code is run, it raises an `IndentationError: expected an indented block` because Python expects indented code after the function definition. The code can be modified by correctly indenting the block following the function definition.
```python
def factorial(n):
    """ Return factorial of n """
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
```

</br>

**Question 2**
When running `pylint` on `pylintTest.py`, the error `E0001: Parsing failed: 'Missing parentheses in call to 'print'. Did you mean print(...)?` occurs. This error is due to the use of the print statement without parentheses, which is valid in Python 2 but not in Python 3.
To correct this error, the print statement should be updated to use parentheses: `print(encoded)`.
</br>

**Question 3**
When running `flake8` on `pylintTest.py`, the error `E999 SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?` occurs. This error is the same as the one reported by `pylint` and highlights the need for parentheses around the `print` function for Python 3 compatibility. While `pylint` identifies this as a syntax error, `flake8` also flags it as `E999`, but the issue remains the same.

Running `flake8` on `metricTest.py` returns the error `E999 SyntaxError: invalid character '–' (U+2013)` on line 25. This error is caused by using an en dash (`–`, U+2013) instead of a regular hyphen (`-`) in the subtraction operation. To correct the errors, parentheses must be added to the `print` statement in `pylintTest.py` and replaced the en dash with a regular hyphen in `metricTest.py`, ensuring the code is syntactically correct.
</br>

**Question 4**
When running `mccabe` on `sums.py`, the output shows that the cyclomatic complexity for the function `test_sum` is `1`, with an additional complexity of `2` contributed by the `if` statement. This gives a total cyclomatic complexity score of `2` for the `sums.py` file.

For `sums2.py`, the output shows that the cyclomatic complexity for `test_sum` is `1` and for `test_sum_tuple` is also `1`. The `if` statement contributes an additional complexity of `2`, resulting in a total cyclomatic complexity score of `3` for the `sums2.py` file.
_Contributors to Cyclomatic Complexity_
- **`sums.py`**: 
  - The `if` statement at the bottom of the file contributes to the cyclomatic complexity, as it introduces one decision point.
- **`sums2.py`**:
   - Similarly, the `if` statement contributes to the complexity.
   - The addition of the `test_sum_tuple` function also increases the overall complexity, as each function adds to the total score.
</br>
In summary, the cyclomatic complexity for `sums.py` is lower because it contains only one function and one decision point. `sums2.py` has a higher complexity due to the additional function `test_sum_tuple`, making the code slightly more complex in terms of the number of independent paths.

</br>

