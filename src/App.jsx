import logo from './assets/images/logo.svg';
import linkedinIcon from './assets/images/linkedin.svg';
import githubIcon from './assets/images/github.svg';
import discordIcon from './assets/images/discord.svg'; 
import Header from './components/header/Header';
import About from './components/about/About';
import ColorModes from './components/navbar/colors/Color-modes';
import Footer from './components/footer/Footer';
import Projects from './components/Projects/Projects';
import Navbar from './components/navbar/Navbar';
import Work from './components/work/work'; 
import Chatbot from './components/chatbot/Chatbot'; 


function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <About />
        <Projects />
        <Work />
        <Chatbot />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
