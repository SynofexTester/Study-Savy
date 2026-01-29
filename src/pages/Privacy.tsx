import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                            <p className="text-muted-foreground">
                                At Study Savvy, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                            <p className="text-muted-foreground mb-4">
                                We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Personal Data: Name, email address, university affiliation.</li>
                                <li>Payment Data: Payment method details (processed securely by our payment processors).</li>
                                <li>Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, browser type, and access times.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                            <p className="text-muted-foreground">
                                We use the information we collect to operate, store, and improve our services, including:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                                <li>To facilitate account creation and logon process.</li>
                                <li>To send you administrative information.</li>
                                <li>To fulfill and manage your orders and payments.</li>
                                <li>To protect our Services and legal rights.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
                            <p className="text-muted-foreground">
                                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal data to third parties.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;
