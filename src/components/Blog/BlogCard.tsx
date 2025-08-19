import Image from 'next/image'
import React from 'react'

type BlogCardProps = {
  image: string;
  date: string;
  category: string;
  title: string;
  link: string;
}

const BlogCard = ({ image, date, category, title, link }: BlogCardProps) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div className="single-blog">
        <div className="thumb">
          <Image width={360} height={285} className="img-fluid" src={image} alt={title} />
        </div>
        <div className="short_details">
          <div className="meta-top d-flex">
            <a href="#">
              <i className="ti-calendar"></i> {date}
            </a>
            <a href="#">
              <i className="ti-folder"></i> {category}
            </a>
          </div>
          <a className="d-block" href={link}>
            <h4>{title}</h4>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard 