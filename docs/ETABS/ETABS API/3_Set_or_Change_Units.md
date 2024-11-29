---
title: "Setting Units in ETABS"
description: "When creating a new model or changing units during modeling, it's important to select the appropriate unit system. ETABS provides a set of predefined unit options."
category: "Guides"
tags: ["ETABS", "Python", "Automation", "Structural Engineering"]
author: "NeutralAXIS | Swas02"
date: "2024-11-25"
layout: "default"
version: "1.0"
sidebar_position: 3
---

# Setting Units in ETABS

### **1. Unit Options for the Model File**

When creating a new model or changing units during modeling, it's important to select the appropriate unit system. ETABS provides a set of predefined unit options.

#### **Unit Options Table:**

| **Unit**       | **Value** | **Description**                               |
|----------------|-----------|-----------------------------------------------|
| lb_in_F        | 1         | Pounds (lb) and inches (in), Imperial units  |
| lb_ft_F        | 2         | Pounds (lb) and feet (ft), Imperial units    |
| kip_in_F       | 3         | Kips (kip) and inches (in), 1 kip = 1000 lb  |
| kip_ft_F       | 4         | Kips (kip) and feet (ft), 1 kip = 1000 lb    |
| kN_mm_C        | 5         | Kilonewtons (kN) and millimeters (mm), SI units |
| kN_m_C         | 6         | Kilonewtons (kN) and meters (m), SI units    |
| kgf_mm_C       | 7         | Kilogram-force (kgf) and millimeters (mm)    |
| kgf_m_C        | 8         | Kilogram-force (kgf) and meters (m)          |
| N_mm_C         | 9         | Newtons (N) and millimeters (mm), SI units   |
| N_m_C          | 10        | Newtons (N) and meters (m), SI units         |
| Ton_mm_C       | 11        | Metric tons (Ton) and millimeters (mm)       |
| Ton_m_C        | 12        | Metric tons (Ton) and meters (m)             |
| kN_cm_C        | 13        | Kilonewtons (kN) and centimeters (cm)        |
| kgf_cm_C       | 14        | Kilogram-force (kgf) and centimeters (cm)    |
| N_cm_C         | 15        | Newtons (N) and centimeters (cm)             |
| Ton_cm_C       | 16        | Metric tons (Ton) and centimeters (cm)       |

---

### **2. Initialize Model with a Specific Unit System**

To start a new model with a specific unit system, use the `InitializeNewModel()` function. This function sets up the model with the desired units.

#### **Syntax**:
```python
EtabsModel.InitializeNewModel(units)
```

#### **Parameters**:
- **units**: (Optional) The unit system to be used for the new model. The unit system is specified using the predefined unit values from the table above. The default value is `kip_in_F` (1).

#### **Example**:
```python
# Initialize a new model with the unit system 'kN_m_C' (option 6 from the table)
kN_m_C = 6
init = EtabsModel.InitializeNewModel(kN_m_C)
if init != 0:
    print("Failed to initialize the model.")
```

---

### **3. Change Units During Modeling**

You can also change the units of an existing model during modeling using the `SetPresentUnits()` function. This allows you to switch between different unit systems as needed for different parts of the modeling process.

#### **Syntax**:
```python
EtabsModel.SetPresentUnits(units)
```

#### **Parameters**:
- **units**: The unit system to be used for the current model. It is chosen from the predefined list of unit options in the table above.

#### **Example**:
```python
# Change the current units to 'kN_m_C' (option 6 from the table)
set_unit = EtabsModel.SetPresentUnits(6)
if set_unit != 0:
    print("Failed to change the units.")
```

---

### **Summary of Functions**:

| **Function**                | **Description**                                                                                  |
|-----------------------------|--------------------------------------------------------------------------------------------------|
| `InitializeNewModel(units)`  | Initializes a new model with the specified unit system.                                          |
| `SetPresentUnits(units)`     | Changes the units of the current model during modeling.                                          |

