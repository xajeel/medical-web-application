import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  Brain,
  CheckCircle2,
  HeartPulse,
  MessageSquareText,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* App Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-teal-700">
              How MedDiagnose Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform provides reliable health information and
              preliminary assessments to help you make informed healthcare
              decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquareText className="w-6 h-6" />,
                title: "Ask Medical Questions",
                description:
                  "Chat with our AI assistant about symptoms, conditions, or general health inquiries",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI-Powered Analysis",
                description:
                  "Receive evidence-based information from our advanced medical knowledge system",
              },
              {
                icon: <Stethoscope className="w-6 h-6" />,
                title: "Professional Guidance",
                description:
                  "Get suggestions on when to seek professional medical attention",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-teal-100"
              >
                <div className="text-teal-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-teal-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Medical professionals"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-teal-700">
                About MedDiagnose
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded by a team of healthcare professionals and AI
                specialists, MedDiagnose aims to bridge the gap between medical
                knowledge and public access. We believe everyone deserves
                reliable health information to make informed decisions about
                their wellbeing.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our platform combines cutting-edge artificial intelligence with
                evidence-based medical knowledge to provide preliminary guidance
                - not to replace professional medical care, but to complement it
                and help users understand when and how to seek appropriate
                healthcare.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: <HeartPulse className="w-5 h-5" />,
                    text: "Evidence-based information",
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    text: "Privacy-focused platform",
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    text: "Developed with medical experts",
                  },
                  {
                    icon: <CheckCircle2 className="w-5 h-5" />,
                    text: "Regular knowledge updates",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="text-teal-600">{item.icon}</div>
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700">
                Learn More About Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-teal-100">Medical Inquiries Answered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-teal-100">User Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-teal-100">AI Assistant Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-8 md:p-12 shadow-lg text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated on Health Topics
              </h2>
              <p className="text-white/90 max-w-xl mx-auto">
                Subscribe to our newsletter for the latest health information,
                medical research updates, and tips for maintaining your
                wellbeing.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30"
                required
              />
              <Button
                type="submit"
                className="bg-white text-teal-700 hover:bg-white/90 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-white/80 text-sm text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-teal-700">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Create an account to access our AI medical assistant and
            personalized health resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/sign-up"
              className="inline-flex items-center px-6 py-3 text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Sign Up Free
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="/sign-in"
              className="inline-flex items-center px-6 py-3 text-teal-700 bg-teal-100 rounded-lg hover:bg-teal-200 transition-colors"
            >
              Sign In
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
