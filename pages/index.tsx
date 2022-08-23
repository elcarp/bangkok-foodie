import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeroImage from '~public/images/hero-image.jpg'
import fs from 'fs'
import matter from 'gray-matter'

const Home: NextPage = ({ restaurantData }: any) => {
  console.log(restaurantData)
  return (
    <>
      <Head>
        <title>
          The Bangkok Foodie - Approved directory of where to eat from real
          insiders
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex w-full items-center justify-center text-center relative h-screen-1/2 shadow-lg'>
        <div className='overlay w-full h-screen-1/2 bg-gray-800 opacity-50 absolute z-10 border-10 border-red-500' />
        <Image
          src={HeroImage}
          alt='Thai food'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute z-10'>
          <h1 className='text-white'>The Bangkok Foodie</h1>
          <p className='mt-4 text-2xl text-white'>
            An approved directory of where to eat from real insiders.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const tableId = `${process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID}`

  const restaurants = await fetch(
    `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/${tableId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        ['Authorization']: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
      },
    }
  )
  const restaurantData = await restaurants.json()

  const files = fs
    .readdirSync(`restaurants`)
    .filter((file) => file.includes('.md'))
  const restaurantListings = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`restaurants/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      restaurantData,
      restaurantListings
    },
    revalidate: 1,
  }
}
