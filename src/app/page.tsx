import Link from "next/link";

type Experience = {
  icon: string;
  //iconBg: string;
  company: string;
  role: string;
  period: string;
  href: string;
};

type Contact = {
  label: string;
  value: string;
  pref: "strong" | "medium" | "weak";
  href?: string;
};

type Project = {
  name: string;
  period: string;
  href: string;
};

const contentInset = "px-4 sm:px-6 lg:px-8";

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M12 2C9.5 5 8 7.5 8 10.5c0 1.8.7 3.1 1.8 4.2-.1-2.2 1.1-4.1 2.7-5.7.1 2.3 1 3.8 2.4 5 1.2-1.2 2.1-2.9 2.1-5.2C17 6.8 15.5 4.5 12 2Z"
        fill="currentColor"
      />
      <path
        d="M12 21c3.9 0 6-2.5 6-5.7 0-1.9-.7-3.5-2-4.8-.2 1.2-.8 2.3-1.8 3.1-.1-1.4-.8-2.5-1.9-3.5-.5 1.6-1.6 2.7-2.9 3.7-1.1.9-1.8 2-1.8 3.4C7.6 19 9.5 21 12 21Z"
        fill="currentColor"
        opacity="0.92"
      />
    </svg>
  );
}

function PaperIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M7 3.5h7.2L18.5 7v13.5H7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14.2 3.5V7H18.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9.5 11h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9.5 14h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ComputerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <rect x="4" y="5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 19h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 16v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 9h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const experiences: Experience[] = [
  {
    icon: "flame",
    //iconBg: "#b45309",
    company: "IgniteCS Mentor",
    role: "mentor",
    period: "September 2025",
    href: "/experience/experience1",
  },
  {
    icon: "paper",
    //iconBg: "#0f766e",
    company: "Parent-Student Tutor",
    role: "tutor",
    period: "August 2024 - May 2025",
    href: "/experience/experience2",
  },
  {
    icon: "computer",
    //iconBg: "#4f46e5",
    company: "HacktheHood Hackathon",
    role: "participant",
    period: "October 2024",
    href: "/experience/experience3",
  },
];

const contacts: Contact[] = [
  {
    label: "email",
    value: "nicholas.perez625@gmail.com",
    href: "mailto:nicholas.perez625@gmail.com",
    pref: "strong",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/NicholasPerez2",
    href: "https://www.linkedin.com/in/NicholasPerez2",
    pref: "strong",
  },
  { label: "phone", value: "(909) 736-7236", pref: "medium" },
  {
    label: "github",
    value: "github.com/pokeysnake",
    href: "https://github.com/pokeysnake",
    pref: "weak",
  },
];

const projects: Project[] = [
  { name: "gather", period: "December 25", href: "/projects/projcet1" },
  { name: "multi-cancer detection ml system", period: "November 25", href: "/projects/project2" },
  { name: "docker clone", period: "October 25", href: "/projects/project3" },
  { name: "mini-max connect 4 vs ai", period: "March 25", href: "/projects/project4" },
  { name: "simple trading strategy backtester", period: "August 25", href: "/projects/project5" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0c0c0c] py-2 text-xs tracking-wide text-zinc-500">
      <div className={contentInset}>{children}</div>
    </div>
  );
}

type Pref = "strong" | "medium" | "weak";

const PREF_LIT_COUNT: Record<Pref, number> = {
  weak: 1,
  medium: 2,
  strong: 3,
};

function PrefBars({ pref }: { pref: Pref }) {
  const litCount = PREF_LIT_COUNT[pref];
  const heights = ["4px", "7px", "10px"];

  return (
    <span className="mr-0.5 flex h-3 items-end gap-0.5">
      {heights.map((height, i) => (
        <span
          key={i}
          className={`inline-block w-[3px] ${i < litCount ? "bg-amber-400" : "bg-zinc-700"}`}
          style={{ height }}
        />
      ))}
    </span>
  );
}

