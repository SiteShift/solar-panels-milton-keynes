# Design Guidelines • solarpanels-miltonkeynes.com

Brand identity and design system for the Milton Keynes Solar Guide website.

---

## Typography

### Primary Font: Lufga Regular
- **File**: `/public/Fonts/LufgaRegular.ttf`
- **Usage**: All text elements (headings, body, buttons, navigation)

### Font Applications:
- **Headings (H1-H6)**: Lufga Regular with reduced letter-spacing (-0.02em) and line-height (1.1)
- **Navigation**: Lufga Regular, standard spacing
- **Buttons/CTAs**: Lufga Regular, standard spacing
- **Body/Paragraph text**: Lufga Regular with normal letter-spacing (0) and line-height (1.6)

---

## Color Palette

### Primary Colors
- **Accent Green**: `#5be761` - Primary CTA buttons, highlights, success states
- **Text Dark**: `#000000` - Primary text color for light mode
- **Text Light**: `#666666` - Secondary text, descriptions
- **Background**: `#ffffff` - Main background color

### Supporting Colors
- **Light Gray**: `#f8f9fa` - Section backgrounds, cards
- **Border Gray**: `#e5e7eb` - Borders, dividers
- **Success**: `#5be761` - Success states, checkmarks
- **Warning**: `#fbbf24` - Warning states
- **Error**: `#ef4444` - Error states

---

## Logo & Branding

### Main Logo
- **File**: `/public/Solar Panels Milton Keynes logo-cropped (1).svg`
- **Usage**: Header navigation (black pill background)
- **Alt text**: "Solar Panels Milton Keynes"

### Logo Guidelines
- Maintain aspect ratio
- Minimum size: 120px width
- Clear space: 20px on all sides
- Use on dark backgrounds for contrast

---

## Layout & Spacing

### Container Widths
- **Max width**: 1200px (7xl)
- **Padding**: 16px mobile, 24px tablet, 32px desktop
- **Section spacing**: 64px vertical (py-16)

### Component Spacing
- **Buttons**: px-8 py-4 (large), px-6 py-3 (medium), px-4 py-2 (small)
- **Cards**: p-6 standard, p-8 large
- **Grid gaps**: gap-8 (32px) standard, gap-6 (24px) compact

---

## Components

### Buttons
- **Primary**: Linear gradient from light green (#5be761) to darker green (#4bd158)
- **3D Effect**: True layered 3D with multiple button layers at different Z-heights
- **Layer Structure**: 
  - Top layer (z-index: 3): Main button with standard gradient
  - Middle layer (z-index: -1): Lighter gradient, positioned 1px higher
  - Bottom layer (z-index: -2): Darker gradient, positioned 1px lower with shadow
- **Border**: 1px solid dark gray (#333) on all layers
- **Shadow**: Subtle dark shadow on bottom layer for depth
- **Text**: Lufga Regular font, black color
- **Hover**: All layers shift up 1px, brighter gradients, enhanced shadows
- **Active/Pressed**: All layers compress down, darker gradients
- **Arrow Icon**: White circular background with black arrow (for "contact us" style)
- **Implementation**: Uses `.button-3d` CSS class with pseudo-elements for layering

### Navigation
- **Position**: Fixed/sticky at top of page
- **Background**: Dark glassmorphism (black/60 with backdrop-blur-md)
- **Border**: Enhanced white/20 border for better definition
- **Container**: Centered pill with max-width-5xl, increased padding (px-8)
- **Spacing**: Increased spacing between elements (space-x-10 and space-x-8)
- **Logo**: Larger size (h-12) for better visibility
- **Text**: White text on dark transparent background
- **Font**: Lufga Medium, smaller size (text-sm)
- **Hover**: Accent green text color
- **Button**: Small size to fit proportionally

### Cards
- **Background**: White
- **Border**: Light gray (#e5e7eb)
- **Border radius**: 12px (rounded-xl)
- **Shadow**: Subtle drop shadow
- **Padding**: 24px (p-6)

### Hero Section
- **Background**: Hero image with overlay
- **Text**: White text on dark overlay
- **CTA**: Accent green button
- **Layout**: Left-aligned text, full-width background

---

## Hero Section Specifications

### Background
- **Image**: `/public/Solar Panels Milton Keynes (1).webp`
- **Treatment**: No overlay - clean, bright appearance
- **Position**: Center cover
- **Height**: 100vh minimum

### Content Layout
- **Container**: Max-width 1200px, left-aligned
- **Text color**: Black (#000000) for maximum contrast
- **Heading**: Large (5xl-7xl), Lufga Medium, reduced spacing
- **CTA Button**: Accent green, prominent positioning

### Trust Indicators
- **Design**: Very transparent white glassmorphism pill (white/20 with backdrop-blur)
- **Customer photos**: Single composite image `/profile-set-hero (1)_compressed.webp` (32px height)
- **Stars**: 5 accent green stars (16px each) with minimal spacing
- **Text**: "Trusted by Locals" in smaller black text (text-sm)
- **Layout**: Compact horizontal pill with photo on left, vertical stack of stars and text on right
- **Position**: Above main heading
- **Spacing**: Reduced padding (px-4 py-2) and tighter element spacing

---

## Accessibility

### Color Contrast
- Ensure 4.5:1 contrast ratio minimum
- Test accent green against white and dark backgrounds
- Provide alternative text for all images

### Typography
- Minimum 16px font size for body text
- Clear hierarchy with size and weight differences
- Sufficient line spacing for readability

---

## Implementation Notes

### Font Loading
- Use `@font-face` in CSS for Lufga Medium
- Include font-display: swap for performance
- Fallback to system fonts if load fails

### Performance
- Optimize hero image (WebP format)
- Lazy load images below fold
- Minimize layout shift with proper sizing

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Scale typography and spacing appropriately

---

This design system ensures consistent branding across all pages while maintaining excellent user experience and performance.