import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Html } from '@react-three/drei';
import RobotModel from './RobotModel';

// Custom loader without useProgress to avoid state conflicts
function Loader() {
    return (
        <Html center>
            <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
                <div className="text-cyan-400 font-mono text-xs tracking-widest animate-pulse">
                    LOADING SYSTEM
                </div>
            </div>
        </Html>
    );
}

export default function RobotScene() {
    return (
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }}>
            <Suspense fallback={<Loader />}>
                <Stage environment="city" intensity={0.6}>
                    <RobotModel />
                </Stage>
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} enablePan={false} />
        </Canvas>
    );
}
