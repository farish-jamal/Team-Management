import { Send } from "lucide-react";

export const ChatBox = () => {
  return (
    <main className="flex-1">
      <div className="h-full flex flex-col">
        <header className="px-6 py-4 border-b border-gray-700 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">William Smith</h2>
            <p className="text-sm text-gray-400">william.smith@example.com</p>
          </div>
          <span className="text-xs text-gray-400">
            Oct 22, 2023, 9:00:00 AM
          </span>
        </header>

        <article className="p-6 flex-1 overflow-y-auto">
          <div className="p-4 space-y-8">
            <div className="bg-gray-800 flex items-start space-x-3 p-4 rounded-lg ">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                W
              </div>
              <div>
                <p className="text-sm text-gray-300">
                  Hi, let's have a meeting tomorrow to discuss the project. I've
                  been reviewing the project details and have some ideas I'd
                  like to share. It's crucial that we align on our next steps to
                  ensure the project's success.
                </p>
                <span className="text-xs text-gray-500">9:00 AM</span>
              </div>
            </div>

            <div className="bg-blue-700 flex items-start space-x-3 p-4 rounded-lg ">
              <div className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
                Y
              </div>
              <div>
                <p className="text-sm text-gray-300">
                  Sure, I'll prepare the details for discussion and have some
                  questions ready.
                </p>
                <span className="text-xs text-gray-500">9:15 AM</span>
              </div>
            </div>
          </div>
        </article>

        <div className="px-6 py-4 border-t border-gray-700 flex items-center">
          <input
            type="text"
            placeholder="Reply..."
            className="flex-1 bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-purple-500"
          />
          <button className="ml-4 bg-purple-600 px-4 py-2 rounded text-sm hover:bg-purple-500 flex items-center">
            <Send className="mr-2" /> Send
          </button>
        </div>
      </div>
    </main>
  );
};
