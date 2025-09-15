'use client';
import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

// EduVerify dashboard features data
const eduVerifyFeatures = [
    {
        id: 1,
        title: 'Student Dashboard',
        description: 'View uploaded certificates, track verification status, share credentials via QR link, and see personal analytics.',
        image: '/images/student_dashboard.png', // Replace with your actual image
    },
    {
        id: 2,
        title: 'Institution Dashboard',
        description: 'Issue certificates, track all issued documents, monitor verification logs, and receive AI-based fraud alerts.',
        image: '/images/institution_dashboard.png', // Replace with your actual image
    },
    {
        id: 3,
        title: 'Recruiter / Employer Dashboard',
        description: 'Verify documents with blockchain & AI checks, view verification results, and track verification history with analytics.',
        image: '/images/recruiter_dashboard.png', // Replace with your actual image
    },
];

function Page() {
    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                EduVerify Features ({eduVerifyFeatures.length})
            </h1>
            <div className="flex flex-wrap justify-center">
                {eduVerifyFeatures.map((feature) => (
                    <CardContainer key={feature.id} className="inter-var m-4">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {feature.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {feature.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={feature.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={feature.title}
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Explore →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Get Started
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}

export default Page;
