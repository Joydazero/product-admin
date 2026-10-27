import React from "react";
const summaryItems = [
  {
    id: "products",
    label: "전체 상품",
    value: "120개",
  },
  {
    id: "sales",
    label: "오늘 매출",
    value: "1,250,000원",
  },
  {
    id: "orders",
    label: "오늘 주문",
    value: "32건",
  },
];
function DashboardPage() {
  return (
    <section aria-labelledby="dashboard-title">
      <h1 id="dashboard-title">대시보드</h1>
      <p className="mt-2 text-sm text-slate-600">
        상품 및 매출 현황을 확인합니다.
      </p>
      <p className="mt-5 text-sm font-medium text-amber-700">
        아래 수치는 화면 구성을 위한 예시 데이터입니다.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {summaryItems.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-sm font-medium text-slate-500">{item.label}</h2>
            <p className="mt-3 text-2xl font-bold text-slate-900">
              {item.value}
            </p>
          </article>
        ))}
      </div>
      <section
        aria-labelledby="chart-title"
        className="mt-6 rounded-xl border border-slate-200 bg-white p-6"
      >
        <h2 id="chart-title" className="text-lg font-semibold text-slate-900">
          매출 통계
        </h2>
        <p className="mt-4 text-sm text-slate-500">
          {" "}
          Recharts를 활용한 매출 차트는 이후 단계에서 구현합니다.
        </p>
      </section>
    </section>
  );
}
export default DashboardPage;
