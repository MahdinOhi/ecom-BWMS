import { Grid } from "lucide-react";
import PolicyCard from '../Cards/PolicyCard';

export default function PolicySection() {
    const policies = [
        {
            id: 1,
            icon: "target",
            title: "Hassle-Free Pre Order & Delivery",
            description: "We operate on a pre-order basis, ensuring you get access to the most sought-after products. Every item is directly imported from China, allowing us to provide authentic products at competitive prices."
        },
        {
            id: 2,
            icon: "shield",
            title: "Secure Payment with a fully Refundable System",
            description: "To maintain efficiency, we require a 50% upfront payment on all orders across Bangladesh. This helps us streamline operations and deliver a hassle-free experience from order to delivery."
        },
        {
            id: 3,
            icon: "tag",
            title: "Fixed Pricing - No Bargaining",
            description: "Our prices are fixed and competitive. Ensuring fairness for all customers, whether you're buying one item or bulk orders up to wholesale terms."
        },
        {
            id: 4,
            icon: "handshake",
            title: "Trust & Transparency - Join our Community",
            description: "To build trust and transparency, we encourage you to explore our community group."
        }
    ];

    return (
        <div className="w-full py-16 px-4" style={{ marginLeft: '145px' }}>
            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-4xl font-bold text-white tracking-wider">OUR POLICIES</h2>
                    <span className="text-sm text-gray-600">*Terms and conditions applied</span>
                </div>

                {/* Policy Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {policies.map((policy) => (
                        <PolicyCard
                            key={policy.id}
                            id={policy.id}
                            icon={policy.icon}
                            title={policy.title}
                            description={policy.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}