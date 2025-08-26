"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, Award, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function QRCodeSection() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section className="mb-16 ">
      <Card className="border-accent bg-[#B2E7BC] shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl mb-4 flex items-center justify-center gap-2">
            <Award className="w-8 h-8 text-white" />
            CPCB Certification Verification
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg inline-block mb-4">
                <img
                  src="/images/qr.png"
                  alt="QR Code for Certificate Verification"
                  className="w-48 h-48 mx-auto"
                />
              </div>
              <p className="text-lg font-medium mb-4">
                Scan QR Code to View Certificate
              </p>
              {/* <Button
                onClick={() => setShowCertificate(true)}
                className="flex items-center gap-2"
              >
                <QrCode className="w-4 h-4" />
                View Certificate Online
              </Button> */}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">
                Certificate Details
              </h3>

              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>CPCB Registration Number: WP/2024/ECO/001</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>Certification Date: January 2024</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>Valid Until: January 2027</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>Product Category: Compostable Food Packaging</span>
              </div>

              <Badge variant="secondary" className="mt-4 bg-[#B2E7BC]">
                Verified by Central Pollution Control Board
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certificate Modal */}
      {/* <Dialog open={showCertificate} onOpenChange={setShowCertificate}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" />
              CPCB Certification Document
            </DialogTitle>
            <DialogDescription>
              Official certification for compostable paper cups manufacturing
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">

            <div className="text-center border-b pb-6">
              <h2 className="text-2xl font-bold text-primary mb-2">
                Central Pollution Control Board
              </h2>
              <p className="text-lg text-muted-foreground">
                Ministry of Environment, Forest and Climate Change
              </p>
              <p className="text-lg text-muted-foreground">
                Government of India
              </p>
            </div>


            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">
                CERTIFICATE OF COMPLIANCE
              </h3>

              <div className="space-y-4">
                <p className="text-center text-lg">This is to certify that</p>

                <div className="text-center">
                  <h4 className="text-2xl font-bold text-primary">
                    WORLDSTAR PACKAGING INDUSTRY
                  </h4>
                  <p className="text-muted-foreground">Manufacturing Unit</p>
                </div>

                <p className="text-center">
                  has been granted permission for manufacturing and marketing of
                  <strong> Compostable Paper Cups</strong> in accordance with
                  the Plastic Waste Management Rules, 2016 (as amended).
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <p>
                      <strong>Registration No:</strong> WP/2024/ECO/001
                    </p>
                    <p>
                      <strong>Issue Date:</strong> January 15, 2024
                    </p>
                    <p>
                      <strong>Valid Until:</strong> January 15, 2027
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Product Category:</strong> Compostable Food
                      Packaging
                    </p>
                    <p>
                      <strong>Standards Met:</strong> IS 17088:2008
                    </p>
                    <p>
                      <strong>Testing Lab:</strong> SGS India Pvt. Ltd.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/20 rounded-lg">
                  <h5 className="font-semibold mb-2">Compliance Standards:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Biodegradability: 90% within 180 days</li>
                    <li>• Compostability: Meets ASTM D6400 standards</li>
                    <li>• Heavy metals content: Below permissible limits</li>
                    <li>• Ecotoxicity: No adverse effects on plant growth</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>This certificate is digitally signed and verified by CPCB</p>
              <p>For verification, visit: www.cpcb.nic.in/verify</p>
            </div>
          </div>
        </DialogContent>
      </Dialog> */}
    </section>
  );
}
