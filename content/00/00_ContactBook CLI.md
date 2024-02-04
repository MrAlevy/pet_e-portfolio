# About
 Application represents a simple contact book designed to operate through the Command Line Interface (CLI). This application encompasses fundamental business logic, enabling users to add new contacts by inputting both the name and phone number. Then users can execute operations on the inserted contacts, namely updating and deleting records, as well as searching for contacts using key fields.
</br>

# Development
GitHub repo: <a href="https://github.com/MrAlevy/esx_01_py-contact-book" style="color: #007bff; text-decoration: underline;" target="_blank">ContactBook CLI</a>

To run the program, you need to have _Python 3.6_ or higher installed on your computer.

Open the terminal, go to the directory where the program is located and run the command `python3 main.py`.

Then you can type help command to see the list of available commands.
You can also type any command with the `--help` flag to see the detailed description of the command and its arguments.
</br>

# Tests
Main program logic is covered with unit tests.\
To run the tests, type `python3 tests.py` in the terminal from the directory where the program is located.
</br>

# Main workflows
**Add / update**

<pre class="mermaid flex justify-center mb-5">
graph TD
    CliAdd[CLI add] --> |empty| Start
    CliUpdate[CLI Update] --> |Contact| Start
    Start{START:<br>is Contact<br>provided?}
    Start --> |No| PrintEnterInfo
    Start --> |Yes| PrintUpdateInfo
    PrintEnterInfo[Empty CLI input]
    PrintUpdateInfo[Prefilled CLI input]
    PrintEnterInfo --> ValidateInputFirst
    PrintUpdateInfo --> ValidateInputFirst
    ValidateInputFirst[Validate Firstname input]
    ValidateInputFirst --> ValidateInputSurname
    ValidateInputSurname[Validate Surname input]
    ValidateInputSurname --> ValidateInputPhone
    ValidateInputPhone[Validate Phone input]
    ValidateInputPhone --> PrintContactForReview
    PrintContactForReview[Print Contact for review]
    PrintContactForReview --> IsDataCorrect
    IsDataCorrect{Is data<br>correct}
    IsDataCorrect --> |Cancel| Cancel
    IsDataCorrect --> |Yes| CreateContact
    CreateContact[Call private<br>`add` or `update`]
    IsDataCorrect --> |No| PassContactToStart
    PassContactToStart[Pass Contact to start]
    PassContactToStart --> |Contact| Start

    style Cancel fill:#ff7575
    style CreateContact fill:#75ff75
    style CliAdd fill:#df75ff
    style CliUpdate fill:#df75ff
    style PassContactToStart fill:#df75ff
</pre>
</br>

**Delete**

<pre class="mermaid flex justify-center mb-5">
graph TD
    CliDelete[CLI delete] --> AllOrSearch[All or search]
    AllOrSearch --> |All Contacts| Confirmation
    Confirmation{Confirmation}
    Confirmation --> |Yes| Delete[Call private `delete`]
    Confirmation --> |No| Cancel
    AllOrSearch --> |Search| Search[Call private `search`]
    Search --> PrintSearchResults[Call private `print`]
    PrintSearchResults --> |Contact| Confirmation

    style Cancel fill:#ff7575
    style Delete fill:#75ff75
    style CliDelete fill:#df75ff
</pre>
</br>

**Search**

<pre class="mermaid flex justify-center mb-5">
graph TD
    CliSearch[CLI search] --> PrivateSearch[Internal search]
    subgraph PrivateSearch[Private search]
      InternalSearch[Internal search start] --> ParseInput[Parse input]
      ParseInput --> |empty| TakeAllContacts[Take all contacts]
      ParseInput --> |args| LookForMatches[Look for matches]
      TakeAllContacts[Take all contacts] --> InternalSearchReturn[Internal search return]
      LookForMatches[Look for matches] --> InternalSearchReturn[Internal search return]
    end
      PrivateSearch --> Print[Call private `print`]

    style Print fill:#75ff75
    style CliSearch fill:#df75ff
</pre>
