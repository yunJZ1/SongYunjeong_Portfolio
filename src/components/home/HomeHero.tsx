import { useCallback, useEffect, useRef, useState } from "react";
import { CHIP_RESPONSES, FALLBACK_RESPONSE } from "../ChipButtons";
import GradientSurface from "./GradientSurface";
import { downloadResume } from "../../lib/resumeDownload";
import type { NavigateHandler } from "../../types";

const KEYWORDS = [
  "Case Studies",
  "AI Workflow",
  "Research",
  "Resume",
  "Coffee Chat",
] as const;

type Keyword = (typeof KEYWORDS)[number];

type ResponseLink = {
  label: string;
  onClick: () => void;
};

type ChatTurn = {
  id: number;
  question: string;
  phase: "thinking" | "done";
  answerText?: string;
  link?: ResponseLink;
};

type HomeHeroProps = {
  messages: { role: "user" | "assistant"; text: string }[];
  input: string;
  onInputChange: (value: string) => void;
  onSendMessage: (text: string) => void;
  onNavigate: NavigateHandler;
};

const THINKING_DELAY_MS = 420;

function SendArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThinkingIndicator() {
  return (
    <p className="text-[14px] font-medium text-[#a9a9a9] tracking-[-0.28px] leading-[1.5] thinking-indicator">
      Thinking...
    </p>
  );
}

function useTurnId() {
  const counter = useRef(0);
  return useCallback(() => {
    counter.current += 1;
    return counter.current;
  }, []);
}

