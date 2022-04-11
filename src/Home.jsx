import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
   
   const [blogs, setBlogs] = useState([
      { title: 'Hacking Websites', body: 'On hacking websites with JavaScript..', author: 'Jamo', id: 1 },
      { title: 'A Beer Site', body: 'On the lots of different beers you can now buy online..', author: 'Deno', id: 2 },
      { title: 'Monetising your JavaScript Websites', body: 'In this article, we talk about how to make money from your JavaScript..', author: 'Jamo', id: 3 },
      { title: 'A Rum Site', body: 'A rum review website for officionados..', author: 'Big-Z', id: 4 }
   ]);

   const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs)
   }

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
          
        </div>
     );
}
 
export default Home;