import { Calendar, GhostIcon, HelpCircle, HomeIcon, LogOut, MessageCircle, Timer, User, Users } from "lucide-react";

const LeftNavigation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-white p-4">
      <div className="flex flex-col space-y-8">
      <div className="flex items-center space-x-2">
          <GhostIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800 transition" />
        </div>
        <div className="flex items-center space-x-2">
          <HomeIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800 transition" />
        </div>
        <div className="flex items-center space-x-2">
          <Users className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800 transition" />
        </div>
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800 transition" />
        </div>
        <div className="flex items-center space-x-2">
          <Timer className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800 transition" />
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800 transition" />
        </div>
        <div className="flex items-center space-x-2">
          <User className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800 transition" />
        </div>
        <div className="flex items-center space-x-2">
          <HelpCircle className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800 transition" />
        </div>
      </div>
      <div className="mt-auto flex justify-center">
        <div className="flex items-center space-x-2 cursor-pointer">
          <LogOut className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-800 transition" />
        </div>
      </div>
    </div>
  );
};

export default LeftNavigation;
