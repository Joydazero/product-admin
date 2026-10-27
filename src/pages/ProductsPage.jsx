import React from "react";

function ProductsPage() {
  return (
    <section aria-labelledby="products-title">
      <div>
        <h1 id="products-title" className="">
          상품 관리
        </h1>
        <p className="">상품 목록과 등록,수정,삭제 기능을 관리합니다.</p>
      </div>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-8">
        <h2 className="text-lg font-semibold text-slate-900">상품 목록</h2>

        <p className="mt-4 text-sm text-slate-500">
          상품 API와 목록 테이블은 이후 단계에서 구현합니다.
        </p>
      </div>
    </section>
  );
}
export default ProductsPage;
