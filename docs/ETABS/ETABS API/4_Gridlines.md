---
title: "Creating a Grid"
description: "To define and add a grid to a new ETABS model using Python, we can use the `new_grid_only` function, which creates the grid based on the specified parameters. Here's how you can implement this in Python:"
category: "Guides"
tags: ["ETABS", "Python", "Automation", "Structural Engineering"]
author: "NeutralAXIS | Swas02"
date: "2024-11-25"
layout: "default"
version: "1.0"
sidebar_position: 4
---

## **Creating a Grid in a New ETABS Model Using Python**

To define and add a grid to a new ETABS model using Python, we can use the `new_grid_only` function, which creates the grid based on the specified parameters. Here's how you can implement this in Python:

### **Python Code Example**:

```python
# Change the current units to 'kN_m_C' (option 6 from the table)
ret = EtabsModel.SetPresentUnits(6)
if ret != 0:
    print("Failed to change the units.")

# Define grid parameters
number_stories = 10               # Total number of stories (floors) in the building
typical_story_height = 3.0        # Height of each story, except the bottom story
bottom_story_height = 4.0         # Height of the bottom story, which may differ from the others
number_lines_x = 5                # Number of grid lines in the X direction (horizontal)
number_lines_y = 6                # Number of grid lines in the Y direction (vertical)
spacing_x = 6.0                   # Distance between grid lines in the X direction (meters)
spacing_y = 5.0                   # Distance between grid lines in the Y direction (meters)

# Call the function to create the grid
ret = EtabsModel.File.NewGridOnly(
    number_stories, 
    typical_story_height, 
    bottom_story_height, 
    number_lines_x, 
    number_lines_y, 
    spacing_x, spacing_y
)

# Check the result and display appropriate message
if ret != 0:
    print("Failed to add grid.")  # Print error message if grid creation failed
else:
    print("Grid added successfully!")  # Print success message if grid is added
```

### **Explanation of the Code**:

#### [**Units Table**](./Set_or_Change_Units#unit-options-table)

#### **Grid Parameters**:
The function `EtabsModel.File.NewGridOnly()` accepts the following parameters:
| Parameter             | Type   | Description                                                 |
|-----------------------|--------|-------------------------------------------------------------|
| `number_stories`       | int    | Total number of stories (floors) in the building.           |
| `typical_story_height` | float  | Height of each story, excluding the bottom story.           |
| `bottom_story_height`  | float  | Height of the bottom story, which may differ from others.   |
| `number_lines_x`       | int    | Number of grid lines in the X direction (horizontal).       |
| `number_lines_y`       | int    | Number of grid lines in the Y direction (vertical).         |
| `spacing_x`            | float  | Distance between grid lines in the X direction.             |
| `spacing_y`            | float  | Distance between grid lines in the Y direction.             |

#### **Creating the Grid**:
- The function `EtabsModel.File.NewGridOnly()` will create the grid using the parameters provided above.
- It sets up both the horizontal (X) and vertical (Y) grid lines, as well as the building's floor heights, including a specific height for the bottom floor.

#### **Error Handling**:
- The function returns a value (`ret`), which you can check to see if the grid was successfully created.
- If `ret` is non-zero, the grid creation has failed, and an error message is printed.
- If `ret` is zero, the grid was added successfully, and a success message is printed.

