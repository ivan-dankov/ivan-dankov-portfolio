import { motion } from "framer-motion";
import { Linkedin, Mail, FileDown } from "lucide-react";
import Footer from "../components/portfolio/Footer";

const toolGroups = [
  { 
    label: "Design", 
    tools: [
      { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
      { name: "FigJam", logo: "https://cdn.simpleicons.org/figma" }
    ] 
  },
  { 
    label: "Prototyping & Code", 
    tools: [
      { name: "Lovable", svg: '<svg width="121" height="122" viewBox="0 0 121 122" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_572_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="121" height="122"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.0687 0C55.9888 0 72.1373 16.1551 72.1373 36.0835V49.7975H84.141C104.061 49.7975 120.21 65.9526 120.21 85.8809C120.21 105.809 104.061 121.964 84.141 121.964H0V36.0835C0 16.1551 16.1485 0 36.0687 0Z" fill="url(#paint0_linear_572_319)"/></mask><g mask="url(#mask0_572_319)"><g filter="url(#filter0_f_572_319)"><ellipse cx="52.7381" cy="65.1011" rx="81.3729" ry="81.1923" fill="#4B73FF"/></g><g filter="url(#filter1_f_572_319)"><ellipse cx="61.6734" cy="20.547" rx="104.216" ry="81.1923" fill="#FF66F4"/></g><g filter="url(#filter2_f_572_319)"><ellipse cx="78.6659" cy="5.26802" rx="81.3729" ry="71.3042" fill="#FF0105"/></g><g filter="url(#filter3_f_572_319)"><ellipse cx="63.121" cy="20.5275" rx="48.9374" ry="48.8288" fill="#FE7B02"/></g></g><defs><filter id="filter0_f_572_319" x="-65.0219" y="-52.4784" width="235.52" height="235.159" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="18.1936" result="effect1_foregroundBlur_572_319"/></filter><filter id="filter1_f_572_319" x="-78.9301" y="-97.0324" width="281.208" height="235.159" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="18.1936" result="effect1_foregroundBlur_572_319"/></filter><filter id="filter2_f_572_319" x="-39.0942" y="-102.423" width="235.52" height="215.383" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="18.1936" result="effect1_foregroundBlur_572_319"/></filter><filter id="filter3_f_572_319" x="-22.2036" y="-64.6884" width="170.649" height="170.432" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="18.1936" result="effect1_foregroundBlur_572_319"/></filter><linearGradient id="paint0_linear_572_319" x1="40.4527" y1="21.4331" x2="76.9327" y2="121.971" gradientUnits="userSpaceOnUse"><stop offset="0.025" stop-color="#FF8E63"/><stop offset="0.56" stop-color="#FF7EB0"/><stop offset="0.95" stop-color="#4B73FF"/></linearGradient></defs></svg>' },
      { name: "Cursor", logo: "https://cdn.simpleicons.org/cursor" },
      { name: "Figma Make", logo: "https://cdn.simpleicons.org/figma" }
    ] 
  },
  { 
    label: "Research", 
    tools: [
      { name: "Dovetail", logo: "https://cdn.simpleicons.org/dovetail" },
      { name: "Hotjar", logo: "https://cdn.simpleicons.org/hotjar" },
      { name: "Maze", logo: "https://cdn.simpleicons.org/maze" },
      { name: "Lyssna", svg: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.7673 3.03937C34.0073 2.25937 33.2073 1.93937 32.2673 2.00937L32.1573 2.02937C31.9969 2.0631 31.8485 2.13905 31.7273 2.24937L31.6673 2.30937C31.4673 2.48937 31.2073 2.72937 30.9673 2.98937C30.1021 4.07213 29.4689 5.32138 29.1073 6.65937C28.7347 7.62432 28.5285 8.64546 28.4973 9.67937C28.5093 10.0985 28.4553 10.517 28.3373 10.9194C27.9573 12.1394 27.8773 13.4194 27.8073 14.6494L27.7773 15.2294C27.6773 16.9294 27.7173 18.5394 27.9073 20.0494C28.3473 23.5494 29.2273 26.9094 30.5173 30.0194C30.6673 30.3794 30.6473 30.6194 30.4373 30.9894C29.6784 32.3182 28.5538 33.4011 27.1973 34.1094C26.9447 34.2412 26.6757 34.3388 26.3973 34.3994C25.7873 34.5294 25.1873 34.4494 24.5773 34.1394C23.1664 33.3966 22.0256 32.2279 21.3173 30.7994C21.1773 30.4694 21.1873 30.0994 21.3573 29.7694L21.5873 29.3094C21.9073 28.6994 22.1773 28.1694 22.4073 27.6094L22.5573 27.2394L22.5717 27.205C23.0271 26.1161 23.4907 25.0073 23.8173 23.8594C24.0173 23.1294 24.1173 22.3594 24.2073 21.6094L24.3373 20.5594L24.5473 19.2294L24.9173 16.8194C24.9173 16.7905 24.9407 16.7049 24.97 16.5973C24.9915 16.5186 25.0162 16.4281 25.0373 16.3394C25.1673 15.8594 25.3473 15.1894 25.3773 14.8594C25.4973 13.5594 25.5573 10.7594 25.4573 10.1494C25.3673 9.56937 25.1373 8.26937 25.0273 7.84937C24.9073 7.42937 24.3073 6.66937 23.3473 6.28937C23.1166 6.19813 22.8684 6.15975 22.621 6.17706C22.3735 6.19436 22.133 6.26691 21.9173 6.38937C21.5673 6.58937 21.2873 6.88937 21.1373 7.25937L20.9773 7.64937L20.9647 7.6797C20.6686 8.39015 20.3644 9.12032 20.1573 9.88937C19.8773 10.9794 19.6373 12.0894 19.4073 13.1694L19.3255 13.5419C19.1322 14.4239 18.9351 15.3231 18.7073 16.1994C18.2773 17.9194 18.1073 19.7394 18.2073 21.7694C18.2273 22.2194 18.2973 22.6694 18.3673 23.0894L18.3848 23.1984C18.4599 23.6646 18.5373 24.1456 18.5373 24.6094C18.5551 25.842 18.6856 27.0705 18.9273 28.2794C18.9673 28.4994 19.1373 29.0494 19.3073 29.5894L19.4073 29.8894C19.5073 30.2194 19.4873 30.5894 19.3373 30.9094L19.2173 31.2094C18.9566 31.8878 18.6212 32.5351 18.2173 33.1394C17.7765 33.7289 17.1491 34.1518 16.4373 34.3394C15.9333 34.4587 15.406 34.4349 14.9148 34.2706C14.4236 34.1063 13.9881 33.808 13.6573 33.4094C13.5683 33.3087 13.506 33.1872 13.4763 33.0561C13.4466 32.9251 13.4504 32.7886 13.4873 32.6594L13.5773 32.3994L13.6973 32.0094L13.9873 30.9594C14.2273 30.1494 14.4673 29.2994 14.5673 28.4594C14.5917 28.1913 14.6557 27.9364 14.7217 27.6733C14.7369 27.6125 14.7523 27.5513 14.7673 27.4894C14.8973 27.0094 15.0273 26.5194 15.0173 25.9694C14.9978 25.2678 15.1777 24.5758 15.372 23.8285L15.3873 23.7694C15.4773 23.4294 15.5673 23.0694 15.6373 22.7094L15.7073 22.4094C15.7873 22.0494 15.8673 21.6594 15.8373 21.2794C15.7758 20.6902 15.8225 20.1011 15.8686 19.5187C15.875 19.4388 15.8813 19.359 15.8873 19.2794L15.9573 18.4794C16.1273 15.6694 16.0373 13.5194 15.6473 11.5094C15.4673 10.6094 15.2473 9.72937 14.5273 9.08937C14.4221 8.99776 14.2954 8.93415 14.1591 8.90444C14.0228 8.87472 13.8811 8.87986 13.7473 8.91937C13.3173 9.03937 12.8973 9.19937 12.5773 9.69937L12.2973 10.1294L12.2941 10.1341C11.8555 10.7821 11.4767 11.3417 11.2173 12.2794L10.9873 13.0794L10.9807 13.1022C10.6628 14.195 10.3363 15.3173 10.1873 16.4494C10.0891 17.1564 10.0488 17.8828 10.0095 18.5906L10.0073 18.6294L10.0053 18.6721C9.97592 19.2788 9.94571 19.9036 9.87731 20.5094C9.79731 21.1894 9.77731 21.8094 9.82731 22.3794L10.0273 24.3294C10.1473 25.4094 10.2673 26.5294 10.3073 27.6294C10.3173 28.1894 10.4073 28.7294 10.5073 29.2494L10.6273 29.9494C10.7473 30.7694 11.0673 31.5494 11.3873 32.3194C11.8873 33.5194 11.7873 33.9094 10.8073 34.7194C10.5073 34.9594 10.2073 35.1194 9.90731 35.1794C9.23731 35.3194 8.58731 35.0494 7.94731 34.3694C6.76673 33.1003 6.3024 31.444 5.84965 29.8291L5.82731 29.7494L5.80852 29.6801C5.46948 28.4311 5.25894 27.6554 5.34731 26.3494C5.35731 26.2094 5.34731 25.7894 5.32731 25.0494C5.27131 23.7934 5.26798 22.5356 5.31732 21.2794C5.38284 20.5773 5.42207 19.849 5.45963 19.1518L5.46731 19.0094C5.4555 17.8768 5.58995 16.7475 5.86732 15.6494C5.88866 15.5469 5.91091 15.4436 5.93329 15.3397C6.0158 14.9564 6.10012 14.5648 6.14732 14.1794C6.15707 14.1063 6.15203 14.032 6.1325 13.9609C6.11298 13.8898 6.07936 13.8234 6.03365 13.7656C5.98794 13.7077 5.93107 13.6597 5.86642 13.6243C5.80177 13.5888 5.73066 13.5668 5.65731 13.5594L5.48731 13.5394H5.30731C5.10731 13.5894 4.94732 13.7394 4.89732 13.9394C4.72732 14.5394 4.55731 15.5694 4.51731 15.8694L4.44731 16.3194L4.43225 16.4157C4.28674 17.3461 4.13564 18.3124 4.0873 19.2694C4.04581 20.0164 4.03875 20.7771 4.03184 21.5231C4.03042 21.6759 4.02901 21.8281 4.02731 21.9794L4.01731 23.8194C3.95731 25.8594 4.01732 28.2694 4.78732 30.6594C5.24732 32.0994 5.8873 33.5394 6.7273 35.0594C7.4273 36.3094 9.08732 36.6794 10.3673 36.4094C10.7773 36.3094 11.1473 36.1694 11.4273 35.9694C11.8516 35.6733 12.1104 35.2799 12.3574 34.9044L12.3673 34.8894L12.4473 34.7694C12.5019 34.6918 12.5843 34.6381 12.6773 34.6195C12.7704 34.6009 12.867 34.6187 12.9473 34.6694L13.0373 34.7094L14.2073 35.4194C15.1573 35.9794 16.2273 35.9194 16.9673 35.7594C17.8073 35.5794 18.6073 34.9594 19.1673 34.0794C19.4653 33.6111 19.7125 33.1211 19.9708 32.6093C20.0158 32.52 20.0612 32.43 20.1073 32.3394L20.2873 31.9694C20.2914 31.9618 20.2971 31.9552 20.304 31.95C20.3109 31.9448 20.3189 31.9412 20.3273 31.9394L20.3319 31.9391C20.3478 31.9379 20.3895 31.9348 20.4073 31.9794C20.5749 32.5627 20.8566 33.107 21.2359 33.5807C21.6152 34.0545 22.0848 34.4483 22.6173 34.7394L22.9573 34.9094L22.995 34.9282C24.1833 35.5225 25.411 36.1364 26.7073 35.8594C27.0073 35.7994 27.2873 35.6894 27.5573 35.5394C29.081 34.7804 30.3881 33.6487 31.3573 32.2494C31.3805 32.2226 31.4123 32.2049 31.4473 32.1994C31.5073 32.1994 31.5673 32.2094 31.6073 32.2494L32.0073 32.7494L32.2051 32.9855C33.0873 34.0391 34.629 35.8803 35.5273 36.7694C35.7873 37.0294 36.0273 37.1294 36.2773 37.0694C36.4393 37.0355 36.5822 36.9411 36.6769 36.8054C36.7717 36.6698 36.8112 36.5031 36.7873 36.3394C36.7273 35.9194 36.4373 35.6394 36.1873 35.4394C34.6373 34.1894 32.6773 31.3994 32.4973 30.6194C32.3486 29.9253 32.8881 28.3069 33.0727 27.7532L33.0773 27.7394L33.1373 27.5394L33.3173 26.9794C33.4073 26.7394 33.4973 26.4794 33.5473 26.2194C33.8573 24.7394 34.1473 23.5394 34.4673 22.4594C34.8177 21.2663 35.0707 20.0314 35.3191 18.8187C35.3685 18.5779 35.4176 18.3379 35.4673 18.0994L35.5673 17.5194C35.6973 16.9294 35.8273 16.2594 35.8473 15.6594C35.866 15.164 35.9371 14.7035 36.0116 14.2209L36.0273 14.1194L36.0873 13.7394C36.3873 11.6894 36.4073 9.58937 36.1373 7.11937C35.9873 5.65937 35.4873 3.76937 34.7673 3.03937Z" fill="#006E75"/></svg>' }
    ] 
  },
  { 
    label: "Tech", 
    tools: [
      { name: "HTML/CSS", logo: "https://cdn.simpleicons.org/html5" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
      { name: "React", logo: "https://cdn.simpleicons.org/react" },
      { name: "SQL", logo: "https://cdn.simpleicons.org/postgresql" }
    ] 
  },
  { 
    label: "Analytics & Growth", 
    tools: [
      { name: "GA4", logo: "https://cdn.simpleicons.org/googleanalytics" },
      { name: "Mixpanel", logo: "https://cdn.simpleicons.org/mixpanel" },
      { name: "Looker Studio", logo: "https://cdn.simpleicons.org/looker" }
    ] 
  },
  { 
    label: "Design-Code Bridge", 
    tools: [
      { name: "Storybook", logo: "https://cdn.simpleicons.org/storybook" },
      { name: "Chromatic", logo: "https://cdn.simpleicons.org/chromatic" }
    ] 
  },
];

const experience = [
  { company: "Sift", role: "Staff/Senior Product Designer", period: "2021–2025, 4.5 years", desc: "Fraud detection, analytics, design system" },
  { company: "Prjctr Design School", role: "Course Curator & Mentor", period: "2022–2023", desc: "Mentored ~60 designers" },
  { company: "VistaCreate", role: "Senior Product Designer", period: "2019–2021", desc: "Full product redesign, design system" },
  { company: "Nova Post", role: "Product Designer", period: "2018–2019", desc: "Omnichannel parcel tracking" },
  { company: "Weblium", role: "UX Designer", period: "2017–2018", desc: "0-to-1 product redesign" },
  { company: "Aimbulance", role: "UX Designer", period: "2015–2016", desc: "MasterCard, Unilever, PepsiCo" },
];

const testimonials = [
  {
    quote: "Ivan is very detail-oriented and consistently delivers thoughtful, well-executed designs. He gives feedback by first trying to understand the problem, not by reacting quickly, and is equally open to feedback from others.",
    source: "UX Research Lead, Cybersecurity B2B SaaS",
  },
  {
    quote: "Ivan's great at explaining complex stuff in a simple way — whether it's helping the team figure out a new workflow or mentoring designers. He's focused, easy to work with, and not afraid of big challenges.",
    source: "Senior Product Designer, Cybersecurity B2B SaaS",
  },
  {
    quote: "Ivan is a thoughtful and very capable product designer. He picks up context quickly, asks the right questions, and delivers high-quality work even under tight timelines.",
    source: "CEO, SalesTech AI SaaS",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-28 md:pt-36">
      <div className="max-w-2xl mx-auto px-6 md:px-12">

        {/* Photo + Bio */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-24 h-24 rounded-2xl bg-[#E8E8E4] mb-8 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              alt="Ivan Dankov"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
            I've spent 10 years designing tools for people who make high-stakes decisions with messy data — fraud analysts, payment ops, security teams. I build the interfaces and the systems behind them. Currently in Warsaw, looking for complex problems at companies that test assumptions before scaling polish.
          </p>
        </motion.section>

        {/* What I'm Looking For */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-6">What I'm looking for</p>
          <p className="text-base text-[#4A4A4A] leading-relaxed">
            I'm looking for a senior or staff product design role at a company building complex B2B tools — fraud, fintech, insurance, clinical data, anything where users make high-stakes decisions with large datasets. I want to work with teams that test before they polish and ship before they perfect.
          </p>
        </motion.section>

        {/* Tools */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-10">Tools</p>
          <div className="space-y-8">
            {toolGroups.map((group, i) => (
              <div key={i}>
                <p className="text-sm text-[#6B6B6B] mb-4 font-medium">{group.label}</p>
                <div className="flex flex-wrap gap-3">
                  {group.tools.map((tool, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 px-4 py-3 bg-white text-[#1A1A1A] text-sm rounded-xl border-2 border-[#E8E8E4] hover:border-[#6B6B6B] transition-colors"
                    >
                      {tool.svg ? (
                        <div 
                          className="w-5 h-5"
                          dangerouslySetInnerHTML={{ __html: tool.svg }}
                        />
                      ) : (
                        <img 
                          src={tool.logo} 
                          alt={tool.name}
                          className="w-5 h-5"
                        />
                      )}
                      <span className="font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-8">Experience</p>
          <div className="space-y-4">
            {experience.map((exp, i) => (
              <div key={i}>
                <p className="text-base text-[#1A1A1A]">
                  <span className="font-semibold">{exp.company}</span> — {exp.role}
                </p>
                <p className="text-sm text-[#6B6B6B] mt-1">{exp.period}</p>
                <p className="text-sm text-[#4A4A4A] mt-1">{exp.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Teaching */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-6">Teaching</p>
          <div className="space-y-2 text-sm text-[#4A4A4A] leading-relaxed">
            <p><span className="font-semibold text-[#1A1A1A]">UX Medium Course</span> — Prjctr Design School — Course curator and instructor</p>
            <p><span className="font-semibold text-[#1A1A1A]">Product Design Course</span> — Prjctr Design School — Course curator and instructor</p>
            <p>Mentored ~60 mid-level designers across both programs</p>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-8">Testimonials</p>
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <div key={i}>
                <p className="text-base text-[#4A4A4A] leading-relaxed mb-3">
                  "{t.quote}"
                </p>
                <p className="text-sm text-[#6B6B6B] italic">{t.source}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-6">Contact</p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:ivandankovdigital@gmail.com"
              className="flex items-center gap-3 text-[#1A1A1A] hover:opacity-60 transition-opacity"
            >
              <Mail size={18} />
              <span className="text-sm">ivandankovdigital@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ivan-dankov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#1A1A1A] hover:opacity-60 transition-opacity"
            >
              <Linkedin size={18} />
              <span className="text-sm">Ivan Dankov</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-[#1A1A1A] hover:opacity-60 transition-opacity"
            >
              <FileDown size={18} />
              <span className="text-sm">Download CV</span>
            </a>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}