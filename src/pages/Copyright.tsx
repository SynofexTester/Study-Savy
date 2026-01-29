import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Copyright = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="font-display text-4xl font-bold mb-8">Copyright Policy</h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Respecting Intellectual Property</h2>
                            <p className="text-muted-foreground">
                                Study Savvy respects the intellectual property rights of others and expects its users to do the same. It is our policy, in appropriate circumstances and at our discretion, to disable and/or terminate the accounts of users who repeatedly infringe or are repeatedly charged with infringing the copyrights or other intellectual property rights of others.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Content Guidelines</h2>
                            <p className="text-muted-foreground mb-4">
                                You may only upload content that you have created yourself or have express permission to use and sell. This typically means you cannot upload:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Notes or slides created directly by your professor or university.</li>
                                <li>Textbook chapters or photocopies.</li>
                                <li>Materials that are copyright protected by third parties.</li>
                            </ul>
                            <p className="text-muted-foreground mt-4">
                                You CAN upload your own original summaries, study guides, and notes taken during lectures, provided they act as a transformative work and rely on your own understanding and expression.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">DMCA Takedown Notice</h2>
                            <p className="text-muted-foreground">
                                If you are a copyright owner or an agent thereof and believe that any content on Study Savvy infringes upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act ("DMCA") by providing our Copyright Agent with the necessary information in writing.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Copyright;
