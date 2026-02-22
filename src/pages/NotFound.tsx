import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-muted-foreground mb-6">페이지를 찾을 수 없습니다.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound;
