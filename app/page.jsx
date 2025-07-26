import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import Footer from "components/Footer";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none  ">
            <span className="text-xl">
              Frontend Developer - Data Analyst - Project Manager
            </span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Juan Carlos Gadea</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-justify">
              I’m a technology professional focused on building digital solutions that deliver real-world impact, combining front-end development, data analysis, and agile project management. I bring value by integrating technology, design, and strategy to solve business challenges effectively.  I work with HTML, CSS, JavaScript, React, Next.js, Tailwind, Node.js, and Oracle APEX to create clean, user-focused interfaces. I also leverage tools like Python, SQL, and Power BI to automate processes and extract insights that drive smart decision-making.
            </p>
            {/* btns and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
             <a href="/CV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
