import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Stars } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { earthTextures } from '../../assets/textures';
import { HERO_ANIMATION } from '../../constants/constants';

const HeroAnimation = () => {
    const [textures, setTextures] = useState({
        colorMap: null,
        normalMap: null,
        specularMap: null,
        cloudMap: null,
    });
    const [error, setError] = useState(false);
    const groupRef = useRef();
    const time = useRef(0);
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const loadTextures = async () => {
            try {
                const textureLoader = new TextureLoader();

                const color = await textureLoader
                    .loadAsync(earthTextures.color)
                    .catch((err) => {
                        console.error('Error loading color map:', err);
                        return null;
                    });

                const normal = await textureLoader
                    .loadAsync(earthTextures.normal)
                    .catch((err) => {
                        console.error('Error loading normal map:', err);
                        return null;
                    });

                const specular = await textureLoader
                    .loadAsync(earthTextures.specular)
                    .catch((err) => {
                        console.error('Error loading specular map:', err);
                        return null;
                    });

                const cloud = await textureLoader
                    .loadAsync(earthTextures.clouds)
                    .catch((err) => {
                        console.error('Error loading cloud map:', err);
                        return null;
                    });

                if (color) {
                    setTextures({
                        colorMap: color,
                        normalMap: normal,
                        specularMap: specular,
                        cloudMap: cloud,
                    });
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error('Failed to load Earth textures:', err);
                setError(true);
            }
        };
        loadTextures();
    }, []);

    useEffect(() => {
        const setDimensions = () => {
            if (containerRef.current) {
                const viewportHeight = window.innerHeight;
                const heightInPixels = Math.min(600, Math.max(500, viewportHeight * 0.6));

                containerRef.current.style.height = `${heightInPixels}px`;
                containerRef.current.style.maxHeight = `${heightInPixels}px`;
                containerRef.current.style.transform = 'scale(1)';
                containerRef.current.style.transformOrigin = 'center center';
            }
        };

        setDimensions();
        window.addEventListener('resize', setDimensions);

        return () => {
            window.removeEventListener('resize', setDimensions);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (groupRef.current) {
                const { clientX, clientY } = event;
                const x = (clientX / window.innerWidth) * 2 - 1;
                const y = -(clientY / window.innerHeight) * 2 + 1;

                groupRef.current.rotation.x = y * 0.2;
                groupRef.current.rotation.y = x * 0.2;
            }
        };

        const animate = () => {
            time.current += 0.01;
            if (groupRef.current) {
                groupRef.current.rotation.y = time.current * 0.2;
            }
            requestAnimationFrame(animate);
        };

        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (!homeSection || !containerRef.current) return;

            const homeSectionRect = homeSection.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const maxHeight = Math.min(600, Math.max(500, viewportHeight * 0.6));

            if (homeSectionRect.bottom < 0) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
                containerRef.current.style.height = `${maxHeight}px`;
                containerRef.current.style.maxHeight = `${maxHeight}px`;
                containerRef.current.style.transform = 'scale(1) translate(60px, 80px)';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        animate();
        handleScroll();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '600px',
                maxHeight: '600px',
                minHeight: '500px',
                position: 'relative',
                margin: '0 auto',
                overflow: 'hidden',
                visibility: isVisible ? 'visible' : 'hidden',
                transition: 'height 0.3s ease-out, max-height 0.3s ease-out, transform 0.3s ease-out',
                transform: 'scale(1) translate(60px, 80px)',
                transformOrigin: 'center center',
                willChange: 'transform, height',
            }}
            aria-label="Interactive 3D Earth animation"
        >
            <Canvas
                camera={{ position: [0, 0, 7], fov: 60 }}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                <ambientLight intensity={1.2} />
                <pointLight position={[10, 10, 10]} intensity={2} />
                <spotLight
                    position={[-10, -10, -10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={2}
                />

                <Stars
                    radius={300}
                    depth={150}
                    count={12000}
                    factor={8}
                    saturation={0.5}
                    fade
                    speed={1}
                    color="#FFFFFF"
                    size={2}
                />

                <group ref={groupRef} position={[0, 0, 0]}>
                    {/* Earth */}
                    <mesh>
                        <sphereGeometry args={[HERO_ANIMATION.EARTH_RADIUS, 64, 64]} />
                        {error || !textures.colorMap ? (
                            <meshPhongMaterial color="#64FFDA" shininess={20} />
                        ) : (
                            <meshStandardMaterial
                                map={textures.colorMap}
                                normalMap={textures.normalMap}
                                normalScale={[0.5, 0.5]}
                                roughnessMap={textures.specularMap}
                                roughness={0.5}
                                metalness={0.2}
                                envMapIntensity={1.5}
                            />
                        )}
                    </mesh>

                    {/* Clouds */}
                    {!error && textures.cloudMap && (
                        <mesh>
                            <sphereGeometry args={[HERO_ANIMATION.CLOUD_RADIUS, 64, 64]} />
                            <meshStandardMaterial
                                map={textures.cloudMap}
                                transparent
                                opacity={0.5}
                                depthWrite={false}
                                blending={THREE.AdditiveBlending}
                            />
                        </mesh>
                    )}

                    {/* Atmosphere Glow */}
                    <mesh>
                        <sphereGeometry args={[HERO_ANIMATION.ATMOSPHERE_RADIUS, 64, 64]} />
                        <meshStandardMaterial
                            color="#FFFFFF"
                            transparent
                            opacity={0.15}
                            side={THREE.BackSide}
                            blending={THREE.AdditiveBlending}
                        />
                    </mesh>

                    {/* Orbiting Satellites */}
                    {[...Array(HERO_ANIMATION.SATELLITE_COUNT)].map((_, i) => (
                        <mesh
                            key={i}
                            position={[
                                Math.sin((i * Math.PI) / 1.5 + time.current) * 3.5,
                                Math.cos((i * Math.PI) / 1.5 + time.current) * 3.5,
                                Math.sin((i * Math.PI) / 1.5 + time.current) *
                                Math.cos((i * Math.PI) / 1.5 + time.current) *
                                3.5,
                            ]}
                            rotation={[time.current * 2, time.current * 2, 0]}
                        >
                            <octahedronGeometry args={[0.12, 0]} />
                            <meshStandardMaterial
                                color="#FFFFFF"
                                metalness={0.8}
                                roughness={0.2}
                                transparent
                                opacity={0.9}
                                emissive="#FFFFFF"
                                emissiveIntensity={0.5}
                            />
                        </mesh>
                    ))}

                    {/* Orbital Rings */}
                    {[...Array(HERO_ANIMATION.ORBITAL_RINGS)].map((_, i) => (
                        <mesh key={i} rotation={[(i * Math.PI) / 2, 0, time.current]}>
                            <torusGeometry args={[3.2, 0.02, 32, 100]} />
                            <meshStandardMaterial
                                color="#FFFFFF"
                                metalness={0.6}
                                roughness={0.3}
                                transparent
                                opacity={0.4}
                                emissive="#FFFFFF"
                                emissiveIntensity={0.3}
                            />
                        </mesh>
                    ))}
                </group>

                {/* Space Debris */}
                <Float speed={HERO_ANIMATION.FLOAT_SPEED} rotationIntensity={HERO_ANIMATION.ROTATION_INTENSITY} floatIntensity={HERO_ANIMATION.ROTATION_INTENSITY}>
                    {[...Array(HERO_ANIMATION.DEBRIS_COUNT)].map((_, i) => (
                        <mesh
                            key={i}
                            position={[
                                Math.sin(i * 0.5 + time.current) * 5,
                                Math.cos(i * 0.5 + time.current) * 5,
                                Math.sin(i * 0.3 + time.current) *
                                Math.cos(i * 0.5 + time.current) *
                                5,
                            ]}
                        >
                            <tetrahedronGeometry args={[0.06, 0]} />
                            <meshStandardMaterial
                                color="#FFFFFF"
                                metalness={0.8}
                                roughness={0.2}
                                transparent
                                opacity={0.6}
                                emissive="#FFFFFF"
                                emissiveIntensity={0.4}
                            />
                        </mesh>
                    ))}
                </Float>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={HERO_ANIMATION.AUTO_ROTATE_SPEED}
                />
                <Environment preset="night" />
            </Canvas>
        </div>
    );
};

export default HeroAnimation;
