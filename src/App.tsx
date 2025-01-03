// App.tsx
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
// import ParallaxContainer from "./Components/ParallaxContainer/ParallaxContainer";
import Events from "./Components/Events/Events";
import FAQ from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import "./App.css";

// function App() {
//   return (
//     <div className="app">
//       <Navbar />
//       <ParallaxContainer>
//         <Hero />
//         <About />
//       </ParallaxContainer>
//     </div>
//   );
// }

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Events></Events>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}

export default App;
