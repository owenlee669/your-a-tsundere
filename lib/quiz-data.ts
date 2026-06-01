export type DereTypeSlug =
  | "tsundere"
  | "yandere"
  | "kuudere"
  | "dandere"
  | "deredere";

export type Scores = Record<DereTypeSlug, number>;

export type QuizOption = {
  text: string;
  points: Partial<Scores>;
};

export type QuizQuestion = {
  id: number;
  question: string;
  options: QuizOption[];
};

export type DereType = {
  slug: DereTypeSlug;
  name: string;
  badge: string;
  oneLiner: string;
  tags: string[];
  symbol: string;
  color: string;
  definition: string;
  strengths: string[];
  weakSpots: string[];
  animeVibe: string;
  shareText: string;
  misconception: string;
};

export const dereTypeOrder: DereTypeSlug[] = [
  "tsundere",
  "yandere",
  "kuudere",
  "dandere",
  "deredere"
];

export const dereTypes: DereType[] = [
  {
    slug: "tsundere",
    name: "Tsundere",
    badge: "Certified Tsundere",
    oneLiner: "Loud denial. Suspiciously soft center.",
    tags: ["Proud", "Easily Flustered", "Secretly Caring"],
    symbol: "!",
    color: "#d31616",
    definition:
      "A tsundere acts sharp, defensive, or unimpressed on the outside while slowly revealing a warmer, more caring side.",
    strengths: [
      "Protective once you trust someone",
      "Honest enough to keep things interesting",
      "Secretly thoughtful in ways people notice"
    ],
    weakSpots: [
      "Compliments can cause immediate system failure",
      "You may hide sincerity behind sarcasm",
      "Your friends might need subtitles for your feelings"
    ],
    animeVibe:
      "Classic rival energy, dramatic denial, and a tiny blush at the worst possible moment.",
    shareText:
      "I got Certified Tsundere on DereType Quiz. Loud denial. Suspiciously soft center.",
    misconception:
      "Tsundere does not mean being cruel. The fun is in the contrast between prickly reactions and genuine care."
  },
  {
    slug: "yandere",
    name: "Yandere",
    badge: "Fictional Chaos",
    oneLiner: "Intense devotion. Keep it on-screen.",
    tags: ["Intense", "Protective", "Drama Magnet"],
    symbol: "♡",
    color: "#b20f2f",
    definition:
      "A yandere is a fictional anime trope built around extreme attachment, dramatic devotion, and emotional intensity.",
    strengths: [
      "Deep loyalty in fictional scenarios",
      "High emotional focus",
      "A flair for dramatic stakes"
    ],
    weakSpots: [
      "Intensity needs boundaries",
      "Possessive jokes should stay fictional",
      "You may over-romanticize chaos"
    ],
    animeVibe:
      "A storm cloud holding a heart-shaped warning sign. Fun in fiction, not a life plan.",
    shareText:
      "I got Fictional Chaos on DereType Quiz. Yandere energy, but strictly PG-13.",
    misconception:
      "Yandere is a fictional character archetype. It should not be used to excuse control, stalking, threats, or harm in real life."
  },
  {
    slug: "kuudere",
    name: "Kuudere",
    badge: "Emotionally Encrypted",
    oneLiner: "Calm face. Feelings behind a firewall.",
    tags: ["Composed", "Dry Humor", "Low Battery"],
    symbol: "✦",
    color: "#516170",
    definition:
      "A kuudere stays cool, quiet, and controlled, often revealing affection through subtle actions instead of obvious emotion.",
    strengths: [
      "Calm under pressure",
      "Reliable when everyone else is spiraling",
      "Your affection feels rare and therefore powerful"
    ],
    weakSpots: [
      "People may mistake your calm for distance",
      "You can under-explain what you actually feel",
      "Your sarcasm sometimes arrives before your comfort"
    ],
    animeVibe:
      "The quiet character by the window who saves the scene with one perfect sentence.",
    shareText:
      "I got Kuudere on DereType Quiz. Emotionally encrypted, apparently.",
    misconception:
      "Kuudere is not emotionless. It is controlled expression, not an absence of care."
  },
  {
    slug: "dandere",
    name: "Dandere",
    badge: "Quiet Mode",
    oneLiner: "Low volume. Feelings enabled.",
    tags: ["Shy", "Observant", "Soft-Spoken"],
    symbol: "...",
    color: "#7a5b78",
    definition:
      "A dandere is shy, reserved, and often quiet until they feel safe enough to open up.",
    strengths: [
      "You notice details others miss",
      "You listen before reacting",
      "Your trust feels sincere because it is earned"
    ],
    weakSpots: [
      "You may wait too long to say what you need",
      "People can misread silence as disinterest",
      "Your comfort zone has a security system"
    ],
    animeVibe:
      "A soft-spoken character with a tiny speech bubble and a surprisingly brave heart.",
    shareText:
      "I got Dandere on DereType Quiz. Quiet mode, feelings enabled.",
    misconception:
      "Dandere does not mean boring. It means reserved until the right moment."
  },
  {
    slug: "deredere",
    name: "Deredere",
    badge: "Sunshine Hazard",
    oneLiner: "Certified warmth. Possibly too powerful.",
    tags: ["Cheerful", "Open-Hearted", "Supportive"],
    symbol: "☀",
    color: "#e05322",
    definition:
      "A deredere is openly affectionate, cheerful, and warm without needing much emotional armor.",
    strengths: [
      "Easy to read in the best way",
      "You make affection feel normal",
      "Your optimism is contagious"
    ],
    weakSpots: [
      "You may over-give before checking your own needs",
      "Your enthusiasm can overwhelm quieter people",
      "You sometimes trust faster than you should"
    ],
    animeVibe:
      "Main character sunshine with bonus sparkles and absolutely no poker face.",
    shareText:
      "I got Deredere on DereType Quiz. Certified sunshine hazard.",
    misconception:
      "Deredere is not shallow happiness. It is open affection without the defensive layer."
  }
];

