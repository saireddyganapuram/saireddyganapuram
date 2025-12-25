import React from 'react';
import { Float } from '@react-three/drei';

const OrganDonationModel = () => {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh>
                <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                <meshStandardMaterial color="#64FFDA" metalness={0.5} roughness={0.2} />
            </mesh>
        </Float>
    );
};

export default OrganDonationModel;
