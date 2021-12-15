import React from 'react'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'



/*
export const getServersideProps = async (context) => {
    const id = context.params.id

    const res = await fetch('http://localhost:3000/api/posts/'+id);
    const json = await res.json();

    return {
      props: {
        data: json.filter(post => post.cid.toString() === id),
      },
    };
  
}
*/


function Post() {

    const cont = {title: "",date:"",content:""}

    return (
        <Layout >
            <PageHeader> {cont.title} </PageHeader>
            <div className="dateContainer"> {cont.date} </div>

            <div className="contentContainer">{cont.content}</div>


        </Layout>
    )
}


export default Post
