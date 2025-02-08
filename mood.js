// Array of random absurd reasons to ruin the mood
const reasons = [
    "I saw you smiling in your dream. Who were you dreaming about?",
    "Ugh, your shirt is so... neutral?",
    "You blinked at me weird just now.",
    "Why did it take you so long to like my post?",
    "Your eyebrows look suspiciously perfect.",
    "I feel like you're plotting something. Are you?",
    "You breathed out instead of in this time... sus.",
    "Why are you tapping your foot like you’re auditioning for a percussion solo?",
    "What’s with the way you’re chewing?",
    "Matching socks again, huh? Trying to impress someone with your neatness?",
    "Are you blinking at a weird pace on purpose, or is that just your thing now?",
    "Did you intentionally brush your hair like that to test my patience?",
    "You’re trying too hard...(don't provide more details when he asks)",
    "Why do you sigh so subtly? It’s suspicious—sigh louder or not at all.",
    "Ugh... your calm is almost infuriating",
    "Do you ever consider breaking from your routine, or is predictability your thing?",
    "What’s with your overall vibe that just feels off?",
    "Why do your compliments always sound so rehearsed?",
    "What's up with your choice of unimaginative outfits?",
    "Does your smile really need to be that intense?",
    "Why do you breathe so loudly?",
    "What is with your dramatic sneezing?",
    "Ugh… your hair is a total mess today.",
    "The placement of your coffee mug is off.",
    "Your tone feels flat—like you’re not even trying.",
    "Ugh… you keep repeating the same topics over and over.",
    "Is there any reason you forget things so often?",
    "Your facial expressions don’t match the conversation.",
    "Your constant phone usage disrupts the atmosphere.",
    "Ugh… you leave such long, awkward pauses in conversation.",
    "I’m baffled by your choice of unimaginative outfits.",
    "Is there any reason your voice remains so monotonous?"
  ];
  
  // Grab button and reason text elements
  const generateBtn = document.getElementById('generate-reason-btn');
  const reasonText = document.getElementById('reason-text');
  
  // When user clicks the button, generate a random reason and trigger animations
  generateBtn.addEventListener('click', () => {
    // Generate reason
    const randomIndex = Math.floor(Math.random() * reasons.length);
    reasonText.textContent = reasons[randomIndex];
  
    // Animate reason text (fade-in)
    reasonText.classList.remove('fade-in'); // reset animation
    void reasonText.offsetWidth;            // reflow hack to restart CSS animation
    reasonText.classList.add('fade-in');
  
    // Create glitters for added whimsy
    createGlitters(10); // number of sparkles
  });
  
  /**
   * Creates sparkle elements randomly on the screen for a brief glitter effect.
   * @param {number} count - Number of sparkles to generate.
   */
  function createGlitters(count) {
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
  
      // Random screen position
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
  
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
  
      document.body.appendChild(sparkle);
  
      // Remove sparkle after animation completes
      sparkle.addEventListener('animationend', () => {
        sparkle.remove();
      });
    }
  }
  