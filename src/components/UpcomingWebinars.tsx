'use client';
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

    const upcomingFeatures = [
        {
            title: 'AI-based Fraud Alerts',
            description: 'Real-time AI detection for fraudulent certificates and anomalies.',
        },
        {
            title: 'DigiLocker Integration',
            description: 'Direct import of govt-verified documents for seamless verification.',
        },
        {
            title: 'Mobile App Support',
            description: 'Access EduVerify dashboards and verification tools on the go.',
        },
    ];

    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Upcoming Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Exciting Enhancements Coming Soon
                    </p>
                </div>

                <div className="mt-10">
                    <HoverEffect 
                        items={upcomingFeatures.map(feature => ({
                            title: feature.title,
                            description: feature.description,
                            link: '/', // Later you can update this to the relevant page
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
