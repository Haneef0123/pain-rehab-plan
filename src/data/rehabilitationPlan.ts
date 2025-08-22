import { WeeklyPlan, SafetyCheckItem, RedFlag } from "@/types";

export const DAILY_SAFETY_CHECKLIST: SafetyCheckItem[] = [
  {
    id: "pain-level",
    question: "No severe pain (>7/10)",
    isRedFlag: true,
    completed: false,
  },
  {
    id: "numbness-weakness",
    question: "No new numbness or weakness in legs or arms",
    isRedFlag: true,
    completed: false,
  },
  {
    id: "bowel-bladder",
    question: "No bowel or bladder changes",
    isRedFlag: true,
    completed: false,
  },
  {
    id: "dizziness-headaches",
    question: "No dizziness or severe headaches with neck movement",
    isRedFlag: true,
    completed: false,
  },
  {
    id: "shooting-pain",
    question: "No severe shooting leg pain or loss of coordination",
    isRedFlag: true,
    completed: false,
  },
];

export const RED_FLAGS: RedFlag[] = [
  {
    id: "bowel-bladder-dysfunction",
    description: "New bowel or bladder dysfunction",
    severity: "urgent",
    action: "Seek immediate medical care",
  },
  {
    id: "progressive-weakness",
    description: "Progressive leg weakness or numbness",
    severity: "urgent",
    action: "Seek immediate medical care",
  },
  {
    id: "severe-headache",
    description: "Severe headache with neck stiffness",
    severity: "urgent",
    action: "Seek immediate medical care",
  },
  {
    id: "vision-changes",
    description: "Dizziness or vision changes",
    severity: "urgent",
    action: "Seek immediate medical care",
  },
];

