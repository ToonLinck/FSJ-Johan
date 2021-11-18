import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import Link from 'next/link'

export default function Home() {

  const data = require('../blogData.json')
  const latestpost = data.blogEntries.length - 1

  return (
    <Layout navPage={1}>
      <PageHeader>
        Home Page
      </PageHeader>

      <div className="paragraph">

          Wanna see my latest post? 
          <Link href={'/PostCollector/' + latestpost}><a className="link">Click here</a></Link> !
      </div>

    </Layout>
  )
}
