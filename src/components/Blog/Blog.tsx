import React from 'react'
import BlogCard from './BlogCard'
import SectionHeading from '@/components/shared/SectionHeading'

type Props = {}

const Blog = (props: Props) => {
  const blogPosts = [
    {
      image: "/images/1.jpg.webp",
      date: "Feb 14, 2019",
      category: "company",
      title: "Yielding called winged years they are likeness hath morning",
      link: "single-blog.html"
    },
    {
      image: "/images/2.jpg.webp",
      date: "Feb 14, 2019",
      category: "company",
      title: "Yielding called winged years they are likeness hath morning",
      link: "single-blog.html"
    },
    {
      image: "/images/3.jpg.webp",
      date: "Feb 14, 2019",
      category: "company",
      title: "Yielding called winged years they are likeness hath morning",
      link: "single-blog.html"
    }
  ]

  return (
    <section className="blog-area area-padding">
      <div className="container">
        <SectionHeading 
          title="Our Recent News" 
          subtitle="Together female let signs for for fish fowl may first." 
        />
        <div className="row">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              date={post.date}
              category={post.category}
              title={post.title}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog