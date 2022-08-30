import React from "react";
import { BlogItems } from "./BlogItems/BlogItems";
import './BlogList.css'

export const BlogList = ({ blogs }) => {
    return (
        <div className="blogList-wrap">
            {blogs.map((blog) => (
                <BlogItems blog={blog}  key = {blog.id} />
            ))}
        </div>
    );
};
