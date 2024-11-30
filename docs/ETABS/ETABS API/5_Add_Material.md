---
title: "Adding Material Properties"
description: "In ETABS, materials are assigned to structural elements like beams, columns, slabs, and foundations. The `AddMaterial` function allows you to add a new material to the model by specifying its name, type, region, standard, and grade."
category: "Guides"
tags: ["ETABS", "Python", "Automation", "Structural Engineering"]
author: "NeutralAXIS | Swas02"
date: "2024-11-30"
layout: "default"
version: "1.0"
sidebar_position: 5
---

# **Adding Material Properties**

Use `AddMaterial` function in ETABS to add materials to your model.

## **Syntax**

```python
EtabsModel.PropMaterial.AddMaterial(Name, MatType, Region, Standard, Grade)
```
**Parameters:**
- **Name**: (string) The name of the material (e.g., `"HYSD415"`, `"M20"`).
- **MatType**: (int) The material type. Refer to the [Material Types Table](#material-types-table) for valid values.
- **Region**: (string) The region where the material is defined (e.g., `"India"`).
- **Standard**: (string) The material standard (e.g., `"Indian"`).
- **Grade**: (string) The material grade as defined in the [Material Properties List](#material-properties-list) (e.g., `"HYSD Grade 415"`, `"M20"`).

**Return Value:**
- **[Material, res]**: A list containing:
  - **Material**: (string) The name of the material that was added (e.g., `"M35"`, `"HYSD500"`).
  - **res**: (int) The result of the operation:
    - `0` if the material was added successfully.
    - A non-zero value if there was an error.


---

## **Example Code**

### **Add Rebar Material ("HYSD500")**

```python
# Add Rebar material "HYSD500" (Grade 500) in India
# 6 = Rebar type
[Material, res] = EtabsModel.PropMaterial.AddMaterial("HYSD500", 6, "India", "Indian", "HYSD Grade 500") 

# Check if the material was successfully added
if res == 0:
    print(f"Rebar material '{Material}' has been successfully added to the model.")
else:
    print("Failed to add the rebar material. Please check the input parameters or model setup.")
```

**Expected Output in Python Terminal if Material Added Successfully**

```bash
Rebar material 'HYSD500' has been successfully added to the model.
```
> "_Not seeing the expected output? Here are some [possible reasons](#error-handling) why._"

---

### **Add Concrete Material ("M35")**

```python
# Add Concrete material "M35" in India
# 2 = Concrete Type
[Material, res] = EtabsModel.PropMaterial.AddMaterial("M35", 2, "India", "Indian", "M35")  

# Check if the material was successfully added
if res == 0:
    print(f"Concrete material '{Material}' has been successfully added to the model.")
else:
    print("Failed to add the concrete material. Please verify the material properties or model configuration.")
```

**Expected Output in Python Terminal if Material Added Successfully**

```bash
Concrete material 'M35' has been successfully added to the model.
```

> "_Not seeing the expected output? Here are some [possible reasons](#error-handling) why._"

---


## **Material Types Table**
This table identifies the numeric code for each material type in ETABS:

| **Material Type (MatType)** | **Material Name** |
|----------------------------|-------------------|
| 1                          | Steel             |
| 2                          | Concrete          |
| 3                          | NoDesign          |
| 4                          | Aluminum          |
| 5                          | ColdFormed        |
| 6                          | Rebar             |
| 7                          | Tendon            |
| 8                          | Masonry           |

---

## **Material Properties List**
This table lists commonly used materials in the Indian region, including their types, grades, and key properties. For additional materials from other regions, refer to the **"CSiMaterialLibrary\*.xml"** file, located in the **"Property Libraries\Materials"** subfolder within the program's installation directory. 

For example, the file can be found at:  
`C:\Program Files\ETABS\Property Libraries\Materials\CSiMaterialLibrary*.xml`

<!-- 
**Steel Materials**

| **Material Name** | **Grade** | **Density** (kg/mm³) | **Modulus of Elasticity** (N/mm²) | **Yield Stress** (N/mm²) | **Tensile Stress** (N/mm²) | **Is Default** |
|-------------------|-----------|----------------------|----------------------------------|--------------------------|----------------------------|----------------|
| **Fe250**         | Fe250     | 0.00007697           | 210000                           | 250                      | 410                        | No             |
| **Fe345**         | Fe345     | 0.00007697           | 210000                           | 345                      | 450                        | Yes            |

---

**Concrete Materials**

| **Material Name** | **Grade** | **Density** (kg/mm³) | **Modulus of Elasticity** (N/mm²) | **Yield Stress** (N/mm²) | **Tensile Stress** (N/mm²) | **Is Default** |
|-------------------|-----------|----------------------|----------------------------------|--------------------------|----------------------------|----------------|
| **M15**           | M15       | 0.00002499           | 19364.92                         | 15                       | 25                         | No             |
| **M20**           | M20       | 0.00002499           | 22360.68                         | 20                       | 30                         | Yes            |
| **M25**           | M25       | 0.00002499           | 25000                            | 25                       | 35                         | No             |
| **M30**           | M30       | 0.00002499           | 27386.13                         | 30                       | 45                         | Yes            |
| **M35**           | M35       | 0.00002499           | 29580.40                         | 35                       | 50                         | No             |
| **M40**           | M40       | 0.00002499           | 31622.78                         | 40                       | 55                         | No             |
| **M45**           | M45       | 0.00002499           | 33541.02                         | 45                       | 60                         | No             |
| **M50**           | M50       | 0.00002499           | 35355.34                         | 50                       | 65                         | No             |
| **M55**           | M55       | 0.00002499           | 37080.99                         | 55                       | 70                         | No             |
| **M60**           | M60       | 0.00002499           | 38729.83                         | 60                       | 75                         | No             |

---

**Rebar Materials**

| **Material Name** | **Grade**     | **Density** (kg/mm³) | **Modulus of Elasticity** (N/mm²) | **Yield Stress** (N/mm²) | **Tensile Stress** (N/mm²) | **Is Default** |
|-------------------|---------------|----------------------|----------------------------------|--------------------------|----------------------------|----------------|
| **Mild250**       | Mild Grade 250| 0.00007697           | 200000                           | 250                      | 410                        | No             |
| **HYSD415**       | HYSD Grade 415| 0.00007697           | 200000                           | 415                      | 485                        | Yes            |
| **HYSD500**       | HYSD Grade 500| 0.00007697           | 200000                           | 500                      | 545                        | No             |
| **HYSD550**       | HYSD Grade 550| 0.00007697           | 200000                           | 550                      | 585                        | No             | -->

#### **List of Available Indian Materials and Their Grades in '`CSiMaterialLibraryIndia.xml`**

#### **Steel Materials:**
- **Fe250**
- **Fe345** (Default)

#### **Concrete Materials:**
- **M15**
- **M20** 
- **M25**
- **M30** (Default)
- **M35**
- **M40**
- **M45**
- **M50**
- **M55**
- **M60**

#### **Rebar Materials:**
- **Mild Grade 250** 
- **HYSD Grade 415** (Default)
- **HYSD Grade 500**
- **HYSD Grade 550**

---

## **Error Handling**

> If you didn't get the desired material added to the model, the expected output might not appear. Instead, a default material may be added or the function may fail due to issues with the input parameters.

The function `AddMaterial()` will add a default material if there's a typo or conflict in the parameters. Here are some common issues that may cause this:

- **MatType**: Make sure the material type is correct. Double-check it against the [Material Types Table](#material-types-table).

- **Region / Standard**: Look for typos or incorrect values. If you're using materials from other regions, check the `CSiMaterialLibrary.xml` file in the "Property Libraries" folder (found in the program's installation directory).

- **Grade**: Check for spelling mistakes or incorrect values. Use the exact values from the **Grade** column in the [Material Properties List](#material-properties-list).

---

## **Related Functions**

The **`AddMaterial()`** method is part of the **"cPropMaterial Interface"** in the ETABS API. This interface allows you to define and manage material properties in your model.

To understand how to use additional methods and apply them in your ETABS model, refer to the [**`CSI API ETABS v1.chm`**](./Introduction#where-to-find-detailed-etabs-api-documentation) documentation. You can find detailed instructions and examples by searching for **"cPropMaterial Interface"**. 

The table below lists important methods in the **`cPropMaterial Interface`**, which allows you to define and manage material properties in your ETABS model.

| **Method Name**             | **Description**                                                             |
|-----------------------------|-----------------------------------------------------------------------------|
| **`AddMaterial()`**          | Adds a new material property to the model.                                   |
| **`ChangeName()`**           | Changes the name of an existing material property.                           |
| **`Count()`**                | Returns the total number of material properties in the model.                |
| **`Delete()`**               | Deletes a specified material property.                                       |
| **`GetMaterial()`**          | Retrieves basic material property data.                                     |
| **`GetDamping()`**           | Retrieves additional damping data for materials.                            |
| **`GetMassSource()`**        | (Deprecated) Retrieves the mass source for the model.                        |
| **`GetMassSource_1()`**      | Retrieves the mass source for the model.                                     |
| **`GetMPAnisotropic()`**     | Retrieves mechanical properties for anisotropic materials.                  |
| **`GetMPIsotropic()`**       | Retrieves mechanical properties for isotropic materials.                    |
| **`GetMPOrthotropic()`**     | Retrieves mechanical properties for orthotropic materials.                  |
| **`GetMPUniaxial()`**        | Retrieves mechanical properties for uniaxial materials.                     |
| **`GetNameList()`**          | Retrieves a list of all material property names of a specified type.        |
| **`GetOConcrete()`**         | Retrieves additional material data for concrete.                           |
| **`GetORebar()`**            | Retrieves additional material data for rebar.                               |
| **`GetOSteel()`**            | Retrieves additional material data for steel.                               |
| **`GetOTendon()`**           | Retrieves additional material data for tendon materials.                    |
| **`GetSSCurve()`**           | Retrieves the material stress-strain curve.                                 |
| **`GetTemp()`**              | Retrieves temperatures at which material properties are defined.            |
| **`GetWeightAndMass()`**     | Retrieves the weight and mass per unit volume of a material.                |
| **`SetDamping()`**           | Sets the additional damping data for a material.                            |
| **`SetMassSource()`**        | (Deprecated) Sets the mass source for the model.                            |
| **`SetMassSource_1()`**      | Sets the mass source for the model.                                         |
| **`SetMPAnisotropic()`**     | Sets the material symmetry type to anisotropic.                            |
| **`SetMPIsotropic()`**       | Sets the material symmetry type to isotropic.                              |
| **`SetMPOrthotropic()`**     | Sets the material symmetry type to orthotropic.                            |
| **`SetMPUniaxial()`**        | Sets the material symmetry type to uniaxial.                               |
| **`SetOConcrete()`**         | Sets additional data for concrete materials.                               |
| **`SetORebar()`**            | Sets additional data for rebar materials.                                  |
| **`SetOSteel()`**            | Sets additional data for steel materials.                                  |
| **`SetOTendon()`**           | Sets additional data for tendon materials.                                 |
| **`SetSSCurve()`**           | Sets the stress-strain curve for materials with user-defined curves.       |
| **`SetTemp()`**              | Assigns temperatures at which material properties are defined.              |
| **`SetWeightAndMass()`**     | Assigns weight and mass per unit volume to a material.                      |