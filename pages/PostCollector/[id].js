import React from 'react'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'


export const getStaticPaths = async () => {

    const res = await fetch("https://fsj-johan.vercel.app/api/posts");
    const json = await res.json();

    const paths = json.map((entry) => {
        return {
            params: { 
                id: entry.cid.toString()
            }
        }
    })
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id

    const res = await fetch('https://fsj-johan.vercel.app/api/posts');
    const json = await res.json();

    return {
      props: {
        data: json.filter(post => post.cid.toString() === id),
      },
    };
  
}


function Post({data}) {

    const cont = data[0]

    return (
        <Layout >
            <PageHeader> {cont.title} </PageHeader>
            <div className="dateContainer"> {cont.date} </div>

            <div className="contentContainer">{cont.content}</div>


        </Layout>
    )
}


export default Post
