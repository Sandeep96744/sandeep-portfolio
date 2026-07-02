## Goal
Refresh the profile photo (`src/assets/profile.jpg`) so it feels like a polished, 3D-realistic portrait with a clean, distraction-free background — and let it sit cleanly on both the Home and About pages.

## What I'll do

1. **Regenerate the profile image** (`src/assets/profile.jpg`)
   - Replace the current placeholder with a new high-quality render:
     - Realistic 3D-style portrait (studio lighting, soft shadows, subtle depth)
     - Clean, minimal background — soft neutral gradient (light grey → off-white) so it blends with the Apple-like light theme
     - Professional framing, sharp focus on face/shoulders
   - Same filename, so no import changes needed — Hero and About pick it up automatically.

2. **Light presentation polish (optional, only on the image frame)**
   - On the About page card and the Hero avatar: keep the existing rounded frame, but soften the border so the subject reads as the focal point (no layout changes).

## Out of scope
- No content/text changes
- No layout or routing changes
- No Firebase changes

## Technical notes
- Single asset swap at `src/assets/profile.jpg` (kept as `.jpg`, same path).
- Used by `src/lib/portfolio-data.ts` (`profile.photoUrl`) and imported directly in `src/routes/about.tsx` — both continue working with no code edits required.

Want me to go with a **transparent PNG** instead (no background at all, floats on the page background), or keep the **soft neutral gradient** background as described above?
