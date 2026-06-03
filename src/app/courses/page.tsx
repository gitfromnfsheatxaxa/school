"use client";

import { useRouter } from "next/navigation";
import CourseCatalog, {
  type Course,
} from "@/components/CourseCatalog/CourseCatalog";
import { useTranslation } from "@/i18n/provider";

const IMAGES = [
  "/img/photo-1434030216411-0b793f4b4173.jpg",
  "/img/photo-1516534775068-ba3e7458af70.jpg",
  "/img/photo-1559757175-0eb30cd8c063.jpg",
];

export default function CoursesPage() {
  const router = useRouter();
  const { dict } = useTranslation();

  const courses: Course[] = dict.courses.samples.map((c, i) => ({
    id: c.id,
    title: c.title,
    desc: c.desc,
    category: c.category,
    level: c.level,
    durationWeeks: c.durationWeeks,
    priceUzs: c.priceUzs,
    image: IMAGES[i % IMAGES.length],
  }));

  return (
    <CourseCatalog
      courses={courses}
      onSelectCourse={(id) => router.push(`/courses/${id}`)}
    />
  );
}
