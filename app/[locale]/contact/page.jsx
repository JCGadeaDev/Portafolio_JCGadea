"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
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
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion, easeIn } from "framer-motion";
import Footer from "@/components/Footer";

const iconMap = [<FaWhatsapp key={0} />, <FaEnvelope key={1} />, <FaMapMarkerAlt key={2} />];

const Contact = () => {
  const t = useTranslations('contact');
  const infoItems = t.raw('info');
  const serviceItems = t.raw('services');

  const [formData, setFormData] = useState({
    nombre: "", apellido: "", email: "", telefono: "", servicio: "", mensaje: "",
  });
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, servicio: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t('form.sending'));
    setIsSuccess(null);

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "jcgambeta89@gmail.com",
        name: `${formData.nombre} ${formData.apellido}`,
        subject: `Nuevo mensaje desde el sitio - ${formData.servicio}`,
        message: `
          <b>Nombre:</b> ${formData.nombre} ${formData.apellido}<br/>
          <b>Email:</b> ${formData.email}<br/>
          <b>Teléfono:</b> ${formData.telefono}<br/>
          <b>Servicio:</b> ${formData.servicio}<br/><br/>
          <b>Mensaje:</b><br/>${formData.mensaje}
        `,
      }),
    });

    const data = await res.json();
    setIsSuccess(data.success);
    setStatus(data.success ? t('form.success') : t('form.error'));
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: easeIn } }}
        className="py-10"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-14">

            <div className="w-full xl:w-[58%] order-2 xl:order-none">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-6 md:p-8 glass-card-accent rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-20">
                  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 96 0 L 96 40 M 96 0 L 56 0" stroke="#22D3EE" strokeWidth="1.5" />
                    <circle cx="96" cy="0" r="2.5" fill="#22D3EE" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-accent glow-text-sm mb-2">
                    {t('title')}
                  </h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    {t('subtitle')}
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-accent/20 via-accent/10 to-transparent" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="text"  name="nombre"   placeholder={t('form.firstName')} required onChange={handleChange} />
                  <Input type="text"  name="apellido" placeholder={t('form.lastName')}  required onChange={handleChange} />
                  <Input type="email" name="email"    placeholder={t('form.email')}     required onChange={handleChange} />
                  <Input type="tel"   name="telefono" placeholder={t('form.phone')}              onChange={handleChange} />
                </div>

                <Select onValueChange={handleServiceChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t('form.selectService')} />
                  </SelectTrigger>
                  <SelectContent className="bg-secondary border-accent/20 text-white">
                    <SelectGroup>
                      <SelectLabel className="text-text-muted text-xs uppercase tracking-widest">
                        {t('form.selectLabel')}
                      </SelectLabel>
                      {serviceItems.map((service) => (
                        <SelectItem key={service.value} value={service.value} className="hover:text-accent">
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea
                  name="mensaje"
                  className="h-[160px]"
                  placeholder={t('form.message')}
                  required
                  onChange={handleChange}
                />

                <div className="flex items-center gap-4">
                  <Button type="submit" size="md" className="glow-accent-sm hover:glow-accent">
                    {t('form.submit')}
                  </Button>
                  {status && (
                    <p className={`text-sm ${isSuccess === true ? "text-accent" : isSuccess === false ? "text-red-400" : "text-text-muted"}`}>
                      {isSuccess === true ? "✓ " : isSuccess === false ? "✗ " : ""}
                      {status}
                    </p>
                  )}
                </div>
              </form>
            </div>

            <div className="flex-1 flex items-center xl:items-start justify-start order-1 xl:order-none">
              <ul className="flex flex-col gap-6 w-full">
                {infoItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 glass-card-accent rounded-xl flex items-center justify-center text-accent text-xl flex-shrink-0 group-hover:glow-accent-sm transition-all duration-300">
                      {iconMap[index]}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-text-muted text-xs uppercase tracking-widest mb-1">{item.title}</p>
                      <h3 className="text-base md:text-lg text-text-primary font-medium leading-snug">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                ))}

                <li className="mt-2 flex items-center gap-3 px-4 py-3 rounded-xl glass-card border border-accent/10">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span className="text-sm text-text-muted">
                    {t('availability')}{" "}
                    <span className="text-white font-medium">{t('responseTime')}</span>
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default Contact;
