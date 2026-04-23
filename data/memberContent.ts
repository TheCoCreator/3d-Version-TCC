export type SessionReplay = {
  id: string;
  title: string;
  date: string;
  description: string;
  duration: string;
  isUpcoming?: boolean;
  zoomLink?: string;
};

export type CalmTool = {
  id: string;
  title: string;
  tag?: string;
  shortDescription: string;
  audioUrl?: string;
  pdfUrl?: string;
  notes?: string;
};

export type WeeklyAutomation = {
  id: string;
  name: string;
  description: string;
  active: boolean;
  timing: "24h_before" | "1h_before" | "post_session" | "weekly_digest";
};

export const sessionReplays: SessionReplay[] = [
  {
    id: "upcoming-1",
    title: "Grounding in High-Stress Environments",
    date: "Next Wednesday @ 8pm AST",
    description: "Live session focusing on micro-regulation techniques.",
    duration: "60 min",
    isUpcoming: true,
    zoomLink: "https://zoom.us/j/123456789"
  },
  {
    id: "replay-1",
    title: "Releasing the 'Hyper-Vigilant' Watch",
    date: "Oct 25, 2023",
    description: "How to signal safety to a brain that has been trained to scan for danger.",
    duration: "48 min"
  },
  {
    id: "replay-2",
    title: "Shoulders Down, Breath Deep",
    date: "Oct 18, 2023",
    description: "Physical cues that bypass the thinking brain and create instant regulation.",
    duration: "52 min"
  },
  {
    id: "replay-3",
    title: "The Transition: Car to Home",
    date: "Oct 11, 2023",
    description: "Creating a boundary between the shift you just finished and the life you're walking into.",
    duration: "45 min"
  }
];

export const calmTools: CalmTool[] = [
  {
    id: "tool-1",
    title: "The 3-Point Grounding Check",
    tag: "On Shift",
    shortDescription: "A quick physical scan to drop your shoulders and deepen breath in 30 seconds."
  },
  {
    id: "tool-2",
    title: "Car Decompression Audio",
    tag: "Transition",
    shortDescription: "Play this 4-minute track before you walk into your house to leave the shift behind."
  },
  {
    id: "tool-3",
    title: "Sleep Readiness Guide",
    tag: "Before Bed",
    shortDescription: "A PDF guide with 3 somatic movements to tell your body it's safe to sleep."
  }
];

export const weeklyAutomations: WeeklyAutomation[] = [
  {
    id: "auto-1",
    name: "24-hour reminder email",
    description: "Send a gentle reminder the day before session with Zoom link.",
    active: true,
    timing: "24h_before"
  },
  {
    id: "auto-2",
    name: "1-hour reminder email",
    description: "Last minute nudge with the direct join link.",
    active: true,
    timing: "1h_before"
  },
  {
    id: "auto-3",
    name: "Post-session replay link",
    description: "Automatically email the recording link 2 hours after session ends.",
    active: false,
    timing: "post_session"
  }
];