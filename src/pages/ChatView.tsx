import { useEffect, useRef } from "react";
import ChipButtons from "../components/ChipButtons";
import type { Message } from "../types";

type ChatViewProps = {
  messages: Message[];
  input: string;
  onInputChange: (value: string) => void;
  onSendMessage: (text: string) => void;
};

export default function ChatView({
  messages,
  input,
  onInputChange,
  onSendMessage,
}: ChatViewProps) {
  const messagesScrollRef = useRef<HTMLDivElement>(null);
  const hasMessages = messages.length > 0;

  useEffect(() => {
    const el = messagesScrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  function handleChipClick(chip: string) {
    onSendMessage(chip);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onSendMessage(input);
      onInputChange("");
    }
  }

  return (
    <main className="flex-1 min-h-0 flex flex-col relative">
      <div
        ref={messagesScrollRef}
        className="flex-1 min-h-0 overflow-y-auto px-[40px] pt-[40px] pb-[24px]"
      >
        {hasMessages ? (
          <div className="max-w-[800px] mx-auto flex flex-col gap-[24px]">
            {messages.map((msg, i) =>
              msg.role === "user" ? (
                <div key={i} className="flex justify-end">
                  <div className="bg-[#def5ff] border-[0.7px] border-[#009cff] rounded-[10px] px-[16px] py-[13px] max-w-[70%]">
                    <p className="text-[20px] font-medium text-[#171719] tracking-[-0.6px] leading-[1.467]">
                      {msg.text}
                    </p>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex flex-col gap-[12px] max-w-[85%]">
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[17px] font-medium text-[#606060] tracking-[-0.51px] leading-[1.467]">
                      Thought for
                    </span>
                    <span className="text-[17px] font-medium text-[#a9a9a9] tracking-[-0.51px] leading-[1.467]">
                      0.02s
                    </span>
                  </div>
                  <p className="font-pretendard text-[20px] font-normal text-[#161616] tracking-[-0.6px] leading-[1.71]">
                    {msg.text}
                  </p>
                </div>
              )
            )}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center px-[40px]">
            <div className="flex flex-col items-center gap-[8px]">
              <h1 className="text-[42px] font-semibold text-[#171719] tracking-[-1.26px] leading-[1.35]">
                What problem should I solve today?
              </h1>
              <p className="text-[42px] font-semibold text-[#171719] tracking-[-1.26px] leading-[1.35]">
                I design and build products with AI.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="shrink-0 px-[40px] pb-[32px] pt-[16px] bg-white border-t border-transparent">
        <div className="max-w-[800px] mx-auto">
          <ChipButtons onChipClick={handleChipClick} />
          <div className="bg-white border-[1.4px] border-[#e4e4e4] rounded-[18px] shadow-[0px_7px_21.8px_0px_rgba(0,0,0,0.07)] h-[101px] flex items-start px-[19px] py-[14px]">
            <input
              type="text"
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me Something"
              className="w-full bg-transparent border-0 outline-none text-[20px] font-medium text-[#161616] placeholder-[#bdbdbd] tracking-[-0.6px] leading-[1.71]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
