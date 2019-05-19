import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export default props =>(
    <>
    <Head>
        <title>{props.title}</title>
    </Head>

    <div>{props.children}</div>
    </>
)