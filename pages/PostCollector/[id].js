import React from 'react'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'


export const getStaticPaths = async () => {

    const res = await fetch('https://gist.githubusercontent.com/JohanLinck/2df42c7f25a63ce900e41a68c467b7e4/raw/5fe85cab988b715ac294ee515b2bbba19ddd758f/blogData.json')
    const data = await res.json()

    const paths = data.map((entry) => {

        return {

            params: { 
                id: entry.id.toString()
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
    const res = await fetch('https://gist.githubusercontent.com/JohanLinck/2df42c7f25a63ce900e41a68c467b7e4/raw/5fe85cab988b715ac294ee515b2bbba19ddd758f/blogData.json')
    const db = await res.json()


  
    return {
      props: {

        id,
        data: db
  
      },
  
    }
  
}


function Post({data, id}) {

    const objekt = data[parseInt(id,10)]

    return (
        <Layout >
            <PageHeader> {objekt.title} </PageHeader>
            <div className="dateContainer"> {objekt.date} </div>

            <div className="contentContainer">{objekt.content}</div>


        </Layout>
    )
}


export default Post
