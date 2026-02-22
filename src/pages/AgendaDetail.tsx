import React from "react";
import { useParams } from "react-router-dom";

const AgendaDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold text-foreground">안건 상세</h2>
      <p className="text-sm text-muted-foreground">안건 ID: {id}</p>
      <div className="bg-card border border-border rounded-2xl p-6 text-center text-muted-foreground">
        안건 상세 내용이 준비 중입니다.
      </div>
    </div>
  );
};

export default AgendaDetail;
