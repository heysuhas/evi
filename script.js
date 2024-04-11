
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  portfolio.style.display = "flex";
  skillsBtn.classList.remove("active-btn");
  portfolioBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  portfolio.style.display = "none";
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const behanceLogo = document.querySelector('img[alt="behance logo"]');
  const artstationLogo = document.querySelector('img[alt="artstation logo"]');
  const discordLogo = document.querySelector('img[alt="discord logo"]');

  const lightLogos = {
    behance: "assets/behance.png",
    artstation: "assets/artstation.png",
    discord: "assets/discord.png",
    theme: "assets/theme_light.png",
  };

  const darkLogos = {
    behance: "assets/behance-light.png",
    artstation: "assets/artstation-light.png",
    discord: "assets/discord-light.png",
    theme: "assets/theme_dark.png",
  };
  

  function setTheme(isDark) {
    behanceLogo.src = isDark ? darkLogos.behance : lightLogos.behance;
    artstationLogo.src = isDark ? darkLogos.artstation : lightLogos.artstation;
    discordLogo.src = isDark ? darkLogos.discord : lightLogos.discord;
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
  }

  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);

    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);

    setTheme(isDark);
  };

  loadTheme();
});
