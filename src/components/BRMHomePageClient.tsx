"use client";
import { useState, useRef, useMemo, Suspense } from "react";
import {useTranslations} from 'next-intl';
import {
  Globe,
  TrendingUp,
  Megaphone,
  Target,
  MapPin,
  Brain,
  Bot,
  Voicemail,
  DatabaseZap,
  Lightbulb,
  Settings2,
  ChevronDown,
  ChevronUp,
  type LucideIcon,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher.tsx";
import RabbitAnimation from './RabbitAnimation';

import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber'; // R3F imports for direct test
import * as THREE from 'three'; // Three.js import for direct test

// Noise function for vertex displacement
function noise3D(x: number, y: number, z: number): number {
  const p = new THREE.Vector3(x, y, z);
  const n = Math.sin(p.x * 1.5) * Math.cos(p.y * 1.5) * Math.sin(p.z * 1.5);
  return n;
}

// Particle system using rabbit-sdf texture
const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null!);
  const rabbitTexture = useLoader(THREE.TextureLoader, '/textures/rabbit-sdf.webp');
  
  const particleCount = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);
  
  const sizes = useMemo(() => {
    const s = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      s[i] = Math.random() * 0.5 + 0.1;
    }
    return s;
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        transparent={true}
        alphaTest={0.001}
        opacity={0.4}
        map={rabbitTexture}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Complex animated blob with noise-based vertex displacement
const ComplexBlob = ({ position = [0, 0, 0], scale = 1, speed = 1 }: {
  position?: [number, number, number];
  scale?: number;
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const matcapTexture = useLoader(THREE.TextureLoader, '/textures/matcap-9.jpg');
  
  // Store original positions
  const originalPositions = useRef<Float32Array | null>(null);
  
  useFrame((state) => {
    if (meshRef.current && meshRef.current.geometry) {
      const time = state.clock.getElapsedTime() * speed;
      
      // Rotation
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.3;
      meshRef.current.rotation.y = time * 0.2;
      
      // Get geometry positions
      const positions = meshRef.current.geometry.attributes.position;
      
      // Store original positions on first frame
      if (!originalPositions.current) {
        originalPositions.current = new Float32Array(positions.array);
      }
      
      // Apply complex noise-based displacement
      for (let i = 0; i < positions.count; i++) {
        const x = originalPositions.current[i * 3];
        const y = originalPositions.current[i * 3 + 1];
        const z = originalPositions.current[i * 3 + 2];
        
        // Multiple octaves of noise for more complex displacement
        const noise1 = noise3D(x * 2 + time, y * 2, z * 2) * 0.1;
        const noise2 = noise3D(x * 4, y * 4 + time * 0.5, z * 4) * 0.05;
        const noise3 = noise3D(x * 8 + time * 0.3, y * 8, z * 8) * 0.025;
        
        const totalNoise = noise1 + noise2 + noise3;
        
        // Breathing effect
        const breathing = Math.sin(time * 0.5) * 0.05;
        
        // Apply displacement along normals
        const length = Math.sqrt(x * x + y * y + z * z);
        const factor = 1 + totalNoise + breathing;
        
        positions.setXYZ(
          i,
          x * factor,
          y * factor,
          z * factor
        );
      }
      
      positions.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 8]} />
      <meshMatcapMaterial matcap={matcapTexture} />
    </mesh>
  );
};

// Main animated scene with all elements
const AnimatedBlob = () => {
  const matcapTexture = useLoader(THREE.TextureLoader, '/textures/matcap-9.jpg');
  
  return (
    <>
      {/* Removed post-processing effects for now */}
      
      {/* Main central blob with complex displacement */}
      <ComplexBlob position={[0, 0, 0]} scale={2} speed={1} />
      
      {/* Multiple floating elements */}
      <ComplexBlob position={[-3, 2, -2]} scale={0.8} speed={1.2} />
      <ComplexBlob position={[3, -2, -1]} scale={1} speed={0.8} />
      <ComplexBlob position={[2, 3, -3]} scale={0.6} speed={1.5} />
      <ComplexBlob position={[-4, -1, -2]} scale={0.7} speed={0.9} />
      
      {/* Additional geometric shapes */}
      <mesh position={[5, 0, -4]} scale={[1.5, 1.5, 1.5]}>
        <octahedronGeometry args={[1, 2]} />
        <meshMatcapMaterial matcap={matcapTexture} opacity={0.8} transparent />
      </mesh>
      
      <mesh position={[-5, 1, -5]} scale={[2, 2, 2]}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshMatcapMaterial matcap={matcapTexture} opacity={0.6} transparent />
      </mesh>
      
      {/* Large background sphere */}
      <mesh position={[0, 0, -8]} scale={[6, 6, 6]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshMatcapMaterial matcap={matcapTexture} opacity={0.2} transparent />
      </mesh>
      
      {/* Particle field */}
      <ParticleField />
    </>
  );
};

interface Service {
  title: string;
  description?: string;
  subServices?: string[];
  icon: LucideIcon;
}

interface Client {
  name: string;
  logoUrl: string;
  websiteUrl: string;
  logoDarkUrl?: string;
}

export default function BRMHomePageClient() {
  console.log('[TEST] BRMHomePageClient rendering');

  const t = useTranslations('BRMHomePage');
  const tServices = useTranslations('Services');
  const tClients = useTranslations('Clients');
  const tHeader = useTranslations('Header');
  const tFooter = useTranslations('Footer');
  const tShared = useTranslations('Shared');

  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const recipientEmail = 'bogdanantonov92@gmail.com';

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `New Consultation Request from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const services: Service[] = [
    {
      title: tServices("websiteCreation_title"),
      description: tServices("websiteCreation_desc"),
      icon: Globe,
    },
    {
      title: tServices("seoOptimization_title"),
      description: tServices("seoOptimization_desc"),
      icon: TrendingUp,
    },
    {
      title: tServices("digitalMarketing_title"),
      description: tServices("digitalMarketing_desc"),
      icon: Megaphone,
    },
    {
      title: tServices("googleAds_title"),
      description: tServices("googleAds_desc"),
      icon: Target,
    },
    {
      title: tServices("googleBusiness_title"),
      description: tServices("googleBusiness_desc"),
      icon: MapPin,
    },
    {
      title: tServices("aiAutomation_title"),
      icon: Brain,
      subServices: [
        tServices("aiAutomation_subService1"),
        tServices("aiAutomation_subService2")
      ]
    },
    {
      title: tServices("leadAutomation_title"),
      description: tServices("leadAutomation_desc"),
      icon: DatabaseZap,
    },
    {
      title: tServices("continuousImprovement_title"),
      description: tServices("continuousImprovement_desc"),
      icon: Lightbulb,
    },
    {
      title: tServices("customCrm_title"),
      description: tServices("customCrm_desc"),
      icon: Settings2,
    },
  ];

  const clients: Client[] = [
    {
      name: "Natan Plumbing",
      logoUrl: "/natan.png",
      websiteUrl: "https://natanplumbing-rep9.vercel.app",
    },
    {
      name: "Metodrive",
      logoUrl: "/metodrive.png",
      websiteUrl: "https://metodrive.com",
    },
  ];
  const [expandedServices, setExpandedServices] = useState<{ [key: number]: boolean }>({});

  const toggleServiceExpansion = (index: number) => {
    setExpandedServices(prev => ({ ...prev, [index]: !prev[index] }));
  };
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white font-sans">
      {/* Header/Nav - Inspired by Vercel */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              {tHeader('logoText')}
            </a>
          </div>
          {/* Middle navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a href="#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">{tHeader('servicesLink')}</a>
          </nav>
          {/* LanguageSwitcher and Contact button on the right */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700/80 rounded-md transition-colors"
            >
              {tHeader('contactLink')}
            </a>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 text-center bg-white dark:bg-gray-950">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'linear-gradient(to bottom, #1e1b4b, #312e81)', height: '100%' }}>
          <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
            <fog attach="fog" color="#1e1b4b" near={1} far={10} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#e0e7ff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c7d2fe" />
            <Suspense fallback={null}>
              <AnimatedBlob />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="absolute inset-0 z-0 pointer-events-none">
          <RabbitAnimation />
        </div>

        <div className="absolute inset-0 -z-10 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-radial from-blue-600/10 via-transparent to-transparent blur-3xl opacity-30"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 text-gray-900 dark:text-white">
           {t('heroTitle')}
          </h1>
          <p className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12">
          {t('heroSubtitle')}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base sm:text-lg font-medium bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 rounded-lg shadow-sm transition-colors"
            >
              {tShared('contactUs')}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base sm:text-lg font-medium text-gray-700 bg-transparent hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/60 rounded-lg shadow-sm transition-colors border border-gray-300 dark:border-gray-700"
            >
              {tShared('ourServices')}
            </a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">
             {t('servicesTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200/80 dark:border-gray-700/60 
                           transition-all duration-300 ease-in-out
                           hover:shadow-2xl hover:border-transparent dark:hover:bg-gray-700/60 hover:scale-[1.03]"
              >
                <div className="flex items-start space-x-4 mb-3">
                  <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">{service.title}</h3>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedServices[index] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-2">
                    {service.description && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {service.description}
                      </p>
                    )}
                    {service.subServices && (
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm pl-1">
                        {service.subServices.map((sub, i) => (
                          <li key={i}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                {(service.description || service.subServices) && (
                  <button
                    onClick={() => toggleServiceExpansion(index)}
                    className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center group-hover:text-blue-500 dark:group-hover:text-blue-300"
                  >
                    {expandedServices[index] ? tServices('hideButton') : tServices('detailsButton')}
                    {expandedServices[index] ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 text-center bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-2xl sm:text-3xl font-semibold max-w-3xl mx-auto">
          {t('valueProposition')}
        </p>
        </div>
      </section>
      {/* Call to Action / Next Steps */}
      <section className="py-16 md:py-24 text-center bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {t('ctaTitle')}
        </h2>
        <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-10">
          {t('ctaSubtitle')}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3 text-base sm:text-lg font-medium bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 rounded-lg shadow-sm transition-colors"
        >
          {tShared('discussProject')}
        </a>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            {t('contactTitle')}
          </h2>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side: WhatsApp & LinkedIn */}
            <div className="space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2">Quick Contact</h3>
                <p className="text-blue-400 mb-4">Reach out directly via:</p>
                <p className="mb-3">
                  <a 
                    href="https://wa.me/34637523323" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-green-500 text-white hover:bg-green-600 rounded-lg shadow-sm transition-colors w-full md:w-auto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M16.4 10.66a7.66 7.66 0 0 0-8.05-8.05m0 0A10 10 0 0 1 19 12.05"></path></svg>
                    {tShared('whatsApp')}
                  </a>
                </p>
                <p>
                  <a 
                    href="https://www.linkedin.com/in/bogdan-antonov-b48901206" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-sm transition-colors w-full md:w-auto"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    {tShared('linkedIn')}
                  </a>
                </p>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-center md:text-left">{tShared('consultationFormTitle') || 'Request a Free Consultation'}</h3>
              <p className="text-gray-400 mb-6 text-center md:text-left">{tShared('consultationFormSubtitle') || 'Fill out the form and we will contact you shortly.'}</p>
              <form onSubmit={handleFormSubmit} className="space-y-5 bg-gray-800/50 p-6 sm:p-8 rounded-xl shadow-xl">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">{tShared('formNameLabel') || 'Your Name'}</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-700/60 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder={tShared('formNamePlaceholder') || 'e.g., John Doe'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{tShared('formEmailLabel') || 'Your Email'}</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-700/60 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder={tShared('formEmailPlaceholder') || 'you@example.com'}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">{tShared('formMessageLabel') || 'Your Inquiry'}</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    required 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-700/60 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder={tShared('formMessagePlaceholder') || 'Tell us about your project or question...'}
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
                  >
                    {tShared('formSubmitButton') || 'Send Request'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Clients Section */}
      {clients.length > 0 && (
        <section id="clients" className="py-12 md:py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-12"> {tClients('trustedBy')} </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
              {clients.map((client, index) => (
                <a
                  key={index}
                  href={client.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${client.name}`}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <img src={client.logoDarkUrl && document.documentElement.classList.contains('dark') ? client.logoDarkUrl : client.logoUrl} alt={client.name} className="h-10 md:h-12 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {tFooter('copyright', {year: new Date().getFullYear()})}
        </p>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
          {tFooter('hashtags')}
        </p>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <a href="en/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
        </div>
      </footer>
    </div>
  );
} 