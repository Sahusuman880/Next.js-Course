import Link from "next/link";
import CouserFilter from "./ClientComponents/CourseFilter"
interface SEARCHPARAMS {
    category?:string
    sort?:string
}
const courses = [
  {id:1 ,title:"Next JS" ,category:"full stack", price:100},
  {id:2 ,title:"React JS" ,category:"frontend", price:200},
  {id:3 ,title:"Node JS" ,category:"backend", price:300},
  {id:4 ,title:"Python" ,category:"data-science", price:400},
  {id:5 ,title:"HTML/CSS" ,category:"frontend", price:500},
];
async function CoursesPage({searchParams}: {searchParams: SEARCHPARAMS}) {
const {category , sort}=await searchParams;
let filteredCourses=courses;
if(category)
{ filteredCourses=filteredCourses.filter(course=>course.category===category);}
if(sort=="price")
{ filteredCourses=filteredCourses.sort((a,b)=>a.price-b.price);}
if(sort=="name")
{ filteredCourses=filteredCourses.sort((a,b)=>a.title.localeCompare(b.title));}
  
  return (
    <div>
      <h1>Course Page</h1>
      <div style={{display:"flex",gap:10}}>
        <Link href="/courses?category=full stack">Full Stack</Link>
        <Link href="/courses?category=frontend">Frontend</Link>
        <Link href="/courses?category=backend">Backend</Link>
        <Link href="/courses?category=data-science">Data Science</Link>
      </div>
      <div style={{display:"flex",gap:10}}>
        <Link href="?sort=name">Sort by Name</Link>
        <Link href="?sort=price">Sort by Price</Link>
      </div>
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id}>
              {course.title} - price {course.price}
            </li>
        ))}
      </ul>
      <CouserFilter/>
    </div>
  );
}

export default CoursesPage;
