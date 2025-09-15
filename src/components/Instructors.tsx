'use client';
import { AnimatedTooltip } from './ui/animated-tooltip';
import { WavyBackground } from './ui/wavy-background';

const eduVerifyTeam = [
    {
        id: 1,
        name: 'Trishna Paswan',
        designation: 'Frontend Developer',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 2,
        name: 'Tanvi',
        designation: 'Backend Developer',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 3,
        name: 'Deeya',
        designation: 'Co-Creator',
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 4,
        name: 'Himanshi',
        designation: 'Backend Developer',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 5,
        name: 'Krati',
        designation: 'Co-Creator',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 6,
        name: 'Maalvika',
        designation: 'Backend Developer',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
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
