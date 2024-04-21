# Seminar Activities

___Design an activity diagram which shows the relationships and interactivity between the user’s behaviour within the driverless car.___
</br>

![State Machine Diagram](/images/02_04_activity_diagram.svg)
</br>

___Expand upon the activity diagram with the development of a class diagram using UML to support a system with basic employee-related functionality. This should include the retention of employee details and allowing an employee to book a day of annual leave.___
</br>

<pre class="mermaid flex justify-center mb-5">
classDiagram
    class Employee {
        +name: string
        +position: string
        -_annual_leave_days: int = 20
        -_leaves_taken: int = 0
        +book_annual_leave(days: int): void
        +get_leave_status(): tuple
    }
</pre>
</br>


___Develop the Python program to implement the class model.___
Employee class with this functionality was developed in the previous e-Portfolio activity in Unit 2.

</br>

