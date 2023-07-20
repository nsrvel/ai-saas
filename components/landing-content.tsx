'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { CardContent } from '@mui/material';

const testimonial = [
    {
        name: 'Putra',
        avatar: 'P',
        title: 'Software Engineer',
        description: `This is the best application I've used!`,
    },
    {
        name: 'Rini',
        avatar: 'R',
        title: 'Software Engineer',
        description: 'This application is amazing!',
    },
    {
        name: 'Dian',
        avatar: 'D',
        title: 'Web Developer',
        description: 'I am impressed with this application!',
    },
    {
        name: 'Fajar',
        avatar: 'F',
        title: 'Mobile App Developer',
        description: 'This is the best application ever!',
    },
];

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonial.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            {/* <p className="pt-4">{item.description}</p> */}
                        </CardHeader>
                        <CardContent className="pt-4">
                            <p className="text-base px-2">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
