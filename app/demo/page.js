// pages/index.js
'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

export default function Home() {
  const canvasRef = useRef(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [loading, setLoading] = useState(true);
  
  // Character info from your text files
  const characters = {
    bokaVhai: {
      name: "BOKA BHAI",
      fullTitle: "The Legendary Code Guru of Mirpur",
      skills: ["Frontend Dev (still using inline CSS)", "JavaScript Magician", "Self-Taught Designer", "Backend Biker"],
      quotes: [
        "Code ta kaj korena, kintu dekhte to acchi!",
        "React e jodi thik hoy, PHP te ki problem?",
        "Inline CSS ta rakha chhilo keno, bhai?",
        "404 ta jodi website e hoy, amake keno blame korbe?"
      ],
      projects: ["MyFirstWebsite.com", "GamerAPI", "DesignLikePro", "CodeSnack"],
      signature: "The Full-Stack Juggler Who Never Learned CSS Grid"
    },
    kuddusPagla: {
      name: "KUDDUS PAGLA",
      fullTitle: "The Full Stack Phenom of Demra",
      skills: ["Full-stack Dev (self-declared, Stack Overflow-banned)", "AI/ML Guru", "Rooftop Rapper", "GPU Dealer"],
      quotes: [
        "Deployment holo na, but rap ta solid chilo.",
        "Ami full-stack, tumi full-stuck.",
        "TensorFlow amar, tumar feelings overfitted.",
        "I don't deploy, I demploy."
      ],
      projects: ["Ricksh-AI", "ChotpotiGPT", "BiriyaniGAN", "WiFind", "BhaierBnB"],
      signature: "Code Lagse Na, Flow Lagse"
    }
  };
  
  // Story scenes - telling their journey
  const storyTexts = [
    "Meet the legendary developers of Dhaka...",
    "BOKA BHAI: The Code Guru of Mirpur & KUDDUS PAGLA: The Stack Phenom of Demra",
    "Two coding styles, one epic rivalry...",
    "BOKA: 'JavaScript is like Pizza. Everyone loves it, but it's messy.'",
    "KUDDUS: 'Ami full-stack, tumi full-stuck.'",
    "They built empires - MyFirstWebsite.com and Ricksh-AI",
    "They fought in commit messages and StackOverflow comments",
    "Legend says they once debugged for 72 hours straight",
    "Two developers, infinite errors, one brotherhood"
  ];
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0a0a14');
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);
    
    // Create dev texture loaders (this would be your actual images in a real implementation)
    const textureLoader = new THREE.TextureLoader();
    
    // We'd normally load actual textures from your images, but for this example:
    // Create placeholder textures with names
    const bokaTexture = createNameTexture("BOKA BHAI", "#e34c26");
    const kuddusTexture = createNameTexture("KUDDUS PAGLA", "#61dafb");
    
    // Function to create text texture
    function createNameTexture(name, bgColor) {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext('2d');
      
      // Background
      context.fillStyle = bgColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Text
      context.font = 'bold 36px Arial';
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(name, canvas.width/2, canvas.height/2);
      
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    }
    
    // Create story scenes
    const storyScenes = [];
    
    // SCENE 1: Intro
    const scene1 = new THREE.Group();
    
    // Create floating code particles
    const codeParticles = new THREE.Group();
    const codeFonts = ['{', '}', '(', ')', '<', '>', ';', '=', '[]', '//'];
    
    for (let i = 0; i < 100; i++) {
      const codeCanvas = document.createElement('canvas');
      codeCanvas.width = 64;
      codeCanvas.height = 64;
      const ctx = codeCanvas.getContext('2d');
      
      // Draw code character
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 64, 64);
      ctx.font = 'bold 40px monospace';
      ctx.fillStyle = i % 2 === 0 ? '#61dafb' : '#e34c26';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(codeFonts[i % codeFonts.length], 32, 32);
      
      const codeTexture = new THREE.CanvasTexture(codeCanvas);
      const codeMaterial = new THREE.SpriteMaterial({ map: codeTexture });
      const codeSprite = new THREE.Sprite(codeMaterial);
      
      // Position randomly
      codeSprite.position.x = (Math.random() - 0.5) * 15;
      codeSprite.position.y = (Math.random() - 0.5) * 15;
      codeSprite.position.z = (Math.random() - 0.5) * 10;
      
      codeSprite.scale.set(0.5, 0.5, 0.5);
      
      codeParticles.add(codeSprite);
    }
    
    scene1.add(codeParticles);
    
    // SCENE 2: Meet the characters
    const scene2 = new THREE.Group();
    
    // Create character planes
    const bokaPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.MeshBasicMaterial({ 
        map: bokaTexture, 
        transparent: true 
      })
    );
    bokaPlane.position.x = -2;
    
    const kuddusPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.MeshBasicMaterial({ 
        map: kuddusTexture, 
        transparent: true 
      })
    );
    kuddusPlane.position.x = 2;
    
    scene2.add(bokaPlane);
    scene2.add(kuddusPlane);
    
    // SCENE 3: Two coding styles
    const scene3 = new THREE.Group();
    
    // Boka's code style - a messy cube with rough edges
    const bokaCodeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const bokaCodeMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xe34c26, 
      wireframe: true,
      roughness: 1
    });
    const bokaCode = new THREE.Mesh(bokaCodeGeometry, bokaCodeMaterial);
    bokaCode.position.x = -2;
    
    // Add messy code lines sticking out
    for (let i = 0; i < 15; i++) {
      const lineGeometry = new THREE.CylinderGeometry(0.01, 0.01, 0.5 + Math.random());
      const lineMaterial = new THREE.MeshBasicMaterial({ color: 0xe34c26 });
      const line = new THREE.Mesh(lineGeometry, lineMaterial);
      
      // Random position on the cube
      const side = Math.floor(Math.random() * 6);
      const pos = 0.75;
      
      if (side === 0) line.position.set(pos, Math.random() - 0.5, Math.random() - 0.5);
      else if (side === 1) line.position.set(-pos, Math.random() - 0.5, Math.random() - 0.5);
      else if (side === 2) line.position.set(Math.random() - 0.5, pos, Math.random() - 0.5);
      else if (side === 3) line.position.set(Math.random() - 0.5, -pos, Math.random() - 0.5);
      else if (side === 4) line.position.set(Math.random() - 0.5, Math.random() - 0.5, pos);
      else line.position.set(Math.random() - 0.5, Math.random() - 0.5, -pos);
      
      line.rotation.x = Math.random() * Math.PI;
      line.rotation.y = Math.random() * Math.PI;
      line.rotation.z = Math.random() * Math.PI;
      
      bokaCode.add(line);
    }
    
    // Kuddus's code style - a clean torus
    const kuddusCodeGeometry = new THREE.TorusGeometry(0.7, 0.3, 16, 50);
    const kuddusCodeMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x61dafb,
      metalness: 0.8,
      roughness: 0.2
    });
    const kuddusCode = new THREE.Mesh(kuddusCodeGeometry, kuddusCodeMaterial);
    kuddusCode.position.x = 2;
    
    scene3.add(bokaCode);
    scene3.add(kuddusCode);
    
    // SCENE 4: Boka's quote
    const scene4 = new THREE.Group();
    
    // Create speech bubble with quote
    const bokaQuoteGroup = new THREE.Group();
    
    // Boka caricature
    const bokaFigure = new THREE.Mesh(
      new THREE.CircleGeometry(1, 32),
      new THREE.MeshBasicMaterial({ map: bokaTexture })
    );
    
    // Speech bubble
    const bubbleGeometry = new THREE.Shape();
    bubbleGeometry.moveTo(0, 0);
    bubbleGeometry.bezierCurveTo(1, 1, 3, 1, 4, 0);
    bubbleGeometry.bezierCurveTo(4.5, -0.5, 4.5, -1.5, 4, -2);
    bubbleGeometry.bezierCurveTo(3, -3, 1, -3, 0, -2);
    bubbleGeometry.bezierCurveTo(-0.5, -1.5, -0.5, -0.5, 0, 0);
    
    const bubbleMesh = new THREE.Mesh(
      new THREE.ShapeGeometry(bubbleGeometry),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    bubbleMesh.position.set(1.5, 0, -0.1);
    
    bokaQuoteGroup.add(bokaFigure);
    bokaQuoteGroup.add(bubbleMesh);
    bokaQuoteGroup.position.set(-1, 0, 0);
    
    scene4.add(bokaQuoteGroup);
    
    // SCENE 5: Kuddus's quote
    const scene5 = new THREE.Group();
    
    // Create speech bubble with quote
    const kuddusQuoteGroup = new THREE.Group();
    
    // Kuddus caricature
    const kuddusFigure = new THREE.Mesh(
      new THREE.CircleGeometry(1, 32),
      new THREE.MeshBasicMaterial({ map: kuddusTexture })
    );
    
    // Speech bubble
    const kuddusBubbleGeometry = new THREE.Shape();
    kuddusBubbleGeometry.moveTo(0, 0);
    kuddusBubbleGeometry.bezierCurveTo(-1, 1, -3, 1, -4, 0);
    kuddusBubbleGeometry.bezierCurveTo(-4.5, -0.5, -4.5, -1.5, -4, -2);
    kuddusBubbleGeometry.bezierCurveTo(-3, -3, -1, -3, 0, -2);
    kuddusBubbleGeometry.bezierCurveTo(0.5, -1.5, 0.5, -0.5, 0, 0);
    
    const kuddusBubbleMesh = new THREE.Mesh(
      new THREE.ShapeGeometry(kuddusBubbleGeometry),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    kuddusBubbleMesh.position.set(-1.5, 0, -0.1);
    
    kuddusQuoteGroup.add(kuddusFigure);
    kuddusQuoteGroup.add(kuddusBubbleMesh);
    kuddusQuoteGroup.position.set(1, 0, 0);
    
    scene5.add(kuddusQuoteGroup);
    
    // SCENE 6: Their empires/projects
    const scene6 = new THREE.Group();
    
    // Boka's projects - a wobbly website structure
    const bokaProjectGroup = new THREE.Group();
    
    const websiteBase = new THREE.Mesh(
      new THREE.BoxGeometry(2, 0.2, 1),
      new THREE.MeshStandardMaterial({ color: 0xe34c26 })
    );
    
    const websiteHeader = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.3, 0.9),
      new THREE.MeshStandardMaterial({ color: 0xcccccc })
    );
    websiteHeader.position.y = 0.25;
    
    const websiteContent = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 1, 0.9),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    websiteContent.position.y = 0.9;
    
    const websiteFooter = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.2, 0.9),
      new THREE.MeshStandardMaterial({ color: 0x333333 })
    );
    websiteFooter.position.y = 1.5;
    
    // Add random "HTML elements"
    for (let i = 0; i < 8; i++) {
      const element = new THREE.Mesh(
        new THREE.BoxGeometry(Math.random() * 0.4 + 0.3, 0.1, 0.6),
        new THREE.MeshStandardMaterial({ 
          color: Math.random() > 0.5 ? 0xdddddd : 0xeeeeee 
        })
      );
      element.position.y = 0.6 + Math.random() * 0.8;
      element.position.x = (Math.random() - 0.5) * 1.2;
      websiteContent.add(element);
    }
    
    bokaProjectGroup.add(websiteBase);
    bokaProjectGroup.add(websiteHeader);
    bokaProjectGroup.add(websiteContent);
    bokaProjectGroup.add(websiteFooter);
    bokaProjectGroup.position.set(-2.5, 0, 0);
    // Tilt it slightly as it's not built well
    bokaProjectGroup.rotation.z = -0.1;
    
    // Kuddus's projects - a high-tech AI app
    const kuddusProjectGroup = new THREE.Group();
    
    // Base mobile app
    const appBase = new THREE.Mesh(
      new THREE.BoxGeometry(1, 2, 0.1),
      new THREE.MeshStandardMaterial({ 
        color: 0x333333,
        roughness: 0.2,
        metalness: 0.8
      })
    );
    
    // Add beveled edges effect using additional meshes
    const edgeGeometry = new THREE.BoxGeometry(1.02, 2.02, 0.12);
    const edgeMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x444444,
      roughness: 0.3,
      metalness: 0.7
    });
    const edgeMesh = new THREE.Mesh(edgeGeometry, edgeMaterial);
    edgeMesh.position.z = -0.01;
    appBase.add(edgeMesh);
    
    // App screen
    const appScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.9, 1.8),
      new THREE.MeshBasicMaterial({ color: 0x61dafb })
    );
    appScreen.position.z = 0.06;
    
    // AI elements - orbiting spheres
    const aiElements = new THREE.Group();
    
    for (let i = 0; i < 12; i++) {
      const element = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 16, 16),
        new THREE.MeshStandardMaterial({ 
          color: 0x00ffff,
          emissive: 0x00aaff,
          emissiveIntensity: 0.5
        })
      );
      
      const angle = (i / 12) * Math.PI * 2;
      const radius = 0.6;
      
      element.position.x = Math.cos(angle) * radius;
      element.position.y = Math.sin(angle) * radius;
      
      aiElements.add(element);
    }
    
    const centerAI = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 32, 32),
      new THREE.MeshStandardMaterial({ 
        color: 0x0088ff,
        emissive: 0x0066ff,
        emissiveIntensity: 0.8
      })
    );
    
    aiElements.add(centerAI);
    appScreen.add(aiElements);
    
    kuddusProjectGroup.add(appBase);
    kuddusProjectGroup.add(appScreen);
    kuddusProjectGroup.position.set(2.5, 0, 0);
    
    scene6.add(bokaProjectGroup);
    scene6.add(kuddusProjectGroup);
    
    // SCENE 7: Fighting in comments
    const scene7 = new THREE.Group();
    
    // Create a GitHub-like interface with comments flying
    const githubPanel = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 4),
      new THREE.MeshBasicMaterial({ color: 0x0d1117 })
    );
    
    // Add flying comments
    const comments = new THREE.Group();
    
    const commentColors = [0xe34c26, 0x61dafb];
    const quotePool = [
      ...characters.bokaVhai.quotes,
      ...characters.kuddusPagla.quotes
    ];
    
    for (let i = 0; i < 20; i++) {
      const commentCanvas = document.createElement('canvas');
      commentCanvas.width = 512;
      commentCanvas.height = 96;
      const ctx = commentCanvas.getContext('2d');
      
      // Draw comment box
      const color = commentColors[i % 2];
      ctx.fillStyle = `#${color.toString(16)}22`;
      ctx.strokeStyle = `#${color.toString(16)}`;
      ctx.lineWidth = 2;
      ctx.roundRect(0, 0, 512, 96, 8);
      ctx.fill();
      ctx.stroke();
      
      // Add comment text
      ctx.font = '24px monospace';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      
      const quote = quotePool[i % quotePool.length];
      const author = i % 2 === 0 ? 'bokaVhai' : 'kuddusPagla';
      ctx.fillText(`${characters[author].name}: ${quote}`, 20, 48);
      
      const commentTexture = new THREE.CanvasTexture(commentCanvas);
      const commentMaterial = new THREE.MeshBasicMaterial({ 
        map: commentTexture,
        transparent: true,
        opacity: 0.9
      });
      
      const comment = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 0.6),
        commentMaterial
      );
      
      // Position randomly 
      comment.position.x = -6 + (i * 0.5);
      comment.position.y = -2 + Math.random() * 4;
      comment.position.z = Math.random() * 0.5;
      
      // Store velocity for animation
      comment.userData = {
        velocity: 0.03 + Math.random() * 0.02
      };
      
      comments.add(comment);
    }
    
    scene7.add(githubPanel);
    scene7.add(comments);
    
    // SCENE 8: Debugging marathon
    const scene8 = new THREE.Group();
    
    // Create a coding setup with monitors and energy drinks
    const deskGeometry = new THREE.BoxGeometry(6, 0.2, 2);
    const deskMaterial = new THREE.MeshStandardMaterial({ color: 0x5c3724 });
    const desk = new THREE.Mesh(deskGeometry, deskMaterial);
    desk.position.y = -1.5;
    
    // Create monitor group for boka
    const bokaSetup = new THREE.Group();
    bokaSetup.position.set(-1.5, -0.8, 0);
    
    const bokaMonitor = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.8, 0.1),
      new THREE.MeshStandardMaterial({ color: 0x333333 })
    );
    
    const bokaScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(1.1, 0.7),
      new THREE.MeshBasicMaterial({ color: 0xe34c26 })
    );
    bokaScreen.position.z = 0.06;
    
    // Create error messages
    const bokaErrorCanvas = document.createElement('canvas');
    bokaErrorCanvas.width = 256;
    bokaErrorCanvas.height = 128;
    const bokaCtx = bokaErrorCanvas.getContext('2d');
    bokaCtx.fillStyle = 'black';
    bokaCtx.fillRect(0, 0, 256, 128);
    bokaCtx.font = '12px monospace';
    bokaCtx.fillStyle = 'red';
    bokaCtx.fillText("ERROR: undefined is not a function", 10, 20);
    bokaCtx.fillText("  at Object.myFunc (app.js:42)", 10, 36);
    bokaCtx.fillText("  at HTMLButtonElement.onClick (index.js:13)", 10, 52);
    
    const bokaErrorTexture = new THREE.CanvasTexture(bokaErrorCanvas);
    const bokaErrorMaterial = new THREE.MeshBasicMaterial({ map: bokaErrorTexture });
    const bokaError = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 0.5),
      bokaErrorMaterial
    );
    bokaError.position.z = 0.07;
    
    bokaMonitor.add(bokaScreen);
    bokaMonitor.add(bokaError);
    
    // Add energy drinks for Boka
    const bokaEnergyDrink = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.3, 16),
      new THREE.MeshStandardMaterial({ color: 0xff0000 })
    );
    bokaEnergyDrink.position.set(0.3, -0.3, 0);
    
    bokaSetup.add(bokaMonitor);
    bokaSetup.add(bokaEnergyDrink);
    
    // Create monitor group for Kuddus
    const kuddusSetup = new THREE.Group();
    kuddusSetup.position.set(1.5, -0.8, 0);
    
    const kuddusMonitor = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.8, 0.1),
      new THREE.MeshStandardMaterial({ color: 0x333333 })
    );
    
    const kuddusScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(1.1, 0.7),
      new THREE.MeshBasicMaterial({ color: 0x61dafb })
    );
    kuddusScreen.position.z = 0.06;
    
    // Create error messages
    const kuddusErrorCanvas = document.createElement('canvas');
    kuddusErrorCanvas.width = 256;
    kuddusErrorCanvas.height = 128;
    const kuddusCtx = kuddusErrorCanvas.getContext('2d');
    kuddusCtx.fillStyle = 'black';
    kuddusCtx.fillRect(0, 0, 256, 128);
    kuddusCtx.font = '12px monospace';
    kuddusCtx.fillStyle = 'yellow';
    kuddusCtx.fillText("Warning: Can't perform a React state update", 10, 20);
    kuddusCtx.fillText("  on an unmounted component", 10, 36);
    kuddusCtx.fillText("  at Component (RickshAI.js:404)", 10, 52);
    
    const kuddusErrorTexture = new THREE.CanvasTexture(kuddusErrorCanvas);
    const kuddusErrorMaterial = new THREE.MeshBasicMaterial({ map: kuddusErrorTexture });
    const kuddusError = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 0.5),
      kuddusErrorMaterial
    );
    kuddusError.position.z = 0.07;
    
    kuddusMonitor.add(kuddusScreen);
    kuddusMonitor.add(kuddusError);
    
    // Add energy drinks for Kuddus
    const kuddusEnergyDrink = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.3, 16),
      new THREE.MeshStandardMaterial({ color: 0x0088ff })
    );
    kuddusEnergyDrink.position.set(-0.3, -0.3, 0);
    
    kuddusSetup.add(kuddusMonitor);
    kuddusSetup.add(kuddusEnergyDrink);
    
    // Add a clock showing 72 hours
    const clockCanvas = document.createElement('canvas');
    clockCanvas.width = 128;
    clockCanvas.height = 128;
    const clockCtx = clockCanvas.getContext('2d');
    
    // Draw clock face
    clockCtx.fillStyle = 'white';
    clockCtx.beginPath();
    clockCtx.arc(64, 64, 60, 0, Math.PI * 2);
    clockCtx.fill();
    
    clockCtx.strokeStyle = 'black';
    clockCtx.lineWidth = 3;
    clockCtx.beginPath();
    clockCtx.arc(64, 64, 60, 0, Math.PI * 2);
    clockCtx.stroke();
    
    // Draw 72h
    clockCtx.font = 'bold 36px Arial';
    clockCtx.fillStyle = 'red';
    clockCtx.textAlign = 'center';
    clockCtx.textBaseline = 'middle';
    clockCtx.fillText('72h', 64, 64);
    
    const clockTexture = new THREE.CanvasTexture(clockCanvas);
    const clockMaterial = new THREE.MeshBasicMaterial({ 
      map: clockTexture,
      transparent: true
    });
    const clock = new THREE.Mesh(
      new THREE.CircleGeometry(0.4, 32),
      clockMaterial
    );
    clock.position.set(0, 0.5, 0.2);
    
    scene8.add(desk);
    scene8.add(bokaSetup);
    scene8.add(kuddusSetup);
    scene8.add(clock);
    
    // SCENE 9: Brotherhood finale
    const scene9 = new THREE.Group();
    
    // Create a unified code structure that combines their styles
    const brotherhoodStructure = new THREE.Group();
    
    // Base - Boka's messy cube
    const baseStructure = new THREE.Mesh(
      new THREE.BoxGeometry(3, 1, 1),
      new THREE.MeshStandardMaterial({ 
        color: 0xe34c26,
        wireframe: true 
      })
    );
    
    // Top - Kuddus's clean torus
    const topStructure = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.3, 16, 50),
      new THREE.MeshStandardMaterial({ 
        color: 0x61dafb,
        metalness: 0.8,
        roughness: 0.2 
      })
    );
    topStructure.position.y = 1.5;
    topStructure.rotation.x = Math.PI / 2;
    
    // Connecting lines
    const lineMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffff,
      transparent: true,
      opacity: 0.7
    });
    
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const lineGeometry = new THREE.CylinderGeometry(0.02, 0.02, 1.5);
      const line = new THREE.Mesh(lineGeometry, lineMaterial);
      
      // Position at corners of cube, stretching to torus
      const radius = 0.5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      
      line.position.set(x, 0.75, z);
      line.rotation.x = Math.PI / 2;
      brotherhoodStructure.add(line);
    }
    
    brotherhoodStructure.add(baseStructure);
    brotherhoodStructure.add(topStructure);
    
    // Add particle effects
    const particles = new THREE.Group();
    for (let i = 0; i < 100; i++) {
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.03, 8, 8),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xe34c26 : 0x61dafb,
          transparent: true,
          opacity: 0.6
        })
      );
      
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      const r = 2 + Math.random() * 2;
      
      particle.position.x = r * Math.sin(phi) * Math.cos(theta);
      particle.position.y = r * Math.sin(phi) * Math.sin(theta);
      particle.position.z = r * Math.cos(phi);
      
      particle.userData = {
        theta,
        phi,
        radius: r,
        speed: 0.005 + Math.random() * 0.005
      };
      
      particles.add(particle);
    }
    
    scene9.add(brotherhoodStructure);
    scene9.add(particles);
    
    // Add all scenes to array
    storyScenes.push(scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9);
    
    // Initially, only add the first scene
    scene.add(storyScenes[currentScene]);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Scene-specific animations
      if (currentScene === 0) {
        // Rotate code particles
        codeParticles.children.forEach((particle, i) => {
          particle.rotation.x += 0.01 * (i % 3 + 1);
          particle.rotation.y += 0.01 * ((i + 1) % 3 + 1);
        });
      } else if (currentScene === 2) {
        // Rotate character planes
        bokaPlane.rotation.y = Math.sin(Date.now() * 0.001) * 0.1;
        kuddusPlane.rotation.y = Math.sin(Date.now() * 0.001 + Math.PI) * 0.1;
      } else if (currentScene === 3) {
        // Rotate coding styles
        bokaCode.rotation.y += 0.01;
        kuddusCode.rotation.x += 0.01;
      } else if (currentScene === 6) {
        // Animate projects
        aiElements.rotation.y += 0.02;
        aiElements.children.forEach(element => {
          element.rotation.y += 0.01;
        });
        
        // Make Boka's website wobble
        bokaProjectGroup.rotation.z = Math.sin(Date.now() * 0.002) * 0.1;
      } else if (currentScene === 7) {
        // Animate flying comments
        comments.children.forEach(comment => {
          comment.position.x += comment.userData.velocity;
          if (comment.position.x > 6) {
            comment.position.x = -6;
          }
        });
      } else if (currentScene === 8) {
        // Pulse monitors
        bokaScreen.material.color.setHSL(0, 1, (Math.sin(Date.now() * 0.003) + 1) * 0.3 + 0.2);
        kuddusScreen.material.color.setHSL(0.6, 1, (Math.sin(Date.now() * 0.003) + 1) * 0.3 + 0.2);
      } else if (currentScene === 9) {
        // Rotate brotherhood structure
        brotherhoodStructure.rotation.y += 0.005;
        topStructure.rotation.z += 0.01;
        
        // Animate particles in spiral
        particles.children.forEach(particle => {
          particle.userData.theta += particle.userData.speed;
          particle.position.x = particle.userData.radius * Math.sin(particle.userData.phi) * Math.cos(particle.userData.theta);
          particle.position.y = particle.userData.radius * Math.sin(particle.userData.phi) * Math.sin(particle.userData.theta);
          particle.position.z = particle.userData.radius * Math.cos(particle.userData.phi);
        });
      }
      
      renderer.render(scene, camera);
    };
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    
    // Function to transition to next scene
    const nextScene = () => {
      if (currentScene < storyScenes.length - 1) {
        gsap.to(storyScenes[currentScene].position, {
          z: -10,
          duration: 1,
          onComplete: () => {
            scene.remove(storyScenes[currentScene]);
            setCurrentScene(prev => {
              const next = prev + 1;
              storyScenes[next].position.z = 10;
              scene.add(storyScenes[next]);
              gsap.to(storyScenes[next].position, {
                z: 0,
                duration: 1
              });
              return next;
            });
          }
        });
      }
    };
    
    // Event handlers
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextScene();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    const handleClick = () => {
      nextScene();
    };
    window.addEventListener('click', handleClick);
    
    // Start animation
    animate();
    setLoading(false);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
      
      storyScenes.forEach(sceneGroup => {
        sceneGroup.traverse(object => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            object.material.dispose();
          }
        });
      });
      
      renderer.dispose();
    };
  }, [currentScene]);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white overflow-hidden relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="text-2xl">Loading the developer saga...</div>
        </div>
      )}
      
      <canvas 
        ref={canvasRef} 
        className="w-full h-full absolute top-0 left-0"
      />
      
      <div className="absolute bottom-10 left-0 right-0 text-center z-20 pointer-events-none">
        <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
          {storyTexts[currentScene]}
        </h2>
        <p className="text-xl text-gray-300 drop-shadow-md">
          Click or press right arrow to continue
        </p>
      </div>
      
      <div className="absolute bottom-4 right-4 text-sm opacity-50">
        Scene {currentScene + 1} of {storyTexts.length}
      </div>
    </main>
  );
}