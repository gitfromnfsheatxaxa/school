"use client";

import HomeContext from "@/components/Home/HomeContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/register");
  };

  const handleViewCourses = () => {
    router.push("/courses");
  };

  return (
    <main>
      <HomeContext
        onGetStarted={handleGetStarted}
        onViewCourses={handleViewCourses}
      />
    </main>
  );
}