export const WEEKS_1_2: WeeklyPlan = {
  week: 1,
  title: "Disc Protection & Cervical Restoration",
  goal: "Centralize leg pain, protect bulging discs, restore cervical lordosis, prevent recurrence.",
  description:
    "Focus on foundational exercises to protect your discs and restore proper neck curve.",
  routines: {
    morning: {
      id: "morning-1-2",
      name: "Morning Routine - Weeks 1-2",
      category: "morning",
      estimatedDuration: 30,
      exercises: [
        {
          id: "prone-lying",
          name: "Prone Lying",
          description: "Relax low back in prone position",
          duration: "5-10 minutes",
          videoUrl: "https://www.youtube.com/watch?v=jI3HXjjczQY",
          instructions: [
            "Lie face down on a firm surface",
            "Place a small pillow under your abdomen if needed",
            "Relax completely and breathe deeply",
            "Allow your lower back to settle naturally",
          ],
          category: "morning",
        },
        {
          id: "mckenzie-press-ups",
          name: "McKenzie Press-Ups",
          description: "Press-ups to extend the spine and centralize pain",
          sets: 3,
          reps: "10-15",
          holdTime: "30-45 seconds",
          videoUrl: "https://www.youtube.com/watch?v=jI3HXjjczQY",
          instructions: [
            "From prone lying position, place hands under shoulders",
            "Slowly press up, keeping hips on the ground",
            "Rise only as high as comfortable",
            "Hold the extended position",
            "Lower slowly and repeat",
          ],
          category: "morning",
        },
        {
          id: "standing-back-extensions",
          name: "Standing Back Extensions",
          description: "Standing backward bending to maintain extension",
          reps: "5-10",
          duration: "Every 30 minutes",
          videoUrl: "https://www.youtube.com/watch?v=Wz2TquDzGMw",
          instructions: [
            "Stand with feet shoulder-width apart",
            "Place hands on lower back",
            "Slowly arch backward as far as comfortable",
            "Hold briefly and return to neutral",
            "Repeat throughout the day",
          ],
          category: "morning",
        },
        {
          id: "cervical-extension-stretch",
          name: "Cervical Extension Stretch",
          description: "Gentle neck extension with towel support",
          sets: 3,
          holdTime: "30 seconds",
          videoUrl: "https://www.youtube.com/watch?v=yf5xcOLajZ8",
          instructions: [
            "Sit with a rolled towel supporting your neck curve",
            "Gently look up toward the ceiling",
            "Hold the stretch without forcing",
            "Return to neutral slowly",
          ],
          category: "morning",
        },
        {
          id: "deep-cervical-flexor-chin-tuck",
          name: "Deep Cervical Flexor Chin Tuck",
          description: "Strengthen deep neck muscles and improve posture",
          reps: "10",
          holdTime: "5-10 seconds",
          videoUrl: "https://www.youtube.com/watch?v=u8C5LgpK3r4",
          instructions: [
            "Sit or stand with good posture",
            "Gently draw your chin back and down",
            "Create a double chin effect",
            "Hold without tilting your head",
            "Feel the stretch at the base of your skull",
          ],
          category: "morning",
        },
      ],
    },
    deskBreak: {
      id: "desk-break-1-2",
      name: "Desk Break Routine - Weeks 1-2",
      category: "deskBreak",
      estimatedDuration: 2,
      exercises: [
        {
          id: "standing-mckenzie-extensions",
          name: "Standing McKenzie Extensions",
          description: "Quick standing back extensions",
          reps: "5",
          instructions: [
            "Stand up from your desk",
            "Place hands on lower back",
            "Gently arch backward",
            "Hold briefly and repeat",
          ],
          category: "deskBreak",
        },
        {
          id: "hip-flexor-stretch-lunge",
          name: "Hip Flexor Stretch (Lunge)",
          description: "Stretch tight hip flexors from prolonged sitting",
          holdTime: "30 seconds each side",
          videoUrl: "https://www.youtube.com/watch?v=Q12nIfVCpdU",
          instructions: [
            "Step into a lunge position",
            "Keep back leg straight",
            "Push hips forward gently",
            "Feel stretch in front of back leg",
            "Switch sides",
          ],
          category: "deskBreak",
        },
        {
          id: "neck-retraction-chin-tuck",
          name: "Neck Retraction (Chin Tuck)",
          description: "Counter forward head posture",
          reps: "5",
          holdTime: "5 seconds",
          instructions: [
            "Sit tall in your chair",
            "Draw chin back and down",
            "Hold the retracted position",
            "Feel the stretch at skull base",
          ],
          category: "deskBreak",
        },
        {
          id: "scapular-blade-pinches",
          name: "Scapular Blade Pinches",
          description: "Strengthen middle back and improve posture",
          reps: "10",
          holdTime: "5 seconds",
          instructions: [
            "Sit or stand with arms at sides",
            "Squeeze shoulder blades together",
            "Imagine holding a pencil between blades",
            "Hold and release slowly",
          ],
          category: "deskBreak",
        },
      ],
    },
    evening: {
      id: "evening-1-2",
      name: "Evening Routine - Weeks 1-2",
      category: "evening",
      estimatedDuration: 35,
      exercises: [
        {
          id: "neural-mobilization-sequence",
          name: "Neural Mobilization Sequence",
          description:
            "Mobilize nerves including straight leg raises and slump stretch",
          duration: "15 minutes",
          videoUrl: "https://www.youtube.com/watch?v=4W0t9kP-DqM",
          instructions: [
            "Perform gentle straight leg raises",
            "Add slump stretch in sitting",
            "Move slowly and stop if pain increases",
            "Focus on gentle mobilization",
          ],
          category: "evening",
        },
        {
          id: "spinal-mobilization",
          name: "Spinal Mobilization for Disc Nutrition",
          description: "Gentle spinal movements to promote disc health",
          instructions: [
            "Perform gentle spinal rotations",
            "Add lateral bending movements",
            "Keep movements small and controlled",
            "Focus on nutrition and mobility",
          ],
          category: "evening",
        },
        {
          id: "cervical-traction-roll",
          name: "Cervical Traction with Cervical Roll",
          description: "Decompress cervical spine and restore curve",
          duration: "10-15 minutes",
          videoUrl: "https://www.youtube.com/watch?v=Yh5AA3K7Pjs",
          instructions: [
            "Lie supine with cervical roll under neck",
            "Allow head to relax in extension",
            "Breathe deeply and let tension release",
            "Maintain position for prescribed time",
          ],
          category: "evening",
        },
        {
          id: "upper-cervical-stabilization",
          name: "Upper Cervical Stabilization Exercises",
          description: "Strengthen deep neck stabilizers",
          reps: "8-10",
          videoUrl: "https://www.youtube.com/watch?v=Q6a3GJGk9xY",
          instructions: [
            "Lie supine with neutral neck position",
            "Perform gentle nodding motions",
            "Keep movements small and precise",
            "Focus on deep muscle activation",
          ],
          category: "evening",
        },
      ],
    },
  },
  unlockCriteria: {
    completionRate: 0.8,
    painFreeExercises: 4,
  },
};

