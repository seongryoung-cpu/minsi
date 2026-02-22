import React from "react";

const Participate: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold text-foreground">시민 참여</h2>
      <p className="text-sm text-muted-foreground">
        다양한 안건에 대해 의견을 나눠보세요.
      </p>
      <div className="bg-card border border-border rounded-2xl p-6 text-center text-muted-foreground">
        안건 목록이 준비 중입니다.
      </div>
    </div>
  );
};

export default Participate;
