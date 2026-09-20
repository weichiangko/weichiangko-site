'use client';

/**
 * Liquid-silk background: folded satin / soft matte metallic
 * Fixed backdrop behind all content
 */
export default function LiquidSilkBackground() {
  return (
    <div className="bg-silk" aria-hidden="true">
      <div className="silk-base" />
      <div className="silk-fold silk-fold-primary" />
      <div className="silk-fold silk-fold-secondary" />
      <div className="silk-ridge-band" />
      <div className="silk-specular" />
      <div className="silk-ambient" />
    </div>
  );
}
