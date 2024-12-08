import {MessagesSquare} from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <MessagesSquare className="w-8 h-8 text-primary " />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold select-none">
          Welcome to #SamVaad !!
        </h2>
        <p className="text-base-content/60">
          <h2 className="text-lg select-none">
            What are you waiting for? Pick a conversation from the sidebar and
            get started!
          </h2>
          <p className="select-none">___________________________________</p>
          <h3 className="text-sm select-none">
            No harassment or bullying, I am watching everything...
          </h3>
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
