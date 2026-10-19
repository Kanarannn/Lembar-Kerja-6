# Design direction: Nexora Digital

Source: the project brief (charcoal and electric orange, editorial, premium).

Design Read: company profile for small and mid-size businesses hiring a studio, in a dark
editorial language. Dial ENERGY 3 / RHYTHM 3 / MOTION 2.

## Decisions and reasons

- Dark charcoal base, orange accent: specified by the brief. Orange appears on the
  eyebrow marker, one primary button per view, section numerals and active states only.
- Typefaces: Bricolage Grotesque for headings (tight, slightly irregular forms give an
  editorial voice that suits a studio), DM Sans for body text (open, readable at small sizes).
- Identity motif: a small orange square, echoing the logo mark, used as the eyebrow marker
  and as a recurring shape in the illustrations.
- Radius: 6 px on buttons and inputs, 8 px on cards and covers. No pills.
- Layout: each section changes composition. Hero is 7/5 asymmetric, intro is a definition
  list, and services use 4/2 and 2/4 spans. Services on the detail page are ruled rows.
- Glow: one soft orange glow behind the hero visual to set the focal point. Nowhere else.
- Shadows and glass: none. Elevation is expressed with borders.
- Motion: fade and slide-up on scroll (once per element), hover color and border changes,
  a short page fade, menu fade. No loops. All disabled by `prefers-reduced-motion`.
- Illustration: the hero SVG uses browser and phone shapes to represent web and mobile
  products. Project illustrations are not used.
- Content: team names and photos come from the supplied files, and roles follow the
  filenames. The contact address is Jalan Cibaduyut Lama.
- Icons (Lucide, required by the brief): Code for web, Braces for software, Palette for
  design, Compass for strategy, ClipboardCheck for consulting. Each matches its service.
