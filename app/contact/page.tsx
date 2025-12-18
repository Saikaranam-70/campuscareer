import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"

export const metadata = {
  title: "Contact Us | CampusCareer",
  description:
    "Get in touch with CampusCareer for support, feedback, or collaboration. We're here to help students succeed.",
}

export default function ContactPage() {
  return (
    <div className="px-3 md:px-4 py-6 md:py-8">
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-3 md:space-y-4">
          <div className="flex justify-center">
            <MessageSquare className="w-12 h-12 md:w-16 md:h-16 text-primary" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold">Contact Us</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or ideas? We'd love to hear from you. Reach out to the CampusCareer team anytime.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
          <Card className="p-4 md:p-6">
            <div className="flex items-start gap-3 md:gap-4">
              <Mail className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-1">Email</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  oneserve9@gmail.com
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-6">
            <div className="flex items-start gap-3 md:gap-4">
              <Phone className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-1">Phone</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  +91 7799777391
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-6 sm:col-span-2">
            <div className="flex items-start gap-3 md:gap-4">
              <MapPin className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-1">Location</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  India — Serving students across all colleges and universities
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Support Section */}
        <Card className="p-4 md:p-6 bg-primary/5 border-primary/20">
          <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
            Need Help?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
            You can contact us for:
          </p>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>Platform support or technical issues</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>Career guidance suggestions or feedback</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>Collaboration, partnerships, or campus programs</span>
            </li>
          </ul>
        </Card>

        {/* Footer Note */}
        <div className="text-center py-4 md:py-6">
          <p className="text-sm md:text-base text-muted-foreground">
            We usually respond within 24 hours.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            Thank you for being part of the CampusCareer community.
          </p>
        </div>
      </div>
    </div>
  )
}
