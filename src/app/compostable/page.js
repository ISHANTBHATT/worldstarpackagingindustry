import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Shield, Recycle } from "lucide-react";
import QRCodeSection from "../components/QRCodeSection";
import Link from "next/link";

export default function CompostableCupsBrochure() {
  return (
    <div className="min-h-screen bg-[#F5ECE4] py-32">
      {/* Header Section */}
      <header className=" text-[#734425] py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-8">
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
                className="text-lg px-4 py-2 bg-[#B2E7BC] rounded-3xl"
              >
                CPCB Certified
              </Badge>
            </div>

            <p className="text-lg leading-relaxed">
              We are thrilled to announce that{" "}
              <strong>WORLDSTAR PACKAGING INDUSTRY</strong> has officially
              received <strong>CPCB (Central Pollution Control Board)</strong>{" "}
              certification for manufacturing compostable paper cups! This
              certification marks a significant milestone in our commitment to
              sustainability and eco-friendly practices.
            </p>

            <p className="text-lg leading-relaxed">
              As part of our ongoing efforts to provide innovative and
              environmentally responsible solutions, we are proud to offer
              high-quality compostable paper cups that meet the stringent
              standards set by the CPCB. These cups are made from materials that
              are biodegradable and compostable, contributing to a cleaner,
              greener future.
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
          <Card className="shadow-lg bg-[#B2E7BC]">
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
                    <p className="text-muted-foreground">
                      Ensuring compliance with environmental and regulatory
                      standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Eco-friendly Materials
                    </h3>
                    <p className="text-muted-foreground">
                      Made from biodegradable, compostable materials.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Recycle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Sustainable Choice
                    </h3>
                    <p className="text-muted-foreground">
                      Ideal for businesses looking to reduce their carbon
                      footprint and support environmental sustainability.
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
        <section className="mt-16 text-center">
          <Card className="bg-card shadow-lg">
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
        <div className="text-center mt-12">
          <Link href="/contact">
            <Button size="lg" className="px-8 py-3 text-lg">
              Contact Us for More Information
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
