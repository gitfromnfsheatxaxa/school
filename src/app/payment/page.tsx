import { Suspense } from "react";
import PaymentPage from "@/components/PaymentPage/PaymentPage";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PaymentPage />
    </Suspense>
  );
}
