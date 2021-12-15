import React from 'react'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import BlogBox from '../../components/BlogBox'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


/*
export async function getStaticProps(context) {

    const res = await fetch('http://localhost:3000/api/posts')
    const json = await res.json()

    return {
        props: {data: json}
    }

}*/


function Index({data}) {

    const router = useRouter()

    const [posts,setPosts] = useState([{title: "test", cid: 0, content:"uibfigwbgubwigrub", date:"00:00:00"}])

    useEffect (() => {
        if(posts.length > 1) {
            setPosts(data.sort((a,b) => {

                return b.cid - a.cid

            }))
        }

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
                                    desc={`${elm.content.slice(1,25)}...`} 
                                    />))}
            </div>
           

        </Layout>
    )
}




export default Index

