# FAQ Section Component

A beautiful, reusable FAQ component with accordion functionality, featuring an elegant dove animation and full design system integration.

## Features

- ✨ Beautiful accordion with smooth animations
- 🕊️ Animated dove decoration
- 🎨 Full design system integration with OKLCH colors
- 📱 Fully responsive design
- 🌓 Dark mode variant included
- ♿ Accessible (built on Radix UI)
- 🔧 Highly customizable
- 📦 TypeScript support

## Installation

The component is already included in your project at:
```
components/ui/faq-section.tsx
```

## Basic Usage

```tsx
import { FAQSection } from "@/components/ui/faq-section";
import type { FAQItem } from "@/components/ui/faq-section";

const faqs: FAQItem[] = [
  {
    id: "question-1",
    question: "What is a legal notice?",
    answer: "A legal notice is a formal written communication..."
  },
  {
    id: "question-2",
    question: "How long does it take?",
    answer: "Typically 5-7 business days for complete delivery."
  },
];

export default function MyPage() {
  return (
    <FAQSection
      faqs={faqs}
      title="Frequently Asked Questions"
      subtitle="Everything you need to know"
    />
  );
}
```

## Props

### FAQSection Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `faqs` | `FAQItem[]` | **Required** | Array of FAQ items |
| `title` | `string` | `"Frequently Asked Questions"` | Section title |
| `subtitle` | `string` | `undefined` | Section subtitle/description |
| `showDove` | `boolean` | `true` | Show animated dove decoration |
| `className` | `string` | `undefined` | Custom className for container |
| `titleClassName` | `string` | `undefined` | Custom className for title |
| `itemClassName` | `string` | `undefined` | Custom className for FAQ items |
| `defaultOpenId` | `string` | `undefined` | ID of initially open FAQ item |
| `allowMultiple` | `boolean` | `false` | Allow multiple items open at once |

### FAQItem Type

```tsx
interface FAQItem {
  id: string;              // Unique identifier
  question: string;        // Question text
  answer: React.ReactNode; // Answer (can be string or JSX)
}
```

## Variants

### 1. Default (Light) Variant

```tsx
import { FAQSection } from "@/components/ui/faq-section";

<FAQSection faqs={faqs} />
```

Features:
- White background with backdrop blur
- Gradient text title
- Animated dove
- Subtle shadows

### 2. Dark Variant

```tsx
import { FAQSectionDark } from "@/components/ui/faq-section";

<FAQSectionDark faqs={faqs} />
```

Features:
- Dark background
- White text
- Inverted dove image
- Perfect for dark sections

### 3. Minimal Variant

```tsx
import { FAQSectionMinimal } from "@/components/ui/faq-section";

<FAQSectionMinimal faqs={faqs} showDove={false} />
```

Features:
- Transparent background
- Simpler design
- Optional dove
- Great for inline use

## Examples

### Example 1: Rich Content Answers

```tsx
const faqs: FAQItem[] = [
  {
    id: "pricing",
    question: "How much does it cost?",
    answer: (
      <div className="space-y-2">
        <p>Our pricing starts from <span className="font-semibold text-[oklch(64%_0.18_15)]">₹499</span></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Basic: ₹499</li>
          <li>Standard: ₹999</li>
          <li>Premium: ₹1,999</li>
        </ul>
      </div>
    ),
  },
];
```

### Example 2: Multiple Open Items

```tsx
<FAQSection
  faqs={faqs}
  allowMultiple={true}
  defaultOpenId="most-common-question"
/>
```

### Example 3: Custom Styling

```tsx
<FAQSection
  faqs={faqs}
  className="bg-gradient-to-b from-white to-[oklch(98%_0.01_30)]"
  titleClassName="text-[oklch(20%_0_0)]"
  itemClassName="hover:border-[oklch(64%_0.18_15)]/20"
/>
```

### Example 4: Without Dove

```tsx
<FAQSection
  faqs={faqs}
  showDove={false}
  title="Quick Questions"
/>
```

### Example 5: Page-Specific FAQs

