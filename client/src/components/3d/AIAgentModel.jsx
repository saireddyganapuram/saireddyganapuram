import React from 'react';
import { Float } from '@react-three/drei';

const AIAgentModel = () => {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh>
                <octahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial
                    color="#64FFDA"
                    metalness={0.7}
                    roughness={0.2}
                    wireframe
                />
            </mesh>
        </Float>
    );
};

export default AIAgentModel;
