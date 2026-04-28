'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Points, PointMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

extend({ ThreeLine: THREE.Line })

function CloudParticles() {
    const ref = useRef<THREE.Points>(null!)

    // Generate random particle positions
    const particlesCount = 2000
    const positions = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3
            // Create a cloud-like distribution
            const radius = Math.random() * 5
            const theta = Math.random() * Math.PI * 2
            const phi = Math.random() * Math.PI

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i3 + 2] = radius * Math.cos(phi)
        }

        return positions
    }, [])

    // Animate particles
    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (ref.current) {
            ref.current.rotation.x = time * 0.05
            ref.current.rotation.y = time * 0.075
        }
    })

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#00D9FF"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    )
}

function NetworkNodes() {
    const groupRef = useRef<THREE.Group>(null!)

    const nodes = useMemo(() => {
        return Array.from({ length: 8 }, (_, i) => {
            const angle = (i / 8) * Math.PI * 2
            const radius = 3
            return {
                position: [
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius,
                    (Math.random() - 0.5) * 2,
                ] as [number, number, number],
            }
        })
    }, [])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        if (groupRef.current) {
            groupRef.current.rotation.z = time * 0.1
        }
    })

    return (
        <group ref={groupRef}>
            {nodes.map((node, i) => (
                <mesh key={i} position={node.position}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial
                        color="#00D9FF"
                        emissive="#00D9FF"
                        emissiveIntensity={0.5}
                    />
                </mesh>
            ))}

            {/* Connection lines */}
            {nodes.map((node, i) => {
                const nextNode = nodes[(i + 1) % nodes.length]
                const points = [
                    new THREE.Vector3(...node.position),
                    new THREE.Vector3(...nextNode.position),
                ]
                const geometry = new THREE.BufferGeometry().setFromPoints(points)

                const material = new THREE.LineBasicMaterial({
                    color: '#00D9FF',
                    opacity: 0.3,
                    transparent: true,
                })
                const line = new THREE.Line(geometry, material)

                return <primitive key={`line-${i}`} object={line} />
            })}
        </group>
    )
}

export default function CloudNetwork() {
    return (
        <div className="w-full h-full absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 75 }}
                className="bg-transparent"
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <CloudParticles />
                <NetworkNodes />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    )
}
