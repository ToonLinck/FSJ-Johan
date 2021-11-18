import React from 'react'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import BlogBox from '../../components/BlogBox'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'



export async function getStaticProps(context) {
    const res = await fetch("https://fsj-johan.vercel.app/api/posts");
    const json = await res.json();
    return {
      props: {
        data: json,
      },
    };
}

function Index({data}) {

    const router = useRouter()

    const [posts,setPosts] = useState([])

    useEffect (() => {

        setPosts(data.sort(function(a,b) {
            return b.cid - a.cid
        }))

    }, [])


    return (
        <Layout navPage={2}>
            <PageHeader>
                Posts
            </PageHeader>

            <div className="postblogcontainer"> 
                        {posts.map((elm) => (<BlogBox 
                                    key={elm._id} 
                                    onClick={() => {router.push('/PostCollector/' + elm.cid)}} 
                                    title={elm.title} 
                                    date={elm.date} 
                                    desc={`${elm.content.substring(0,120)}...`} 
                                    />))}
            </div>
           

        </Layout>
    )
}




export default Index

