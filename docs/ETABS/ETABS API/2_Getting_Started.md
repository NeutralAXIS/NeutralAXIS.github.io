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

### **Step 1: Prerequisites**

1. **Install ETABS** and [**Python**](https://www.python.org/downloads/) on your system.
2. **Install the `comtypes` library**:

   Open **Command Prompt** and run the following command:

   ```bash
   python -m pip install comtypes
   ```

#### **Error Handling:**

If you encounter the following error:

```python
Traceback (most recent call last):
  File "your_script_path\\test.py", line 1, in <module>
    import comtypes.client
ModuleNotFoundError: No module named 'comtypes.client'
```

<details>

<summary>**Solutions**</summary>

:::note If you have already installed comtypes globally and are still encountering this error, try reinstalling comtypes or install it in a virtual environment to isolate your dependencies.
:::

**1: Ensure `pip` is installed**

Before proceeding, make sure you have `pip` installed, as it’s required to install Python packages. To check if `pip` is installed, open a command prompt and run:

```bash
pip --version
```

- If you see a version number (e.g., `pip xx.x.x`), then `pip` is already installed.
- If you get an error, you will need to install `pip`. You can follow the [official guide to install pip](https://pip.pypa.io/en/stable/installation/) if necessary.

**2: Navigate to the folder containing your script**

Open a command prompt and go to the folder where your script (`test.py`) is saved. For example:

```bash
cd C:\path\to\your\script
```

**3: Create a virtual environment** (optional but recommended)

Creating a virtual environment will help manage dependencies for this project:

```bash
python -m venv venv
```

**4: Activate the virtual environment**

- **Windows**:

  ```bash
  .\venv\Scripts\activate
  ```

**5: Install `comtypes` in the virtual environment**

With the virtual environment activated, install `comtypes` using `pip`:

```bash
pip install comtypes
```

**6: Run your script**

Now, try running your `test.py` script again. The error should be resolved if `comtypes` is installed in the correct environment.

</details>


---

### **Step 2: Create a Python Script**

Create a Python script (e.g., `launch_etabs.py`) and use one of the following options to launch ETABS:

---

### **Option 1: Create an Instance of ETABS from the Latest Installed Version**

This method will **automatically find and launch the latest version of ETABS** installed on your system.

```python
import comtypes.client

# Create ETABS helper object and query for the ETABS API interface
helper = comtypes.client.CreateObject('ETABSv1.Helper')
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)

# Create the ETABS object for the latest installed version
myETABSObject = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")  # Create object for the latest version

# Start ETABS
myETABSObject.ApplicationStart()

# Access the SapModel interface
EtabsModel = myETABSObject.SapModel

# Initialize a new model
EtabsModel.InitializeNewModel()
```

---

### **Option 2: Launch ETABS From a Specific Path**

If ETABS isn't already open, this method will **launch it from a specified path**.

```python
import comtypes.client

ProgramPath = "C:\\Program Files\\Computers and Structures\\ETABS 19\\ETABS.exe"

helper = comtypes.client.CreateObject('ETABSv1.Helper')
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)

# Start ETABS from the specified path
myETABSObject = helper.CreateObject(ProgramPath)

# Start ETABS
myETABSObject.ApplicationStart()

# Access the SapModel interface
EtabsModel = myETABSObject.SapModel

# Initialize a new model
EtabsModel.InitializeNewModel()  # Initialize a new model
```

---

### **Option 3: Connect to a Running ETABS Instance**

This method **connects to an already running ETABS instance**.

:::info
Make sure ETABS software is running.
:::

```python
import comtypes.client

# Create ETABS helper object and query for the ETABS API interface
helper = comtypes.client.CreateObject('ETABSv1.Helper')
helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)

# Connect to the running ETABS instance
myETABSObject = helper.GetObject("CSI.ETABS.API.ETABSObject")

# Access the SapModel interface
EtabsModel = myETABSObject.SapModel

# 🚨 Only use EtabsModel.InitializeNewModel() when starting a new model file.
# Skip this line if you are working with an existing file.
EtabsModel.InitializeNewModel()
```

**Error Handling When Using Option 3:**

If you encounter the following error while using Option 3:

```py
Traceback (most recent call last):
  File "your_script_path\\test.py", line 8, in <module>
    EtabsModel = myETABSObject.SapModel
                 ^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'SapModel'
```

**Possible causes of the error**:

- **ETABS is not open**: Ensure that ETABS is running before executing the script. If ETABS is not open, Option 3 will fail because it cannot connect to an instance of ETABS that isn't running.

---

### **Step 3: Run the Script**

1. **Save** your script (e.g., `launch_etabs.py`).
2. **Open Command Prompt** and navigate to the folder containing your script:

   ```bash
   cd C:\path\to\your\script
   ```

3. **Run the script**:

   ```bash
   python launch_etabs.py
   ```

---

### **Summary**

- **Option 1**: Creates an instance of ETABS from the latest installed version, regardless of its location on the system.
- **Option 2**: Starts ETABS from a specific path if it’s not already open.
- **Option 3**: Connects to an already running ETABS instance.

---