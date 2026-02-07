export default function CourseDetails({ params }: { params: { id: string } }) {
  return <h1 style={{ padding: 40 }}>Course ID: {params.id}</h1>
}