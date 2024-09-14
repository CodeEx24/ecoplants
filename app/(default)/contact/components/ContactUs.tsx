import React from "react";
import { motion } from "framer-motion";
import { FADE_UP, FADE_UP_STAGGER } from "@/lib/motion/motion";
import { contactData } from "@/constants/contactData";

export default function ContactUs() {
  return (
    <section className="base-padding my-20 space-y-20">
      <div className="space-y-8">
        <motion.h2
          variants={FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-bold"
        >
          Contact Us
        </motion.h2>
        <motion.div
          variants={FADE_UP_STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 grid grid-cols-1 space-y-8 md:grid-cols-3 md:gap-8 md:space-y-0"
        >
          {contactData.map((contact, index) => (
            <motion.div
              variants={FADE_UP}
              key={`${index}${contact.title}`}
              className="flex h-full w-full flex-col items-center justify-center rounded-2xl px-4 md:justify-start md:border-2 md:py-8"
            >
              <div className="size-20 rounded-full border-2 border-dashed p-6">
                <div className="h-full w-full text-secondary-foreground">
                  {contact.src}
                </div>
              </div>

              <h3 className="mb-2 mt-4 text-lg font-bold">{contact.title}</h3>
              {typeof contact.value === "string" ? (
                <p className="max-w-[300px] text-center text-gray-300">
                  {contact.value}
                </p>
              ) : (
                <div>
                  {contact.value.map((value) => (
                    <p
                      className="max-w-[300px] text-center text-gray-300"
                      key={`${value}`}
                    >
                      {value}
                    </p>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
