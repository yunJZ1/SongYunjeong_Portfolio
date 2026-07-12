const imgArrowChip =
  "http://localhost:3845/assets/76c80cc942a774ff7fa318609e180f9a9e56d99c.svg";

export const CHIP_RESPONSES: Record<string, string> = {
  "How do I Ship?":
    "I approach shipping by breaking work into the smallest valuable slice, aligning with engineers early, and validating assumptions with real users before full build-out. I use a 'ship → learn → iterate' loop to keep momentum while reducing risk.",
  "Show Cases":
    "I've worked on products like Wanted (job platform), CERAGEM (health-tech), and internal tools. Each case study walks through discovery, problem framing, design decisions, and measured outcomes. Want me to dive into a specific one?",
  "My Skills":
    "My core skills span UX Research, Interaction Design, Prototyping (Figma), Design Systems, and cross-functional collaboration. I'm also comfortable with front-end basics (HTML/CSS/React) to bridge design–engineering gaps.",
  "🦁 I know Everything about Yunjeong. Need a quick Summary?":
    "Yunjeong is a product designer with 5+ years of experience building B2B and B2C digital products. She's led design at startups and large companies, with a focus on clarity, systems thinking, and shipping work that actually gets used.",
  Resume:
    "You can download Yunjeong's resume here → [resume link coming soon]. It covers her experience at Wanted, CERAGEM, and freelance product work across fintech and health-tech.",
  "Let's Coffee Chat":
    "Would love to connect! Drop a message at yunjeong@example.com or reach out on LinkedIn. Coffee chats are usually 30 min — happy to talk shop, share feedback on your work, or just get to know each other.",
};

export const FALLBACK_RESPONSE =
  "Thanks for asking. I'm currently designed to answer through guided portfolio flows. For detailed questions, please contact me by email.";

const CHIPS_ROW1 = ["How do I Ship?", "Show Cases", "My Skills"];
const CHIPS_ROW2 = [
  "🦁 I know Everything about Yunjeong. Need a quick Summary?",
  "Resume",
  "Let's Coffee Chat",
];
const CHIPS_WITH_ARROW = new Set(["Show Cases", "Resume", "Let's Coffee Chat"]);

type ChipButtonsProps = {
  onChipClick: (chip: string) => void;
};

export default function ChipButtons({ onChipClick }: ChipButtonsProps) {
  return (
    <div className="flex flex-col gap-[13px] pb-[20px]">
      <div className="flex gap-[14px] items-center flex-wrap justify-center">
        {CHIPS_ROW1.map((text) => (
          <button
            key={text}
            type="button"
            onClick={() => onChipClick(text)}
            className="bg-white border border-[#009cff] rounded-[69px] shadow-[0px_4px_24.1px_0px_rgba(0,156,255,0.18)] px-[20px] py-[16px] text-[18px] font-medium text-[#171719] tracking-[-0.54px] whitespace-nowrap leading-[1.71] hover:bg-[#f0faff] active:scale-95 transition-all cursor-pointer flex items-center gap-1"
          >
            {text}
            {CHIPS_WITH_ARROW.has(text) && (
              <img
                src={imgArrowChip}
                alt=""
                className="hidden w-[27px] h-[27px]"
                style={{ transform: "rotate(45deg)" }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="flex gap-[14px] items-center flex-wrap justify-center">
        {CHIPS_ROW2.map((text) => (
          <button
            key={text}
            type="button"
            onClick={() => onChipClick(text)}
            className="bg-white border border-[#009cff] rounded-[69px] shadow-[0px_4px_24.1px_0px_rgba(0,156,255,0.18)] px-[20px] py-[16px] text-[18px] font-medium text-[#171719] tracking-[-0.54px] whitespace-nowrap leading-[1.71] hover:bg-[#f0faff] active:scale-95 transition-all cursor-pointer flex items-center gap-1"
          >
            {text}
            {CHIPS_WITH_ARROW.has(text) && (
              <img
                src={imgArrowChip}
                alt=""
                className="hidden w-[27px] h-[27px]"
                style={{ transform: "rotate(45deg)" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