export const WEEKS_3_4: WeeklyPlan = {
  week: 3,
  title: "Motor Control and Stabilization",
  goal: "Develop core stability and motor control while maintaining disc protection.",
  description:
    "Progress to stability exercises while maintaining spinal protection.",
  routines: {
    morning: {
      id: "morning-3-4",
      name: "Morning Routine - Weeks 3-4",
      category: "morning",
      estimatedDuration: 40,
      exercises: [
        {
          id: "sustained-prone-extension",
          name: "Sustained Prone Extension",
          description: "Extended prone lying for disc decompression",
          duration: "3-5 minutes",
          instructions: [
            "Lie prone with pillow under abdomen",
            "Maintain comfortable extension",
            "Breathe deeply and relax",
            "Allow natural spinal curves",
          ],
          category: "morning",
        },
        {
          id: "side-glides-pelvic-shifts",
          name: "Side Glides / Standing Pelvic Shifts",
          description: "Lateral correction movements for spinal alignment",
          reps: "10 each side",
          instructions: [
            "Stand with feet hip-width apart",
            "Shift pelvis to one side",
            "Return to center slowly",
            "Repeat on opposite side",
          ],
          category: "morning",
        },
        {
          id: "transverse-abdominis-activation",
          name: "Transverse Abdominis Activation",
          description: "Deep core muscle activation for spinal stability",
          reps: "10",
          holdTime: "10 seconds",
          videoUrl: "https://www.youtube.com/watch?v=f5_lFmX8zpk",
          instructions: [
            "Lie supine with knees bent",
            "Gently draw navel toward spine",
            "Breathe normally while holding",
            "Focus on deep abdominal activation",
          ],
          category: "morning",
        },
        {
          id: "modified-dead-bug",
          name: "Modified Dead Bug",
          description: "Core stability with limb movement",
          reps: "5 each side",
          instructions: [
            "Lie supine with arms up and knees bent",
            "Slowly lower opposite arm and leg",
            "Maintain neutral spine throughout",
            "Return to start position",
          ],
          category: "morning",
        },
        {
          id: "prone-cervical-extensions",
          name: "Prone Cervical Extensions",
          description: "Strengthen posterior neck muscles",
          sets: 3,
          reps: "8",
          videoUrl: "https://www.youtube.com/watch?v=Q6a3GJGk9xY",
          instructions: [
            "Lie prone with forehead on hands",
            "Slowly lift head and look forward",
            "Hold briefly and lower slowly",
            "Keep movement controlled",
          ],
          category: "morning",
        },
        {
          id: "deep-cervical-flexor-endurance",
          name: "Deep Cervical Flexor Endurance",
          description: "Build endurance in deep neck flexors",
          reps: "8",
          holdTime: "12 seconds",
          instructions: [
            "Perform chin tuck position",
            "Hold for extended time",
            "Maintain good form throughout",
            "Rest between repetitions",
          ],
          category: "morning",
        },
      ],
    },
    deskBreak: {
      id: "desk-break-3-4",
      name: "Desk Break Routine - Weeks 3-4",
      category: "deskBreak",
      estimatedDuration: 3,
      exercises: [
        {
          id: "standing-extensions-3-4",
          name: "Standing Extensions",
          description: "Maintain spinal extension throughout day",
          reps: "5",
          instructions: [
            "Stand and place hands on lower back",
            "Gently extend backward",
            "Hold briefly and return",
            "Perform every 45 minutes",
          ],
          category: "deskBreak",
        },
        {
          id: "hip-flexor-stretch-3-4",
          name: "Hip Flexor Stretch",
          description: "Continue addressing hip flexor tightness",
          holdTime: "30 seconds each side",
          videoUrl: "https://www.youtube.com/watch?v=Q12nIfVCpdU",
          instructions: [
            "Perform standing lunge stretch",
            "Focus on hip flexor of back leg",
            "Hold stretch position",
            "Switch sides",
          ],
          category: "deskBreak",
        },
        {
          id: "chin-tuck-neck-extensions",
          name: "Chin Tuck + Neck Extensions",
          description: "Combined neck strengthening movement",
          reps: "5",
          instructions: [
            "Perform chin tuck first",
            "Add gentle extension from tucked position",
            "Return to neutral slowly",
            "Combine movements smoothly",
          ],
          category: "deskBreak",
        },
        {
          id: "scapular-wall-slides",
          name: "Scapular Wall Slides",
          description: "Improve shoulder blade mobility and strength",
          videoUrl: "https://www.youtube.com/watch?v=EvE6cgNsOKQ",
          instructions: [
            "Stand with back against wall",
            "Slide arms up and down wall",
            "Keep contact throughout movement",
            "Focus on scapular movement",
          ],
          category: "deskBreak",
        },
      ],
    },
    evening: {
      id: "evening-3-4",
      name: "Evening Routine - Weeks 3-4",
      category: "evening",
      estimatedDuration: 30,
      exercises: [
        {
          id: "neural-glides-tibial-femoral",
          name: "Neural Glides (Tibial/Femoral)",
          description: "Specific nerve mobilization techniques",
          reps: "10 each",
          instructions: [
            "Perform tibial nerve glides",
            "Add femoral nerve mobilization",
            "Move gently and slowly",
            "Stop if symptoms increase",
          ],
          category: "evening",
        },
        {
          id: "functional-step-ups",
          name: "Functional Step-Ups",
          description: "Begin functional strengthening",
          reps: "10 each leg",
          instructions: [
            "Use a stable step or platform",
            "Step up with good posture",
            "Control the descent",
            "Focus on quality movement",
          ],
          category: "evening",
        },
        {
          id: "resistance-band-rows",
          name: "Resistance Band Rows",
          description: "Strengthen posterior chain",
          reps: "15",
          videoUrl: "https://www.youtube.com/watch?v=WklUZWulQao",
          instructions: [
            "Anchor band at chest height",
            "Pull elbows back and squeeze blades",
            "Control the return movement",
            "Maintain good posture",
          ],
          category: "evening",
        },
        {
          id: "hip-thoracic-stretches",
          name: "Hip and Thoracic Stretches",
          description: "Address mobility restrictions",
          duration: "10 minutes",
          instructions: [
            "Include hip flexor stretches",
            "Add thoracic spine mobility",
            "Hold stretches for 30-60 seconds",
            "Focus on tight areas",
          ],
          category: "evening",
        },
      ],
    },
  },
  unlockCriteria: {
    completionRate: 0.8,
    painFreeExercises: 5,
  },
};

