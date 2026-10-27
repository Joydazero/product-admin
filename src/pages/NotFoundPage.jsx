import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-4 text-center">
      <p className="text-6xl font-bold text-blue-600">404</p>

      <h1 className="mt-5 text-2xl font-bold text-slate-900">
        페이지를 찾을 수 없습니다
      </h1>

      <p className="mt-3 text-sm text-slate-600">
        요청하신 주소가 올바른지 확인해 주세요.
      </p>

      <Link
        to="/dashboard"
        className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
      >
        대시보드로 이동
      </Link>
    </main>
  );
}

export default NotFoundPage;
