'use client'
import { cn } from "@/utils/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

// EduVerify testimonials / feature highlights
const eduVerifyHighlights = [
    {
        quote:
        'My uploaded certificates are now easily trackable and shareable with employers. The verification status is always clear!',
        name: 'Rohit Sharma',
        title: 'Student',
    },
    {
        quote:
        'Issuing certificates has never been simpler. The AI checks and blockchain integration ensure authenticity at every step.',
        name: 'Dr. Priya Nair',
        title: 'Institution Admin',
    },
    {
        quote:
        'Verifying candidates’ documents is now reliable and quick. The AI forgery detection and DigiLocker integration make it seamless.',
        name: 'Sanjay Mehta',
        title: 'Recruiter',
    },
    {
        quote:
        'I love the analytics dashboard! I can see how many times my certificates were verified and track activity timelines.',
        name: 'Anjali Verma',
        title: 'Student',
    },
    {
        quote:
        'Fraud detection alerts save us a lot of time and give confidence in issuing documents. EduVerify is a game-changer for institutions.',
        name: 'Prof. Karthik Reddy',
        title: 'Institution Admin',
    },
    {
        quote:
        'The final authenticity badge (Green/Red) makes verification extremely fast for recruiters. No more manual checks!',
        name: 'Priya Gupta',
        title: 'Recruiter',
    },
];

function EduVerifyHighlights() {
    return (
    <div className="h-[47rem] w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <div
        className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <h2 className="text-3xl font-bold text-center mb-8 z-10 text-neutral-50 m-6">Why EduVerify?</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={eduVerifyHighlights}
                direction="right"
                speed="slow"
            />
            </div>
        </div>
    </div>
    )
}

export default EduVerifyHighlights;
