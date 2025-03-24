import Header from "@/components/global/Header/Header";
import Aside from "@/components/global/Aside/Aside";
import SecondAside from "@/components/global/SecondAside";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-h-screen w-screen main-layout transition-all duration-200">
      <Header></Header>

      <Aside></Aside>
      {children}
      <SecondAside></SecondAside>
    </div>
  );
}