function ExperienceIcon({ icon }: { icon: Experience["icon"] }) {
  if (icon === "flame") return <FlameIcon />;
  if (icon === "paper") return <PaperIcon />;
  return <ComputerIcon />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-mono text-sm text-zinc-200">
      <div className="w-full">

        <section className="border-b border-zinc-800 bg-[#171717]">
          <SectionLabel>who am  i?</SectionLabel>
          <div className={`${contentInset} flex items-center gap-4 py-[18px]`}>
            <div>
              <div className="text-[15px] font-semibold">Nicholas Perez</div>
              <div className="mt-0.5 text-zinc-400">software engineer</div>
            </div>
            <div className="ml-auto text-right text-[12.5px] leading-6 text-zinc-600">
              currently learning/coding:
              <br />
              distributed file systems in c++
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-800">
          <SectionLabel>experiences</SectionLabel>
          {experiences.map((item) => (
            <Link
              key={`${item.company}-${item.period}`}
              href={item.href}
              className="rounded-none transition-all duration-200 hover:rounded-xl block cursor-pointer hover:bg-[#1a1a1a] px-4"
            >
              <div className={`${contentInset} flex items-center py-2.5`}>
                <span
                  className="mr-2.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded text-xs text-white "
                  //style={{ background: item.iconBg }}
                >
                    <ExperienceIcon icon={item.icon} />
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-semibold text-zinc-200">{item.company}</span>
                  <span className="text-[13px] text-zinc-500">/ {item.role}</span>
                </div>
                <div className="ml-auto flex items-center gap-2 text-[13px] text-zinc-500">
                  {item.period}
                  <span className="text-zinc-600">›</span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="border-b border-zinc-800">
          <SectionLabel>resume</SectionLabel>
          <a
            href="/NicholasPerez_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="block rounded-none transition-all duration-200 hover:rounded-xl cursor-pointer hover:bg-[#1a1a1a] px-4"
          >
            <div className={`${contentInset} flex items-center py-2.5`}>
              <span className="mr-2.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded text-white">
                <PaperIcon />
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-semibold text-zinc-200">NicholasPerezResume</span>
                <span className="text-[13px] text-zinc-500">/ pdf</span>
              </div>
              <div className="ml-auto text-[13px] text-zinc-500">latest</div>
            </div>
          </a>
        </section>

        <section className="border-b border-zinc-800">
          <SectionLabel>contacts</SectionLabel>
          {contacts.map((item) => (
            <div key={item.label} className="rounded-none transition-all duration-200 hover:rounded-xl hover:bg-[#1a1a1a] px-4">
              <div className={`${contentInset} flex items-center py-2.5`}>
                <span className="w-[70px] shrink-0 font-semibold">{item.label}</span>
                <span className="mr-2 text-zinc-700">/</span>
                <span className="flex-1 text-zinc-400">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-zinc-200">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </span>
                <span className="mr-2 text-zinc-600">pref:</span>
                <PrefBars pref={item.pref} />
              </div>
            </div>
          ))}
        </section>

        <section className="border-b border-zinc-800">
          <SectionLabel>projects</SectionLabel>
          {projects.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className=" rounded-none transition-all duration-200 hover:rounded-xl block cursor-pointer hover:bg-[#1a1a1a] px-4"
            >
              <span className={`${contentInset} flex items-center py-2.5`}>
                <span className="font-semibold">{item.name}</span>
                <span className="ml-auto flex items-center gap-2 text-[13px] text-zinc-500">
                  {item.period}
                  <span className="text-zinc-600">›</span>
                </span>
              </span>
            </Link>
          ))}
        </section>

        <section>
          <SectionLabel>spotify (top 5 tracks)</SectionLabel>
          <div className={`${contentInset} flex items-center py-2.5`}>
            <span className="mr-2.5 text-amber-400">♪</span>
            <span className="font-semibold">are u srs</span>
            <span className="ml-1.5 text-[13px] text-zinc-500">/ right neow bro</span>
            <span className="ml-auto text-[13px] text-zinc-600">spotiy api error... bruh</span>
          </div>
        </section>

      </div>
    </div>
  );
}