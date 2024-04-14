# Codio Activity

For this challenge, it was needed to create a new class called `Person` that has the following attributes: `name`, `age`, and `occupation`. The class should have methods to get and set each attribute. 
</br>

```python
class Person:
    def __init__(self, name, age, occupation):
        self._name = name
        self._age = age
        self._occupation = occupation

    def get_name(self):
        return self._name

    def set_name(self, name):
        self._name = name

    def get_age(self):
        return self._age

    def set_age(self, age):
        self._age = age

    def get_occupation(self):
        return self._occupation

    def set_occupation(self, occupation):
        self._occupation = occupation

my_person = Person("Citra Curie", 16, "student")
my_person.set_name("Rowan Faraday")
my_person.set_age(18)
my_person.set_occupation("plumber")
```
</br>
</br>


# Seminar Activities

___Develop a Python program which has three abstract methods and one subclass which allows a user to perform banking operations.___
</br>

```python
class BankOperations:
    def deposit(self, amount):
        """Deposit money into the account."""
        raise NotImplementedError("Subclass must implement abstract method")

    def withdraw(self, amount):
        """Withdraw money from the account."""
        raise NotImplementedError("Subclass must implement abstract method")

    def check_balance(self):
        """Return the current balance of the account."""
        raise NotImplementedError("Subclass must implement abstract method")

class PersonalAccount(BankOperations):
    def __init__(self):
        self._balance = 0

    def deposit(self, amount):
        """Simulate depositing money into the account."""
        print(f"Deposited ${amount}")

    def withdraw(self, amount):
        """Simulate withdrawing money from the account."""
        print(f"Withdrew ${amount}")

    def check_balance(self):
        """Return the current simulated balance."""
        return f"Current balance is ${self._balance}"

# Example usage
account = PersonalAccount()
account.deposit(100)
account.withdraw(50)
print(account.check_balance()) # "Current balance is $50"
```
</br>
</br>


___Read the article by Knox et al. (2018) and answer the following questions:___
___What is Component-based modelling?___
___Upon what do component-based modelling frameworks depend?___
___Within the context of the work presented in this paper, what is Pynsim?___
___How does Pynsim achieve its goal when using object oriented Python programming?___
</br>

According to Knox et al. (2018), component-based modeling is an approach that organizes systems as a collection of interoperable components, each encapsulating specific functionalities. It allows for easy development, testing, integration, and maintenance.
</br>

Dependencies of Component-based Modeling Frameworks:
- Interfaces: Define communication methods between components.
- Reusability: Components are designed to be generic and reusable across different systems.
- Interoperability: Ensures components work seamlessly with different parts of a system.
- Encapsulation: Components hide their internal states and behaviors to ensure modularity.
- Decomposition: Simplifies complex processes into manageable parts.
</br>
</br>

_Pynsim_ is a Python-based framework designed for building networked resource system simulators. It employs an object-oriented approach to define networks and simulate behaviors, making it versatile and modular for various applications.

Pynsim leverages object-oriented programming (OOP) to structure and manage complex simulations effectively. It achieves its goals by:
- Modularity: Using classes to encapsulate data and behaviors, Pynsim makes each component of the simulation a self-contained unit. This allows for easy reuse and modification.
- Inheritance: By extending base classes, Pynsim can create specialized behaviors for different elements of the network, enhancing flexibility without altering existing code.
- Polymorphism: This OOP feature allows Pynsim to handle different network elements (nodes, links, institutions) using the same interface but perform different actions, facilitating the management of diverse system components seamlessly.
- Encapsulation: Protecting the internal state of objects prevents external components from directly altering or interacting with them unless through specified methods, which maintains data integrity and reduces errors.
Through these principles, Pynsim provides a robust framework for building and running complex network-based simulations in an organized and efficient manner.
</br>
</br>

**References**
- Knox, A., et al. (2018). Pynsim: A Python-based framework for building networked resource system simulators. Environmental Modelling & Software, 109, 32-44.