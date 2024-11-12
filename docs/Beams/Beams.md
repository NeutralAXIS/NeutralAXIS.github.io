# Beam Intro

### Dimensions of a Beam
- **Clear Length (L)**: The total length of the beam, measured from the inner face of one support to the inner face of the other.
- **Depth (d)**: The vertical distance from the top to the bottom of the beam.
- **Width (b)**: The horizontal distance across the beam.

### Design Guidelines
- **Thumb Rule**: The depth of a beam can be approximated using the formula:
  $$
  d = \frac{L}{10} \text{ to } \frac{L}{12}
  $$
- **Minimum Width**: The width must be at least:
  $$
  w \geq 200 \, \text{mm}
  $$
- **Width-to-Depth Ratio**: According to IS 13920:2016, the ratio should satisfy:
  $$
  \frac{w}{d} > 0.3
  $$
- **Maximum Depth**: The depth should not exceed:
  $$
  D < \frac{L}{4}
  $$

### Lateral Stability of Beam
- **Laterally Supported at Ends**:
  - The length of unsupported span must satisfy:
    $$
    L_{\text{unsupported}} \leq \min\left\{60b, \frac{250b^2}{d}\right\}
    $$
- **Cantilever Beam**:
  - For cantilever beams, the condition is:
    $$
    L_{\text{unsupported}} \leq \min\left\{25b, \frac{100b^2}{d}\right\}
    $$