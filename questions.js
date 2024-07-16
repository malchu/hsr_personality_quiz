const questions = [
  // Energy (Introverted: reverse false, Extroverted: reverse true)
  { id: 1, text: "I prefer exploring the quiet parts of the Herta Space Station alone.", trait: "energy", reverse: false },
  { id: 2, text: "I would rather chill in the Astral Express than join group missions.", trait: "energy", reverse: false },
  { id: 3, text: "I don't like using my friend's support character in battle.", trait: "energy", reverse: false },
  { id: 4, text: "I enjoy leading the charge in a critical trailblazing mission.", trait: "energy", reverse: true },
  { id: 5, text: "I like social missions to connect with other factions.", trait: "energy", reverse: true },

  // Mind (Observant: reverse false, Intuitive: reverse true)
  { id: 6, text: "I prefer analyzing battle data over thinking up new combat techniques.", trait: "mind", reverse: false },
  { id: 7, text: "I like mastering the same team compositions rather than trying new teams.", trait: "mind", reverse: false },
  { id: 8, text: "I focus more on the current status of my account than what it could be.", trait: "mind", reverse: false },
  { id: 9, text: "I enjoy planning strategies for new boss enemies and endgame modes.", trait: "mind", reverse: true },
  { id: 10, text: "I get excited about the new implications of upcoming relics and light cones.", trait: "mind", reverse: true },

  // Nature (Thinking: reverse false, Feeling: reverse true)
  { id: 11, text: "I prefer strategic precision over empathy in interstellar debates.", trait: "nature", reverse: false },
  { id: 12, text: "I think rules are meant to be broken.", trait: "nature", reverse: false },
  { id: 13, text: "I prioritize logic over emotions when making crew decisions.", trait: "nature", reverse: false },
  { id: 14, text: "I rely on instincts and feelings when choosing most dialogue options.", trait: "nature", reverse: true },
  { id: 15, text: "I find it hard to give critical feedback, especially if it's harsh.", trait: "nature", reverse: true },

  // Tactics (Judging: reverse false, Prospecting: reverse true)
  { id: 16, text: "I meticulously plan who to pull for in the upcoming patches.", trait: "tactics", reverse: false },
  { id: 17, text: "I like completing all my missions before the next patch comes out.", trait: "tactics", reverse: false },
  { id: 18, text: "I feel uneasy when battles or interactions don't go how I expect.", trait: "tactics", reverse: false },
  { id: 19, text: "I enjoy spontaneous detours when exploring different maps.", trait: "tactics", reverse: true },
  { id: 20, text: "I find joy in discovering new interactions and loot around the different worlds.", trait: "tactics", reverse: true },

  // Identity (Assertive: reverse false, Turbulent: reverse true)
  { id: 21, text: "I stay calm when I'm 80 pulls in without a 5 star yet.", trait: "identity", reverse: false },
  { id: 22, text: "I recover quickly from losing my 50/50s.", trait: "identity", reverse: false },
  { id: 23, text: "I feel confident that every character I want will come home.", trait: "identity", reverse: false },
  { id: 24, text: "I often doubt my luck in getting any characters or light cones.", trait: "identity", reverse: true },
  { id: 25, text: "I feel anxious seeing new characters come out with my 150 stellar jade.", trait: "identity", reverse: true }
];

export default questions;
