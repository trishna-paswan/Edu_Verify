/* eslint-disable @next/next/no-img-element */

"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const eduVerifyContent = [
    {
        title: 'Secure Credential Verification',
        description:
            'EduVerify ensures that all academic documents are authenticated using blockchain and AI-based checks, giving students, institutions, and recruiters complete confidence.',
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="https://images.pexels.com/photos/5900161/pexels-photo-5900161.jpeg?auto=compress&cs=tinysrgb&w=600"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover rounded-md"
                    alt="Secure Credential Verification"
                />
            </div>
        ),
    },
    {
        title: 'DigiLocker Integration',
        description:
            'Import government-verified documents seamlessly, reducing manual effort and enhancing trust across all stakeholders.',
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="https://images.pexels.com/photos/5473959/pexels-photo-5473959.jpeg?auto=compress&cs=tinysrgb&w=600"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover rounded-md"
                    alt="DigiLocker Integration"
                />
            </div>
        ),
    },
    {
        title: 'AI-based Fraud Detection',
        description:
            'Our advanced AI system analyzes documents to detect tampering or forgery in real-time, ensuring maximum authenticity and reliability.',
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover rounded-md"
                    alt="AI-based Fraud Detection"
                />
            </div>
        ),
    },
];

function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={eduVerifyContent} />
        </div>
    );
}

export default WhyChooseUs;
