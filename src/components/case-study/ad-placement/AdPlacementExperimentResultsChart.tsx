import {
  PROJECT01_BODY_CLASS,
  PROJECT01_CAPTION_CLASS,
  PROJECT01_SUBHEADING_CLASS,
} from "../project01/project01Styles";

const RESULT_ROWS = [
  {
    type: "A",
    label: "Social Proof",
    deception: 2.45,
    utility: 3.81,
    satisfaction: 3.32,
    highlight: false,
  },
  {
    type: "B",
    label: "Confirmshaming",
    deception: 3.33,
    utility: 3.25,
    satisfaction: 2.99,
    highlight: true,
  },
  {
    type: "C",
    label: "Scarcity",
    deception: 2.76,
    utility: 3.55,
    satisfaction: 3.17,
    highlight: false,
  },
] as const;

const MAX_DECEPTION = 4;

export default function AdPlacementExperimentResultsChart() {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[6px]">
        <p className={PROJECT01_SUBHEADING_CLASS}>Quantitative Results</p>
        <p className={PROJECT01_CAPTION_CLASS}>
          SPSS · One-way ANOVA – Scheffe Analysis (n=51)
        </p>
      </div>

      <div className="rounded-[16px] border border-[#e5e5e5] overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] text-left border-collapse">
            <thead>
              <tr className="bg-[#fafafa] border-b border-[#e5e5e5]">
                <th className="px-[16px] py-[12px] text-[12px] font-semibold text-[#737373] tracking-[-0.24px]">
                  Type
                </th>
                <th className="px-[16px] py-[12px] text-[12px] font-semibold text-[#737373] tracking-[-0.24px]">
                  Pattern
                </th>
                <th className="px-[16px] py-[12px] text-[12px] font-semibold text-[#737373] tracking-[-0.24px]">
                  기만감
                </th>
                <th className="px-[16px] py-[12px] text-[12px] font-semibold text-[#737373] tracking-[-0.24px]">
                  유용성
                </th>
                <th className="px-[16px] py-[12px] text-[12px] font-semibold text-[#737373] tracking-[-0.24px]">
                  만족도
                </th>
              </tr>
            </thead>
            <tbody>
              {RESULT_ROWS.map((row) => (
                <tr
                  key={row.type}
                  className={`border-b border-[#f0f0f0] last:border-b-0 ${
                    row.highlight ? "bg-[#fffafa]" : ""
                  }`}
                >
                  <td className="px-[16px] py-[14px] text-[14px] font-semibold text-[#171719]">
                    {row.type}
                  </td>
                  <td className="px-[16px] py-[14px] text-[14px] font-medium text-[#171719]">
                    {row.label}
                  </td>
                  <td className="px-[16px] py-[14px] text-[14px] font-semibold text-[#171719]">
                    {row.deception.toFixed(2)}
                  </td>
                  <td className="px-[16px] py-[14px] text-[14px] text-[#606060]">
                    {row.utility.toFixed(2)}
                  </td>
                  <td className="px-[16px] py-[14px] text-[14px] text-[#606060]">
                    {row.satisfaction.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <p className={PROJECT01_CAPTION_CLASS}>기만감 (Deception) comparison</p>
        <div className="flex flex-col gap-[10px]">
          {RESULT_ROWS.map((row) => (
            <div key={row.type} className="flex flex-col gap-[6px]">
              <div className="flex items-center justify-between gap-[12px]">
                <span className="text-[13px] font-medium text-[#171719] tracking-[-0.26px]">
                  {row.label}
                </span>
                <span className="text-[13px] font-semibold text-[#171719]">
                  {row.deception.toFixed(2)}
                </span>
              </div>
              <div className="h-[8px] rounded-full bg-[#f0f0f0] overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    row.highlight ? "bg-[#ef4444]" : "bg-[#94a3b8]"
                  }`}
                  style={{ width: `${(row.deception / MAX_DECEPTION) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className={PROJECT01_BODY_CLASS}>
        Confirmshaming(Type B)이 기만감에서 가장 높은 수치를 기록했고, Social
        Proof(Type A) 대비 거부 반응은 약 2.6배 차이가 났습니다.
      </p>
    </div>
  );
}
