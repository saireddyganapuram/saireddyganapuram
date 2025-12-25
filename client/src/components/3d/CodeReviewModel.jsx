import React from 'react';
import { Float } from '@react-three/drei';

const CodeReviewModel = () => {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshStandardMaterial color="#64FFDA" metalness={0.5} roughness={0.2} />
            </mesh>
        </Float>
    );
};

export default CodeReviewModel;
