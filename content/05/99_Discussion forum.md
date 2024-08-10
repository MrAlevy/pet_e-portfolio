# Discussion Topic: UML flowchart

Selected Coding Weakness: SQL Injection (OWASP A1:2017-Injection)
</br>

__UML Models to Use__
</br>

___Use Case Diagram:___ To illustrate the different interactions users have with the system, highlighting areas where inputs are received and processed.
</br>

___Activity Diagram:___ To map out the workflow of data from user input through processing to SQL query execution, showing where and how user inputs can integrate into SQL commands.
</br>

___Sequence Diagram:___ To depict the interaction between objects over time particularly how data flows through different system components leading up to the SQL injection point.
</br>

These UML models are appropriate because they provide a clear visualization of how user data traverses the system (Activity and Sequence Diagrams) and identify the roles interacting with vulnerable system components (Use Case Diagram). This visualization is crucial for understanding the points at which malicious data could affect the system, thereby aiding in the identification of where additional security measures, like input validation and parameterized queries, should be implemented.
</br>

By using these models, developers and security analysts can more effectively pinpoint the system's vulnerabilities, understand the interactions at play, and implement more robust security measures to mitigate such weaknesses.
</br>

<pre class="mermaid flex justify-center mb-5">
sequenceDiagram
    participant User
    participant FrontEnd
    participant BackEnd
    participant Database
    User->>FrontEnd: Enter Data
    FrontEnd->>BackEnd: Send Data
    BackEnd->>BackEnd: Validate Input
    alt Input is Valid
        BackEnd->>Database: Execute SQL Query
        Database-->>BackEnd: Query Results
    else Input is Invalid
        BackEnd-->>FrontEnd: Error Message
    end
    BackEnd-->>FrontEnd: Response
    FrontEnd-->>User: Display Results/Error
</pre>
