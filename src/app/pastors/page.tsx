import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import SubHero from '@/components/SubHero';

export default function Pastors() {
    return (
        <div className="min-h-screen "
            style={{
                backgroundColor: "var(--color-background)",
                color: "var(--color-foreground)",
                borderColor: "var(--color-secondary)",
            }}>
            <HeaderNav />
            <main className="py-0">
                <SubHero
                    imageSrc="/images/6051031874487914225.jpg"
                    title="Our Pastors"
                    pillText="Pastors"
                    subtitle="Meet the shepherds leading The Compass Assembly."
                />
                <section className="px-8 py-16">
                    {/* ...existing content... */}
                    <div className="max-w-4xl mx-auto text-center text-lg text-foreground/80">
                        More content coming soon.
                    </div>
                </section>
            </main>
            <FooterNav />
        </div>
    );
}
