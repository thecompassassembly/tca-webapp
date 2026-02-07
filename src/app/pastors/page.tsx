"use client";
import HeaderNav from "@/components/HeaderNav";
import FooterNav from "@/components/FooterNav";

export default function Pastors() {
  return (
    <div
      className="min-h-screen "
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
        borderColor: "var(--color-secondary)",
      }}
    >
      <HeaderNav />
      <main className="py-16 px-8">
        <div
          className="flex flex-col gap-3 p-6 rounded-2xl 
            bg-green-100/50 dark:bg-emerald-950/70 
            text-gray-900 dark:text-gray-100
            border-none dark:border-none"
        >
          <h2 className="text-xl font-bold text-neutral-500 dark:text-neutral-300/90">
            Meet Our Pastors
          </h2>
          <h1 className="text-5xl font-medium">
            Pastors Wisdom & Favour Osiri
          </h1>
          <img
            src="/images/pastors.jpg"
            alt="Pastor Wisdom & Favour Osiri"
            className="my-10 w-auto h-auto rounded-lg"
          />
          <p className="dark:text-neutral-300/90 text-neutral-500 leading-relaxed text-justify">
            Meeting Pastor Wisdom & Favour Osiri is an experience of warmth,
            inspiration, and genuine connection. Their dynamic presence and
            heartfelt approach to ministry create an atmosphere where everyone
            feels valued and uplifted. <br /> <br /> Pastor Osiri Wisdom is the
            Lead Pastor of The Compass Assembly, a vibrant church with the
            vision of providing wisdom for direction in all facets of life with
            special outreach focus on Relationship, Entrepreneurship, and
            Leadership. He is also the Lead Consultant at LeadWise Consulting a
            leadership and management consulting firm.{" "}
            <span className="italic">
              An OAP, he is the presenter of the life-transforming radio
              programs - Family Matters and the ManThing Show on Nigeria Info FM
              92.3, PortHarcourt.
            </span>{" "}
            <br /> <br /> He is a Certified Marriage Mentor from The Institute
            of Marriage and Family Affairs USA and the Founder of the
            prestigious Wisdom Driven Marriage Academy.{" "}
            <span className="italic">
              He is a certified John Maxwell Coach, a global Leadership
              Development platform. He is also the founder of the Man Thing
              Initiative, a mentorship platform for men and host of the popular
              Man Thing Summit holding in several cities.
            </span>
            <br /> <br />
            Pastor Osiri Favour, the Co-Pastor of The Compass Assembly, is a
            MODELWOMAN, an encourager, and marriage coach who mentors those in
            relationships and marriages, helping them to live a value-driven
            life. She is the convener of the annual Mom & Daughter Ball, a
            prestigious event that celebrates the unique bond between mothers
            and daughters. <br /> <br />
            <span className="italic">
              She is a Certified Marriage Mentor from The Institute of Marriage
              and Family Affairs USA and co-founder of the Wisdom Driven
              Marriage Academy.
            </span>{" "}
            She is passionate about empowering women and has created several
            platforms to mentor and inspire them to live purpose-driven lives.{" "}
            <br /> <br />
            Together, Pastors Wisdom & Favour Osiri lead The Compass Assembly
            with a shared vision of impacting lives and communities through
            faith, love, and practical wisdom. Their partnership in ministry
            exemplifies the power of unity and shared purpose in making a
            positive difference in the world.
          </p>
          <div className="flex sm:w-auto gap-8 my-10 justify-center items-center">
            <a
              href="http://www.youtube.com/@OsiriWisdom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-auto bg-black text-white rounded-2xl
                dark:bg-white dark:text-black text-sm px-10 py-1 whitespace-nowrap
                sm:px-18 sm:py-1 sm:text-base
                md:px-23 md:py-1
                lg:text-lg font-medium"
              >
                @OsiriWisdom
              </button>
            </a>
            <a
              href="http://www.youtube.com/@FavourOsiriWisdom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-auto bg-black text-white rounded-2xl
                dark:bg-white dark:text-black text-sm px-4 py-1 whitespace-nowrap
                sm:px-10 sm:py-1 sm:text-base
                md:px-18 md:py-1
                lg:text-lg font-medium"
              >
                @FavourOsiriWisdom
              </button>
            </a>
          </div>
        </div>
      </main>
      <FooterNav />
    </div>
  );
}
