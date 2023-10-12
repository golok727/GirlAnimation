import { Canvas } from "@react-three/fiber";

import { Girl } from "./Girl.jsx";
import { Center, OrbitControls, Preload } from "@react-three/drei";
import { Suspense } from "react";

const MainCanvas = () => {
	return (
		<Canvas camera={{ position: [0, 0, 2], castShadow: true, fov: 70 }}>
			<OrbitControls />
			<ambientLight intensity={1} />
			<directionalLight color={"red"} position={[3, 3, 0]} />

			<Suspense fallback={null}>
				{/* <Avatar /> */}
				<Center>
					<Girl />
				</Center>
				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default MainCanvas;
