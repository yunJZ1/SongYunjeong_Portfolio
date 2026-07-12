import { HOME_AI_WORKFLOW_CARDS } from "../../data/homeAiWorkflow";

export default function HomeAIWorkflowSection() {
  return (
    <section id="ai-workflow" className="scroll-mt-[24px]">
      <div className="max-w-[1480px] mx-auto px-[40px]">
        <h2 className="text-[36px] font-semibold text-[#171719] tracking-[-1.08px] leading-[1.3] mb-[64px]">
          AI Workflow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[48px]">
          {HOME_AI_WORKFLOW_CARDS.map((card) => (
            <article
              key={card.id}
              className="flex flex-col gap-[28px]"
            >
              <div
                className={`w-full aspect-[16/10] rounded-[20px] bg-gradient-to-br ${card.gradient} flex items-center justify-center overflow-hidden`}
              >
                <span className="text-[15px] font-medium text-white/40 tracking-[-0.45px]">
                  Cover Visual
                </span>
              </div>
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-pretendard text-[24px] font-semibold text-[#171719] tracking-[-0.72px] leading-[1.4]">
                  {card.title}
                </h3>
                <p className="font-pretendard text-[17px] font-normal text-[#606060] tracking-[-0.51px] leading-[1.65]">
                  {card.description}
                </p>
                <p className="text-[14px] font-medium text-[#a9a9a9] tracking-[-0.42px]">
                  {card.tools}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
