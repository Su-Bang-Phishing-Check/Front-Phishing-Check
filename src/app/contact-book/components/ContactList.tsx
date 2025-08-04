import { JSX } from "react";
import { ContactType } from "../page";

const ContactList = ({ name, phone, image }: ContactType): JSX.Element => {
  return (
    <div
      className="w-full flex items-center p-4 bg-white rounded-lg text-black shadow-sm
    text-[1.125rem] md:text-[1.25rem] select-none"
    >
      <p className="flex-1 font-bold">{name} |</p>
      <p className="flex-1 font-medium">{phone}</p>
    </div>
  );
};

export default ContactList;
