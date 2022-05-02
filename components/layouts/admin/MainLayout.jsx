import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-no-wrap">
      <Sidebar />
      <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
        <div className="w-full h-full rounded">{children}</div>
      </div>
    </div>
  );
}
