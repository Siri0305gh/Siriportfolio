import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CodingProfiles from "./components/CodingProfiles";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
// import Antigravity from "./components/Antigravity";

function App() {
  return (
    <>
      {/* Background Layer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1
        }}
      >
        {/* <Antigravity
          count={800}
          magnetRadius={8}
          ringRadius={4}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={0.6}
          lerpSpeed={0.08}
          color="#7C3AED"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="sphere"
          fieldStrength={10}
        /> */}
      </div>



      

      {/* Website Content */}
      <Layout>
        <Hero />
        <About />
        <Skills />
        <CodingProfiles/>
        <Projects />
        <Experience/>
        <Contact />
      </Layout>
    </>
  );
}

export default App;