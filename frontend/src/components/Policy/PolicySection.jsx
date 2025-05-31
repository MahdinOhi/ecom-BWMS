// components/PolicySection.jsx
import PolicyCard from '../Card/PolicyCard';

const policies = [
    {
        number: 1,
        title: 'Hassle-Free Pre Order & Direct Import',
        description:
            'We operate on a pre-order basis to offer top products at best prices, directly imported from China. Delivery: 25–30 days. Occasional delays may occur.',
    },
    {
        number: 2,
        title: 'Secure Payment with a full refund guarantee',
        description:
            '50% upfront payment required in Bangladesh. Full refund for defective or unsatisfactory items.',
    },
    {
        number: 3,
        title: 'Fixed Pricing - No Bargaining',
        description:
            'Prices are fixed. Fair for all—whether buying 1 or 10 units. No negotiations allowed.',
    },
    {
        number: 4,
        title: 'Trust & Transparency - Join our community',
        description:
            'We encourage you to explore and join our community group to build trust.',
    },
    {
        number: 5,
        title: 'Latest trends & Guaranteed Quality',
        description:
            'We source from international markets. Product matches the advertised model despite image variations.',
    },
];

export default function PolicySection() {
    return (
        <section className="bg-gradient-to-b from-purple-900 to-black text-white px-4 py-12 flex flex-col space-y-4 justify-center">
            <div className="max-w-3xl w-full space-y-6">
                <h2 className="text-3xl font-bold">OUR POLICIES</h2>
                <div className="space-y-4">
                    {policies.map((policy) => (
                        <PolicyCard key={policy.number} {...policy} />
                    ))}
                </div>
            </div>
        </section>
    );
}

