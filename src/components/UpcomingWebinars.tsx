'use client';
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

    const upcomingFeatures = [
        {
            title: 'AI-Driven Fraud Detection',
            description: 'Next-gen AI analyzes certificates in real-time to detect manipulations, deepfakes, or forged credentials instantly.',
        },
        {
            title: 'Blockchain Verification Ledger',
            description: 'Every student record stored on blockchain for tamper-proof verification, creating a transparent and auditable system.',
        },
        {
            title: 'Seamless DigiLocker & Govt ID Integration',
            description: 'Directly import government-issued documents for instant, reliable verification without paperwork.',
        },
        {
            title: 'Mobile App with Real-Time Insights',
            description: 'EduVerify mobile app with push notifications, verification tracking, and instant alerts on suspicious activity.',
        },
        {
            title: 'AI-Powered Analytics & Recommendations',
            description: 'Smart dashboards provide insights on verification trends, flag high-risk patterns, and suggest automated actions.',
        },
        {
            title: 'Cross-Institution Network',
            description: 'Universities, colleges, and employers connected in one platform for quick verification across multiple organizations.',
        },
    ];
    

    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Upcoming Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Exciting Enhancements Coming to EduVerify
                    </p>
                </div>

                <div className="mt-10">
                    <HoverEffect 
                        items={upcomingFeatures.map(feature => ({
                            title: feature.title,
                            description: feature.description,
                            link: '/', // Update to relevant page if needed
                        }))} 
                    />    
                </div>

                <div className="mt-10 text-center">
                    <Link href={"/future-features"} // Placeholder page
                        className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        See All Features
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UpcomingWebinars;
