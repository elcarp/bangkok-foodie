import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

// import styles from './styles.module.css'
import React from 'react'

export default function PostPage({ frontmatter, slug, contracts }) {
  return (
    <>
      <Head>
        <title>{frontmatter?.title}</title>
        {/* <link rel='icon' href='/dm-favicon.png' /> */}
        {/* <meta
          name='description'
          content={`The best way to transfer money from Thailand to ${frontmatter?.receiving_country}. Transfer online overseas. One-time one-document registration, flat transfer fee, best rates.`}
        /> */}
      </Head>
    </>
  )
}
export async function getStaticPaths() {
  const files = fs.readdirSync('restaurants')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`restaurants/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}
