import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3"> 
            <div>
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>
            <div className='bg-[#1111110D] rounded-2xl ml-12 text-center p-5 m-5'>
            <h2 className="text-3xl font-bold text-left">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark)=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;