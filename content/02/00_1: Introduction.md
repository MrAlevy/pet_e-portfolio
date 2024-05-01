# Codio Activity

The task is to create a Python program that defines a class called `Person` with the following attributes: `first_name`, `last_name`, `weight`, and `height`. Then, create five `Person` objects with given attributes and store them in a list. Finally, iterate over the list and print out the first names of each `Person` object.
</br>

```python
# Define the Person class
class Person:
    def __init__(self, first_name, last_name, weight, height):
        self.first_name = first_name
        self.last_name = last_name
        self.weight = weight
        self.height = height

# Create five Person objects with given attributes
p1 = Person("Tom", "Smith", 150, 70)
p2 = Person("Fred", "Johnson", 165, 72)
p3 = Person("George", "Williams", 160, 68)
p4 = Person("Tanya", "Brown", 130, 65)
p5 = Person("Mary", "Jones", 140, 64)

# Store the objects in a list
persons = [p1, p2, p3, p4, p5]

# Iterate over the list and print out the first names of each Person object
for person in persons:
    print(person.first_name)

''' Output:
Tom
Fred
George
Tanya
Mary
'''
```
</br>
</br>


# e-Portfolio Activities

___Review the article by Di Silvestro & Nadir (2021). Discuss one aspect of this article which you find unexpected.___
</br>

The aspect of the article by Di Silvestro & Nadir (2021) that I find unexpected is the emphasis on the significant role that collaboration played in the ePortfolio development process, leading to enhanced learning experiences. This is somewhat surprising because the use of ePortfolios is often associated primarily with individual reflection, personal growth, and self-directed learning. However, the article highlights how the collaborative aspect of ePortfolio creation, including peer feedback and dialogue, not only supported the reflective and deeper learning process but also makes stronger a sense of community among students. This collaborative dimension enhances the reflective process by providing different perspectives, which in turn enriches the learning experience much more what an individual might achieve in isolation.

This focus on collaboration as a key component of ePortfolio development challenges the idea that reflective and deeper learning are purely individual activities. Instead, it suggests that interaction with peers can significantly enhance these processes by offering new insights, challenging existing beliefs, and supporting personal and professional growth. This unexpected finding underscores the importance of designing ePortfolio activities that encourage peer interaction and feedback, thus maximizing the potential for reflective and deeper learning in studying.
</br>

**References**
- Di Silvestro, F., & Nadir, H. (2021). The Power of ePortfolio Development to Foster Reflective and Deeper Learning in an Online Graduate Adult Education Program. Adult Learning, 32(4), 154-164.
</br>
</br>
</br>

___Develop a Python program and apply protected and unprotected variables within it.___
</br>

```python
class VariablesDemo:
    def __init__(self):
        self.publicVar = 0 # public variable
        self._protectedVar = 1 # protected variable
        self.__privateVar = 2 # private variable


obj = VariablesDemo()

print(obj.publicVar) # 0
print(obj._protectedVar) # 1
print(obj.__privateVar) # AttributeError: 'VariablesDemo' object has no attribute '__privateVar'
```
</br>

This program demonstrates the use of public, protected, and private variables in Python. The `publicVar` is accessible from outside the class, while the `_protectedVar` is protected and can be accessed from outside the class but should not be. The `__privateVar` is private and cannot be accessed from outside the class. The program will raise an AttributeError when trying to access the private variable from outside the class.