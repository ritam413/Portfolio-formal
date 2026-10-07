"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 shadow-md z-50 cursor-pointer"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer transition-colors bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800"
          >
            <div className="flex gap-3 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-36 sm:h-40 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col text-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-sm md:text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "AI / Fintech",
    title: "Tax Explainer",
    src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    ctaText: "Visit",
    ctaLink: "https://tax-explainer.vercel.app",
    content: () => {
      return (
        <p>
          Transforms complex financial documents into an interactive, visual
          AI-explained dashboard with automated deduction discovery.
          <br />
          <br />
          <strong>Problem Solved:</strong> Eliminates tax jargon and calculation
          confusion for freelancers &amp; small businesses via OCR document
          analysis, Gemini Vision reasoning, and automated visual deductions.
          <br />
          <br />
          <strong>Architecture &amp; Stack:</strong> Python, OCR, Next.js,
          FastAPI, PyTorch.
        </p>
      );
    },
  },
  {
    description: "Computer Vision",
    title: "Manga Translator",
    src: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    ctaText: "Visit",
    ctaLink: "https://manga-translator.vercel.app",
    content: () => {
      return (
        <p>
          Instant in-image speech bubble detection, OCR, neural machine
          translation, and inpainting background restoration on Fabric.js canvas.
          <br />
          <br />
          <strong>Problem Solved:</strong> Solves multi-day translation
          bottlenecks for international scanlation communities with instant
          speech bubble OCR and inpainting.
          <br />
          <br />
          <strong>Architecture &amp; Stack:</strong> PyTorch, FastAPI, Fabric.js,
          OpenCV, Inpainting.
        </p>
      );
    },
  },
  {
    description: "Full-Stack Web",
    title: "Roomie",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    ctaText: "Visit",
    ctaLink: "https://roomie-ai.vercel.app",
    content: () => {
      return (
        <p>
          Smart roommate matchmaking platform with vector habit matching and
          graph-based pairwise debt settlement algorithms.
          <br />
          <br />
          <strong>Problem Solved:</strong> Solves off-campus roommate
          incompatibility and bill friction using vector habit matchmaking and
          automated split settlement.
          <br />
          <br />
          <strong>Architecture &amp; Stack:</strong> React, Node.js, MongoDB,
          Express, Graph Algorithms.
        </p>
      );
    },
  },
  {
    description: "Edge AI Vision",
    title: "IRIS ai",
    src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
    ctaText: "Visit",
    ctaLink: "https://iris-ai-vision.vercel.app",
    content: () => {
      return (
        <p>
          Autonomous computer vision pipeline with sub-50ms real-time CCTV video
          anomaly detection and alert dispatching.
          <br />
          <br />
          <strong>Problem Solved:</strong> Solves critical transit and rail
          safety latency with automated edge CCTV anomaly detection and
          autonomous operator alerts.
          <br />
          <br />
          <strong>Architecture &amp; Stack:</strong> TensorFlow, WebRTC,
          FastAPI, Python, Edge AI.
        </p>
      );
    },
  },
  {
    description: "Productivity OS",
    title: "Studio OS",
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    ctaText: "Visit",
    ctaLink: "https://studio-os.vercel.app",
    content: () => {
      return (
        <p>
          Minimalist graphic workspace with multi-layer canvas composition,
          Redis state synchronization, and high-throughput asset rendering.
          <br />
          <br />
          <strong>Problem Solved:</strong> Solves fragmented client feedback and
          delivery chaos for boutique creative engineering agencies.
          <br />
          <br />
          <strong>Architecture &amp; Stack:</strong> TypeScript, Fabric.js,
          Redis, Next.js, Tailwind CSS.
        </p>
      );
    },
  },
];
