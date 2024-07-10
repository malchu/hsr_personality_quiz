const questions = [
  // Energy (Introverted: reverse true, Extraverted: reverse false)
  { text: "Do you prefer exploring the quiet, serene corners of the Herta Space Station over joining the lively crew gatherings?", trait: "energy", reverse: true },
  { text: "Would you rather spend time meditating alone in the Astral Express rather than participating in group strategy sessions?", trait: "energy", reverse: true },
  { text: "Do you often find solace in studying ancient relics in the Archives rather than leading a squad into battle?", trait: "energy", reverse: true },
  { text: "Do you thrive in the excitement of leading the charge in a Honkai beast hunt?", trait: "energy", reverse: false },
  { text: "Do you seek out social missions to connect with other factions across the galaxy?", trait: "energy", reverse: false },

  // Mind (Observant: reverse true, Intuitive: reverse false)
  { text: "Do you prefer meticulously analyzing battle data over dreaming up new combat techniques?", trait: "mind", reverse: true },
  { text: "Do you find satisfaction in mastering ancient weaponry rather than experimenting with futuristic gear?", trait: "mind", reverse: true },
  { text: "Do you often focus on the current status of your ship and crew rather than envisioning future alliances?", trait: "mind", reverse: true },
  { text: "Do you enjoy weaving complex strategies for uncharted territories and unknown enemies?", trait: "mind", reverse: false },
  { text: "Do you find excitement in speculating about the hidden powers of rare artifacts and their potential?", trait: "mind", reverse: false },

  // Nature (Thinking: reverse true, Feeling: reverse false)
  { text: "Do you value strategic precision over empathetic negotiations when dealing with interstellar disputes?", trait: "nature", reverse: true },
  { text: "Do you find it straightforward to give critical feedback to your team, even if it might be harsh?", trait: "nature", reverse: true },
  { text: "Do you prioritize logical outcomes over emotional bonds when making decisions about the crew's welfare?", trait: "nature", reverse: true },
  { text: "Do you often rely on your instincts and feelings when choosing allies for crucial missions?", trait: "nature", reverse: false },
  { text: "Do you believe maintaining harmony and trust among the crew is more important than strict protocol adherence?", trait: "nature", reverse: false },

  // Tactics (Judging: reverse true, Prospecting: reverse false)
  { text: "Do you meticulously plan your voyages, ensuring every detail is accounted for before departing the space dock?", trait: "tactics", reverse: true },
  { text: "Do you find satisfaction in completing mission objectives well ahead of schedule, with time for thorough debriefs?", trait: "tactics", reverse: true },
  { text: "Do you feel uneasy when mission parameters change unexpectedly, preferring a well-structured approach?", trait: "tactics", reverse: true },
  { text: "Do you embrace spontaneous detours to explore mysterious signals in deep space?", trait: "tactics", reverse: false },
  { text: "Do you find joy in discovering new opportunities and allies as they come, without rigid mission plans?", trait: "tactics", reverse: false },

  // Identity (Assertive: reverse true, Turbulent: reverse false)
  { text: "Do you maintain a steady course in leadership even when facing cosmic anomalies?", trait: "identity", reverse: true },
  { text: "Do you bounce back quickly from mission failures, learning and moving forward with renewed vigor?", trait: "identity", reverse: true },
  { text: "Do you have a clear understanding of your strengths and use them effectively during interstellar negotiations?", trait: "identity", reverse: true },
  { text: "Do you often find yourself doubting your decisions in critical moments, seeking reassurance from fellow commanders?", trait: "identity", reverse: false },
  { text: "Do you frequently feel anxious about the impression you make on high-ranking officials and alien diplomats?", trait: "identity", reverse: false }
];

export default questions;
