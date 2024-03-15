import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( ()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])

    return (
        <div>
            <h4>Blogs: {blogs.length}</h4>
        </div>
    );
};

export default Blogs;