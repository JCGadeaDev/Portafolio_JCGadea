"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion, easeIn } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+505)85785399 - (+39)3444528131",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jcgambeta89@gmail.com - gadeanova070189@hotmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: easeIn },
      }}
      className="py-10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-10">
          {/* form block */}
          <div className="w-full xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-6 md:p-8 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl md:text-4xl text-accent">
                Let's work together
              </h3>
              <p className="text-white/60 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                debitis soluta, asperiores facilis rerum corporis accusantium
                temporibus sed placeat et distinctio veritatis alias ex nobis
                est nesciunt unde deserunt excepturi?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="tel" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="app-dev">App Development</SelectItem>
                    <SelectItem value="design">UI/UX Design</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[160px]"
                placeholder="Type your message here."
              />
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          {/* info block */}
          <div className="flex-1 flex items-center justify-start xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8 w-full">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-[52px] h-[52px] md:w-[64px] md:h-[64px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[24px] md:text-[28px]">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm md:text-base">
                      {item.title}
                    </p>
                    <h3 className="text-lg md:text-xl">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
