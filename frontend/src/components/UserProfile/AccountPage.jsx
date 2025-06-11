import { Edit2, User, ChevronRight } from 'lucide-react';

export default function AccountPage() {
    return (
        <div className="min-h-screen bg-transparent p-8 flex items-center justify-center">
            {/* Main Container with Purple Border */}
            <div className="w-full max-w-4xl bg-transparent border-2 border-purple-500 rounded-3xl p-6">

                {/* Header Section */}
                <div className="bg-white rounded-2xl p-6 mb-4">
                    <h1 className="text-3xl font-bold text-black">
                        My <span className="text-purple-600">Account</span>
                    </h1>
                </div>

                {/* Two Card Layout */}
                <div className="grid grid-cols-2 gap-4">

                    {/* Left Card - Navigation */}
                    <div className="bg-white rounded-2xl p-6">
                        {/* Profile Avatar */}
                        <div className="flex justify-center mb-8">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-300">
                                <User className="w-10 h-10 text-gray-500" />
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <nav className="space-y-4 mb-16">
                            <div className="flex items-center justify-between py-2 text-purple-600 font-medium">
                                <span>Account</span>
                                <ChevronRight className="w-5 h-5" />
                            </div>
                            <div className="py-2 text-gray-400 font-medium">
                                Orders
                            </div>

                            <div className="py-2 text-gray-400 font-medium">
                                Wishlist
                            </div>
                        </nav>

                        {/* Logout Button */}
                        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                            Log out
                        </button>
                    </div>

                    {/* Right Card - Account Details */}
                    <div className="bg-white rounded-2xl p-6">

                        {/* Account Details Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-black">Account Details</h2>
                            <button className="p-1 hover:bg-gray-100 rounded">
                                <Edit2 className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-4 mb-8">
                            {/* First Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    First Name
                                </label>
                                <div className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 text-gray-800">
                                    Sourav
                                </div>
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name
                                </label>
                                <div className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 text-gray-800">
                                    Basak
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <div className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 text-gray-800">
                                    souravbasak895@gmail.com
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <div className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 text-gray-800">
                                    +880 1316-468048
                                </div>
                            </div>
                        </div>

                        {/* Password Section */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-semibold text-black">Password</h3>
                                <button className="p-1 hover:bg-gray-100 rounded">
                                    <Edit2 className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>

                            <div className="text-gray-800 text-lg tracking-widest">
                                x x x x x x x x x x x
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}