// Additional weeks would follow similar pattern...
export const REHABILITATION_PLAN: WeeklyPlan[] = [
  WEEKS_1_2,
  { ...WEEKS_1_2, week: 2 }, // Week 2 uses same plan as Week 1
  WEEKS_3_4,
  { ...WEEKS_3_4, week: 4 }, // Week 4 uses same plan as Week 3
  // Weeks 5-8 would be added here...
];

export const ERGONOMIC_GUIDELINES = {
  workstation: {
    title: "Workstation Setup",
    guidelines: [
      "Lumbar roll placed at L4-L5 level",
      "Seat height: hips 2-3 inches higher than knees",
      "Chair back angle: 100° to 110°",
      "Monitor top third at eye level",
      "Keyboard and mouse at elbow height, wrists neutral",
    ],
  },
  sleep: {
    title: "Sleep Position",
    guidelines: [
      "Side-lying with cervical contour pillow",
      "Pillow between knees",
      "Maintain spinal alignment",
      "Avoid stomach sleeping",
    ],
  },
  lifestyle: {
    title: "Daily Habits",
    guidelines: [
      "Take breaks every 30-45 minutes",
      "Stay hydrated (3 liters water daily)",
      "Maintain proper nutrition",
      "Practice stress management",
      "Get adequate sleep (7-9 hours)",
    ],
  },
};

export const NUTRITION_GUIDELINES = {
  antiInflammatory: [
    "Omega-3 rich foods (fish, flaxseed, walnuts)",
    "Antioxidant-rich fruits and vegetables",
    "Turmeric and ginger",
    "Leafy green vegetables",
  ],
  hydration: {
    daily: "3 liters of water",
    timing: "Throughout the day, not just with meals",
  },
  avoid: [
    "Processed foods high in sugar",
    "Excessive caffeine",
    "Alcohol in excess",
    "Foods high in trans fats",
  ],
};
