import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Home, CheckSquare, UserCircle, ChevronLeft, Bell } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const rootPaths = ["/", "/participate", "/profile"];
  const showBackButton = !rootPaths.includes(location.pathname);

  const getPageTitle = (path: string) => {
    if (path === "/") return "민심잇다";
    if (path === "/participate") return "시민 참여";
    if (path === "/profile") return "마이페이지";
    if (path.includes("/participate/")) return "토론장";
    return "민심잇다";
  };

  return (
    <div className="min-h-screen flex justify-center bg-muted/50 w-full">
      <div className="w-full max-w-[600px] min-h-screen flex flex-col bg-card shadow-2xl relative mx-auto">
        <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border h-14 flex items-center justify-between px-4 transition-all duration-300">
          <div className="flex items-center min-w-[48px]">
            {showBackButton ? (
              <button
                onClick={() => navigate(-1)}
                className="p-2.5 -ml-2 text-muted-foreground active:text-secondary active:bg-muted rounded-full transition-colors flex items-center justify-center"
                aria-label="뒤로가기"
              >
                <ChevronLeft size={24} />
              </button>
            ) : (
              <div className="w-9 h-9 bg-secondary text-secondary-foreground rounded-xl flex items-center justify-center font-extrabold text-sm shadow-md">
                M
              </div>
            )}
          </div>
          <h1 className="text-base font-bold text-foreground truncate flex-1 text-center px-2">
            {getPageTitle(location.pathname)}
          </h1>
          <div className="flex items-center justify-end min-w-[48px]">
            <button
              className="p-2.5 -mr-2 text-muted-foreground active:text-secondary active:bg-muted rounded-full relative flex items-center justify-center"
              aria-label="알림"
            >
              <Bell size={22} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-destructive rounded-full border border-card" />
            </button>
          </div>
        </header>

        <main className="flex-grow pb-24 overflow-y-auto scrollbar-hide w-full bg-background">
          {children}
        </main>

        <nav className="fixed bottom-0 z-50 bg-card/95 backdrop-blur-md border-t border-border pb-safe pt-2 w-full max-w-[600px]">
          <div className="flex justify-around items-center h-16 px-1">
            <NavItem to="/" icon={<Home size={22} />} label="홈" />
            <NavItem to="/participate" icon={<CheckSquare size={22} />} label="참여" />
            <NavItem to="/profile" icon={<UserCircle size={22} />} label="프로필" requireAuth />
          </div>
        </nav>
      </div>
    </div>
  );
};

const NavItem: React.FC<{
  to: string;
  icon: React.ReactNode;
  label: string;
  requireAuth?: boolean;
}> = ({ to, icon, label, requireAuth = false }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (requireAuth && !isAuthenticated) {
      e.preventDefault();
      navigate("/login");
    }
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center w-full h-full space-y-0.5 transition-all duration-200 active:scale-95 ${
          isActive ? "text-primary" : "text-muted-foreground"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <div className={`relative p-1.5 rounded-xl transition-colors ${isActive ? "bg-accent" : ""}`}>
            {icon}
          </div>
          <span className={`text-[10px] font-medium ${isActive ? "font-bold" : ""}`}>{label}</span>
        </>
      )}
    </NavLink>
  );
};

export default Layout;
