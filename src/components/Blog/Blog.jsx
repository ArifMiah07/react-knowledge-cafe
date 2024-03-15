import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    // console.log(blog);
    const {title, author, author_image, cover_image, hashtags, posted_date, reading_time} = blog;
    return (
        <div className='mb-12'>
            <div className='p-4'>
            <img className='w-full mb-8 rounded-[36px]' src={cover_image} alt={`cover picture of the title ${title}`} />
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <img className='w-[60px] rounded-[60px]' src={author_image} alt="" />
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=''>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-4'><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl my-4 font-bold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}
export default Blog;