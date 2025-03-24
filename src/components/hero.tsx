import Link from "next/link";
import { ArrowUpRight, Check, MessageSquareText } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Your Health,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Informed
                </span>{" "}
                by Medical AI
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get reliable health information and preliminary assessments
                through our AI-powered medical assistant. Understand your
                symptoms and make informed healthcare decisions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/sign-up"
                  className="inline-flex items-center px-6 py-3 text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors text-lg font-medium"
                >
                  Try MedDiagnose Free
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  href="#how-it-works"
                  className="inline-flex items-center px-6 py-3 text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors text-lg font-medium"
                >
                  Learn How It Works
                </Link>
              </div>

              <div className="mt-10 space-y-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>Evidence-based medical information</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>24/7 AI medical assistant access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span>Private and secure conversations</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-teal-100 p-1">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                  alt="Medical AI Interface"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-6 right-6 bg-teal-600 text-white p-3 rounded-full shadow-lg animate-pulse">
                  <MessageSquareText className="w-6 h-6" />
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-teal-200 to-blue-200 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
