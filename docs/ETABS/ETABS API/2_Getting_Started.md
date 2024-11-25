---
title: "Getting Started"
description: "A step-by-step guide on how to launch ETABS using Python, with two methods: connecting to a running instance or launching from a specific path."
category: "Guides"
tags: ["ETABS", "Python", "Automation", "Structural Engineering"]
author: "NeutralAXIS | Swas02"
date: "2024-11-25"
layout: "default"
version: "1.0"
sidebar_position: 2
---

## **How to Launch ETABS Using Python**

### **Step 1: Prerequisites**

1. **Install ETABS** and **Python** on your system.
2. **Install `comtypes` library**:
   - Open **Command Prompt** and run:
   ```bash
   python -m pip install comtypes
   ```

---

### **Step 2: Create a Python Script**

Create a Python script (e.g., `launch_etabs.py`) and use one of the following two options to launch ETABS:

---

### **Option 1: Connect to a Running ETABS Instance**

This method **connects to an already running ETABS**.

```python
import sys
import comtypes.client

helper = comtypes.client.CreateObject('ETABSv1.Helper')  
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)  

try:
    # Attach to running ETABS
    myETABSObject = helper.GetObject("CSI.ETABS.API.ETABSObject")  
except (OSError, comtypes.COMError):
    print("No running instance of ETABS found.")
    sys.exit(-1)

myETABSObject.ApplicationStart()  # Start ETABS
SapModel = myETABSObject.SapModel
SapModel.InitializeNewModel()  # Initialize a new model
```

**Explanation**:
1. **Create helper object**: `helper = comtypes.client.CreateObject('ETABSv1.Helper')`
2. **Attach to running ETABS**: `myETABSObject = helper.GetObject("CSI.ETABS.API.ETABSObject")`
3. **Start ETABS**: `myETABSObject.ApplicationStart()`
4. **Initialize a new model**: `SapModel.InitializeNewModel(6)` 

---

### **Option 2: Launch ETABS From a Specific Path**

If ETABS isn't open, this method will **launch it from a specified path**.

```python
import sys
import comtypes.client

ProgramPath = "C:\\Program Files\\Computers and Structures\\ETABS 19\\ETABS.exe"

helper = comtypes.client.CreateObject('ETABSv1.Helper')  
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)  

try:
    myETABSObject = helper.CreateObject(ProgramPath)  # Start ETABS from specified path
except (OSError, comtypes.COMError):
    print("Failed to start ETABS.")
    sys.exit(-1)

myETABSObject.ApplicationStart()  # Start ETABS
SapModel = myETABSObject.SapModel
SapModel.InitializeNewModel()  # Initialize a new model
```

**Explanation**:
1. **Specify path**: `ProgramPath = "C:\\Program Files\\Computers and Structures\\ETABS\\ETABS.exe"`
2. **Create helper object**: `helper = comtypes.client.CreateObject('ETABSv1.Helper')`
3. **Start ETABS**: `myETABSObject = helper.CreateObject(ProgramPath)`
4. **Initialize new model**: `SapModel.InitializeNewModel()`

---

### **Step 3: Run the Script**

1. **Save** your script (`launch_etabs.py`).
2. **Open Command Prompt** and navigate to the script’s folder:
   ```bash
   cd C:\path\to\your\script
   ```
3. **Run the script**:
   ```bash
   python launch_etabs.py
   ```

---

### **Summary**

- **Option 1**: Connects to an already running ETABS.
- **Option 2**: Starts ETABS from a specific path if it’s not open.

This will help you quickly get ETABS running via Python!