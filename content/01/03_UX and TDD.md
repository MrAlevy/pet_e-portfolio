# UX: User Experience
In recent years, the focus on designing interactive systems has shifted towards enhancing user experience (UX), broadening the scope beyond mere usability and efficiency. This evolution acknowledges the significance of hedonic, aesthetic, and emotional factors in shaping user interactions. The emerging integrative model of UX emphasizes the interplay between traditional quality aspects and these additional dimensions, underscoring the role of emotions and affect in the user experience. This comprehensive approach aims to create interactive systems that not only meet functional requirements but also resonate on a deeper, emotional level with users.

Reflecting on this perspective, it's clear that the development of applications, particularly through practices like Test-Driven Development (TDD), must adapt to incorporate these broader UX considerations. TDD, which prioritizes writing tests before code, ensures functionality and reliability but may need to be augmented to account for the nuanced aspects of UX highlighted in the discussion. As a developer, this underscores the importance of adopting a holistic view of application development—one that encompasses not just the technical execution but also the emotional and aesthetic impact on the user. This approach not only aligns with the evolving landscape of user expectations but also challenges developers to think creatively about how their work affects user perceptions and emotions (Aguilar 2016).
</br>

**References**
- Aguilar, R. (2016) ‘Using test-driven development to improve software development practices’. Available at: https://skemman.is/bitstream/1946/26193/1/tdd_research_study_2016_raquelita.pdf.
</br>
</br>

# TDD: Test-Driven Development
Test-Driven Development (TDD) is a powerful approach to application development. In TDD, writing tests comes before writing the actual code. This method encourages better planning and design, leading to more reliable and maintainable code. By continuously testing while developing, you can catch and fix errors early, ensuring the application works as intended from the start.
</br>

<pre class="mermaid flex justify-center mb-5">
graph TD;
    A(Start) --> B[Write Test for a New Feature]
    B --> C{Run Test}
    C -->|Fail| D[Write Code to Pass Test]
    D --> E{Test Passes?}
    E -->|Yes| F[Refactor Code]
    F --> G[Review & Optimize]
    G --> H[All Features Covered?]
    H -->|No| B
    H -->|Yes| I[Finish Development Cycle]
    C -->|Pass| G
    style B fill:#f9f,stroke:#333,stroke-width:2px
    style D fill:#bbf,stroke:#333,stroke-width:2px
    style F fill:#bfb,stroke:#333,stroke-width:2px
    style G fill:#fbb,stroke:#333,stroke-width:4px
    style E fill:#fff,stroke:#333,stroke-width:2px
    style H fill:#fff,stroke:#333,stroke-width:2px
</pre>

This diagram illustrates the TDD cycle: Start by writing a test, write code to pass the test, then refactor the code for better structure and maintainability, and repeat. This approach not only improves code quality but also enhances developer understanding of the application's requirements and design.
</br>

## Pytest

The Python community has developed a robust testing framework called `pytest`. This tool simplifies writing and executing tests, making it easier to adopt TDD practices. The following example demonstrates how to use `pytest` to test a simple `Wallet` class. The tests cover the default initial amount, setting the initial amount, adding cash, spending cash, and raising an exception for insufficient funds.

```python
 class InsufficientAmount(Exception): 
    pass 

class Wallet(object): 
     def __init__(self, initial_amount=0): 
        self.balance = initial_amount 


    def spend_cash(self, amount): 
        if self.balance < amount: 
            raise InsufficientAmount(
              'Not enough available to spend {}'.format(amount)
              ) 
        self.balance -= amount 

    def add_cash(self, amount): 
        self.balance += amount 
```
The tests are written in a separate file, `test_wallet.py`, and use the `pytest` framework to run the tests.

```python
import pytest 
from wallet import Wallet, InsufficientAmount 

def test_default_initial_amount(): 
    wallet = Wallet() 
    assert wallet.balance == 0 

def test_setting_initial_amount(): 
    wallet = Wallet(100) 
    assert wallet.balance == 100 

def test_wallet_add_cash(): 
    wallet = Wallet(10) 
    wallet.add_cash(90) 
    assert wallet.balance == 100 

def test_wallet_spend_cash(): 
    wallet = Wallet(20) 
    wallet.spend_cash(10) 
    assert wallet.balance == 10 

def test_wallet_spend_cash_raises_exception_on_insufficient_amount(): 
    wallet = Wallet() 
    with pytest.raises(InsufficientAmount): 
        wallet.spend_cash(100) 
```
</br>

**Pytest** emerges as a robust framework that enhances the Python testing experience through its informative output and streamlined workflow. It starts with a detailed report, including the system state, versions of Python, pytest, plugins, and the root directory for tests, setting the stage for a transparent test session. The simplicity of interpreting test results makes tracking progress and identifying issues straightforward.
</br>

The real power of pytest becomes evident in handling failed tests. It provides a breakdown of failures, pinpointing the exact assertion that caused the test to fail. This level of detail is invaluable for debugging. Moreover, pytest's output is notably more readable compared to other frameworks, like unittest, which bolsters its appeal.

Beyond just running tests, pytest offers a deeper engagement with test-driven development (TDD). It leverages the familiar assert keyword, eliminating the need to learn new assertions or frameworks for writing tests. This approach not only lowers the learning curve but also streamlines the process of writing and maintaining tests.

Each test in pytest is concise and self-contained, enhancing readability and isolating issues efficiently. This structure, combined with the expressive failure reports, significantly aids in debugging and maintaining a clean codebase. As pytest encourages explicit declaration of test dependencies through fixtures, it ensures a clear understanding of each test's requirements, further simplifying test management and enhancing code clarity.
</br>

In summary, pytest stands out for its user-friendly syntax, detailed error reporting, and a supportive ecosystem that includes a wide array of plugins. These features collectively make pytest an indispensable tool for Python developers aiming to adopt TDD and maintain high-quality codebases.
</br>

**References**
- Pytest Documentation. Available at: https://docs.pytest.org/en/6.2.x/.
- Real Python. (2021) 'Python Testing with pytest'. Available at: https://realpython.com/pytest-python-testing/.