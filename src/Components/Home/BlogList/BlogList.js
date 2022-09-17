import { slice } from "lodash";
import { useState } from "react";
import { BlogItems } from "./BlogItems/BlogItems";
import './BlogList.css'

export const BlogList = ({ blogs }) => {

    const [isComplete, setIsComplete] = useState(false);
    const [index, setIndex] = useState(6);
    const initialBlogs = slice(blogs, 0, index);

    const loadMore = () => {
        setIndex(index + 6);
        if (index >= blogs.length) {
            setIsComplete(true);
        }   
        else {
            setIsComplete(false);
        }
    }

    return (
        <div>
            <div className="blogList-wrap">
                {initialBlogs.map((blog) => (
                    <BlogItems blog={blog} key={blog.id} />
                ))}
            </div>
            <div className="btn">
                {isComplete ? <p>That's it, no more blogs to show.</p>
                    :
                    <button onClick={loadMore}>Read more</button>
                }
            </div>
        </div>
    );
};
