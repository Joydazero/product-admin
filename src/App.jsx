import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
        <section
          className="w-full max-w-xl rounded-2xl border
        border-slate-200 bg-white p-8 shadow-sm sm:p-12"
        >
          <p className="text-xs font-bold tracking-widest text-blue-600">
            PRODUCT ADMIN
          </p>
          <h1
            id="page-title"
            className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            상품 관리 시스템
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            상품을 등록하고 관리할 수 있는 시스템입니다.
          </p>
          <div
            role="status"
            className="mt-8 rounded-lg border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-800 "
          >
            프로젝트 초기 설정이 완료되었습니다.
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
