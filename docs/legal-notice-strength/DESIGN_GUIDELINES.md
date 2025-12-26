# design guidelines: legal notice strength calculator

## overview
This document outlines the design implementation for the **Legal Notice Strength Calculator** result view. The interface aims to provide users with an immediate, visual understanding of their case strength after completing the assessment questions.

## core components
The implementation will strictly utilize existing components from the codebase, with the addition of a custom Circular Progress indicator for the strength score.

### 1. container: modal / bottom sheet
We will use the existing `Modal` component which automatically handles responsiveness:
- **Desktop**: Renders as a `Dialog` (centered modal).
- **Mobile**: Renders as a `Drawer` (bottom sheet).

**Component Reference**: `@/components/ui/modal`
- `Modal`
- `ModalContent`
- `ModalHeader`
- `ModalTitle`
- `ModalBody`
- `ModalFooter`

### 2. visual indicator: circular strength gauge
Since a dedicated Circular Progress component does not exist in `ui`, we will implement a lightweight SVG-based component.

**Design Specs**:
- **Type**: SVG Donut Chart / Radial Progress.
- **Dimensions**: ~120px x 120px (Adjustable).
- **Stroke Width**: 10-12px (Bold, premium feel).
- **Animation**: Smooth transition of `stroke-dashoffset` on mount.
- **Center Content**: Large, bold percentage text (e.g., "85%").

**Color Logic (Dynamic)**:
The gauge color should change based on the score:
- **Weak (0-39)**: `text-red-500` (Urgent/Risk)
- **Moderate (40-69)**: `text-yellow-500` (Caution/Needs improvment)
- **Strong (70-100)**: `text-green-500` (Good/Safe)

## ui layout structure

### modal header
- **Title**: "Case Probability" or "Case Strength Assessment".
- **Description**: Optional brief text like "AI analysis based on your inputs."

### modal body
Centered layout focusing on the result:
1.  **Hero Element**: The Circular Strength Gauge centered.
2.  **Score Label**: Text below gauge indicating status (e.g., "Strong Case", "Time-Barred Risk").
3.  **Key Insights (Optional context)**:
    - *If Weak*: "Your case faces significant hurdles mainly due to limitation period."
    - *If Strong*: "You have a solid foundation for a legal notice."

### modal footer
Clear Call-to-Actions (CTAs) based on result:

| Case Strength | Primary Action (Solid Button) | Secondary Action (Outline/Ghost) |
| :--- | :--- | :--- |
| **Strong** | "Draft Legal Notice Now" | "Talk to a Lawyer" |
| **Moderate** | "Consult a Lawyer" | "Draft Notice Anyway" |
| **Weak** | "Talk to a Lawyer" | "Explore Other Options" |

## implementation guide

### Code Structure Example

```tsx
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

// ... inside your parent component

<Modal open={isOpen} onOpenChange={setIsOpen}>
  <ModalContent className="max-w-md">
    <ModalHeader className="text-center">
      <ModalTitle>Case Probability</ModalTitle>
    </ModalHeader>
    
    <ModalBody className="flex flex-col items-center gap-6">
      {/* Circular Progress Implementation */}
      <div className="relative w-32 h-32">
        {/* SVG Circle Logic Here */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-muted/20" />
          {/* Progress Circle with Dynamic Color */}
          <circle 
            cx="50" cy="50" r="40" 
            stroke="currentColor" 
            strokeWidth="8" 
            fill="transparent" 
            strokeDasharray="251.2" 
            strokeDashoffset={offset} // Calculate based on score
            strokeLinecap="round"
            className={getColorClass(score)} // text-green-500, etc.
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
           <span className="text-3xl font-bold">{score}%</span>
        </div>
      </div>
      
      <div className="text-center space-y-2">
         <h3 className="text-lg font-semibold">{getStatusLabel(score)}</h3>
         <p className="text-sm text-muted-foreground">{getSummaryText(score)}</p>
      </div>
    </ModalBody>

    <ModalFooter className="flex-col sm:flex-row gap-2">
       <Button className="w-full">Consult Lawyer</Button>
       <Button variant="outline" className="w-full">Draft Notice</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

## aesthetic guidelines
- **Typography**: Use standard app fonts (`Inter` / `Geist` depending on config).
- **Spacing**: Generous padding in `ModalBody` to let the gauge breathe.
- **Gradients**: Consider adding a subtle background gradient to the progress stroke if `defs` are supported, otherwise solid colors are clearer.
- **Motion**: The modal should slide up (mobile) or fade in (desktop). The progress bar should animate from 0 to `{score}` over 1s.
