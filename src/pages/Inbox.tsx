import React from "react";
import InboxSidebar from "@/components/InboxSidebar";
import { ChatBox } from "@/components/ChatBox";
import LeftNavigation from "@/components/LeftNavigation";

const data = [
  {
    id: 1,
    sender: "William Smith",
    subject: "Meeting Tomorrow",
    content:
      "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share...",
    tags: ["meeting", "work", "important"],
    date: "about 1 year ago",
  },
  {
    id: 2,
    sender: "Alice Smith",
    subject: "Re: Project Update",
    content:
      "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done...",
    tags: ["work", "important"],
    date: "about 1 year ago",
  },
  {
    id: 3,
    sender: "Bob Johnson",
    subject: "Weekend Plans",
    content:
      "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun...",
    tags: ["personal"],
    date: "over 1 year ago",
  },
  {
    id: 4,
    sender: "Emily Davis",
    subject: "Re: Question about Budget",
    content:
      "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed...",
    tags: ["work", "budget"],
    date: "almost 2 years ago",
  },
  {
    id: 5,
    sender: "Michael Wilson",
    subject: "Important Announcement",
    content:
      "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product...",
    tags: ["work", "important"],
    date: "almost 2 years ago",
  },
];

const EmailListPage: React.FC = () => {
  return (
    <div className="flex w-full">
      <div className="w-full md:w-[3%]">
        <LeftNavigation />
      </div>
      <div className="w-full md:w-[97%] bg-gray-900 text-white min-h-screen flex">
        <InboxSidebar data={data}/>
        <ChatBox />
      </div>
    </div>
  );
};

export default EmailListPage;
