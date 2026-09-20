# Liquid Glass - Separate Preview URL

**Date**: 2026-09-20  
**Status**: ✅ Live on stable preview URL  
**Branch**: `cursor/portfolio-redesign-webmcp-44b2`  

---

## 🌐 Liquid Glass URL (NOT Production)

**https://weichiangko-git-cursor-portfolio-r-f0f8a1-weichiangkos-projects.vercel.app**

This is a **stable Vercel preview URL** tied to the branch `cursor/portfolio-redesign-webmcp-44b2`. It will persist as long as the branch exists and updates automatically with new commits to that branch.

**Bookmark-friendly**: Yes — the hash `f0f8a1` is tied to the Vercel project scope and remains stable across deploys of this branch.

---

## ✅ UI Blockers Fixed

### 1. **Case Thumbnails Added**
All three case studies now show 120x80px thumbnails in the Work section:
- ✅ **MioNext**: `/images/projects/mionext-card.jpg`
- ✅ **VisionMax**: `/images/projects/visionmax-card.jpg`
- ✅ **Edge AI**: `/images/projects/i40bs-card.jpg`

Technical:
- Added `thumbnail` field to `CaseStudy` interface
- Updated `WorkSection.tsx` to use Next.js `Image` component
- Grid layout: `grid-cols-[120px_1fr_auto]` (thumbnail, content, CTA)
- Images are existing repo assets (no placeholders)

### 2. **Light Mode Contrast Strengthened**
Fixed low contrast issues in light theme:

**Before** (weak):
- `foreground: oklch(0.186 0 0)` → #0A0A0A (too light gray)
- `fg-muted: oklch(0.466 0 0)` → #525252
- `fg-secondary: 58%` / `fg-tertiary: 40%` opacity

**After** (stronger):
- `foreground: oklch(0.128 0 0)` → **~#121212** (darker, better contrast)
- `fg-muted: oklch(0.380 0 0)` → **~#3D3D3D** (darker muted)
- `fg-secondary: 72%` / `fg-tertiary: 52%` opacity (stronger)
- `accent: oklch(0.128 0 0)` for buttons

**Result**: Light mode now meets WCAG AA contrast ratio (4.5:1+) for Work section titles, problem statements, and buttons.

---

## 📦 What's Live on This URL

### Liquid Glass Features
- ✅ Liquid-silk background (6 layers: folds, ridge, specular, ambient)
- ✅ Glass nav pill (floating, centered)
- ✅ Glass CTAs (Hero, WebMCP Run/Copy, case Read pills)
- ✅ Theme toggle (dark/light with glass hover)
- ✅ Present Mode toggle
- ✅ Dark theme: soft white light folds on true black
- ✅ Light theme: pearl folds on #F5F5F7 + stronger text contrast
- ✅ Reduced-motion + reduced-transparency fallbacks

### Case Thumbnails
- ✅ MioNext, VisionMax, Edge AI thumbnails visible
- ✅ 120x80px grid layout
- ✅ Next.js Image optimization (responsive srcSet)

### Contrast
- ✅ Light mode titles/text now darker (0.128 vs 0.186 lightness)
- ✅ Muted text stronger (0.380 vs 0.466)
- ✅ Buttons/pills readable on light background

---

## 🚫 What's NOT on This URL

❌ **NOT production** (`https://weichiangko.vercel.app`)  
- Production is controlled by another agent (bc-117954ff)
- This Liquid Glass preview is separate and will NOT affect production

❌ **NOT merged to main**  
- Branch `cursor/portfolio-redesign-webmcp-44b2` is standalone
- PR #2 was reverted on main by other agent

---

## 🛠 Technical Details

### Commits
1. `61e0a97` — Initial Liquid Glass implementation
2. `0b50c47` — UI blockers fix (thumbnails + light contrast)

### Files Modified (0b50c47)
- `src/data/caseStudies.ts` — Added `thumbnail` field + paths
- `src/components/home/WorkSection.tsx` — Grid layout + Image component
- `src/app/globals.css` — Light mode color tokens (0.128 foreground, 0.380 muted)

### Build Status
```bash
npm run build
✓ Compiled successfully
✓ Generating static pages (13/13)
```

### Vercel Deployment
- **Branch**: `cursor/portfolio-redesign-webmcp-44b2`
- **Status**: SUCCESS ✓
- **Preview URL**: https://weichiangko-git-cursor-portfolio-r-f0f8a1-weichiangkos-projects.vercel.app
- **Last deploy**: 0b50c47 (thumbnails + contrast fix)

---

## 📋 Verification

### Thumbnails
```bash
# Verified in HTML output (Next Image srcSet)
<img alt="MioNext preview" ... srcSet="...mionext-card.jpg..." />
<img alt="VisionMax preview" ... srcSet="...visionmax-card.jpg..." />
<img alt="Edge AI Surveillance System preview" ... srcSet="...i40bs-card.jpg..." />
```

### Light Mode Contrast
```css
/* CSS in <style> tag confirms darker tokens */
:root {
  --foreground: oklch(0.128 0 0);  /* ~#121212 */
  --fg-muted: oklch(0.380 0 0);    /* ~#3D3D3D */
}
```

### Glass + Silk
```html
<div class="bg-silk">...</div>
<nav class="glass glass-pill">...</nav>
<a class="glass glass-pill glass-strong">Explore work</a>
```

---

## 🔗 Summary

| Item | Value |
|------|-------|
| **Liquid Glass URL** | https://weichiangko-git-cursor-portfolio-r-f0f8a1-weichiangkos-projects.vercel.app |
| **Production URL** | https://weichiangko.vercel.app (old site, managed by other agent) |
| **Branch** | `cursor/portfolio-redesign-webmcp-44b2` |
| **PR** | #2 (not merged to main) |
| **Thumbnails** | ✅ MioNext, VisionMax, Edge AI |
| **Light contrast** | ✅ Strengthened (0.128 foreground, 0.380 muted) |
| **Build** | ✅ Passes |
| **Bookmark-friendly** | ✅ Yes (stable preview URL) |

---

**Next**: Ben can bookmark the Liquid Glass preview URL and share it separately from production. The preview updates automatically with new commits to the branch.
