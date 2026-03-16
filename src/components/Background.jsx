import Antigravity from "./Antigravity";

export default function Background() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1
      }}
    >
      <Antigravity
        count={500}
        magnetRadius={6}
        ringRadius={5}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.2}
        lerpSpeed={0.05}
        color="#5227FF"
        autoAnimate
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        particleShape="sphere"
        fieldStrength={10}
      />
    </div>
  );
}