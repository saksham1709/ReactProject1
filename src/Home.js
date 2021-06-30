// import {useState} from 'react';
// const Home = () => {
//     const [name,setName] = useState('manni');
//     const [age,setAge] = useState(19);
//     const handleclick = ()=>{
//         setName('pappu');
//         setAge(23);
//     } 
//     const handleClickAgain = (e,name)=>{
//         console.log('hello again' , name ,e)
//     }
//     return (  
//         <div className="home">
//             <h2>Blog Content</h2>
//             <p>{name} is {age} years old.</p>
//             <button onClick = { handleclick }>Click Me</button>
//             <button onClick = { () =>{ handleClickAgain('mani') } }>Click Again</button>
//         </div>
//     );
// }

// export default Home;

import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
        // const handleDelete = (id) => {
        //     const newBlogs = blogs.filter(blog => blog.id !==id);
        //     setBlogs(newBlogs);
        // } 
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading .....</div>}
            {blogs && <BlogList blogs={blogs} />}
            {/* <BlogList blogs={blogs} title="All Blogs" handleDelete ={handleDelete}/> 
            <BlogList blogs={blogs.filter((blog)=>blog.author==='Martin Mcdonagh')} title="Martin's Blogs"/>
            <BlogList blogs={blogs.filter((blog)=>blog.author==='Coen Brothers')} title="Joel and Ethan's Blogs"/> */}
        </div>
    );

}
export default Home;