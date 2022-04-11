import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
   
   const [blogs, setBlogs] = useState([
      { title: 'Hacking Websites', body: 'On hacking websites with JavaScript..', author: 'Jamo', id: 1 },
      { title: 'A Beer Site', body: 'On the lots of different beers you can now buy online..', author: 'Deno', id: 2 },
      { title: 'A Rum Site', body: 'A rum review website for officionados..', author: 'Big-Z', id: 3 }
   ]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" />
        </div>
     );
}
 
export default Home;