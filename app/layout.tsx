import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceAudit — Time Tracking Audit for Freelancer Invoices",
  description: "Detect billing anomalies, productivity gaps, and suspicious time entries in freelancer logs. Built for agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="46521d7b-2e38-40a0-9684-5bee68a23f80"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
