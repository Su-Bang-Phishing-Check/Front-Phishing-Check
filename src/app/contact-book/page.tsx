import ContactList from './components/ContactList';
import list from './data/list.json';

export interface ContactType {
  name: string;
  phone: string[];
  image?: string;
}

const ContactBookPage = () => {
  return (
    <div className="min-h-screen bg-[#f7fbff] p-4">
      <div className="grid grid-cols-2 gap-4">
        {list.map((bank: ContactType) => (
          <ContactList
            key={bank.name}
            name={bank.name}
            phone={bank.phone}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactBookPage;
