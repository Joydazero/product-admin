import React from "react";

function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <section
        aria-labelledby="login-title"
        className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12"
      >
        <p className="text-sm font-semibold text-blue-600">PRODUCT ADMIN</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900" id="login-title">
          관리자 로그인
        </h1>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          로그인 기능은 이후 단계에서 구현합니다.
        </p>
        <Link
          to="/dashboard"
          className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
        >
          대시보드 미리보기
        </Link>
      </section>
    </main>
  );
}

export default LoginPage;
