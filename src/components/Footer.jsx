import Logo from "./Logo.jsx";

const COLUMNS = [
  {
    title: "Product",
    links: [["Platform", "#features"], ["How it works", "#how-it-works"], ["Pricing", "#pricing"], ["Security", "#"]],
  },
  {
    title: "Company",
    links: [["About", "#"], ["Careers", "#"], ["Contact", "#"]],
  },
  {
    title: "Resources",
    links: [["Docs", "#"], ["Blog", "#"], ["Changelog", "#"]],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e4e7f0] bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo height={34} />
            <p className="mt-4 max-w-xs text-[14px] leading-[1.7] text-[#444444]">
              Continuous architecture intelligence for Salesforce — read-only, always on.
            </p>
            <a
              href="https://calendly.com/neuzenai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-[#000000] text-white text-[12px] font-bold px-4 py-2.5 rounded-lg hover:bg-[#1552D2] transition-colors duration-200"
            >
              Book a demo
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] font-black tracking-[0.18em] uppercase text-[#000000] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(([link, href]) => (
                  <li key={link}>
                    <a
                      href={href}
                      className="text-[14px] text-[#555555] hover:text-[#1552D2] transition-colors duration-200 font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#e4e7f0] pt-8 sm:flex-row">
          <p className="text-[13px] text-[#555555]">
            © {new Date().getFullYear()} ArQPulse. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] text-[#555555]">
            <a href="#" className="hover:text-[#1552D2] transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-[#1552D2] transition-colors duration-200">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
