"use client";

import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function PointSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });
  const autoRotationRef = useRef(0);

  // Create point sphere geometry with varied sizes and grayscales
  const createPointSphere = () => {
    // Responsive radius - larger for desktop, smaller for mobile
    const radius = window.innerWidth < 768 ? 190 : 400; // Mobile: 190, Desktop: 400 units
    const particleCount = window.innerWidth < 768 ? 800 : 1500; // Mobile responsive
    
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const distanceFromCenter = new Float32Array(particleCount);
    
    // Generate points on sphere surface with varied properties
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Even distribution on sphere surface using spherical coordinates
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      // Position on sphere
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Varied grayscale colors (extremely light and subtle)  
      const grayValue = 0.01 + Math.random() * 0.05; // Range: 0.01 to 0.06
      colors[i3] = grayValue;     // R
      colors[i3 + 1] = grayValue; // G
      colors[i3 + 2] = grayValue; // B
      
      // Varied sizes - consistent across all devices
      const baseSize = 1.5; // Same base size for all devices
      const sizeRange = 2; // Same size range for all devices
      sizes[i] = baseSize + Math.random() * sizeRange;
      
      // All particles are on surface
      distanceFromCenter[i] = 1.0;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('distanceRatio', new THREE.BufferAttribute(distanceFromCenter, 1));
    
    return geometry;
  };

  // Mouse move handler for interactive rotation
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize mouse position (-1 to 1)
    const mouseX = (event.clientX - centerX) / (rect.width / 2);
    const mouseY = (event.clientY - centerY) / (rect.height / 2);
    
    mouseRef.current = { x: mouseX, y: mouseY };
    
    // Map mouse movement to rotation (X → Y-axis, Y → X-axis inverted)
    const targetRotationY = mouseX * 0.5; // Horizontal movement → Y-axis rotation
    const targetRotationX = -mouseY * 0.3; // Vertical movement → X-axis rotation (inverted)
    
    // Kill previous tweens and create new ones for smooth motion
    gsap.killTweensOf(rotationRef.current);
    gsap.to(rotationRef.current, {
      x: targetRotationX,
      y: targetRotationY,
      duration: 0.1,
      ease: "power2.out"
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Force fresh creation with timestamp
    console.log('Creating PointSphere with new colors:', Date.now());

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    // Responsive camera position based on screen size (moved closer to enlarge sphere)
    camera.position.z = window.innerWidth < 768 ? 450 : 800; // Mobile: 450, Desktop: 800
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(
      containerRef.current.clientWidth, 
      containerRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create point sphere
    const geometry = createPointSphere();
    
    // Custom shader material for perfect round dots with varied colors and sizes
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: 1.0 }, // Fixed to 1.0 for consistent sizing across devices
        isMobile: { value: window.innerWidth < 768 ? 1.0 : 0.0 }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 customColor;
        attribute float distanceRatio;
        varying vec3 vColor;
        varying float vDistanceRatio;
        uniform float time;
        uniform float pixelRatio;
        uniform float isMobile;
        
        void main() {
          vColor = customColor;
          vDistanceRatio = distanceRatio;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * 1.275; // Reduced by 15% for smaller particles
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vDistanceRatio;
        uniform float isMobile;
        
        void main() {
          float r = 0.0;
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;
          r = dot(cxy, cxy);
          
          if (r > 1.0) {
            discard;
          }
          
          // Base transparency
          float baseAlpha = (1.0 - smoothstep(0.6, 1.0, r)) * 0.3; // Max 30% opacity
          
          // Mobile-specific transparency reduction for inner particles
          float finalAlpha = baseAlpha;
          if (isMobile > 0.5 && vDistanceRatio < 0.8) {
            // Gradual transparency reduction from 80% radius to center
            float fadeRatio = vDistanceRatio / 0.8; // 0-1 scale within the fade zone
            float transparencyMultiplier = 0.5 + 0.5 * fadeRatio; // 50% at center, 100% at 80% radius
            finalAlpha *= transparencyMultiplier;
          }
          
          gl_FragColor = vec4(vColor, finalAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      vertexColors: true
    });

    // Create points mesh
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    pointsRef.current = points;

    // Animation loop
    let time = 0;
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      time += 0.005;
      
      if (pointsRef.current) {
        // Continuous pulsing (scale 1 → 1.1) - subtler effect
        const pulseScale = 1 + 0.1 * (0.5 + 0.5 * Math.sin(time * 0.8));
        pointsRef.current.scale.setScalar(pulseScale);
        
        // Auto-rotation (X-axis: 240s, Y-axis: 480s)
        const xRotationSpeed = (Math.PI * 2) / (240 * 60); // 240 seconds for full rotation
        const yRotationSpeed = (Math.PI * 2) / (480 * 60); // 480 seconds for full rotation
        
        autoRotationRef.current += 0.016; // Base time increment
        
        // Combine auto-rotation with mouse rotation
        pointsRef.current.rotation.x = (autoRotationRef.current * xRotationSpeed) + rotationRef.current.x;
        pointsRef.current.rotation.y = (autoRotationRef.current * yRotationSpeed) + rotationRef.current.y;
      }
      
      // Update shader time uniform
      if (material.uniforms.time) {
        material.uniforms.time.value = time;
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Add mouse move listener
    document.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener('resize', handleResize);

    // Store container reference for cleanup
    const currentContainer = containerRef.current;
    const currentRotationRef = rotationRef.current;

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Kill all GSAP tweens
      gsap.killTweensOf(currentRotationRef);
      
      if (currentContainer && renderer.domElement && currentContainer.contains(renderer.domElement)) {
        currentContainer.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js resources
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [handleMouseMove]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}