## Speak Tutor — README

### Tech stack
- **Framework**: React
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: `lucide-react`
- **Testing**: React Testing Library, Jest DOM

### Project setup
Run commands from the `speak-tutor-landing` directory:

```bash
cd speak-tutor-landing
npm install
npm start
```

Additional scripts:
- `npm run build`: production build
- `npm test`: run tests

### Component structure (key pieces)
- `src/components/HeroSection.jsx`: Top hero with goal cards
- `src/components/ConversationSection.jsx`: Options list
- `src/components/RelationshipSection.jsx`: Social/proof style section
- `src/components/TestimonialSection.jsx`: Testimonials grid/cards
- `src/components/GoalCard.jsx`: Reusable gradient card used in hero
- `src/components/ConversationOption.jsx`: Reusable option item for conversations
- `src/components/PhoneMockup.jsx`: Static phone UI mock for visual context
- `src/components/UserBadge.jsx`: Small identity/badge element

### Responsiveness and animations
- **Responsiveness**: Implemented with Tailwind responsive utilities (e.g., `md:`, `lg:`) for typography, spacing, grid columns, and layout adjustments across breakpoints.
- **Animations/Transitions**:
  - Subtle UI transitions using Tailwind classes like `transition-all`, `duration-300`, and `transform` for hover/press effects (e.g., button scale on hover).
  - Scroll-tied transforms in sections such as `HeroSection` and `ConversationSection` by computing `scale` and `translateY` from `scrollY` and applying inline `transform` styles for smooth parallax-like motion.


