"use client";
import React from "react";
import { motion } from "framer-motion";
import { FADE_UP } from "@/lib/motion/motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function RequestAQuote() {
  return (
    <section className="base-padding my-20 space-y-20">
      <div className="relative z-10 flex w-full flex-col justify-center space-y-8">
        <div className="space-y-4">
          <motion.h3
            variants={FADE_UP}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center font-bold"
          >
            Request A Quote
          </motion.h3>
          <motion.p
            variants={FADE_UP}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="items-center text-center sm:px-24"
          >
            Continually productize compelling quality for packed in business
            consulting Setting up to website and creating pages.
          </motion.p>
        </div>
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex w-full justify-center"
        >
          <div className="relative z-10 grid w-[800px] grid-cols-1 gap-6 md:grid-cols-2">
            <Input placeholder="Full Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Enter Your Subject" className="lg:col-span-2" />
            <Textarea
              rows={4}
              placeholder="Type your message here."
              className="lg:col-span-2"
            />
            <Button className="h-12 w-full lg:col-span-2">
              Sent a Message
            </Button>
          </div>
        </motion.div>
        <div></div>
      </div>
    </section>
  );
}
