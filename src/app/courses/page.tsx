"use client";
import CourseCatalog from "@/components/CourseCatalog/CourseCatalog";

export default function CoursesPage() {
  const courses = [
    {
      id: "1",
      title: "React Basics",
      description: "Learn React from scratch",
      image_url: "../../../public/img/photo-1434030216411-0b793f4b4173.jpg",
      level: "beginner",
      category: "Frontend",
      duration_weeks: 6,
      price_uzs: 1200000,
    },
    {
      id: "2",
      title: "Python Basics",
      description: "Learn React from scratch",
      image_url: "../../../public/img/photo-1434030216411-0b793f4b4173.jpg",
      level: "beginner",
      category: "Backend",
      duration_weeks: 6,
      price_uzs: 1200000,
    },
    {
      id: "3",
      title: "React Basics",
      description: "Learn React from scratch",
      image_url: "../../../public/img/photo-1434030216411-0b793f4b4173.jpg",
      level: "beginner",
      category: "Frontend",
      duration_weeks: 6,
      price_uzs: 1200000,
    },
  ];
  const handleSelectCourse = (id: string) => {
    alert("Selected course ID: " + id);
  };

  const handleLogin = () => {
    alert("Redirect to login page");
  };

  return <CourseCatalog onSelectCourse={handleSelectCourse} onLogin={handleLogin} courses={courses} />;
}
