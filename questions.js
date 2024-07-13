const questions = [
  // Energy (Introverted: reverse true, Extraverted: reverse false)
  { text: "Do you prefer exploring the quiet parts of the Herta Space Station alone?", trait: "energy", reverse: true },
  { text: "Would you rather meditate in the Astral Express than join group missions?", trait: "energy", reverse: true },
  { text: "Do you like studying relics alone instead of leading a team in battle?", trait: "energy", reverse: true },
  { text: "Do you enjoy leading the charge in a Honkai beast hunt?", trait: "energy", reverse: false },
  { text: "Do you like social missions to connect with other factions?", trait: "energy", reverse: false },

  // Mind (Observant: reverse true, Intuitive: reverse false)
  { text: "Do you prefer analyzing battle data over thinking up new combat techniques?", trait: "mind", reverse: true },
  { text: "Do you like mastering old weapons rather than trying new futuristic gear?", trait: "mind", reverse: true },
  { text: "Do you focus more on the current status of your ship than future plans?", trait: "mind", reverse: true },
  { text: "Do you enjoy planning strategies for unknown enemies?", trait: "mind", reverse: false },
  { text: "Do you get excited about the hidden powers of rare artifacts?", trait: "mind", reverse: false },

  // Nature (Thinking: reverse true, Feeling: reverse false)
  { text: "Do you prefer strategic precision over empathy in interstellar disputes?", trait: "nature", reverse: true },
  { text: "Do you find it easy to give critical feedback, even if it's harsh?", trait: "nature", reverse: true },
  { text: "Do you prioritize logic over emotions when making crew decisions?", trait: "nature", reverse: true },
  { text: "Do you rely on instincts and feelings when choosing mission allies?", trait: "nature", reverse: false },
  { text: "Do you think trust among the crew is more important than strict rules?", trait: "nature", reverse: false },

  // Tactics (Judging: reverse true, Prospecting: reverse false)
  { text: "Do you meticulously plan your voyages before departing?", trait: "tactics", reverse: true },
  { text: "Do you like completing missions ahead of schedule?", trait: "tactics", reverse: true },
  { text: "Do you feel uneasy when mission plans change unexpectedly?", trait: "tactics", reverse: true },
  { text: "Do you enjoy spontaneous detours to explore new signals?", trait: "tactics", reverse: false },
  { text: "Do you find joy in discovering new opportunities without rigid plans?", trait: "tactics", reverse: false },

  // Identity (Assertive: reverse true, Turbulent: reverse false)
  { text: "Do you stay calm in leadership during cosmic anomalies?", trait: "identity", reverse: true },
  { text: "Do you recover quickly from mission failures?", trait: "identity", reverse: true },
  { text: "Do you understand your strengths and use them in negotiations?", trait: "identity", reverse: true },
  { text: "Do you often doubt your decisions in critical moments?", trait: "identity", reverse: false },
  { text: "Do you feel anxious about the impression you make on officials?", trait: "identity", reverse: false }
];

export default questions;
