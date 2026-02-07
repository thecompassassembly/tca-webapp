import HeaderNav from "@/components/HeaderNav";
import FooterNav from "@/components/FooterNav";
import React from "react";

export const page = () => {
  return (
    <div>
      <HeaderNav />
      <main className="flex flex-col gap-6 justify-center items-center py-16 px-8">
        <div
          className="flex  rounded-2xl 
            bg-green-100/50 dark:bg-emerald-950/70 
            text-gray-900 dark:text-gray-100
            border-none dark:border-none justify-center items-center text-center px-4 py-1"
        >
          <p className="text-xs font-semibold dark:text-neutral-300/90 text-neutral-500">
            M E M B E R <span className="px-1"></span> S T O R I E S
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-4xl font-bold">MY TCA EXPERIENCE</h1>
          <p className="text-2xl dark:text-neutral-300/90 text-neutral-500">
            ...giving your life direction
          </p>
        </div>
        <div
          className="grid grid-cols-2 gap-x-5 gap-y-2 mt-2 p-6 rounded-2xl
            text-gray-900 dark:text-white
            border-none dark:border-none"
        >
          <div
            className="flex flex-col gap-5 rounded-2xl 
            text-gray-900 dark:text-gray-100
            border-none dark:border-none px-8 py-4"
          >
            <h2 className="text-2xl font-semibold">
              A life changing experience
            </h2>
            <p className="dark:text-neutral-300/90 text-neutral-500">
              God has turned my life around through TCA. Before joining TCA, I
              was lost and struggling to find my purpose. The supportive
              community and the teachings have helped me discover my true self
              and given me a new direction in life. I am grateful for the
              friendships I've made and the personal growth I've experienced
              here.
              <br />
              <span className="dark:text-neutral-300/90 text-neutral-500 font-bold">
                - Francis D.
              </span>
            </p>
          </div>

          <div
            className="flex flex-col gap-5 rounded-2xl 
            text-gray-900 dark:text-gray-100
            border-none dark:border-none px-8 py-4"
          >
            <h2 className="text-2xl font-semibold">Breaking free from sin</h2>
            <p className="dark:text-neutral-300/90 text-neutral-500">
              I used to feel trapped in a cycle of sin and guilt. Joining TCA
              has been a transformative experience for me. The teachings on
              grace and forgiveness have helped me let go of my past mistakes
              and embrace a new life in Christ. The community has been
              incredibly supportive, and I feel empowered to live a life that
              honors God.
              <br />
              <span className="dark:text-neutral-300/90 text-neutral-500 font-bold">
                - Esther K.
              </span>
            </p>
          </div>
          <div
            className="flex flex-col gap-5 rounded-2xl 
            text-gray-900 dark:text-gray-100
            border-none dark:border-none px-8 py-4"
          >
            <h2 className="text-2xl font-semibold">Marital settlement</h2>
            <p className="dark:text-neutral-300/90 text-neutral-500">
              There was a time when I felt hopeless about my marriage. TCA's
              marriage counseling and support groups have been a lifeline for
              me. Through the teachings and the encouragement from fellow
              members, my spouse and I have been able to rebuild our
              relationship on a foundation of love and mutual respect. I am
              thankful for the positive changes in our marriage and the renewed
              hope for our future together.
              <br />
              <span className="dark:text-neutral-300/90 text-neutral-500 font-bold">
                - Favour A.
              </span>
            </p>
          </div>
          <div
            className="flex flex-col gap-5 rounded-2xl 
            text-gray-900 dark:text-gray-100
            border-none dark:border-none px-8 py-4"
          >
            <h2 className="text-2xl font-semibold">
              Deliverance from fatal car crash
            </h2>
            <p className="dark:text-neutral-300/90 text-neutral-500">
              It was a harrowing experience, but I truly believe that God's hand
              was upon me that day. After being involved in a severe car crash,
              I walked away with only minor injuries. The prayers, support, and
              covenant of TCA members played a crucial role in my recovery. This
              experience has strengthened my faith and deepened my trust in
              God's protection and grace. I am forever grateful to be part of
              such a loving community.
              <br />
              <span className="dark:text-neutral-300/90 text-neutral-500 font-bold">
                - Godswill B.
              </span>
            </p>
          </div>
        </div>
      </main>
      <FooterNav />
    </div>
  );
};
export default page;
