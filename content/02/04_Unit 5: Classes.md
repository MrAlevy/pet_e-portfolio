# Codio Activity

For this hackathon, explore inheritance further by completing the following tasks:
Create a new class called Teacher that inherits from Adult. Provide additional attributes around teacher type (such as kindergarten, secondary, or higher education) and BMI risk factor (kindergarten = 1, secondary = 2, and higher ed = 3). Assign BMI risk factors in the initializer based on the type of teacher that is supplied when creating the object.
</br>

```python
class Person:
    """Represents a generic Person."""

    count = 0

    def __init__(self, first, last, weight, height, age, gender):
        self.first_name = first
        self.last_name = last
        self.weight_in_lbs = weight
        self.height_in_inches = height
        self.this_age = age
        self.this_gender = gender
        self.bmi = ''
        Person.count = Person.count + 1

    @classmethod
    def print_count(cls,):
            return cls.count

class Adult(Person):
    def calc_bmi(self):
        bmi_tmp = (self.weight_in_lbs * 703) / self.height_in_inches ** 2

        print('BMI number is: ' + str(bmi_tmp))
        
        if bmi_tmp < 18:
            self.bmi = 'Underweight'
        elif bmi_tmp > 18 and bmi_tmp < 25:
            self.bmi = 'Normal'
        elif bmi_tmp > 25 and bmi_tmp < 30:
            self.bmi = 'Overweight'
        elif bmi_tmp > 30:
            self.bmi = 'Obese'
        return self.bmi

class Teacher(Adult):
    """Represents a Teacher, kind of Adult."""
    
    def __init__(self, first, last, weight, height, age, gender, teacher_type):
        super().__init__(first, last, weight, height, age, gender)
        self.teacher_type = teacher_type
        self.bmi_risk_factor = self.assign_bmi_risk_factor(teacher_type)
        
    def assign_bmi_risk_factor(self, teacher_type):
        """Assigns BMI risk factor based on the teacher type."""
        if teacher_type == 'kindergarten':
            return 1
        elif teacher_type == 'secondary':
            return 2
        elif teacher_type == 'higher education':
            return 3
        else:
            return 0 
  
t1 = Teacher('Jane', 'Doe', 130, 64, 30, 'F', 'secondary')
print(t1.first_name)
print(t1.this_age)
print(t1.calc_bmi())
print('Teacher type:', t1.teacher_type)
print('BMI risk factor:', t1.bmi_risk_factor)

''' Output:
Jane
30
BMI number is: 22.321428571428573
Normal
Teacher type: secondary
BMI risk factor: 2
'''
```
</br>
</br>


# e-Portfolio Activities

___Write a Python program with polymorphism that is usable within the summative assessment for the driverless car.___
</br>

```python
class SystemStatus(Enum):
    ACTIVE = "Active"
    ERROR = "Error"
    ALERT = "Alert"
    WARN = "Warn"

class CarSystem:
    def status(self):
        """ Provide status information about the current state of the system. """
        raise NotImplementedError("Subclass must implement abstract method")

    def update(self, environment):
        """ Update the system based on the environment data. """
        raise NotImplementedError("Subclass must implement abstract method")

class NavigationSystem(CarSystem):
    def status(self):
        return SystemStatus.ACTIVE

    def update(self, environment):
        # Process environment data related to traffic
        print(f"Updating route due to {environment['traffic']} traffic.")

class RoadSurveillanceSystem(CarSystem):
    def status(self):
        return SystemStatus.ACTIVE

    def update(self, environment):
        # Monitor road conditions for any changes that need attention
        print(f"Road conditions are {environment['road_conditions']}. No new obstacles detected.")

class CarControlSystem(CarSystem):
    def status(self):
        return SystemStatus.ACTIVE

    def update(self, environment):
        # Update car control systems based on fuel level
        fuel_status = "adequate" if environment['fuel_level'] > 0.25 else "low"
        print(f"Fuel level is {fuel_status}. Adjusting driving mode accordingly.")

environment = {
    'traffic': 'Heavy',
    'road_conditions': 'Clear',
    'fuel_level': 0.6
}

systems = [NavigationSystem(), RoadSurveillanceSystem(), CarControlSystem()]

for system in systems:
    print(f"System status: {system.status()}")
    system.update(environment)
```
</br>

This Python program is designed to manage various subsystems of a driverless car. It defines a class hierarchy where each class represents a different system within the car: navigation, road surveillance, and car control. Each system class inherits from a base class `CarSystem`, which requires the implementation of two methods: `status()` and `update(environment)`.