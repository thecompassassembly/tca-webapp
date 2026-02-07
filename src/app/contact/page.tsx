"use client";
import { useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import FooterNav from "@/components/FooterNav";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Contact() {
  const [phone, setPhone] = useState<string>("");
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
        <div className="flex flex-col gap-3 py-6 px-90 rounded-2xl text-white">
          <h1 className="text-6xl font-semibold">Contact us</h1>
          <p className="text-xl text-gray-300">
            Our friendly team would love to hear from you.
          </p>
          <form className="flex flex-col gap-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <p>
                  First name <span className="text-blue-500">*</span>
                </p>
                <input
                  type="text"
                  className="w-full rounded-md border-1 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Last name <span className="text-blue-500">*</span>
                </p>
                <input
                  type="text"
                  className="w-full rounded-md border-1 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                email <span className="text-blue-500">*</span>
              </p>
              <input
                type="email"
                className="w-full rounded-md border-1 border-gray-300 p-2 focus:border-blue-500 focus:outline-none mt-2"
                placeholder="you@company.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Phone number <span className="text-blue-500">*</span>
              </p>
              <PhoneInput
                country={"ng"}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: "100%",
                  backgroundColor: "transparent",
                  color: "var(--color-foreground)",
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Message <span className="text-blue-500">*</span>
              </p>
              <textarea
                className="w-full rounded-md border-1 border-gray-300 p-2 focus:border-blue-500 focus:outline-none mt-2"
                placeholder="Enter your message"
                rows={5}
              />
            </div>
            <div className="flex flex-col gap-10">
              <label className="font-2xl">
                <input
                  type="checkbox"
                  className="cursor-pointer w-4 h-4 border-1 border-black rounded"
                />
                <span className="px-1"> </span>
                <span className="text-lg">
                  You agree to our friendly privacy policy.
                </span>
              </label>
              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
        <div className="flex flex-col gap-4 px-30">
          <h2 className="text-2xl font-semibold text-blue-300">
            Our locations
          </h2>
          <h1 className="text-5xl font-semibold text-white">
            Visit any of our expressions
          </h1>
          <p className="text-2xl">Find us at these locations.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium text-white">Rumumasi</h2>
              <p className="text-lg">
                The Compass Assembly Headquarters <br />
                Rumumasi Market Junction <br />
                Port-Harcourt
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium text-white">Rumuosi</h2>
              <p className="text-lg">
                Rumumasi Market Junction <br />
                Port-Harcourt
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium text-white">Obibo</h2>
              <p className="text-lg">
                Rumumasi Market Junction <br />
                Port-Harcourt
              </p>
            </div>
          </div>
        </div>
      </main>
      <FooterNav />
    </div>
  );
}
