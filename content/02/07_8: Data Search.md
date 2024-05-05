# Codio Activity

For this challenge, it was required to implement the compare method in the Chef class. The compare method should compare the number of Michelin stars of two chefs and return the chef with more Michelin stars. If both chefs have the same number of Michelin stars, the method should return "Both chefs have the same number of Michelin stars."
</br>

```python
class Chef:
    def __init__(self, name, cuisine, stars):
        self.name = name
        self.cuisine = cuisine
        self.michelin_stars = stars

    def compare(self, other_chef):
        # Emulate operator overloading by using comparison operators inside the method
        if self > other_chef:
            return f'{self.name} has more Michelin stars than {other_chef.name}'
        elif self < other_chef:
            return f'{other_chef.name} has more Michelin stars than {self.name}'
        else:
            return f'{self.name} and {other_chef.name} have the same number of Michelin stars'
    
    # Magic methods for operator overloading
    def __gt__(self, other):
        return self.michelin_stars > other.michelin_stars

    def __lt__(self, other):
        return self.michelin_stars < other.michelin_stars

# Instantiate the Chef objects
marco = Chef('Marco Pierre White', 'French, British', 3)
rene = Chef('Rene Redzepi', 'Nordic', 2)

print(marco.compare(rene))  # Output: Marco Pierre White has more Michelin stars than Rene Redzepi
print(rene.compare(marco))  # Output: Marco Pierre White has more Michelin stars than Rene Redzepi
```
</br>
</br>

In this challenge, the recursive function should be implemented without using the built-in ** operator in Python. The function should return the result of the base raised to the power of the exponent.
</br>

```python
def power(base, exponent):
    if exponent == 0:
        return 1
    elif exponent == 1:
        return base
    else:
        return base * power(base, exponent - 1)

print(power(2, 3))  # Output: 8
print(power(5, 2))  # Output: 25
print(power(3, 4))  # Output: 81
```
</br>
</br>


# Seminar Activities

___Incorporate the following code into a Python program to handle exceptions.___
</br>

```python
def divide_numbers(x, y):
    try:
        result = x / y
        print("Result of division:", result)
    except ValueError:
        print("Caught a ValueError")
    except (TypeError, ZeroDivisionError):
        print("Caught a TypeError or ZeroDivisionError")
    except Exception as e:
        print("Caught an exception:", e)

# Test cases
divide_numbers(10, 2)  # Normal division
divide_numbers(10, 0)  # Division by zero
divide_numbers("a", 2)  # TypeError
```
</br>
</br>

___Write a Python program to carry out a linear search on a list data structure.___
</br>

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Return the index if the target is found
    return -1  # Return -1 if the target is not found

# Test the linear search function
my_list = [4, 2, 7, 1, 9, 5]
target_value = 7

index = linear_search(my_list, target_value)

print(index)  # Output: 2 (Index of the target value in the list
```