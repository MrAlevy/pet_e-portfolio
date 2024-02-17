# Function Point Estimation Program

This program is designed to estimate Function Points (FP) using the Function Point analysis method. The estimation involves two steps: counting user functions (FC) and adjusting for processing complexity (PCA). The PCA is determined based on complexity factors (ci) associated with different aspects of the software project.
</br>

## Function Point Calculation

The core calculation is performed by the `calculate_fp` function. It takes the user input for **Function Counts (FC)** and a list of complexity factors (ci_values) as input. The PCA is computed using the provided formula `PCA = 0.65 + 0.01 * Σ ci`. The **Adjusted Function Point (AFP)** is then calculated as the product of FC and PCA.
</br>

## User Input and Complexity Factors

The program prompts the user to enter the Function Counts (FC) and provides a table of 14 function names and descriptions along with their associated complexity factors. The user can then input the complexity factors for each function. The program allows the user to skip entering values for complexity factors and calculates the Adjusted Function Point (AFP) only if at least 5 complexity factors are provided.
</br>

## Function Counts Information

1. External input.
2. External output.
3. Logical internal file processing.
4. External interface to files.
5. External inquiries.
</br>
</br>

## Complexity Factors Information

For each of the first five complexity factors (related to user function categories), please enter a degree of influence from 0 to 5, where:

- **0:** Not present, or no influence
- **1:** Incidental influence
- **2:** Moderate influence
- **3:** Average influence
- **4:** Significant influence
- **5:** Strong influence throughout
</br>
</br>

# Code Artifact

```python
FUNCTION_NAMES = {
    1: "Data Communications",
    2: "Distributed Data Processing",
    3: "Performance",
    4: "Heavily Used Configuration",
    5: "Transaction Rate",
    6: "On-Line Data Entry",
    7: "End-user Efficiency",
    8: "Online Update",
    9: "Complex Processing",
    10: "Reusability",
    11: "Installation Ease",
    12: "Operational Ease",
    13: "Multiple Sites",
    14: "Facilitate Change"
}

def calculate_fp(fc, ci_values):
    pca = 0.65 + 0.01 * sum(ci_values)
    fp = fc * pca
    return fp

def get_complexity_factors():
    ci_values = []
    for i in range(1, 15):
        ci = input(f"Enter the complexity factor for {FUNCTION_NAMES[i]} (0-5): ")
        if not ci:
            break
        ci_values.append(int(ci))
    return ci_values

def main():
    print("Function Point Estimation Program")

    # User input for Function Counts (FC)
    fc = int(input("Enter the Function Counts (FC): "))

    # Ask for complexity factors or skip
    ci_values = get_complexity_factors()

    # Calculate Adjusted Function Point (AFP) if at least 5 complexity factors are provided
    afp = calculate_fp(fc, ci_values)
    print(f"\nAdjusted Function Point (AFP): {afp}")


if __name__ == "__main__":
    main()
```