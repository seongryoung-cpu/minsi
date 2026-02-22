import React from "react";

const Home: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <section className="text-center py-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">민심잇다</h1>
        <p className="text-muted-foreground text-sm">
          당신의 의견이 정책이 됩니다
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">🔥 오늘의 이슈</h2>
        <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-medium px-2.5 py-1 rounded-full">
            진행중
          </span>
          <h3 className="font-bold text-foreground">뉴스피드 기능이 곧 출시됩니다</h3>
          <p className="text-sm text-muted-foreground">
            쏟아지는 단발성 이슈를 사건 단위로 추적하는 새로운 뉴스피드를 준비중입니다.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground">📊 시민 참여 현황</h2>
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="총 참여자" value="—" />
          <StatCard label="진행 중 안건" value="—" />
          <StatCard label="오늘 참여" value="—" />
          <StatCard label="의견 수" value="—" />
        </div>
      </section>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-card border border-border rounded-xl p-4 text-center">
    <div className="text-2xl font-bold text-primary">{value}</div>
    <div className="text-xs text-muted-foreground mt-1">{label}</div>
  </div>
);

export default Home;
