import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Shield, Recycle } from "lucide-react";
import QRCodeSection from "../components/QRCodeSection";
import Link from "next/link";

export default function CompostableCupsBrochure() {
  return (
    <div className="min-h-screen bg-[#5FBBB5] text-[#16423B] py-32">
      {/* Header Section */}
      <header className=" text-[#16423B] py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-8">
            COMPOSTABLE PAPER CUPS
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Sip Sustainably, Save the Future!
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section with Product Image */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              {/* <img
                src="/green-compostable-paper-cup.png"
                alt="Compostable Paper Cup"
                className="w-20 h-20"
              /> */}
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 bg-[#E6F7F6] text-[#16423B] rounded-3xl"
              >
                CPCB Certified
              </Badge>
            </div>

            <p className="text-lg leading-relaxed">
              At <strong>WorldStar Packaging Industry</strong>, we take pride in
              being leaders in sustainable and eco-friendly packaging solutions.
              Our<strong> CPCB Certified Compostable Paper Cups </strong> are
              thoughtfully designed to meet the highest environmental and safety
              standards, making them a responsible choice for businesses
              committed to sustainability.
            </p>

            <p className="text-lg leading-relaxed">
              Crafted from 100% biodegradable materials, these cups naturally
              break down after use, reducing waste and minimizing environmental
              impact. Perfect for cafes, restaurants, and events, they combine
              durability, functionality, and eco-conscious design, so you can
              serve your beverages confidently while contributing to a greener
              planet.
            </p>

            <p className="text-lg leading-relaxed">
              By choosing our compostable cups, you&apos;re not just serving
              drinks—you&apos;re making a statement about your brand&apos;s
              commitment to the environment.
            </p>
          </div>

          <div className="relative">
            <img
              src="/images/comp-1.png"
              alt="Pure Flavour Zero Plastic Cup"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-16 ">
          <Card className="shadow-lg bg-[#E6F7F6] text-[#16423B] border border-[#3aafa9]">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-6">
                Key Highlights of Our Certified Compostable Paper Cups
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      CPCB Certified
                    </h3>
                    <p className="text-[#30807B] text-base">
                      Our cups are officially recognized by the Central
                      Pollution Control Board, affirming our commitment to
                      environmental sustainability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Eco-friendly Materials
                    </h3>
                    <p className="text-[#30807B] text-base">
                      Made from biodegradable and compostable materials, our
                      cups are designed to minimize environmental impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Recycle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Sustainable Choice
                    </h3>
                    <p className="text-[#30807B] text-base">
                      Ideal for businesses aiming to reduce their carbon
                      footprint and support a greener future.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Partnership Message */}
        {/* <section className="mb-16">
          <Card className="border border-[#D7C9BB] bg-[#F3E6DA] text-[#734425]">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-6">
                We would like to take this opportunity to thank you for your
                continued trust and support. With this certification, we are
                confident that our compostable paper cups will serve your
                business&apos;s needs while helping you meet your sustainability
                goals.
              </p>

              <p className="text-lg leading-relaxed">
                If you have any questions or would like more information about
                our certified products, please don&apos;t hesitate to reach out.
                We look forward to continuing our partnership and providing you
                with the highest quality eco-friendly solutions.
              </p>
            </CardContent>
          </Card>
        </section> */}

        {/* QR Code Section */}
        <QRCodeSection />

        {/* Quality Standards Footer */}
        <section className="mt-16 text-center ">
          <Card className="bg-card shadow-lg bg-[#E6F7F6] text-[#16423B]">
            <CardContent className="pt-6">
              <p className="text-lg font-medium italic">
                All products are tested as per global food safety and packaging
                standards at an internationally accredited laboratory (SGS)
                annually. The test reports are shared on demand.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <Link href="/contact">
            <Button
              size="lg"
              className="px-8 py-3 text-base sm:text-lg break-words"
            >
              Contact Us for More Information
            </Button>
          </Link>
        </div> */}
      </main>
    </div>
  );
}
