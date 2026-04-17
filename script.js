// Smooth scroll to Play section
document.getElementById("scroll-play").addEventListener("click", () => {
  const playSection = document.getElementById("play");
  if (playSection) {
    playSection.scrollIntoView({ behavior: "smooth" });
  }
});

// Sign-up modal logic
const signupModal = document.getElementById("signup-modal");
const openSignupBtn = document.getElementById("open-signup");
const closeSignupBtn = document.getElementById("close-signup");
const signupForm = document.getElementById("signup-form");
const signupMessage = document.getElementById("signup-message");

openSignupBtn.addEventListener("click", () => {
  signupModal.classList.remove("hidden");
});

closeSignupBtn.addEventListener("click", () => {
  signupModal.classList.add("hidden");
  signupMessage.textContent = "";
  signupForm.reset();
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value.trim();
  const username = document.getElementById("signup-username").value.trim();

  if (!email || !username) {
    signupMessage.textContent = "Please fill out all fields.";
    return;
  }

  signupMessage.textContent =
    "Account created (placeholder). In the live game, this will connect to your OmegaVerse profile.";
});

// Character creation preview
const saveCharacterBtn = document.getElementById("save-character");
const characterPreview = document.getElementById("character-preview");

saveCharacterBtn.addEventListener("click", () => {
  const name = document.getElementById("char-name").value.trim();
  const species = document.getElementById("char-species").value;
  const path = document.getElementById("char-path").value;

  if (!name) {
    characterPreview.classList.remove("hidden");
    characterPreview.textContent = "Please enter a display name.";
    return;
  }

  characterPreview.classList.remove("hidden");
  characterPreview.innerHTML = `
    <h3>Character Saved</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Species:</strong> ${species}</p>
    <p><strong>Path:</strong> ${path}</p>
    <p>This identity will carry across the OmegaVerse in the live game.</p>
  `;
});

// Creator account logic
const CREATOR_USERNAME = "ghost1746";
const CREATOR_KEY = "OmegaCreatorKey";

const creatorLoginForm = document.getElementById("creator-login-form");
const creatorLoginBtn = document.getElementById("creator-login-btn");
const creatorLoginMessage = document.getElementById("creator-login-message");
const creatorPanel = document.getElementById("creator-panel");

creatorLoginBtn.addEventListener("click", () => {
  const enteredUser = document
    .getElementById("creator-username")
    .value.trim();
  const enteredKey = document.getElementById("creator-key").value.trim();

  if (!enteredUser || !enteredKey) {
    creatorLoginMessage.textContent = "Enter both username and creator key.";
    return;
  }

  if (
    enteredUser === CREATOR_USERNAME &&
    enteredKey === CREATOR_KEY
  ) {
    // Simulated creator-mode unlock
    creatorLoginMessage.textContent =
      "Creator mode activated. Infinite Black Coins and max level granted.";
    creatorPanel.classList.remove("hidden");

    // Example of in-page "stats" that could later sync with Unity
    window.CreatorProfile = {
      username: CREATOR_USERNAME,
      isCreator: true,
      blackCoins: Infinity,
      level: 999999999999999999n, // BigInt for fun
      allUnlocked: true,
    };
  } else {
    creatorLoginMessage.textContent =
      "Invalid creator credentials. This panel is reserved for the official creator account.";
    creatorPanel.classList.add("hidden");
  }
});
