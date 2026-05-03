import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Scheduler — Schedule Messages for Peak Engagement",
  description: "Analyze team activity patterns and schedule Slack messages for when your team is most responsive. Built for team leads and remote coordinators."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3cda1a2f-4b2b-4e17-a722-f8f3dac30049"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
