# Ontology

Ontology, in the context of OWL-SOA (Web Ontology Language for Service-Oriented Architecture), refers to a formal representation of knowledge within a specific domain, capturing entities, their attributes, and the relationships between them. In OWL-SOA, the ontology is crucial as it provides a structured framework for defining and categorizing services, their properties, and interactions in a way that is independent of implementation technologies. This allows developers to focus on the conceptual modeling of services without being tied to a specific programming language or platform, thus enhancing reusability and interoperability.
</br>

___Defining an Ontology Relevant to my system___
For the system you're designing for your summative assessment, you could define an ontology that represents the key entities, actions, and interactions within your system. For example:
- Entities: These could include the main components of your system, such as User, Service, Request, Response, and Data.
- Attributes: Define the characteristics of each entity. For instance, User might have attributes like UserID, Role, and Preferences.
- Relationships: Map out how these entities interact with each other. For example, a User might Request a Service, which generates a Response.
- Service Description: Include elements like ServiceName, InputParameters, OutputParameters, and ServiceEndpoint.
- Workflow: If your system involves a sequence of operations, you can define workflows or processes that describe how services are orchestrated.
</br>

By defining this ontology, you establish a clear, technology-independent model of your system’s architecture, which can be communicated to stakeholders and used as a guide throughout the development process.
This ontology can then be refined and expanded based on feedback from your tutor or peers, ensuring that it accurately reflects the system’s requirements and objectives.
</br>

**References**
- Arnaut, W., Oliveira, K. & Lima, F. (2010) ‘OWL-SOA: A service oriented architecture ontology useful during development time and independent from implementation technology’, in 2010 Fourth International Conference on Research Challenges in Information Science (RCIS). IEEE, pp. 523–532.

</br>

# Python shell

This Python script implements a simple command-line interface (CLI) shell that allows users to execute basic commands: listing the contents of the current directory (`LIST`), adding two numbers (`ADD`), displaying available commands (`HELP`), and exiting the shell (`EXIT`). The script includes basic input handling and can be easily extended or modified.

```python
import os
import sys

def list_directory():
    """Lists the contents of the current directory."""
    for item in os.listdir(os.getcwd()):
        print(item)

def add_numbers(num1, num2):
    """Adds two numbers and prints the result."""
    try:
        result = int(num1) + int(num2)
        print(f"Result: {result}")
    except ValueError:
        print("Please provide two valid numbers.")

def show_help():
    """Displays a list of available commands."""
    print("Available commands:")
    print("LIST - Lists the contents of the current directory.")
    print("ADD <num1> <num2> - Adds two numbers together and displays the result.")
    print("HELP - Displays this help message.")
    print("EXIT - Exits the shell.")

def main():
    """Main function to handle user input and command execution."""
    while True:
        command = input("> ").strip().split()

        if len(command) == 0:
            continue

        cmd = command[0].upper()

        if cmd == "EXIT":
            print("Exiting the shell...")
            break
        elif cmd == "LIST":
            list_directory()
        elif cmd == "ADD":
            if len(command) == 3:
                add_numbers(command[1], command[2])
            else:
                print("Usage: ADD <num1> <num2>")
        elif cmd == "HELP":
            show_help()
        else:
            print(f"Unknown command: {cmd}. Type 'HELP' for a list of commands.")

if __name__ == "__main__":
    main()
```

**Running the Shell**
- `LIST` to list the contents of the current directory.
- `ADD 5 3` to add two numbers together.
- `HELP` to display a list of available commands.
- `EXIT` to exit the shell.
</br>

**Security Vulnerabilities and Recommendations**
- **Command Injection**: The shell does not sanitize user input, so extending it to execute arbitrary commands (e.g., via `subprocess`) could make it vulnerable to command injection attacks.
- **Lack of Input Validation**: The shell assumes valid input, which could lead to errors or unintended behavior if unexpected or malicious input is provided.
</br>

**Recommendation to Increase Security:**
Implementing input validation and sanitization ensures that only expected commands and inputs are processed. For example, strictly defining and checking input formats for commands like `ADD` would enhance security.
</br>


# Developing an API

```python
#source of code: [Codeburst](https://codeburst.io/this-is-how-easy-it-is-to-create-a-rest-api-8a25122ab1f3)

from flask import Flask
from flask_restful import Api, Resource, reqparse
 
app = Flask(__name__)
api = Api(app)
 
users = [
    {
        "name": "James",
        "age": 30,
        "occupation": "Network Engineer"
    },
    {
        "name": "Ann",
        "age": 32,
        "occupation": "Doctor"
    },
    {
        "name": "Jason",
        "age": 22,
        "occupation": "Web Developer"
    }
]
 
class User(Resource):
    def get(self, name):
        for user in users:
            if(name == user["name"]):
                return user, 200
        return "User not found", 404
 
    def post(self, name):
        parser = reqparse.RequestParser()
        parser.add_argument("age")
        parser.add_argument("occupation")
        args = parser.parse_args()
 
        for user in users:
            if(name == user["name"]):
                return "User with name {} already exists".format(name), 400
 
        user = {
            "name": name,
            "age": args["age"],
            "occupation": args["occupation"]
        }
        users.append(user)
        return user, 201
 
    def put(self, name):
        parser = reqparse.RequestParser()
        parser.add_argument("age")
        parser.add_argument("occupation")
        args = parser.parse_args()
 
        for user in users:
            if(name == user["name"]):
                user["age"] = args["age"]
                user["occupation"] = args["occupation"]
                return user, 200
        
        user = {
            "name": name,
            "age": args["age"],
            "occupation": args["occupation"]
        }
        users.append(user)
        return user, 201
 
    def delete(self, name):
        global users
        users = [user for user in users if user["name"] != name]
        return "{} is deleted.".format(name), 200
      
api.add_resource(User, "/user/<string:name>")
 
app.run(debug=True)
```
</br>

___Question 1: Running the `api.py` Code___

To run the `api.py` code, the following command can be used in the terminal:

```bash
python api.py
```

This command starts the Flask development server on http://127.0.0.1:5000/. The terminal output will show that the server is running.
</br>

___Question 2: Command w3m http://127.0.0.1:5000/user/Ann___
Running this command sends a GET request to the Flask API for /user/Ann. The API returns the details of "Ann" as a JSON response because she exists in the users list. The w3m command, a text-based browser, displays this response in the terminal.
</br>

___Question 3: Command w3m http://127.0.0.1:5000/user/Adam___
Running this command sends a GET request to the Flask API for /user/Adam. Since "Adam" is not in the users list, the API returns a "User not found" message with a 404 status code, which is displayed by w3m in the terminal.
</br>

___Question 4: Capabilities of the Flask Library___
Flask is a micro web framework for Python that allows for rapid development of web applications and APIs. It provides routing, request handling, and extensibility through various extensions. In `api.py`, Flask creates a RESTful API to manage user data, enabling operations like retrieving, adding, updating, and deleting users via HTTP requests.

