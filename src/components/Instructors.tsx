'use client';
import { AnimatedTooltip } from './ui/animated-tooltip';
import { WavyBackground } from './ui/wavy-background';

const eduVerifyTeam = [
    {
        id: 1,
        name: 'Trishna Paswan',
        designation: 'Frontend Developer',
        image: '/images/trishna.jpg',
    },
    {
        id: 2,
        name: 'Tanvi',
        designation: 'Backend Developer',
        image: '/images/tanvi.jpg',
    },
    {
        id: 3,
        name: 'Deeya',
        designation: 'Co-Creator',
        image: '/images/deeya.jpg',
    },
    {
        id: 4,
        name: 'Himanshi',
        designation: 'Backend Developer',
        image: '/images/himanshi.jpg',
    },
    {
        id: 5,
        name: 'Krati',
        designation: 'Co-Creator',
        image: '/images/krati.jpg',
    },
    {
        id: 6,
        name: 'Maalvika',
        designation: 'Backend Developer',
        image: '/images/malvika.jpg',
    },
];

function Team() {
    return (
        <div className="relative h-[47rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
                    Meet the Creators
                </h2>
                <p className="text-base md:text-lg text-white text-center mb-4">
                    The brilliant minds behind EduVerify – our student developers.
                </p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={eduVerifyTeam} />
                </div>
            </WavyBackground>
        </div>
    );
}

export default Team;