export const typeBySlug = Object.fromEntries(
  dereTypes.map((type) => [type.slug, type])
) as Record<DereTypeSlug, DereType>;

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Someone compliments you in public. What do you do?",
    options: [
      { text: "Deny everything and immediately change the subject.", points: { tsundere: 2 } },
      { text: "Smile so hard it becomes everyone else's problem.", points: { deredere: 2 } },
      { text: "Say thanks calmly and move on.", points: { kuudere: 2 } },
      { text: "Quietly replay it in your head for the next three business days.", points: { dandere: 2 } }
    ]
  },
  {
    id: 2,
    question: "Your favorite person forgets to text back. Your first reaction is...",
    options: [
      { text: "Act like you do not care. You care. Tragically.", points: { tsundere: 2 } },
      { text: "Refresh the chat with dramatic fictional intensity.", points: { yandere: 2 } },
      { text: "Assume they are busy and do something else.", points: { kuudere: 2 } },
      { text: "Wonder if you said something weird, then say nothing.", points: { dandere: 2 } }
    ]
  },
  {
    id: 3,
    question: "Pick your ideal anime entrance.",
    options: [
      { text: "Burst in complaining, then accidentally save everyone.", points: { tsundere: 2 } },
      { text: "Appear behind the person you care about. Fictionally. Calm down.", points: { yandere: 2 } },
      { text: "Lean against the wall like you were already there.", points: { kuudere: 2 } },
      { text: "Peek from the doorway and hope nobody makes a scene.", points: { dandere: 2 } }
    ]
  },
  {
    id: 4,
    question: "A friend asks if you missed them.",
    options: [
      { text: "\"As if. I was just bored.\" Suspicious.", points: { tsundere: 2 } },
      { text: "\"Every second.\" A little too cinematic.", points: { yandere: 1, deredere: 1 } },
      { text: "\"Yes.\" No extra punctuation. Powerful.", points: { kuudere: 2 } },
      { text: "You nod because words have left the server.", points: { dandere: 2 } }
    ]
  },
  {
    id: 5,
    question: "Your emotional communication style is closest to...",
    options: [
      { text: "Roast first, care second.", points: { tsundere: 2 } },
      { text: "All-in devotion, preferably with boundaries and snacks.", points: { yandere: 2 } },
      { text: "Short messages that somehow mean a lot.", points: { kuudere: 2 } },
      { text: "A tiny signal only trusted people can decode.", points: { dandere: 2 } }
    ]
  },
  {
    id: 6,
    question: "Someone tries to embarrass you about a crush.",
    options: [
      { text: "You loudly deny it while proving the opposite.", points: { tsundere: 2 } },
      { text: "You stare with fictional villain music in the background.", points: { yandere: 2 } },
      { text: "You blink once. They stop.", points: { kuudere: 2 } },
      { text: "You become furniture.", points: { dandere: 2 } }
    ]
  },
  {
    id: 7,
    question: "Pick a result card caption for yourself.",
    options: [
      { text: "Emotionally unavailable? Suspicious.", points: { tsundere: 2 } },
      { text: "Fictional chaos. Do not apply IRL.", points: { yandere: 2 } },
      { text: "Feelings detected. Display disabled.", points: { kuudere: 2 } },
      { text: "Quiet mode, feelings enabled.", points: { dandere: 2 } }
    ]
  },
  {
    id: 8,
    question: "What kind of apology are you most likely to give?",
    options: [
      { text: "A snack thrown at them with zero eye contact.", points: { tsundere: 2 } },
      { text: "A dramatic speech about how much they matter.", points: { yandere: 1, deredere: 1 } },
      { text: "A precise, sincere sentence.", points: { kuudere: 2 } },
      { text: "A written note because speaking is illegal now.", points: { dandere: 2 } }
    ]
  },
  {
    id: 9,
    question: "Your friends would describe your affection as...",
    options: [
      { text: "Hidden behind a boss fight.", points: { tsundere: 2 } },
      { text: "Intense enough to need a genre warning.", points: { yandere: 2 } },
      { text: "Quiet, rare, and oddly reassuring.", points: { kuudere: 2 } },
      { text: "Soft, shy, and mostly in the margins.", points: { dandere: 2 } }
    ]
  },
  {
    id: 10,
    question: "What do you do at a party?",
    options: [
      { text: "Complain, then secretly make sure everyone is included.", points: { tsundere: 2 } },
      { text: "Stick close to your chosen person like a plot device.", points: { yandere: 2 } },
      { text: "Observe from a calm corner with excellent posture.", points: { kuudere: 2 } },
      { text: "Find one safe person and quietly orbit them.", points: { dandere: 2 } }
    ]
  },
  {
    id: 11,
    question: "When emotions get messy, you usually...",
    options: [
      { text: "Turn them into sarcasm and hope nobody checks the source code.", points: { tsundere: 2 } },
      { text: "Feel everything at 200 percent, fictionally and with disclaimers.", points: { yandere: 2 } },
      { text: "Go very still and process internally.", points: { kuudere: 2 } },
      { text: "Need time, quiet, and a low-pressure doorway back.", points: { dandere: 2 } }
    ]
  },
  {
    id: 12,
    question: "Final question: what do you want your result to say?",
    options: [
      { text: "That I am not a tsundere. Obviously.", points: { tsundere: 3 } },
      { text: "That my devotion has excellent dramatic lighting.", points: { yandere: 3 } },
      { text: "That I am cooler than this quiz can prove.", points: { kuudere: 3 } },
      { text: "That quiet people still have main character feelings.", points: { dandere: 2, deredere: 1 } }
    ]
  }
];

export function getInitialScores(): Scores {
  return {
    tsundere: 0,
    yandere: 0,
    kuudere: 0,
    dandere: 0,
    deredere: 0
  };
}

export function calculateResult(answers: number[]): {
  result: DereTypeSlug;
  scores: Scores;
} {
  const scores = getInitialScores();
  const recentScores = getInitialScores();

  answers.forEach((optionIndex, questionIndex) => {
    const option = quizQuestions[questionIndex]?.options[optionIndex];
    if (!option) return;
    for (const [key, value] of Object.entries(option.points)) {
      scores[key as DereTypeSlug] += value || 0;
      if (questionIndex >= quizQuestions.length - 4) {
        recentScores[key as DereTypeSlug] += value || 0;
      }
    }
  });

  const result = [...dereTypeOrder].sort((a, b) => {
    const scoreDiff = scores[b] - scores[a];
    if (scoreDiff !== 0) return scoreDiff;
    const recentDiff = recentScores[b] - recentScores[a];
    if (recentDiff !== 0) return recentDiff;
    return dereTypeOrder.indexOf(a) - dereTypeOrder.indexOf(b);
  })[0];

  return { result, scores };
}
