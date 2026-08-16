import React from "react";

export default function CompanyMarquee() {
  const companies = [
    "Salesforce",
    "Accenture",
    "Deloitte",
    "Capgemini",
    "IBM",
    "Cognizant",
    "Infosys",
    "Wipro",
    "TCS",
    "PwC",
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.12em] text-[#1552D2]">SALESFORCE-NATIVE</div>
        <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0b1220] mt-3">Deep across the entire Salesforce estate</h3>
        <p className="mt-3 text-[15px] text-[#52627f] max-w-2xl mx-auto">
          Metadata, code, automation, security, integrations and licenses — analyzed with architect-grade depth.
        </p>
      </div>

      <div className="overflow-hidden mt-6">
        <div className="marquee flex gap-10 items-center">
          {companies.concat(companies).map((c, i) => (
            <div key={`${c}-${i}`} className="marq-item text-[15px] font-semibold text-[#333333] whitespace-nowrap">
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
