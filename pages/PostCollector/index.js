import React from 'react'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import BlogBox from '../../components/BlogBox'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'



export const getStaticProps = async () => {

    const res = await fetch('https://gist.githubusercontent.com/JohanLinck/2df42c7f25a63ce900e41a68c467b7e4/raw/5fe85cab988b715ac294ee515b2bbba19ddd758f/blogData.json')
    const db = await res.json()
  
    return {
      props: {
  
        data: db
  
      },
  
    }
  
}


function Index({data}) {

    const router = useRouter()

    const [posts,setPosts] = useState([])

    useEffect (() => {

        setPosts(data.sort(function(a,b) {
            return b.id - a.id
        }))

    }, [])


    return (
        <Layout navPage={2}>
            <PageHeader>
                Posts
            </PageHeader>

            <div className="postblogcontainer"> 
                        {posts.map((elm) => (<BlogBox 
                                    key={elm.id} 
                                    onClick={() => {router.push('/PostCollector/' + elm.id)}} 
                                    title={elm.title} 
                                    date={elm.date} 
                                    desc={`${elm.content.substring(0,120)}...`} 
                                    />))}
            </div>
           

        </Layout>
    )
}




export default Index

