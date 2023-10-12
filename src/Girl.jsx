import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Girl(props) {
	const { nodes, materials } = useGLTF("/Girl.glb");
	console.log(nodes);
	return (
		<group {...props} dispose={null}>
			<primitive object={nodes.Hips} />
			<skinnedMesh
				geometry={nodes.EyeLeft.geometry}
				material={materials["Wolf3D_Eye.003"]}
				skeleton={nodes.EyeLeft.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.EyeRight.geometry}
				material={materials["Wolf3D_Eye.003"]}
				skeleton={nodes.EyeRight.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Body.geometry}
				material={materials["Wolf3D_Body.003"]}
				skeleton={nodes.Wolf3D_Body.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Hair.geometry}
				material={materials["Wolf3D_Hair.003"]}
				skeleton={nodes.Wolf3D_Hair.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Head.geometry}
				material={materials["Wolf3D_Skin.003"]}
				skeleton={nodes.Wolf3D_Head.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
				material={materials["Wolf3D_Outfit_Bottom.003"]}
				skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
				material={materials["Wolf3D_Outfit_Footwear.003"]}
				skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Top.geometry}
				material={materials["Wolf3D_Outfit_Top.003"]}
				skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Teeth.geometry}
				material={materials["Wolf3D_Teeth.003"]}
				skeleton={nodes.Wolf3D_Teeth.skeleton}
			/>
		</group>
	);
}

useGLTF.preload("/Girl.glb");
