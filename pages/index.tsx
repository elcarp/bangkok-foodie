import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeroImage from '~public/images/hero-image.jpg'
import fs from 'fs'
import matter from 'gray-matter'

const Home: NextPage = ({ restaurantListings }: any) => {
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
          <p className='mt-4 text-white'>
            An approved directory of where to eat from real insiders. <br />
            Places that are <em> that good</em>... you would only share with
            people you like.
          </p>
        </div>
      </div>
      <div className='container mx-auto mt-20'>
        <div className='grid grid-cols-4 justify-center items-center text-center gap-5'>
          {restaurantListings.map(({ frontmatter, slug }: any) => {
            return (
              <>
                <div className='shadow-lg rounded-lg p-5'>
                  <div className='relative h-48 rounded'>
                    <Image
                      src={frontmatter.main_image}
                      alt={frontmatter.name}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <span className='mt-3 block'>{frontmatter.name}</span>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const tableId = `${process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID}`

  // const restaurants = await fetch(
  //   `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/${tableId}`,
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       ['Authorization']: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
  //     },
  //   }
  // )
  // const restaurantData = await restaurants.json()

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
      restaurantListings,
    },
    revalidate: 1,
  }
}
