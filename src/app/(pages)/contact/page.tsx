import {
  FaTelegram,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import ContactItem from "@/components/shared/ContactItem";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-8 flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-8xl font-mono text-green-400 mb-8">
        //GET_IN_TOUCH
      </h1>
      <p className="text-center mb-12 max-w-2xl text-xl">
        If you have an idea for a website or mobile application, I'd love to
        hear from you! Feel free to reach out to me, and I'll do my best to get
        back to you as soon as possible.
      </p>
      <div className="w-full max-w-xl space-y-4 font-mono">
        <ContactItem
          icon={<FaTelegram className="text-yellow-600" />}
          platform="telegram"
          contact="@vatencio21"
        />
        <ContactItem
          icon={<FaInstagram className="text-yellow-600" />}
          platform="instagram"
          contact="@victoratencio_"
        />
        <ContactItem
          icon={<FaEnvelope className="text-yellow-600" />}
          platform="gmail"
          contact="atenciomvictor@gmail.com"
        />
        <ContactItem
          icon={<FaLinkedin className="text-yellow-600" />}
          platform="linkedin"
          contact="linkedin.com/in/victor-atencio/"
          type="link"
        />
      </div>
    </div>
  );
}
