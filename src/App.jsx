import logo from './assets/images/logo.svg';
import linkedinIcon from './assets/images/linkedin.svg'; // Asegúrate de que la ruta al archivo de imagen es correcta
import githubIcon from './assets/images/github.svg'; // Asegúrate de que la ruta al archivo de imagen es correcta
import discordIcon from './assets/images/discord.svg'; // Asegúrate de que la ruta al archivo de imagen es correcta
import Header from './components/Header/Header';
import About from './components/about/About';
import ColorModes from './components/navbar/colors/Color-modes';
import Footer from './components/footer/Footer';
import Projects from './components/Projects/Projects';
import Navbar from './components/navbar/navbar'; // Fix the casing of the file name
import Work from './components/work/work'; // Fix the casing of the file name
import Chatbot from './components/chatbot/chatbot';

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
        <Chatbot />
        <Work />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
