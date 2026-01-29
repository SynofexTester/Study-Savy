import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="font-display text-4xl font-bold mb-8">Terms of Service</h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground">
                                By accessing and using Study Savvy ("the Platform"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
                            <p className="text-muted-foreground">
                                To access certain features, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">3. Content and Conduct</h2>
                            <p className="text-muted-foreground mb-4">
                                You retain ownership of any content you upload, such as study notes. However, by uploading content, you grant Study Savvy a non-exclusive, worldwide, royalty-free license to host, display, and distribute your content.
                            </p>
                            <p className="text-muted-foreground">
                                You agree not to upload content that violates academic integrity policies, infringes on intellectual property rights, or is illegal, offensive, or harmful.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">4. Payments and Earnings</h2>
                            <p className="text-muted-foreground">
                                Study Savvy facilitates payments between buyers and sellers. We charge a commission fee on transactions to support the platform. Earnings are paid out to sellers according to our payout schedule, subject to a minimum withdrawal threshold.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
                            <p className="text-muted-foreground">
                                The materials on Study Savvy are provided "as is". We make no warranties, expressed or implied, regarding the accuracy or reliability of the study materials sold on the platform. Usage of these materials is at your own risk and should serve as a supplement to, not a replacement for, your own coursework.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
