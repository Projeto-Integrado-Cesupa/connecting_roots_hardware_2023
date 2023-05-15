import React from "react";
import { Link, Outlet } from "react-router-dom";

const Chat = () => {
  return (
    <div className="container">
      <div className="flex h-[80vh] antialiased text-gray-800 mt-2 ">
        <div className="flex flex-row h-full w-full overflow-x-auto scrollbar">
          <div className="flex flex-col py-4 pr-2 w-64 bg-white flex-shrink-0 ">

            <div className="flex flex-col  mt-4 rounded-xl border border-gray-300 shadow-md">
              <div className="relative flex flex-col  items-center justify-center rounded-t-px">
                <div className="bg-img-carbonwallpaper w-full rounded-t-xl h-40 bg-cover"></div>
                <div className="bg-img-carbonfree w-[8rem] rounded-full mt-40 h-[8rem] border-2 border-smallTextColor absolute shadow-xl bg-cover"></div>
              </div>
              <div className="flex flex-col items-center mt-[5rem] mb-4 gap-1">
                <span className="text-xl  text-primaryColor">Carbon Free</span>
                <span className="text-sm text-smallTextColor">Startup</span>
              </div>
            </div>

            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold text-base">Ativas</span>
                <span className="flex items-center justify-center bg-gray-300 h-6 w-6 rounded-full">
                  12
                </span>
              </div>
              <div className="flex flex-col space-y-1 mt-4 h-[20rem] overflow-y-auto scrollbar  rounded-md p-2">
                <Link
                  to=""
                  className="flex flex-row items-center hover:bg-gray-100 rounded-md"
                >
                  <div className=" ml-2 flex items-center justify-center h-10 w-10 bg-img-enzo bg-cover  border-smallTextColor border rounded-full"></div>
                  <div className="ml-2 text-base font-semibold">
                    Enzo Martins
                  </div>
                </Link>
                <Link
                  to="ChatUserTwo"
                  className="flex flex-row items-center hover:bg-gray-100 rounded-md"
                >
                  <div className=" ml-2 flex items-center justify-center h-10 w-10 bg-img-mmib border-smallTextColor border bg-cover rounded-full"></div>
                  <div className="ml-2 text-base font-semibold">mmiB</div>
                </Link>
                <Link
                  to="ChatUserTwo"
                  className="flex flex-row items-center hover:bg-gray-100 rounded-md"
                >
                  <div className=" ml-2 flex items-center justify-center h-10 w-10 bg-img-friend3 border-smallTextColor border bg-cover rounded-full"></div>
                  <div className="ml-2 text-base font-semibold">User</div>
                </Link>
                <Link
                  to="ChatUserTwo"
                  className="flex flex-row items-center hover:bg-gray-100 rounded-md"
                >
                  <div className=" ml-2 flex items-center justify-center h-10 w-10 bg-img-friend3 border-smallTextColor border bg-cover rounded-full"></div>
                  <div className="ml-2 text-base font-semibold">User</div>
                </Link>
                <Link
                  to="ChatUserTwo"
                  className="flex flex-row items-center hover:bg-gray-100 rounded-md"
                >
                  <div className=" ml-2 flex items-center justify-center h-10 w-10 bg-img-friend3 border-smallTextColor border bg-cover rounded-full"></div>
                  <div className="ml-2 text-base font-semibold">User</div>
                </Link>
                <Link
                  to="ChatUserTwo"
                  className="flex flex-row items-center hover:bg-gray-100 rounded-md"
                >
                  <div className=" ml-2 flex items-center justify-center h-10 w-10 bg-img-friend3 border-smallTextColor border bg-cover rounded-full"></div>
                  <div className="ml-2 text-base font-semibold">User</div>
                </Link>
                <Link
                  to="ChatUserTwo"
                  className="flex flex-row items-center hover:bg-gray-100 rounded-md"
                >
                  <div className=" ml-2 flex items-center justify-center h-10 w-10 bg-img-friend3 border-smallTextColor border bg-cover rounded-full"></div>
                  <div className="ml-2 text-base font-semibold">User</div>
                </Link>
                <Link
                  to="ChatUserTwo"
                  className="flex flex-row items-center hover:bg-gray-100 rounded-md"
                >
                  <div className=" ml-2 flex items-center justify-center h-10 w-10 bg-img-friend3 border-smallTextColor border bg-cover rounded-full"></div>
                  <div className="ml-2 text-base font-semibold">User</div>
                </Link>
                <Link
                  to="ChatUserTwo"
                  className="flex flex-row items-center hover:bg-gray-100 rounded-md"
                >
                  <div className=" ml-2 flex items-center justify-center h-10 w-10 bg-img-friend3 border-smallTextColor border bg-cover rounded-full"></div>
                  <div className="ml-2 text-base font-semibold">User</div>
                </Link>
                <Link
                  to="ChatUserTwo"
                  className="flex flex-row items-center hover:bg-gray-100 rounded-md"
                >
                  <div className=" ml-2 flex items-center justify-center h-10 w-10 bg-img-friend3 border-smallTextColor border bg-cover rounded-full"></div>
                  <div className="ml-2 text-base font-semibold">User</div>
                </Link>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Chat;
