import Sidebar from "@/components/Sidebar";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
        <div className="flex h-screen bg-white">
          <Sidebar />
          <main className="flex-1 m-1 p-4 bg-background text-white rounded-xl shadow-lg">
            {children}
          </main>
        </div>
  );
}
