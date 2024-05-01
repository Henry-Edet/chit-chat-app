import Conversation from "./Conversation";
import SearchInput from "./SearchInput";
import LogoutButton from "./LogoutButton";

export default function Sidebar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversation />
      <LogoutButton />
    </div>
  );
}
