import { JSX } from 'react';
import { ContactType } from '../page';

const ContactList = ({ name, phone }: ContactType): JSX.Element => {
  return (
    <div
      className="flex flex-col md:flex-row items-center p-3 md:p-4 bg-white rounded-lg text-black shadow-sm
    text-[1rem] md:text-[1.25rem] select-none h-[70px] md:h-[90px]"
    >
      <p className="w-full md:w-3/5 font-bold">{name}</p>
      <p className="w-full md:w-2/5 flex md:flex-col font-medium md:hidden">
        {phone.join(', ')}
      </p>
      <p className="hidden md:inline-block w-full md:w-2/5 flex md:flex-col font-medium">
        {phone.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </p>
    </div>
  );
};

export default ContactList;
