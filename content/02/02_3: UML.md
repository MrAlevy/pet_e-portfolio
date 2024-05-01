# e-Portfolio Activities

___Discuss which UML models are most applicable at different stages of the Software Development Life Cycle.___
</br>

In the Software Development Life Cycle (SDLC), UML (Unified Modeling Language) diagrams play a pivotal role in visualizing and documenting different aspects of software systems. These diagrams are crucial for understanding system structure, behavior, and interactions at various stages of development. Let's explore the applicability of different UML models across the SDLC phases, using straightforward language suitable for academic contexts (Lange et al. 2006).
</br>

_Requirement Analysis and Planning Phase:_
**Use Case Diagrams:** Ideal for capturing functional requirements, use case diagrams help to outline what users expect from the system. They depict the interactions between the user (actor) and the system, highlighting the system's functionalities without delving into how these functionalities are implemented.
</br>

_Design Phase:_
**Class Diagrams:** These diagrams are essential for designing the system's structure. They show the classes, attributes, operations, and relationships between classes, providing a blueprint for the object-oriented programming structure.
**Sequence Diagrams:** Useful for detailing how objects interact with each other based on time sequence, sequence diagrams help in understanding the flow of operations, making them invaluable for dynamic behavior analysis.
Activity Diagrams: For modeling the workflow of a system or a process, activity diagrams illustrate the sequence of activities and conditions for moving from one activity to the next. They are particularly useful in complex scenarios to ensure clarity in process flow.
</br>

_Implementation Phase:_
**Component Diagrams:** These diagrams illustrate the organization and dependencies among software components, aiding in the modular view of a system. Component diagrams are crucial for developers during coding, as they show the components that need to be developed and their relationships.
Deployment Diagrams: They provide a physical view of the system, showing how software components are distributed across hardware and how they communicate. This is key for understanding system configuration and deployment environments  (Siebenhaller and Kaufmann 2006).
</br>

_Testing Phase:_
**Sequence Diagrams:** Sequence diagrams are revisited in this phase to validate the interaction flows and ensure that the implemented system behaves as expected.
**State Diagrams:** These diagrams model the states that an object can be in and how it transitions from one state to another, which is critical for testing state-dependent behavior.
</br>

_Maintenance Phase:_
Class Diagrams and Component Diagrams can be revisited for understanding the system's structure and dependencies, which is essential for fixing bugs or adding new features.
</br>

**References**
- Lange, C.F.J., Chaudron, M.R.V. and Muskens, J. (March-April 2006) ‘In practice: UML software architecture and design description’, IEEE Software, 23(2), pp. 40–46.
- Siebenhaller, M. and Kaufmann, M. (2006) ‘Drawing activity diagrams’, in Proceedings of the 2006 ACM symposium on Software visualization. New York, NY, USA: Association for Computing Machinery (SoftVis ’06), pp. 159–160.
</br>
</br>
</br>
</br>


___Making reference to ‘The Unified Modeling Language Reference Manual Second Edition’, use the State Machine Diagram in Figure 3-7 to design a similar model for a washing machine.___
</br>

**Original diagram:**
![State Machine Diagram](/images/02_02_state_machine_diagram.png)

_Figure 3-7, State Machine Diagram (Rumbaugh et al. 2005)_
</br>

**Washing Machine State Diagram:**
<pre class="mermaid flex justify-center mb-5">
stateDiagram-v2
    [*] --> Off
    Off --> Idle: Power On
    Idle --> Off: Power Off
    Idle --> Filling: Start
    Filling --> Washing: Fill Complete
    Washing --> Rinsing: Wash Complete
    Rinsing --> Spinning: Rinse Complete
    Spinning --> Complete: Spin Complete
    Complete --> Idle: Finish
    Idle --> Paused: Pause
    Paused --> Idle: Resume

    state Washing {
        [*] --> Normal
        Normal --> EcoWash: Switch to Eco
        EcoWash --> Normal: Switch to Normal
    }

    state ErrorHandling {
        Filling --> Error: Fault
        Washing --> Error: Fault
        Rinsing --> Error: Fault
        Spinning --> Error: Fault
        Error --> Idle: Reset Error
    }
</pre>
</br>

**References**
- Figure 3-7, State Machine Diagram, Rumbaugh, J., Jacobson, I., and Booch, G., 2005.
