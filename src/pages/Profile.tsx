import React from "react";
import { useAuth } from "@/contexts/AuthContext";

const Profile: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-lg font-semibold text-foreground">마이페이지</h2>
      <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <p className="text-sm text-muted-foreground">
          {user?.email ?? "이메일 정보 없음"}
        </p>
        <button
          onClick={logout}
          className="w-full py-3 bg-destructive text-destructive-foreground rounded-xl font-semibold text-sm"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Profile;
