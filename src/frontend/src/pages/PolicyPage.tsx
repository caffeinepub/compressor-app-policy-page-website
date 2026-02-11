import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { FileText, Shield, Database, Share2, Clock, Lock, Users, Settings, Bell, Mail } from 'lucide-react';

const sections = [
  { id: 'effective-date', title: 'Effective Date', icon: Clock },
  { id: 'privacy-policy', title: 'Privacy Policy', icon: Shield },
  { id: 'data-collection', title: 'Data Collection & Usage', icon: Database },
  { id: 'data-sharing', title: 'Data Sharing', icon: Share2 },
  { id: 'data-retention', title: 'Data Retention', icon: FileText },
  { id: 'security', title: 'Security', icon: Lock },
  { id: 'childrens-privacy', title: "Children's Privacy", icon: Users },
  { id: 'user-rights', title: 'User Rights & Choices', icon: Settings },
  { id: 'policy-changes', title: 'Changes to This Policy', icon: Bell },
  { id: 'contact', title: 'Contact Information', icon: Mail }
];

export default function PolicyPage() {
  useEffect(() => {
    document.title = 'Compressor - Privacy Policy';
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();
  const effectiveDate = 'February 11, 2026';
  const appIdentifier = typeof window !== 'undefined' ? encodeURIComponent(window.location.hostname) : 'compressor-app';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">Compressor</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          {/* Page Title */}
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Your privacy matters to us. Learn how we protect and handle your data.
            </p>
          </div>

          {/* Table of Contents */}
          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <FileText className="h-5 w-5" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="grid gap-2 sm:grid-cols-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <Button
                      key={section.id}
                      variant="ghost"
                      className="justify-start gap-2 font-normal"
                      onClick={() => scrollToSection(section.id)}
                    >
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      {section.title}
                    </Button>
                  );
                })}
              </nav>
            </CardContent>
          </Card>

          {/* Policy Sections */}
          <div className="space-y-6">
            {/* Effective Date */}
            <Card id="effective-date" className="scroll-mt-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Effective Date
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed">
                  This Privacy Policy is effective as of <strong>{effectiveDate}</strong>. We may update this policy from time to time, and any changes will be reflected with a new effective date.
                </p>
              </CardContent>
            </Card>

            <Separator />

            {/* Privacy Policy */}
            <Card id="privacy-policy" className="scroll-mt-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed">
                  Welcome to Compressor. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our compression application and services.
                </p>
                <p className="text-base leading-relaxed">
                  By using Compressor, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </CardContent>
            </Card>

            <Separator />

            {/* Data Collection & Usage */}
            <Card id="data-collection" className="scroll-mt-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Data Collection & Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <h3 className="text-lg font-semibold">Information We Collect</h3>
                <p className="text-base leading-relaxed">
                  We may collect various types of information in connection with the services we provide, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base">
                  <li><strong>Files You Upload:</strong> Files you choose to compress using our service are processed temporarily and are not permanently stored unless you explicitly save them to your account.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our application, including features used, compression settings, and performance metrics.</li>
                  <li><strong>Device Information:</strong> Technical information about your device, browser type, operating system, and IP address.</li>
                  <li><strong>Account Information:</strong> If you create an account, we collect your email address and authentication credentials.</li>
                </ul>
                <h3 className="mt-6 text-lg font-semibold">How We Use Your Information</h3>
                <p className="text-base leading-relaxed">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base">
                  <li>To provide, maintain, and improve our compression services</li>
                  <li>To process and compress your files according to your specifications</li>
                  <li>To analyze usage patterns and optimize application performance</li>
                  <li>To communicate with you about service updates and support</li>
                  <li>To detect, prevent, and address technical issues and security threats</li>
                </ul>
              </CardContent>
            </Card>

            <Separator />

            {/* Data Sharing */}
            <Card id="data-sharing" className="scroll-mt-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-primary" />
                  Data Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our application, conducting our business, or servicing you, provided they agree to keep this information confidential.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                  <li><strong>With Your Consent:</strong> We may share your information with third parties when you have given us explicit consent to do so.</li>
                </ul>
              </CardContent>
            </Card>

            <Separator />

            {/* Data Retention */}
            <Card id="data-retention" className="scroll-mt-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base">
                  <li><strong>Temporary Files:</strong> Files uploaded for compression are processed in real-time and deleted immediately after processing is complete, unless you choose to save them.</li>
                  <li><strong>Account Data:</strong> If you create an account, we retain your account information until you request deletion or close your account.</li>
                  <li><strong>Usage Logs:</strong> Usage and analytics data may be retained for up to 12 months for service improvement purposes.</li>
                </ul>
                <p className="text-base leading-relaxed">
                  You may request deletion of your data at any time by contacting us using the information provided in the Contact section below.
                </p>
              </CardContent>
            </Card>

            <Separator />

            {/* Security */}
            <Card id="security" className="scroll-mt-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed">
                  We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base">
                  <li><strong>Encryption:</strong> All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS protocols.</li>
                  <li><strong>Access Controls:</strong> We restrict access to personal information to employees and contractors who need to know that information to operate, develop, or improve our services.</li>
                  <li><strong>Regular Audits:</strong> We conduct regular security audits and assessments to identify and address potential vulnerabilities.</li>
                  <li><strong>Secure Infrastructure:</strong> Our application is hosted on secure, reliable infrastructure with built-in security features.</li>
                </ul>
                <p className="text-base leading-relaxed">
                  However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                </p>
              </CardContent>
            </Card>

            <Separator />

            {/* Children's Privacy */}
            <Card id="childrens-privacy" className="scroll-mt-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Children's Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed">
                  Our service is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
                </p>
                <p className="text-base leading-relaxed">
                  If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers promptly.
                </p>
              </CardContent>
            </Card>

            <Separator />

            {/* User Rights & Choices */}
            <Card id="user-rights" className="scroll-mt-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  User Rights & Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed">
                  You have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-base">
                  <li><strong>Access:</strong> You have the right to request access to the personal information we hold about you.</li>
                  <li><strong>Correction:</strong> You have the right to request that we correct any inaccurate or incomplete personal information.</li>
                  <li><strong>Deletion:</strong> You have the right to request deletion of your personal information, subject to certain legal obligations.</li>
                  <li><strong>Data Portability:</strong> You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
                  <li><strong>Opt-Out:</strong> You may opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications.</li>
                  <li><strong>Withdraw Consent:</strong> Where we rely on your consent to process your personal information, you have the right to withdraw that consent at any time.</li>
                </ul>
                <p className="text-base leading-relaxed">
                  To exercise any of these rights, please contact us using the information provided in the Contact section below.
                </p>
              </CardContent>
            </Card>

            <Separator />

            {/* Changes to This Policy */}
            <Card id="policy-changes" className="scroll-mt-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Changes to This Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "Effective Date" at the top of this policy.
                </p>
                <p className="text-base leading-relaxed">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. If we make material changes to this policy, we will notify you by email (if you have provided an email address) or by posting a prominent notice on our application.
                </p>
                <p className="text-base leading-relaxed">
                  Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            <Separator />

            {/* Contact Information */}
            <Card id="contact" className="scroll-mt-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-base font-semibold">Compressor Support Team</p>
                  <p className="text-base">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:privacy@compressor.app" className="text-primary hover:underline">
                      privacy@compressor.app
                    </a>
                  </p>
                  <p className="text-base">
                    <strong>Website:</strong>{' '}
                    <a href="https://compressor.app" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      https://compressor.app
                    </a>
                  </p>
                </div>
                <p className="mt-4 text-base leading-relaxed">
                  We will respond to your inquiry as soon as possible, typically within 5-7 business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border/40 bg-muted/30">
        <div className="container py-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <FileText className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-bold">Compressor</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Powerful file compression made simple and secure.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold">Contact Us</h3>
                <p className="text-sm text-muted-foreground">
                  Email:{' '}
                  <a href="mailto:privacy@compressor.app" className="text-primary hover:underline">
                    privacy@compressor.app
                  </a>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Effective Date: {effectiveDate}
                </p>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
              <p>© {currentYear} Compressor. All rights reserved.</p>
              <p>
                Built with <span className="text-destructive">♥</span> using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
