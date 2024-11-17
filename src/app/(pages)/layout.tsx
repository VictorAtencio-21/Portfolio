import Navbar from "@/components/shared/navigation/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col bg-gray-950">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
