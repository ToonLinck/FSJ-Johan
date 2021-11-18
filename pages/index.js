import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import Link from 'next/link'


export const getStaticProps = async () => {

  const res = await fetch("https://fsj-johan.vercel.app/api/posts");
  const json = await res.json();
    return {
      props: {
        data: json,
      },
    };
}


export default function Home({data}) {

  return (
    <Layout navPage={1}>
      <PageHeader>
        Home Page
      </PageHeader>

      <div className="paragraph">

          Wanna see my latest post? 
          <Link href={'/PostCollector/' + data[data.length -1].cid}><a className="link">Click here</a></Link> !
      </div>

    </Layout>
  )
}
