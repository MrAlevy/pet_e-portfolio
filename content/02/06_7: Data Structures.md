# e-Portfolio Activities

___Discuss the ways in which data structures support object-oriented development. Use examples of three different data structures to contextualise your response.___
</br>

Data structures play a crucial role in object-oriented development by organizing data in a way that matches the logic of the software. Here are three examples.
</br>

_Classes and Objects:_ In OOP, classes act as templates to create objects. Objects are instances of classes and can hold data and methods that act on that data. This allows for the creation of reusable and modular code.

```python
class Car:
    def __init__(self, color, model):
        self.color = color
        self.model = model

    def drive(self):
        print("The car is driving.")

    def brake(self):
        print("The car has stopped.")
```
</br>

_Lists:_ Lists are a versatile data structure that can store multiple items in a single variable. In OOP, lists can be used to manage collections of objects or data.

```python
car1 = Car("red", "SUV")
car2 = Car("blue", "sedan")
parking_lot = [car1, car2]

for car in parking_lot:
    car.drive()
```
</br>

_Dictionaries:_ Dictionaries allow you to store data in key-value pairs. This is especially useful in OOP for linking attributes with values dynamically and can be used to store properties of objects in a flexible way.

```python
cars = {
    1: Car("green", "convertible"),
    2: Car("black", "coupe")
}

cars[1].drive()
```
</br>

_Queues:_ A queue is a data structure that follows the First In First Out (FIFO) principle. This means the first item added to the queue will be the first one to be removed. Queues are useful in scenarios like managing items in an application where items need to be handled in the order they were received.

```python
from collections import deque

queue = deque()

queue.append("Item 1")
queue.append("Item 2")

while queue:
    item = queue.popleft()
    print(f"Processing: {item}")
```
</br>

_Stacks:_ A stack is a data structure that follows the Last In First Out (LIFO) principle. The last item added to the stack is the first to be removed. Stacks are ideal for features like undo mechanisms in applications, where the most recent action should be reversible first.

```python
stack = []

stack.append("Item 1")
stack.append("Item 2")

while stack:
    item = stack.pop()
    print(f"Processing: {item}")
```
</br>
</br>




___Create a nested dictionary of data on cars within a Car class. Extend the program to work the dictionary by calling the following methods: items(), keys(), values()___
</br>

```python
class Car:
    def __init__(self):
        self.cars = {
            'sedan': {'color': 'blue', 'year': 2020, 'engine': 'V6'},
            'SUV': {'color': 'red', 'year': 2018, 'engine': 'V8'},
            'convertible': {'color': 'green', 'year': 2021, 'engine': 'V4'}
        }

    def get_items(self):
        return self.cars.items()

    def get_keys(self):
        return self.cars.keys()

    def get_values(self):
        return self.cars.values()

car_instance = Car()

print("Items:", list(car_instance.get_items()))
print("Keys:", list(car_instance.get_keys()))
print("Values:", list(car_instance.get_values()))
```