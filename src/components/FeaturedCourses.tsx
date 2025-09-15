'use client'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

const eduVerifyFeatures = [
    {
        id: 1,
        title: 'Student Dashboard',
        slug: 'student-dashboard',
        description: 'Track uploaded certificates, share via QR link, view verification history, and see personal analytics.',
        isFeatured: true,
    },
    {
        id: 2,
        title: 'Institution Dashboard',
        slug: 'institution-dashboard',
        description: 'Issue certificates, monitor verification logs, detect fraud using AI, and analyze issuance metrics.',
        isFeatured: true,
    },
    {
        id: 3,
        title: 'Recruiter / Employer Dashboard',
        slug: 'recruiter-dashboard',
        description: 'Verify candidate documents with blockchain & AI checks and track verification history with analytics.',
        isFeatured: true,
    },
]

function FeaturedFeatures() {
    const featuredFeatures = eduVerifyFeatures.filter((feature) => feature.isFeatured)

    return (
        <div className="py-12 bg-gray-900 m-auto">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED FEATURES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Why Choose EduVerify</p>
            </div>

            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredFeatures.map((feature) => (
                        <div key={feature.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{feature.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{feature.description}</p>
                                    <Link href={`/features/${feature.slug}`} className="text-sm text-white hover:text-teal-500 mt-6">
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <Link href="/features"
                    className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    View All Features
                </Link>
            </div>
        </div>
    )
}

export default FeaturedFeatures
