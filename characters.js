const characters = [
  {
    name: 'Acheron',
    path: 'Nihility',
    type: 'Lightning',
    traits: [
      { name: 'energy', score: 1 },
      { name: 'mind', score: 2 },
      { name: 'nature', score: 1 },
      { name: 'tactics', score: 1 },
      { name: 'identity', score: 1 },
    ],
    info: "Lone voyagers in the cosmos are driven by two desires - to tread in the trails of the past and to forge their own way. But under THEIR scrutiny... most en up adhering to the former.",
  },
  {
    name: 'Argenti',
    path: 'Erudition',
    type: 'Physical',
    traits: [
      { name: 'energy', score: 0 },
      { name: 'mind', score: -2 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: -2 },
      { name: 'identity', score: 1 },
    ],
    info: "May this rose convey my heartfelt salutations.",
  },
  {
    name: 'Arlan',
    path: 'Destruction',
    type: 'Lightning',
    traits: [
      { name: 'energy', score: 2 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: -1 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: -2 },
    ],
    info: "I'm proud of my wounds. They're a reminder of being able to protect everyone.",
  },
  {
    name: 'Asta',
    path: 'Harmony',
    type: 'Fire',
    traits: [
      { name: 'energy', score: 0 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: -2 },
      { name: 'identity', score: -2 },
    ],
    info: "The 'tortoise' galaxies are those that slooowly give birth to new stars. The ones tat use up their fuel reserves in an instant, are the 'hare' galaxies'.",
  },
  {
    name: 'Aventurine',
    path: 'Preservation',
    type: 'Imaginary',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: -2 },
      { name: 'nature', score: -1 },
      { name: 'tactics', score: -2 },
      { name: 'identity', score: 2 },
    ],
    info: "Go ahead, use me as you wish, even stab me in the back if you see fit. Exploitation and treachery are simply tools of the trade. But remember, I don't make deals that don't pay off... So, I hope you don't disappoint me.",
  },
  {
    name: 'Bailu',
    path: 'Abundance',
    type: 'Lightning',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: 1 },
    ],
    info: "Lunch is like medicine - it has to have the right balance of ingredients. Two smoked patties and a cup of milk tea is a great way to heal your heart and lift your spirits!",
  },
  {
    name: 'Black Swan',
    path: 'Nihility',
    type: 'Wind',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: 1 },
      { name: 'tactics', score: 1 },
      { name: 'identity', score: 2 },
    ],
    info: "If I can identify and encapsulate a fragment of memory before it's unveiled to the world, those solitary moments of delight are my most favored and unique stories.",
  },
  {
    name: 'Blade',
    path: 'Destruction',
    type: 'Wind',
    traits: [
      { name: 'energy', score: 2 },
      { name: 'mind', score: 2 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: -1 },
    ],
    info: "When will death come for me? My patience is wearing thin.",
  },
  {
    name: 'Boothill',
    path: 'The Hunt',
    type: 'Physical',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: 0 },
      { name: 'nature', score: 1 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: -1 },
    ],
    info: "So, here's the thing: someone went and tinkered with my Synesthesia Beacon, so now every time you muddle-fingers hear me chinwaggin' with those shirtbags, it's all a bunch of 'fudge this' and 'fork that...' See what I'm sayin'?",
  },
  {
    name: 'Bronya',
    path: 'Harmony',
    type: 'Wind',
    traits: [
      { name: 'energy', score: 1 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: 0 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: -1 },
    ],
    info: "This place is always part of our homeland, even when it has been corroded by Fragmentum. Silvermane Guards will never turn their backs on their home.",
  },
  {
    name: 'Clara',
    path: 'Destruction',
    type: 'Physical',
    traits: [
      { name: 'energy', score: 1 },
      { name: 'mind', score: 0 },
      { name: 'nature', score: -1 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: -2 },
    ],
    info: "Mr. Svarog... is my family.",
  },
  {
    name: 'Dan Heng',
    path: 'The Hunt',
    type: 'Wind',
    traits: [
      { name: 'energy', score: 2 },
      { name: 'mind', score: 2 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: -1 },
    ],
    info: "Even as we speak, farewells are happening throughout the universe. The grief that we share is real but there's nothing special about it.",
  },
  {
    name: 'Dr. Ratio',
    path: 'The Hunt',
    type: 'Imaginary',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: 2 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: 2 },
    ],
    info: "The most annoying thing about idiocy is that you can't explain it to an idiot.",
  },
  {
    name: 'Firefly',
    path: 'Destruction',
    type: 'Fire',
    traits: [
      { name: 'energy', score: 1 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: 0 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: -2 },
    ],
    info: "Fyreflies are such magical creatures, aren't they? They may throw themselves at a flame or suddenly grow old, but every night before that, they will shine brighter than the stars.",
  },
  {
    name: 'Fu Xuan',
    path: 'Preservation',
    type: 'Quantum',
    traits: [
      { name: 'energy', score: 0 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: -1 },
    ],
    info: "Knowledge exchanged with pain.",
  },
  {
    name: 'Gallagher',
    path: 'Abundance',
    type: 'Fire',
    traits: [
      { name: 'energy', score: 1 },
      { name: 'mind', score: 2 },
      { name: 'nature', score: -1 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: 1 },
    ],
    info: "Making a drink is a sensory skill. In dreams, creating fizzy concoctions requires adding a bit of your mood. Heavier if you're troubled, a touch sweeter if you're high spirits... it's not just about mixing beverages. It's about mixing the experiences of life.",
  },
  {
    name: 'Gepard',
    path: 'Preservation',
    type: 'Ice',
    traits: [
      { name: 'energy', score: 1 },
      { name: 'mind', score: 2 },
      { name: 'nature', score: 1 },
      { name: 'tactics', score: 1 },
      { name: 'identity', score: 1 },
    ],
    info: "Loyalty isn't an inherent virtue of humans. As such, the recipient of that loyalty also needs to be worthy.",
  },
  {
    name: 'Guinaifen',
    path: 'Nihility',
    type: 'Fire',
    traits: [
      { name: 'energy', score: -2 },
      { name: 'mind', score: -2 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: -2 },
      { name: 'identity', score: -2 },
    ],
    info: "Would you like to see me break this stone slab on somebody's chest?",
  },
  {
    name: 'Hanya',
    path: 'Harmony',
    type: 'Physical',
    traits: [
      { name: 'energy', score: 2 },
      { name: 'mind', score: 0 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: -2 },
    ],
    info: "Using dreams to analyze the sins of the mara-struck is like touching a vine with thorns - it doesn't hurt as much when your fingers become numb.",
  },
  {
    name: 'Herta',
    path: 'Erudition',
    type: 'Ice',
    traits: [
      { name: 'energy', score: 1 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: 0 },
      { name: 'identity', score: 2 },
    ],
    info: "I'm already perfect, so what else should I do?",
  },
  {
    name: 'Himeko',
    path: 'Erudition',
    type: 'Fire',
    traits: [
      { name: 'energy', score: 0 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: 1 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: 1 },
    ],
    info: "Alright, crew! This world is the target of our net trailblazing expedition!",
  },
  {
    name: 'Hook',
    path: 'Destruction',
    type: 'Fire',
    traits: [
      { name: 'energy', score: -2 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: -1 },
      { name: 'tactics', score: -2 },
      { name: 'identity', score: 2 },
    ],
    info: "Who am I? Heh, I'm the boss around here, you can call me... Pitch-Dark Hook the Great!",
  },
  {
    name: 'Huohuo',
    path: 'Abundance',
    type: 'Wind',
    traits: [
      { name: 'energy', score: 2 },
      { name: 'mind', score: -2 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: -2 },
    ],
    info: "I can use this banner to dispel demons... but it also comes in handy when signaling my surrender...",
  },
  {
    name: 'Jade',
    path: 'Erudition',
    type: 'Quantum',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: 2 },
    ],
    info: "Wealth is the recipe to happiness. Giving it to those who desire happiness is making the best use of it. In this way, my job also brings happiness. Anyone can receive this blessing... They only have to pay an equivalent price.",
  },
  {
    name: 'Jing Yuan',
    path: 'Erudition',
    type: 'Lightning',
    traits: [
      { name: 'energy', score: 0 },
      { name: 'mind', score: 2 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: 1 },
    ],
    info: "A truly masterful chess player has no brilliant moves. People clamor excitedly over displays of extreme cunning., forgetting to worry about the overall dangers of the situation.",
  },
  {
    name: 'Jingliu',
    path: 'Destruction',
    type: 'Ice',
    traits: [
      { name: 'energy', score: 1 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: 1 },
      { name: 'identity', score: -1 },
    ],
    info: "Whoever wishes to learn my swordplay, I will teach them.",
  },
  {
    name: 'Kafka',
    path: 'Nihility',
    type: 'Lightning',
    traits: [
      { name: 'energy', score: 0 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: 2 },
    ],
    info: "You won't remember a thing except me.",
  },
  {
    name: 'Luka',
    path: 'Nihility',
    type: 'Physical',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: -1 },
      { name: 'tactics', score: -2 },
      { name: 'identity', score: -2 },
    ],
    info: "Tell you a secret - the trick to becoming a champion is training hard while everyone else is resting.",
  },
  {
    name: 'Luocha',
    path: 'Abundance',
    type: 'Imaginary',
    traits: [
      { name: 'energy', score: 1 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: -1 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: -1 },
    ],
    info: "This coffin isn't mine. I was merely entrusted to take the body back to the Luofu.",
  },
  {
    name: 'Lynx',
    path: 'Abundance',
    type: 'Quantum',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: -1 },
      { name: 'tactics', score: -2 },
      { name: 'identity', score: 1 },
    ],
    info: "In the Landau family, things are simple: If you wanna do somethings, go do it.",
  },
  {
    name: 'March 7th',
    path: 'Preservation',
    type: 'Ice',
    traits: [
      { name: 'energy', score: 2 },
      { name: 'mind', score: -2 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: -2 },
      { name: 'identity', score: -2 },
    ],
    info: "Well would you listen to that! I saved everyone without causing any trouble! You're pretty awesome, March 7th!",
  },
  {
    name: 'Misha',
    path: 'Destruction',
    type: 'Ice',
    traits: [
      { name: 'energy', score: 1 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: -2 },
    ],
    info: "I'm going to work really hard, so I can save up and explore the stars just like grown-ups do!",
  },
  {
    name: 'Natasha',
    path: 'Abundance',
    type: 'Physical',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: -1 },
    ],
    info: "Where's a doctor when you need one?",
  },
  {
    name: 'Pela',
    path: 'Nihility',
    type: 'Ice',
    traits: [
      { name: 'energy', score: 2 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: 1 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: -1 },
    ],
    info: "Net markers activated - tome for a good old counterattack.",
  },
  {
    name: 'Qingque',
    path: 'Erudition',
    type: 'Quantum',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: -2 },
      { name: 'identity', score: 2 },
    ],
    info: "Work doesn't count as extracting value, it's just labor in exchange for payment. Extracting values is when you slack off at work.",
  },
  {
    name: 'Robin',
    path: 'Harmony',
    type: 'Physical',
    traits: [
      { name: 'energy', score: 1 },
      { name: 'mind', score: -2 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: 1 },
      { name: 'identity', score: -1 },
    ],
    info: "There's a saying - the more demanding the diner, the stronger the skills of the chef... but no matter what others say, I'll always be demanding more from myself.",
  },
  {
    name: 'Ruan Mei',
    path: 'Harmony',
    type: 'Ice',
    traits: [
      { name: 'energy', score: 1 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: 2 },
    ],
    info: "Without accelerating or postponing the arrival of death, life will always wither.",
  },
  {
    name: 'Sampo',
    path: 'Nihility',
    type: 'Wind',
    traits: [
      { name: 'energy', score: -2 },
      { name: 'mind', score: -2 },
      { name: 'nature', score: -1 },
      { name: 'tactics', score: -2 },
      { name: 'identity', score: 2 },
    ],
    info: "All sorts of business are welcome - as long as you've got the cash.",
  },
  {
    name: 'Seele',
    path: 'The Hunt',
    type: 'Quantum',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: -2 },
      { name: 'identity', score: -2 },
    ],
    info: "To use strength to create a fair society... Isn't that the obvious goal?",
  },
  {
    name: 'Serval',
    path: 'Erudition',
    type: 'Lightning',
    traits: [
      { name: 'energy', score: -2 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: 1 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: -1 },
    ],
    info: "How can a rock star not have that kind of confidence?",
  },
  {
    name: 'Silver Wolf',
    path: 'Nihility',
    type: 'Quantum',
    traits: [
      { name: 'energy', score: 0 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: 1 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: 2 },
    ],
    info: "Can you let me have some fun this time?",
  },
  {
    name: 'Sparkle',
    path: 'Harmony',
    type: 'Quantum',
    traits: [
      { name: 'energy', score: -2 },
      { name: 'mind', score: -2 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: 2 },
    ],
    info: "I'm not exactly a person loaded with cool skills, and dreaming big isn't really my thing. But ya know, my latest thing is... getting myself into the Genius Society! Ha, I'm s ready to give it a go. Reckon anyone will buy it?",
  },
  {
    name: 'Sushang',
    path: 'The Hunt',
    type: 'Physical',
    traits: [
      { name: 'energy', score: -2 },
      { name: 'mind', score: 0 },
      { name: 'nature', score: -1 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: 0 },
    ],
    info: "My name will go down in history, just like those heroes of legend!",
  },
  {
    name: 'Tingyun',
    path: 'Harmony',
    type: 'Lightning',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: 1 },
      { name: 'tactics', score: 1 },
      { name: 'identity', score: -2 },
    ],
    info: "In business, it's best to work with persuading types. For those who are less persuadable, cooling them down with a fan works wonders.",
  },
  {
    name: 'Topaz and Numby',
    path: 'The Hunt',
    type: 'Fire',
    traits: [
      { name: 'energy', score: -2 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: 1 },
      { name: 'identity', score: 1 },
    ],
    info: "Money is a means, not an end. Work should make you happy... That's the most fundamental principle.",
  },
  {
    name: 'Trailblazer',
    path: 'Destruction',
    type: 'Physical',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: -2 },
      { name: 'nature', score: 0 },
      { name: 'tactics', score: -2 },
      { name: 'identity', score: 2 },
    ],
    info: "Rules are made to be broken!",
  },
  {
    name: 'Welt',
    path: 'Nihility',
    type: 'Imaginary',
    traits: [
      { name: 'energy', score: 0 },
      { name: 'mind', score: 2 },
      { name: 'nature', score: 2 },
      { name: 'tactics', score: 2 },
      { name: 'identity', score: 2 },
    ],
    info: "The galaxy is vast beyond compare, containing an infinite number of possibilities. An individual's fate shouldn't be limited to a single path ordained by heaven.",
  },
  {
    name: 'Xueyi',
    path: 'Destruction',
    type: 'Quantum',
    traits: [
      { name: 'energy', score: 2 },
      { name: 'mind', score: 1 },
      { name: 'nature', score: -2 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: -2 },
    ],
    info: "You are talking to a puppet. The Commission gifted me this body. The real me has already been reduced to ashes.",
  },
  {
    name: 'Yanqing',
    path: 'The Hunt',
    type: 'Ice',
    traits: [
      { name: 'energy', score: -1 },
      { name: 'mind', score: -1 },
      { name: 'nature', score: -1 },
      { name: 'tactics', score: -1 },
      { name: 'identity', score: 2 },
    ],
    info: "I only called you 'teacher' because I admire your skill in this area. Don't expect me to start taking it easy on you.",
  },
  {
    name: 'Yukong',
    path: 'Harmony',
    type: 'Imaginary',
    traits: [
      { name: 'energy', score: 0 },
      { name: 'mind', score: 2 },
      { name: 'nature', score: 1 },
      { name: 'tactics', score: 1 },
      { name: 'identity', score: 1 },
    ],
    info: "Some were born to be poets, some to be warriors - I was born to mingle among the stars.",
  },
];

export default characters;