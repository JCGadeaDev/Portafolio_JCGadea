"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Front-End Development",
    description: (
      <>
        <p className="mb-1 text-justify">
          Crafting modern, responsive, and user-centered interfaces using technologies such as HTML, CSS, JavaScript, Typescript, React, Next.js, Tailwind CSS, and Oracle APEX. I focus on clean design, accessibility, and performance to ensure seamless user experiences across devices.
        </p>
        <span className="block font-semibold text-white/80">Services include:</span>
        <ul className="list-disc list-inside text-white/80 space-y-1 pl-4">
          <li>Responsive website &amp; landing page development</li>
          <li>UI implementation with TailwindCSS, Bootstrap, or custom CSS</li>
          <li>Single-page applications (SPAs) with React or Angular</li>
          <li>Oracle APEX UI components and low-code customization</li>
          <li>Accessibility-first design and semantic HTML</li>
          <li>Component-based architecture using frameworks like React and Angular</li>
          <li>Integration with REST APIs and backend services</li>
          <li>Version control and collaboration with Git and GitHub</li>
          <li>Cross-browser and cross-device compatibility testing</li>
        </ul>
      </>
    ),
    href: "",
  },
  {
    num: "02",
    title: "Data Analytics & Automation",
    description: (
      <>
        <p className="mb-1 text-justify">
          Transforming raw data into actionable insights through automation, visualization, and reporting. I use Python, Pandas, SQL, Power BI, and Matplotlib to help teams make informed, data-driven decisions.
        </p>
        <span className="block font-semibold text-white/80">Services include:</span>
        <ul className="list-disc list-inside text-white/80 space-y-1 pl-4">
          <li>Data cleaning and automation with Python</li>
          <li>SQL-based data extraction and reporting (PostgreSQL, Supabase)</li>
          <li>Interactive dashboards in Power BI</li>
          <li>Insight generation for business strategies</li>
          <li>Data visualization with Matplotlib and Seaborn</li>
          <li>Data transformation and pipeline building with Pandas</li>
          <li>Task tracking, manual data analysis, and quick reporting with Microsoft Excel</li>
          <li>Development of analytics projects using Jupyter Notebooks, in environments such as Anaconda and Google Colab.</li>
          <li>Integration of external APIs for real-time data consumption</li> 
          <li>Data storytelling: translating technical analysis into actionable insights for stakeholders</li>        
        </ul>
      </>
    ),
    href: "",
  },
  {
    num: "03",
    title: "Agile Project Management",
    description: (
      <>
        <p className="mb-1 text-justify">
          Delivering value through structured agile practices that promote collaboration, adaptability, and continuous improvement. I guide project teams through iterative cycles that align development efforts with business goals, ensuring transparency, accountability, and measurable outcomes.
        </p>
        <span className="block font-semibold text-white/80">Services include:</span>
        <ul className="list-disc list-inside text-white/80 space-y-1 pl-4">
          <li>Scrum-based sprint planning, reviews, and retrospectives</li>
          <li>Backlog management, prioritization, and refinement sessions</li>
          <li>Daily stand-ups and team facilitation to remove blockers</li>
          <li>Stakeholder communication and reporting aligned with KPIs</li>
          <li>Coordination across cross-functional and distributed teams</li>
          <li>Project documentation and knowledge sharing using Trello, Notion, Sharepoint, Miro, Jira and Confluence</li>
          <li>Integration of agile practices into hybrid or remote workflows</li>
        </ul>
      </>
    ),
    href: "",
  },
  {
    num: "04",
    title: "End-to-End Digital Solutions",
    description: (
      <>
        <p className="mb-1 text-justify">
          Combining front-end, back-end, and data strategy to deliver complete, scalable, and business-driven applications. From concept to deployment, I align technical execution with real-world needs.
        </p>
        <span className="block font-semibold text-white/80">Services include:</span>
        <ul className="list-disc list-inside text-white/80 space-y-1 pl-4">
          <li>Full-stack MVPs using Node.js and Express</li>
          <li>API integration and testing with Postman and Swagger UI</li>
          <li>Low-code and rapid prototyping with Oracle APEX</li>
          <li>Serverless and real-time solutions using Supabase</li>
          <li>Cloud deployment and infrastructure on Azure and AWS</li>
          <li>Solution design that bridges business and technology</li>
          <li>Test automation using Playwright for end-to-end testing workflows</li>
          <li>Currently exploring Model Context Protocol (MCP) to enable intelligent, modular, and context-aware digital agents.</li>
        </ul>
      </>
    ),
    href: "",
  },
   {
    num: "05",
    title: "Copywriting & Digital Content Strategy",
    description: (
      <>
        <p className="mb-1 text-justify">
          Creating compelling copy and strategic content to boost engagement, visibility, and community alignment. I contributed as a copywriter for WordCamp Nicaragua 2025, crafting targeted messaging across multiple platforms.
        </p>
        <span className="block font-semibold text-white/80">Services include:</span>
        <ul className="list-disc list-inside text-white/80 space-y-1 pl-4">
          <li>Copywriting for social media posts (inbound & outbound focus)</li>
          <li>Email marketing campaign development using Mailchimp</li>
          <li>Content strategy for attracting attendees, sponsors, and volunteers</li>
          <li>Messaging coordination with the organizing team to ensure brand consistency</li>
          <li>Use of AI tools to automate and optimize content creation</li>
          <li>Improved campaign efficiency and event reach through strategic automation</li>
        </ul>
      </>
    ),
    href: "",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-8 sm:py-10 md:py-12 xl:py-0">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] max-w-[90%] md:max-w-none mx-auto"
        >
          {services.map((service, index) => {
            const isLastCard = index === services.length - 1;
            const isOddTotal = services.length % 2 !== 0;

            return (
              <div
                key={index}
                className={`
                  flex flex-col justify-between h-full 
                  min-h-[420px] sm:min-h-[480px] md:min-h-[520px] 
                  p-4 sm:p-6 md:p-8 
                  bg-[#18181b] rounded-2xl shadow-lg 
                  group transition-all duration-500
                  ${isLastCard && isOddTotal ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}
                `}
              >
                {/* top */}
                <div className="w-full flex justify-between items-center mb-4">
                  <div className="text-4xl sm:text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-12 h-12 sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl sm:text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-xl sm:text-2xl md:text-[32px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 mb-2 text-center min-h-[60px] sm:min-h-[70px] md:min-h-[80px] flex items-center justify-center">
                  {service.title}
                </h2>
                {/* description*/}
                <div className="text-white/80 text-justify flex-1 flex flex-col justify-between text-sm sm:text-base">
                  {service.description}
                </div>
                {/*border */}
                <div className="border-b border-white/20 w-full mt-6"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;