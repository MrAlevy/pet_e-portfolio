# e-Portfolio Activities

___How relevant is the cyclomatic complexity in object oriented systems? Which alternative metrics do you consider to be more reflective of the complexity of a piece of code, in comparison to the number of independent paths through a program? Support your response using reference to the related academic literature.___
</br>

Cyclomatic complexity is a software metric used to measure the complexity of a program by counting the number of independent paths through the code. In object-oriented systems, cyclomatic complexity can be relevant as it helps identify areas of code that may be difficult to maintain or test. However, cyclomatic complexity alone may not provide a complete picture of the complexity of a piece of code in an object-oriented system (Ebert et al., 2016).
</br>

One alternative metric that can complement cyclomatic complexity is the depth of inheritance tree (DIT). DIT measures the number of levels in the inheritance hierarchy of a class, indicating the complexity of the class's relationships with other classes. A high DIT value can indicate a complex class structure, which may impact the maintainability and understandability of the code (Naiya et al., 2015).
</br>

**References**
- Ebert, C. et al. (Nov.-Dec 2016) ‘Cyclomatic Complexity’, IEEE Software, 33(6), pp. 27–29.
- Naiya, N., Counsell, S. and Hall, T. (2015) ‘The Relationship between Depth of Inheritance and Refactoring: An Empirical Study of Eclipse Releases’, in 2015 41st Euromicro Conference on Software Engineering and Advanced Applications. IEEE, pp. 88–91.
</br>
</br>
</br>





___To what extent is cyclomatic complexity relevant when developing object-oriented code?___
</br>

In object-oriented code, cyclomatic complexity can be relevant as it helps identify areas of code that may be difficult to maintain, test, or understand. High cyclomatic complexity values can indicate code that is more error-prone, harder to maintain, and potentially less reusable. By analyzing the number of independent paths through the code, developers can gain insights into the complexity of the control flow and make informed decisions on refactoring or optimizing the codebase.
</br>
</br>



___What is the cyclomatic complexity of the following piece of code?___

```python
public static string IntroducePerson(string name, int age)
{
    var response = $"Hi! My name is {name} and I'm {age} years old.";

    if (age >= 18)
        response += " I'm an adult.";

    if (name.Length > 7)
        response += " I have a long name.";

    return response;
}
```
</br>

The cyclomatic complexity of the given code can be calculated by counting the number of decision points in the code. In this case, there are two decision points (if statements), resulting in a cyclomatic complexity of 3. This value represents the number of independent paths through the code, which can help assess the complexity and testability of the function.

</br>
</br>




___Extend the following program to test accuracy of operations using the assert statement.___

```python
# Python String Operations
str1 = 'Hello'
str2 = 'World!'

# using +
concatenated_result = str1 + str2
print('str1 + str2 = ', concatenated_result)

# Assert to check if the concatenation is correct
assert concatenated_result == 'HelloWorld!', "Error: str1 + str2 should result in 'HelloWorld!'"

# using *
repeated_result = str1 * 3
print('str1 * 3 =', repeated_result)

# Assert to check if the repetition is correct
assert repeated_result == 'HelloHelloHello', "Error: str1 * 3 should result in 'HelloHelloHello'"
```