**Legal Notice Page:**
```tsx
// app/legal-notice/page.tsx
import { FAQSection } from "@/components/ui/faq-section";

const legalNoticeFAQs = [
  { id: "1", question: "What is a legal notice?", answer: "..." },
  { id: "2", question: "When to send one?", answer: "..." },
];

export default function LegalNoticePage() {
  return (
    <main>
      {/* Page content */}
      <FAQSection faqs={legalNoticeFAQs} />
    </main>
  );
}
```

**Pricing Page:**
```tsx
// app/pricing/page.tsx
import { FAQSection } from "@/components/ui/faq-section";

const pricingFAQs = [
  { id: "1", question: "Refund policy?", answer: "..." },
  { id: "2", question: "Payment plans?", answer: "..." },
];

export default function PricingPage() {
  return (
    <main>
      {/* Pricing content */}
      <FAQSection
        faqs={pricingFAQs}
        title="Pricing Questions"
        showDove={false}
      />
    </main>
  );
}
```

## Design System Integration

The component uses design tokens from `lib/design-system/`:

### Colors Used
- **Primary**: `oklch(64% 0.18 15)` - Coral red for accents
- **Text**: `oklch(20% 0 0)` - Dark gray for headings
- **Background**: `oklch(98% 0.01 30)` - Light peach for sections
- **Border**: `oklch(92% 0 0)` - Light gray for dividers

### Animations
- **Dove Float**: Smooth up-down float with rotation
- **Accordion**: Smooth expand/collapse
- **Hover**: Subtle background color transitions

### Responsive Breakpoints
- **Mobile**: Base styles
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)

## Accessibility

- Keyboard navigation supported
- ARIA labels and roles via Radix UI
- Focus indicators visible
- Screen reader friendly

## Customization Tips

### Change Dove Position

```tsx
// Edit line 67-73 in faq-section.tsx
<div className="absolute -right-20 top-0 md:-right-24 md:top-2">
  {/* Dove image */}
</div>
```

### Adjust Animation Speed

```tsx
// Edit the CSS animation (line 207)
animation: float 5s ease-in-out infinite; // Slower
animation: float 2s ease-in-out infinite; // Faster
```

### Use Different Image

Replace the dove with your own image:
```tsx
<Image
  src="/assets/common/your-image.png"
  alt="Your decoration"
  // ...
/>
```

## Complete Page Example

```tsx
import { FAQSection } from "@/components/ui/faq-section";

const faqs = [
  {
    id: "q1",
    question: "How does it work?",
    answer: "Simple 3-step process...",
  },
  {
    id: "q2",
    question: "Is it secure?",
    answer: "Yes, we use bank-level encryption.",
  },
  {
    id: "q3",
    question: "How long does it take?",
    answer: "5-7 business days.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <h1>Contact Us</h1>
        {/* Contact form */}
      </section>

      <FAQSection
        faqs={faqs}
        title="Common Questions"
        subtitle="Can't find your answer? Contact us directly."
      />
    </div>
  );
}
```

## Best Practices

1. **Keep questions concise** - One clear question per item
2. **Provide complete answers** - Don't leave users guessing
3. **Use rich content** - Add lists, links, and formatting
4. **Order by importance** - Most common questions first
5. **Update regularly** - Add new questions as they arise
6. **Test on mobile** - Ensure readability on small screens

## Troubleshooting

### Dove image not showing
Make sure the image exists at:
```
public/assets/common/dove-bird.png
```

### Accordion not working
Check that you've installed the dependencies:
```bash
npm install @radix-ui/react-accordion
```

### Styles not applying
Ensure Tailwind is configured to scan the components directory in `tailwind.config.js`:
```js
content: [
  "./components/**/*.{js,ts,jsx,tsx}",
  // ...
]
```

## Related Components

- `components/ui/accordion.tsx` - Base accordion component
- `lib/design-system/theme.ts` - Color tokens
- `lib/design-system/tokens.ts` - Component tokens

## License

Part of Vakil Tech Revamp project.
