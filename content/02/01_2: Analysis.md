# Codio Activity

The goal of this task is to extend the functionality of an existing `Person` class by adding new methods that provide more detailed information about each instance and the class as a whole. This will involve implementing instance methods for detailed object reporting, as well as a static method for class-wide attribute reporting.
</br>

```python
class Person:
    count = 0
    
    """Represents a generic Person."""
    
    def __init__(self, first, last, weight, height):
        self.first_name = first
        self.last_name = last
        self.weight_in_lbs = weight
        self.height_in_inches = height
        Person.count += 1

    def calc_bmi(self):
        return (self.weight_in_lbs * 703) / self.height_in_inches ** 2

    def print_self(self):
      print("Name: {} {}, Weight: {}lbs, Height: {}in, BMI: {:.2f}".format(self.first_name, self.last_name, self.weight_in_lbs, self.height_in_inches, self.calc_bmi()))

    def weight_status(self):
        bmi = self.calc_bmi()
        if bmi < 18.5:
            return "Underweight"
        elif 18.5 <= bmi < 25:
            return "Good weight"
        else:
            return "Overweight"

    @classmethod
    def print_count(cls):
        print("Total number of Person instances: {}".format(cls.count))
    
    @staticmethod
    def print_class():
        print("Total number of Person instances: {}".format(Person.count))

# Creating Person instances
p1 = Person('Tom', 'Thumb', 150, 62)
p2 = Person('Fred', 'Flint', 225, 57)

# Using the print_self method to validate the output is correct for each object instance
p1.print_self()
p2.print_self()

# Using the weight_status method to output the result
print(p1.weight_status())
print(p2.weight_status())

# Displaying the total count of Person instances
Person.print_count() # Class method
Person.print_class()  # Static method

''' Output:
Name: Tom Thumb, Weight: 150lbs, Height: 62in, BMI: 27.43
Name: Fred Flint, Weight: 225lbs, Height: 57in, BMI: 48.68
Overweight
Overweight
Total number of Person instances: 2
Total number of Person instances: 2
'''
```
</br>

In this example, the `Person` class has been extended to include two new methods: `print_self` and `weight_status`. The `print_self` method provides detailed information about each instance, including the first and last name, weight, height, and calculated BMI. The `weight_status` method uses the calculated BMI to determine the weight status of each instance, returning a string indicating whether the person is underweight, has a good weight, or is overweight.
Additionally, two new methods have been added to the `Person` class: `print_count` and `print_class`. The `print_count` method is a **class method** that prints the total number of `Person` instances, while the `print_class` method is a **static method** that also prints the total number of `Person` instances. These methods provide class-wide information about the number of instances created, and can be called without needing to create an instance of the class.
</br>
</br>


# e-Portfolio Activities

___Write a Python program to achieve basic employee-related functionality which includes retaining employee details and allowing an employee to book a day of annual leave. Extend the Python program you have now created to use protected and unprotected variables.___
</br>

```python
class Employee:
    _annual_leave_days = 20  # Protected variable, common to all instances

    def __init__(self, name, position):
        self.name = name  # Public variable
        self.position = position  # Public variable
        self._leaves_taken = 0  # Protected variable, specific to each instance

    def book_annual_leave(self, days):
        """Books annual leave for the employee if sufficient days are available."""
        if days <= (Employee._annual_leave_days - self._leaves_taken):
            self._leaves_taken += days
            print(f"{self.name} has successfully booked {days} days of leave.")
        else:
            print(f"{self.name} cannot book {days} days of leave. Not enough leave days available.")

    def get_leave_status(self):
        """Returns the number of leave days taken and available."""
        return self._leaves_taken, Employee._annual_leave_days - self._leaves_taken

# Creating an Employee object
employee1 = Employee("John Doe", "Software Developer")

# Accessing and printing public variables
print(f"Name: {employee1.name}, Position: {employee1.position}") # "Name: John Doe, Position: Software Developer"

# Booking annual leave
employee1.book_annual_leave(5)

# Getting leave status
taken, available = employee1.get_leave_status()
print(f"Leave Taken: {taken}, Leave Available: {available}") # "Leave Taken: 5, Leave Available: 15"

# Trying to book more leave than available
employee1.book_annual_leave(17)  # "John Doe cannot book 17 days of leave. Not enough leave days available."
```
</br>

In this example, the `Employee` class has been extended to include functionality for booking annual leave. The `_annual_leave_days` variable is a **protected class variable** that is common to all instances, while the `_leaves_taken` variable is a **protected instance variable** that is specific to each instance. The `book_annual_leave` method allows an employee to book a specified number of days of annual leave, updating the `_leaves_taken` variable if sufficient days are available. The `get_leave_status` method returns the number of leave days taken and available for a specific employee. This program demonstrates the use of both protected and unprotected variables within a class to manage employee-related functionality.
</br>
</br>


# Seminar Activities

___The summative assessment for this module involves the design and implementation of software to support operation of an autonomous car.___
___Write a pen portrait for a user of a driverless car.___
___Create a use case model which captures the ways in which a user needs to interact with the software system.___
</br>

Pen Portrait: Alex and the Driverless Car
Alex is 30 years old and really into the latest gadgets and technology. Living in a big city, Alex works in digital marketing, which means always looking for smart ways to do things better and more sustainably. For Alex, using a driverless car isn't just about the convenience; it's about moving around in a safer, smarter, and more eco-friendly way.

Every day, Alex uses the driverless car to go to work and sometimes take trips on the weekend. It's great because Alex can relax, listen to music, or reply to emails while the car does the driving.

Figuring out how to use the car’s features was simple. Alex can tell the car where to go, when to get checked, and stay updated about the roads. Alex really likes this car. It makes life easier and helps take care of the earth.

</br>

![Use Case Diagram](/images/02_01_use_case_diagram.svg)
