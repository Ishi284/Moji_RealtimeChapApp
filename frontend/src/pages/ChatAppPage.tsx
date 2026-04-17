import ChatWindowLayout from "@/components/chat/ChatWindowLayout";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuthStore } from "@/stores/useAuthStore";

const ChatAppPage = () => {
  // const { user } = useAuthStore(); // theo dõi toàn bộ state trong store, 1 state thay đổi sẽ render lại toàn bộ component
  const user = useAuthStore((s) => s.user); // theo dõi riêng user

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex h-screen w-full p-2">
        <ChatWindowLayout />
      </div>
    </SidebarProvider>
  );
};

export default ChatAppPage;
