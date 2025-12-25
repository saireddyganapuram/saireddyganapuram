import React from 'react';
import { Float } from '@react-three/drei';

const SummarizerModel = () => {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#64FFDA" metalness={0.5} roughness={0.2} />
            </mesh>
        </Float>
    );
};

export default SummarizerModel;
