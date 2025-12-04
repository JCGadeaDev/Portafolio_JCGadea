"use client";

import { useState } from "react";
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

const info = [
  {
    icon: <FaWhatsapp />,
    title: "Teléfono",
    description: "(+505)85785399 / (+39)3513183823",
  },
  {
    icon: <FaEnvelope />,
    title: "Correo",
    description: "jcgambeta89@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Ubicación",
    description: "Disponible para trabajo remoto",
  },
];

const services = [
  { value: "desarrollo-web", label: "Desarrollo Web y Experiencia de Usuario (UX)" },
  { value: "seo-sem", label: "SEO, SEM y Estrategia Digital" },
  { value: "analisis-datos", label: "Análisis de Datos e Inteligencia de Negocio" },
  { value: "gestion-proyectos", label: "Gestión Ágil de Proyectos Tecnológicos" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, servicio: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "jcgambeta89@gmail.com", // Puedes cambiarlo o hacerlo dinámico
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
    setStatus(data.success ? "✅ Mensaje enviado correctamente" : "❌ Error al enviar el mensaje");
  };

  return (
    <>
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
            {/* --- FORMULARIO --- */}
            <div className="w-full xl:w-[54%] order-2 xl:order-none">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-6 md:p-8 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-3xl md:text-4xl text-accent">Trabajemos juntos</h3>
                <p className="text-white/60 text-sm md:text-base">
                  Si tienes una pregunta, una propuesta o simplemente quieres saludar, no dudes en completar el formulario. ¡Me encantaría saber de ti!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="text" name="nombre" placeholder="Nombre" required onChange={handleChange} />
                  <Input type="text" name="apellido" placeholder="Apellido" required onChange={handleChange} />
                  <Input type="email" name="email" placeholder="Correo electrónico" required onChange={handleChange} />
                  <Input type="tel" name="telefono" placeholder="Número de teléfono" onChange={handleChange} />
                </div>

                <Select onValueChange={handleServiceChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un servicio de interés" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#27272c] border-accent text-white">
                    <SelectGroup>
                      <SelectLabel>Mis Servicios</SelectLabel>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea
                  name="mensaje"
                  className="h-[160px]"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  onChange={handleChange}
                />

                <Button type="submit" size="md" className="max-w-40">
                  Enviar mensaje
                </Button>

                <p className="text-sm text-white/70">{status}</p>
              </form>
            </div>

            {/* --- INFORMACIÓN --- */}
            <div className="flex-1 flex items-center justify-start xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-8 w-full">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-[52px] h-[52px] md:w-[64px] md:h-[64px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[24px] md:text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-sm md:text-base">{item.title}</p>
                      <h3 className="text-lg md:text-xl break-words">{item.description}</h3>
                    </div>
                  </li>
                ))}
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
