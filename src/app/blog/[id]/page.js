import react from 'react';
//incremental static generation

//method 1

// export async function getStaticProps({ params }) {
//     const { id } = params;
//     const post = await fetch(`https://api.vercel.app/blog/${id}`).then((res) =>
//       res.json()
//     );

//     return {
//       props: {
//         post,
//       },
//       revalidate: 3600, // Revalidate every 10 seconds
//     };
//   }

//static site generation

//method 2 (23,25 lines are incrementalstaticregenerator)
  export const revalidate = 3600; // Revalidate every 1 hour if there is any changes in the content of an page(rebuild)

  //export const dynamicParams = true;  // mean error on next js that it doesn't create any page if id is not there so it rerender an empty page
  export const dynamicParams = false;   //(npm run build provide y it false and the id's which only runs) //if it is false and give id is not there gives 404 error
  export async function generateStaticParams() {
    const posts = await fetch('https://api.vercel.app/blog').then((res) =>
      res.json()
    );

    return posts.map((post) => {
      return { id: String(post.id) };
    });
  }

// //dynamic route

  const BlogPage = async ({ params }) => {
    const { id } = await params;
    const post = await fetch(`https://api.vercel.app/blog/${id}`).then((res) =>
      res.json()
    );
    
    console.log("Fetched Post:", post); 

    // if (!post || post.error) {
    //   return <h1>Post not found</h1>;
    // }

    return (
      <div>
        <h2>{post.title}</h2>
        <h2>{post.author}</h2>
        <p>{post.content}</p>
        <h3>{post.category}</h3>
      </div>
    )
  }

export default BlogPage
