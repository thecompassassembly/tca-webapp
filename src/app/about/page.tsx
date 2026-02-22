import AboutComp from "@/components/About/AboutComp";

export default function About() {
  return (
    <div
      className="min-h-screen "
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
        borderColor: "var(--color-secondary)",
      }}
    >
      <main className="px-2">
        <AboutComp />
      </main>
    </div>
  );
}
