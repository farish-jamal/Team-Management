import { Mail, Search } from "lucide-react";

interface Inbox {
  id: number;
  sender: string;
  date: string;
  subject: string;
  tags: string[];
}

interface InboxSearchProps {
  data: Inbox[];
}

const InboxSidebar: React.FC<InboxSearchProps> = ({ data }) => {
  return (
    <aside className="w-1/4 bg-gray-800 border-r border-gray-700">
      <div className="px-4 py-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center">
          <Mail className="mr-2" /> Inbox
        </h2>
        <button className="text-sm bg-gray-700 px-2 py-1 rounded hover:bg-gray-600">
          All mail
        </button>
      </div>
      <div className="px-4 py-2">
        <div className="relative">
          <Search className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-700 text-white px-10 py-2 rounded focus:outline-none focus:ring focus:ring-purple-500"
          />
        </div>
      </div>
      <ul className="overflow-y-auto h-[calc(100vh-8rem)]">
        {data.map((email) => (
          <li
            key={email.id}
            className="px-4 py-3 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">{email.sender}</h3>
              <span className="text-xs text-gray-400">{email.date}</span>
            </div>
            <p className="text-sm text-gray-300 truncate">{email.subject}</p>
            <div className="flex space-x-2 mt-1">
              {email.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-700 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default InboxSidebar;
