import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  restaurants: [
    {
      frontmatter: {
        address: string
        area: any
        best_for: any
        cuisine: string
      }
      slug: string
    }
  ]
}

const ProductList: FunctionComponent<Props> = ({ restaurants }) => {
  console.log(restaurants)
  return (
    <div className='container mx-auto mt-20 px-4 lg:px-0'>
      <div className='grid grid-cols-2 lg:grid-cols-4 justify-center items-center text-center gap-5'>
        {restaurants.map(({ frontmatter, slug }: any) => {
          return (
            <>
              <Link href={`/restaurants/${slug}`}>
                <div className='shadow-lg rounded-lg p-5 cursor-pointer'>
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
              </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}
export default ProductList
