"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { projectCardsList, ProjectAsset } from "@/data/assets";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<ProjectAsset | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
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
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
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
              className="w-full max-w-[500px] max-h-[90vh] flex flex-col bg-[#cfc6c7] dark:bg-[#443235] sm:rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="shrink-0">
                <img
                  width={400}
                  height={300}
                  src={active.imageUrl}
                  alt={active.title}
                  className="w-full h-64 sm:h-72 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top shrink-0"
                />
              </motion.div>

              <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
                <div className="flex justify-between items-start p-4 shrink-0 border-b border-black/5 dark:border-white/10">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-semibold text-[#261c1d] dark:text-[#f8f5f5] text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.category}-${id}`}
                      className="text-neutral-700 dark:text-neutral-300 text-sm"
                    >
                      {active.category}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors shadow-sm shrink-0"
                  >
                    {active.ctaText || "Visit"}
                  </motion.a>
                </div>
                <div className="p-4 flex-1 min-h-0 overflow-y-auto">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-800 text-xs md:text-sm lg:text-base flex flex-col items-start gap-4 dark:text-neutral-200"
                  >
                    <p>
                      {active.summary}
                      <br />
                      <br />
                      <strong>Problem Solved:</strong> {active.problemSolved}
                      <br />
                      <br />
                      <strong>Architecture &amp; Stack:</strong> {active.stack}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 items-start gap-4">
        {projectCardsList.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="group p-4 flex flex-col hover:bg-[#cfc6c7] dark:hover:bg-[#443235]/90 rounded-xl cursor-pointer transition-colors bg-white dark:bg-neutral-900/0  dark:hover:border-[#443235] "
          >
            <div className="flex gap-3 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`} className="relative overflow-hidden rounded-lg">
                <img
                  width={200}
                  height={160}
                  src={card.imageUrl}
                  alt={card.title}
                  className="h-36 sm:h-40 w-full rounded-lg object-cover object-top"
                />
                <a
                  href={card.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-2.5 right-2.5 flex items-center justify-center w-7 h-7 rounded-full bg-black/60 hover:bg-[#443235] text-white backdrop-blur-md transition-all shadow-md z-10 hover:scale-110"
                  title={`Open ${card.title} in new tab`}
                  aria-label={`Open ${card.title}`}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </motion.div>
              <div className="flex justify-center items-center flex-col text-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-[#443235]  group-hover:text-[#f8f5f5] text-sm md:text-base transition-colors duration-200"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.category}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm"
                >
                  {card.category}
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
