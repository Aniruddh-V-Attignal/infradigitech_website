"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  UserCog,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  BadgeCheck,
  Globe,
} from "lucide-react";

import { siteConfig, buildSalesWhatsAppLink } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-graphite-950 text-white min-h-[920px] sm:min-h-[760px] lg:min-h-[720px]">
      {/* Background image — priority (LCP candidate), served via next/image
          so Next pumps out an AVIF/WebP from the source PNG and adds the
          right srcset for retina + mobile widths. */}
      <Image
        src="/images/heroimage.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          absolute inset-0 z-0 h-full w-full object-cover
          object-[58%_center]
          sm:object-[60%_center]
          lg:object-center
          scale-[1.03]
          blur-[2px]
          brightness-[0.92]
        "
        aria-hidden="true"
      />

      {/* Balanced readability overlay */}
      <div
        className="
          absolute inset-0 z-[1]

          bg-gradient-to-b
          from-black/78
          via-black/48
          to-black/65

          sm:bg-gradient-to-r
          sm:from-black/68
          sm:via-black/34
          sm:to-black/8

          lg:from-black/72
          lg:via-black/36
          lg:to-black/5
        "
        aria-hidden
      />

      {/* Extra left-side readability only */}
      <div
        className="
          absolute inset-y-0 left-0 z-[1] w-full lg:w-[58%]
          bg-gradient-to-r from-black/45 via-black/20 to-transparent
        "
        aria-hidden
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-[1] bg-gradient-to-b from-transparent to-graphite-950/85"
        aria-hidden
      />

      <div className="container-default relative z-10 pt-12 pb-24 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT CONTENT — animated, but starts visible so Lighthouse can
              measure the h1 as the LCP element. Previous version used
              opacity: 0 -> 1 which hid the LCP from Lighthouse and produced
              NO_LCP errors in performance reports. */}
          <motion.div
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative z-20"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyanx-400/20 bg-black/30 px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-cyanx-400 backdrop-blur-md">
              <ShieldCheck size={14} />
              ISO · CE · GeM · MSME · DGFT Registered Manufacturer
            </span>

            <h1 className="mt-6 max-w-4xl text-[42px] leading-[0.95] sm:text-6xl lg:text-7xl font-extrabold font-display text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
              Smart Queue, Nurse Call{" "}
              <span className="bg-gradient-to-r from-cyanx-400 to-brand-300 bg-clip-text text-transparent">
                & Software Solutions
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              {siteConfig.shortName} manufactures intelligent Nurse Call and Queue Management Systems, along with digital display and software solutions for healthcare, BFSI and enterprise environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/case-studies" className="btn-primary shadow-xl">
                Success Stories <ArrowRight size={16} />
              </Link>

              <Link href="/products" className="btn-secondary shadow-xl">
                Explore Products
              </Link>

              <a
                href={buildSalesWhatsAppLink()}
                target="_blank"
                rel="noopener"
                className="btn-whatsapp shadow-xl"
              >
                <MessageCircle size={16} />
                WhatsApp Sales
              </a>
            </div>

            {/* Animated Stats */}
            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              <Stat label="Years of expertise" end={25} suffix="+" />
              <Stat label="Installations" end={5.5} suffix="K+" decimal />
              <Stat label="Happy Clients" end={3} suffix="K+" />
            </div>
          </motion.div>

          {/* RIGHT FEATURE CARDS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 mt-10 lg:mt-0 relative z-20"
          >
            <div
              className="
                grid gap-3 sm:gap-4
                grid-cols-1
                xs:grid-cols-2
                sm:grid-cols-2
                lg:grid-cols-2
              "
            >
               {/* <FeatureTile
                icon={<BadgeCheck className="text-cyanx-400" size={22} />}
                title="Made in India"
                sub="Designed & manufactured in Bengaluru, Karnataka"
              />

              <FeatureTile
                icon={<Globe className="text-cyanx-400" size={22} />}
                title="Export Ready"
                sub="GCC · SE-Asia · Africa"
              />

              <FeatureTile
                icon={<UserCog className="text-cyanx-400" size={22} />}
                title="Service Support"
                sub="Remote & On-site technical assistance"
              />

              <FeatureTile
                icon={<MapPin className="text-cyanx-400" size={22} />}
                title="PAN India Network"
                sub="Distribution & Project support across India"
              /> */}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-graphite-950" />
    </section>
  );
}

function Stat({ label, end, suffix, decimal = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
  if (!isInView) {
    setCount(0);
    return;
  }

  const duration = 1400;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = end * eased;

    setCount(value);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, [isInView, end]);

  const displayValue = decimal ? count.toFixed(1) : Math.floor(count);

  return (
    <div ref={ref} className="border-l border-white/20 pl-3 sm:pl-4">
      <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
        {displayValue}
        {suffix}
      </div>

      <div className="mt-1 text-[9px] sm:text-xs uppercase tracking-wider text-white/75 leading-tight">
        {label}
      </div>
    </div>
  );
}

function FeatureTile({ icon, title, sub }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
        group cursor-pointer rounded-2xl border border-white/12
        bg-black/30 backdrop-blur-xl
        p-4 sm:p-5
        hover:bg-black/45
        hover:border-cyanx-400/40
        transition-all duration-300
        shadow-[0_8px_25px_rgba(0,0,0,0.25)]
        hover:shadow-[0_14px_40px_rgba(0,180,255,0.25)]
      "
    >
      <div className="flex items-start gap-2 sm:gap-3">
        <div className="shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
          {icon}
        </div>

        <div>
          <div className="font-semibold text-white text-base sm:text-lg leading-tight">
            {title}
          </div>

          <div className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/75">
            {sub}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
