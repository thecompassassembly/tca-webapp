"use client";

import Image from "next/image";

export interface Sermon {
  id: number | string;
  title: string;
  speaker: string;
  image: string;
  description: string;
  date: string;
}

interface SermonCardProps {
  sermon: Sermon;
  isActive?: boolean;
}

export default function SermonCard({
  sermon,
  isActive = false,
}: SermonCardProps) {
  return (
    <section
      className={`flex-1 overflow-hidden bg-neutral-900 max-w-md border-neutral-800 border rounded-[2.2rem] mr-auto ml-auto relative shadow-2xl transition-all duration-500 m-8 ${
        isActive ? "" : ""
      }`}
    >
      {/* Status bar */}
      <div className="px-5 pt-5 flex items-center justify-between text-[11px] text-neutral-300 border-b border-neutral-800/70 pb-3">
        <span className="font-sans">TCA Global</span>
        <div className="flex items-center gap-1.5 text-xs">
          <span
            className="iconify w-3.5 h-3.5"
            data-icon="solar:wifi-bold-duotone"
          />
          <span className="font-sans">Live Stream</span>
        </div>
      </div>
      {/* Hero image */}
      <div className="relative mt-3 mx-3 rounded-[1.8rem] overflow-hidden aspect-video">
        <Image
          className="w-full h-full object-cover"
          src={sermon.image}
          alt={sermon.title}
          fill
        />
        <div className="bg-linear-to-t from-black/70 via-black/30 to-transparent absolute inset-0"></div>
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          {/* <div className="space-y-1">
            <p className="text-[11px] text-neutral-200 font-sans">
              Join thousands watching globally
            </p>
            <p className="text-xs text-neutral-400 max-w-xs font-sans">
              {sermon.date} · Shared for your spiritual growth.
            </p>
          </div> */}
          {/* perfect circle more (...) */}
          <button
            className="flex outline-none focus-visible:outline-2 focus-visible:outline-(--color-accent)/80 flex-none text-neutral-100 bg-black/50 w-9 h-9 border-white/10 border rounded-full backdrop-blur items-center justify-center"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              data-icon="solar:menu-dots-bold-duotone"
              className="iconify w-4 h-4 iconify--solar"
            >
              <path
                fill="currentColor"
                d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m14 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                className=""
              />
              <path
                fill="currentColor"
                d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                opacity=".5"
                className=""
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Content under hero */}
      <div className="mt-6 pr-6 pb-6 pl-6 space-y-6">
        <div className="space-y-1 border-b border-neutral-800/70 pb-4">
          <p className="text-xs font-medium text-(--color-accent) uppercase tracking-[0.2em] font-sans">
            Sermon Series · TCA
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-neutral-50 font-sans line-clamp-1">
            {sermon.title}
          </h2>
          <p className="text-xs text-neutral-400 font-sans line-clamp-2">
            {sermon.description}
          </p>
        </div>
        {/* Action buttons circle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="h-11 w-11 rounded-full bg-(--color-primary) text-white flex items-center justify-center shadow-lg hover:bg-(--color-accent) hover:text-black transition outline-none focus-visible:outline-2 focus-visible:outline-(--color-accent)/80"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                data-icon="solar:play-bold-duotone"
                className="iconify w-5 h-5 translate-x-px iconify--solar"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M23 12c0-1.035-.53-2.07-1.591-2.647L8.597 2.385C6.534 1.264 4 2.724 4 5.033V12z"
                  clipRule="evenodd"
                  className=""
                />
                <path
                  fill="currentColor"
                  d="m8.597 21.615l12.812-6.968A2.99 2.99 0 0 0 23 12H4v6.967c0 2.31 2.534 3.769 4.597 2.648"
                  opacity=".5"
                  className=""
                />
              </svg>
            </button>
            <div className="text-xs">
              <p className="text-neutral-200 font-medium font-sans">
                Watch Message
              </p>
              <p className="text-neutral-500 font-sans">Available on Demand</p>
            </div>
          </div>
          {/* <div className="flex items-center gap-3 text-neutral-300">
            <button
              className="flex hover:bg-neutral-700 transition outline-none focus-visible:outline-2 focus-visible:outline-(--color-accent)/80 bg-neutral-800 w-10 h-10 rounded-full items-center justify-center"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                style={{ color: "rgb(212, 212, 212)", width: 16, height: 16 }}
                className="iconify iconify--solar w-[16px] h-[16px]"
                aria-hidden="true"
                role="img"
                data-icon="solar:eye-bold-duotone"
                strokeWidth={2}
              >
                <path
                  fill="#d4d4d4"
                  d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12"
                  opacity=".5"
                  className=""
                />
                <path
                  fill="#d4d4d4"
                  fillRule="evenodd"
                  d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
                  clipRule="evenodd"
                  className=""
                />
              </svg>
            </button>
            <button
              className="flex hover:bg-neutral-700 transition outline-none focus-visible:outline-2 focus-visible:outline-(--color-accent)/80 bg-neutral-800 w-10 h-10 rounded-full items-center justify-center"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                data-icon="solar:phone-calling-rounded-bold-duotone"
                className="iconify iconify--solar w-[16px] h-[16px]"
                strokeWidth={2}
                style={{ color: "rgb(212, 212, 212)", width: 16, height: 16 }}
              >
                <path
                  fill="currentColor"
                  d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"
                  opacity=".5"
                  className=""
                />
                <path
                  fill="currentColor"
                  d="M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a6 6 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a3 3 0 0 0-.081-.327a7.4 7.4 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262s-2.411-1.939-3.262-2.329a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.861"
                  className=""
                />
              </svg>
            </button>
            <button
              className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition outline-none focus-visible:outline-2 focus-visible:outline-(--color-accent)/80"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                data-icon="solar:widget-3-bold-duotone"
                className="iconify iconify--solar w-[16px] h-[16px]"
                strokeWidth={2}
                style={{ color: "rgb(212, 212, 212)", width: 16, height: 16 }}
              >
                <g
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className=""
                >
                  <path
                    d="M22.25 6.5a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0m-11 11a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0"
                    className=""
                  />
                  <path
                    d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m11 11a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
                    opacity=".5"
                    className=""
                  />
                </g>
              </svg>
            </button>
          </div> */}
        </div>
        {/* Meta */}
        <div className="grid grid-cols-3 gap-4 text-[11px] text-neutral-400 border-t border-neutral-800/70 pt-4">
          <div className="">
            <p className="uppercase tracking-[0.22em] font-medium font-sans">
              Speaker
            </p>
            <p className="mt-1 text-neutral-50 font-medium font-sans line-clamp-1">
              {sermon.speaker}
            </p>
          </div>
          <div className="">
            <p className="uppercase tracking-[0.22em] font-medium font-sans">
              Date
            </p>
            <p className="mt-1 text-neutral-50 font-medium font-sans line-clamp-1">
              {sermon.date}
            </p>
          </div>
          <div className="">
            <p className="uppercase tracking-[0.22em] font-medium font-sans">
              Status
            </p>
            <p className="mt-1 text-neutral-50 font-medium font-sans line-clamp-1">
              Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
