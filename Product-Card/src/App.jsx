import React, { isValidElement } from 'react'
import ProductCard from './component/ProductCard'


const jobCards = [
  {
    image: "https://img.icons8.com/3d-fluency/1200/amazon.jpg",
    company: "Amazon",
    daysAgo: "5 days ago",
    jobTitle: "Senior UI/UX Designer",
    tags: ["Part-time", "Senior level"],
    salary: "$120/hr",
    location: "San Francisco, CA"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCvLeTHwisItiq2ogbeAY_JJe5SBA38iLCA&s",
    company: "Google",
    daysAgo: "30 days ago",
    jobTitle: "Graphic Designer",
    tags: ["Full-time", "Flexible schedule"],
    salary: "$150K - $220K",
    location: "Mountain View, CA"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLwo0nTPj8ntPWDzUY0aIjHe-4nwOQ4IZIw&s",
    company: "Dribbble",
    daysAgo: "18 days ago",
    jobTitle: "Senior Motion Designer",
    tags: ["Contract", "Remote"],
    salary: "$85/hr",
    location: "San Francisco, CA"
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/055/210/890/non_2x/meta-logo-square-rounded-meta-logo-meta-logo-free-download-free-png.png",
    company: "Meta",
    daysAgo: "3 months ago",
    jobTitle: "UX Designer",
    tags: ["Full-time", "In office"],
    salary: "$200K - $250K",
    location: "New York, NY"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3IU1RCsS4ozW3QOnKstCVJ8vKqhIR3PllQ&s",
    company: "Airbnb",
    daysAgo: "1 day ago",
    jobTitle: "Junior UX/UI Designer",
    tags: ["Contract", "Remote"],
    salary: "$100/hr",
    location: "San Francisco, CA"
  },
  {
    image: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    company: "Apple",
    daysAgo: "6 days ago",
    jobTitle: "Graphic Designer",
    tags: ["Full-time", "Flexible schedule"],
    salary: "$85K - $120K",
    location: "Cupertino, CA"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizQq7KJ5NDbGjh-4wklylfJ9hAaOJ5vBtJA&s",
    company: "Netflix",
    daysAgo: "10 days ago",
    jobTitle: "Product Designer",
    tags: ["Full-time", "Remote"],
    salary: "$130K - $180K",
    location: "Los Angeles, CA"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDiicpDsawpNveT7Ota2-EC_vZbP8vneTbg&s",
    company: "Spotify",
    daysAgo: "7 days ago",
    jobTitle: "UI Designer",
    tags: ["Part-time", "Remote"],
    salary: "$90/hr",
    location: "Stockholm, Sweden"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWqYHqTu4mp3D_Fy6nmmT9-kJUoChXvnK2g&s",
    company: "Microsoft",
    daysAgo: "12 days ago",
    jobTitle: "Senior UX Researcher",
    tags: ["Full-time", "Hybrid"],
    salary: "$140K - $190K",
    location: "Seattle, WA"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTmVc7unwsynm3Ofz31vehWOoGK4FMpkPtw&s",
    company: "Adobe",
    daysAgo: "2 days ago",
    jobTitle: "Visual Designer",
    tags: ["Contract", "Flexible schedule"],
    salary: "$95/hr",
    location: "San Jose, CA"
  }
];



const App = () => {
  return (
    <div className='parent'>
      {jobCards.map((element)=>(
          <ProductCard
            image = {element.image}
            company={element.company}
            salary={element.salary}
            daysAgo={element.daysAgo}
            jobTitle={element.jobTitle}
            tag1={element.tags[0]}
            tag2={element.tags[1]}
          />
      ))}
    </div>
  );
};

export default App