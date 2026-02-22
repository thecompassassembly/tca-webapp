import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';
import AboutComp from '@/components/About/AboutComp';

export default function About() {
    return (
        <div className="min-h-screen "
            style={{
                backgroundColor: "var(--color-background)",
                color: "var(--color-foreground)",
                borderColor: "var(--color-secondary)",
            }}
        >
            <HeaderNav />
            <main className="px-8">
                <AboutComp />
            </main>
            <FooterNav />
        </div>
    );
}
