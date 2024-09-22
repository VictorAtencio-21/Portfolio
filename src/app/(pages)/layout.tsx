import Navbar from "@/components/shared/navigation/navbar";
import Footer from "@/components/shared/navigation/footer";
import {
  FaTelegram,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer
          links={[
            {
              url: "https://t.me/vatencio21",
              icon: <FaTelegram className="text-yellow-600" size={36} />,
            },
            {
              url: "https://instagram.com/victoratencio_",
              icon: <FaInstagram className="text-yellow-600" size={36} />,
            },
            {
              url: "https://linkedin.com/in/victor-atencio/",
              icon: <FaLinkedin className="text-yellow-600" size={36} />,
            },
            {
              url: "mailto:atenciomvictor@gmail.com",
              icon: <FaEnvelope className="text-yellow-600" size={36} />,
            },
          ]}
        />
      </body>
    </html>
  );
}
