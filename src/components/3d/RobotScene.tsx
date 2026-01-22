import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Html, useProgress } from '@react-three/drei';
import RobotModel from './RobotModel';

function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="text-white font-mono text-sm whitespace-nowrap bg-slate-900/80 px-4 py-2 rounded-full backdrop-blur-md border border-slate-700">
                {progress.toFixed(0)}% loaded
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
