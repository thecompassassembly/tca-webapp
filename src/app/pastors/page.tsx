import HeaderNav from '@/components/HeaderNav';
import FooterNav from '@/components/FooterNav';

export default function Pastors() {
    return (
        <div className="min-h-screen "
            style={{
                backgroundColor: "var(--color-background)",
                color: "var(--color-foreground)",
                borderColor: "var(--color-secondary)",
            }}>
            <HeaderNav />
            <main className="py-16 px-8">

            </main>
            <FooterNav />
        </div>
    );
}
