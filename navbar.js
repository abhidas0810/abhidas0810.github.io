let navbar = () => {
  return `
    <div id="logo">
        <a href="index.html">
          <img id="logoImg" src="./docs/logo.jpg" alt="Abhishek Das"
        /></a>
      </div>
      <div id="navOptions">
        <a href="./docs/Abhishek-Das-Resume.pdf" download target="_blank" ><button>Resume</button></a>
        <a href="#introSection" data-scroll><button>Home</button></a>
        <a href="#aboutSection" data-scroll><button>About</button></a>
        <a href="#tech-stackSection" data-scroll><button>Tech-Stack</button></a>
        <a href="#skillsSection" data-scroll><button>Skills</button></a>
        <a href="#projectsSection" data-scroll><button>Projects</button></a>
        <a href="#statisticsSection" data-scroll><button>Statistics</button></a>
        <a href="#contactSection" data-scroll><button>Contact</button></a>
      </div>
    `;
};

export default navbar;