export default function HomeHero({
  onNavigate,
}: HomeHeroProps) {
  const [input, setInput] = useState("");
  const [turns, setTurns] = useState<ChatTurn[]>([]);
  const [titleVisible, setTitleVisible] = useState(true);
  const [titleExiting, setTitleExiting] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const nextTurnId = useTurnId();

  const isThinking = turns.some((turn) => turn.phase === "thinking");
  const hasConversation = turns.length > 0;

  useEffect(() => {
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [turns]);

  const buildResponse = useCallback(
    (keyword: Keyword): { text: string; link?: ResponseLink; after?: () => void } => {
      switch (keyword) {
        case "Case Studies":
          return {
            text: "Here are my featured case studies — from commerce AI interface design to product discovery and validation. Each project walks through research, strategy, and measurable outcomes.",
            link: {
              label: "Explore Case Studies →",
              onClick: () => onNavigate("case-study", "product-cases"),
            },
            after: () => onNavigate("case-study", "product-cases"),
          };
        case "AI Workflow":
          return {
            text: "I design products from research to implementation using AI workflows — from discovery and prototyping with Claude to building with Figma and React.",
            link: {
              label: "Explore AI Workflow →",
              onClick: () => onNavigate("ai-workflow"),
            },
            after: () => onNavigate("ai-workflow"),
          };
        case "Research":
          return {
            text: "My research focuses on how AI recommendation interfaces affect user trust and decision-making. The commerce AI study with 51 participants is a good starting point.",
            link: {
              label: "View Research →",
              onClick: () => onNavigate("case-study", "product-research"),
            },
            after: () => onNavigate("case-study", "product-research"),
          };
        case "Resume":
          return {
            text: "You can download Yunjeong's resume here.",
            link: {
              label: "Download Resume →",
              onClick: downloadResume,
            },
            after: downloadResume,
          };
        case "Coffee Chat":
          return { text: CHIP_RESPONSES["Let's Coffee Chat"] };
        default:
          return { text: FALLBACK_RESPONSE };
      }
    },
    [onNavigate],
  );

  const startTurn = useCallback(
    (
      question: string,
      response: { text: string; link?: ResponseLink; after?: () => void },
    ) => {
      if (titleVisible) {
        setTitleExiting(true);
        window.setTimeout(() => {
          setTitleVisible(false);
          setTitleExiting(false);
        }, 450);
      }

      const turnId = nextTurnId();
      setTurns((prev) => [
        ...prev,
        { id: turnId, question, phase: "thinking" },
      ]);

      window.setTimeout(() => {
        setTurns((prev) =>
          prev.map((turn) =>
            turn.id === turnId
              ? {
                  ...turn,
                  phase: "done",
                  answerText: response.text,
                  link: response.link,
                }
              : turn,
          ),
        );

        if (response.after) {
          window.setTimeout(response.after, 600);
        }
      }, THINKING_DELAY_MS);
    },
    [nextTurnId, titleVisible],
  );

  function resolveFreeInput(text: string) {
    if ((KEYWORDS as readonly string[]).includes(text)) {
      return buildResponse(text as Keyword);
    }

    const preset =
      HOME_CHIP_RESPONSES[text] ?? CHIP_RESPONSES[text] ?? FALLBACK_RESPONSE;

    return { text: preset };
  }

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isThinking) return;

    setInput("");
    startTurn(trimmed, resolveFreeInput(trimmed));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  function handleKeywordClick(keyword: Keyword) {
    if (isThinking) return;

    const response = buildResponse(keyword);
    startTurn(keyword, response);
  }

  function renderInputBlock() {
    return (
      <>
        <div className="w-full h-[56px] md:h-[58px] flex items-center pl-[22px] pr-[6px] gap-[8px] bg-white border border-[#e5e5e5] rounded-full transition-colors duration-200 focus-within:border-[#171719]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me about my work..."
            disabled={isThinking}
            className="flex-1 bg-transparent border-0 outline-none text-[15px] font-normal text-[#171719] placeholder-[#bdbdbd] tracking-[-0.3px] leading-[1.5] disabled:opacity-50 cursor-text"
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={isThinking || !input.trim()}
            aria-label="Send message"
            className="shrink-0 w-[44px] h-[44px] rounded-full bg-[#171719] text-white flex items-center justify-center border-0 cursor-pointer hover:scale-[1.04] active:scale-[0.96] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100 transition-transform duration-150"
          >
            <SendArrowIcon />
          </button>
        </div>

        <div className="flex flex-wrap gap-[8px] items-center justify-center">
          {KEYWORDS.map((keyword) => (
            <GradientSurface
              key={keyword}
              onClick={() => handleKeywordClick(keyword)}
              disabled={isThinking}
              className="px-[16px] py-[10px] rounded-[16px] text-[13px] font-medium text-[#404040] tracking-[-0.26px] leading-[1.4] text-center"
            >
              {keyword}
            </GradientSurface>
          ))}
        </div>
      </>
    );
  }

  return (
    <section
      id="home-hero"
      className="min-h-[calc(100vh-64px-80px)] flex flex-col items-center px-[24px] md:px-[40px] py-[32px] md:py-[40px]"
    >
      <div className="w-full max-w-[720px] flex flex-col flex-1 min-h-0 relative">
        {titleVisible && (
          <div
            className={`hero-title absolute inset-0 flex items-center justify-center pb-[10vh] pointer-events-none z-[1] ${titleExiting ? "hero-title-exit" : ""}`}
          >
            <div className="text-center flex flex-col items-center gap-[6px]">
              <h1 className="text-[32px] md:text-[40px] font-medium text-[#171719] tracking-[-0.8px] leading-[1.3]">
                What problem should I solve today?
              </h1>
              <p className="text-[32px] md:text-[40px] font-medium text-[#171719] tracking-[-0.8px] leading-[1.3]">
                I design and build products with AI.
              </p>
            </div>
          </div>
        )}

        {hasConversation && (
          <div className="hero-message-layer absolute inset-x-0 top-0 bottom-[200px] z-[2] flex flex-col justify-start pt-[8vh] md:pt-[10vh]">
            <div
              ref={messagesRef}
              className="w-full flex-1 min-h-0 overflow-y-auto flex flex-col gap-[28px]"
            >
              {turns.map((turn) => (
                <div key={turn.id} className="flex flex-col gap-[20px]">
                  <div className="flex justify-end">
                    <div className="hero-message-pop max-w-[70%] px-[18px] py-[14px] rounded-[22px] bg-[#f2f2f2]">
                      <p className="font-pretendard text-[15px] font-normal text-[#171719] tracking-[-0.3px] leading-[1.6] text-left">
                        {turn.question}
                      </p>
                    </div>
                  </div>

                  {turn.phase === "thinking" && <ThinkingIndicator />}

                  {turn.phase === "done" && turn.answerText && (
                    <div className="hero-message-pop flex flex-col gap-[12px]">
                      <p className="text-[13px] font-medium text-[#171719] tracking-[0.04em] uppercase">
                        ● YUNJEONG
                      </p>
                      <p className="font-pretendard text-[16px] font-normal text-[#404040] tracking-[-0.32px] leading-[1.75]">
                        {turn.answerText}
                      </p>
                      {turn.link && (
                        <button
                          type="button"
                          onClick={turn.link.onClick}
                          className="self-start text-[14px] font-medium text-[#171719] tracking-[-0.28px] bg-transparent border-0 p-0 cursor-pointer hover:underline underline-offset-4 transition-colors"
                        >
                          {turn.link.label}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex-1 min-h-0" />

        <div className="hero-input-layer w-full shrink-0 z-[2] flex flex-col items-center gap-[18px]">
          {renderInputBlock()}
        </div>
      </div>
    </section>
  );
}

export const HOME_CHIP_RESPONSES: Record<string, string> = {
  "Case Studies":
    "Here are my featured case studies — from commerce AI interface design to product discovery and validation.",
  "Show Case Studies":
    "Here are my featured case studies — from commerce AI interface design to product discovery and validation.",
  Publications:
    "I've published research on AI recommendation UX, including work in Archives of Design Research.",
  Research:
    "My research focuses on how AI recommendation interfaces affect user trust and decision-making.",
  "Coffee Chat": CHIP_RESPONSES["Let's Coffee Chat"],
  Resume: CHIP_RESPONSES.Resume,
};
