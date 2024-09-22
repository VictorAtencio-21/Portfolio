import Link from "next/link";

interface ContactItemProps {
  icon: React.ReactNode;
  platform: string;
  contact: string;
  type?: "link";
}

function ContactItem({ icon, platform, contact, type }: ContactItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {icon}
        <span className="ml-2 text-yellow-600 text-lg">//{platform}</span>
      </div>
      {type === "link" ? (
        <Link href={`https://${contact}`}>{contact}</Link>
      ) : (
        <span>{contact}</span>
      )}
      <span className="text-yellow-600 text-lg">//{platform}</span>
    </div>
  );
}

export default ContactItem;
