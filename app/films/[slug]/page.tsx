import Image from "next/image"
import FilmInteractions from "@/components/FilmInteractions"
import CastList from "@/components/CastList"
import Link from "next/link"
import ReviewsList from "@/components/ReviewsList"
import CarouselOfFilms from "@/components/CarouselOfFilms"
import { Director, Film } from "types"

const fetchFilmBySlug = (slug: string) => {
  return fetch(`http://localhost:3000/api/v1/films/${slug}`, { next: { revalidate: 120 }})
    .then(res => res.json())
}

const fetchAllFilms = () => {
  return fetch(`http://localhost:3000/api/v1/films`, { next: { revalidate: 120 }})
    .then(res => res.json())
}

export default async function FilmDetailPage ({ params }: any) {
  const { slug } = params
  const film: Film = await fetchFilmBySlug(slug)
  const films: Film[] = await fetchAllFilms()
  const director: Director = film.directors[0]

  return (
    <main className='text-[#99aabb]'>
      <section className='w-full h-[360px] bg-center bg-cover relative' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/images/films/${ film.background_thumbnail }')` }}></section>
      <section className='max-w-5xl h-fit mx-auto pb-[4rem] px-[2rem] pt-[2rem] flex flex-col gap-[1rem]'>{/* bg-[#161b20] */}
        <div className='flex gap-[3rem]'>
          <div className='min-w-[280px] w-[280px]'>
            <div className='relative w-full h-[400px] mb-[1rem]'>
              <Image src={`/images/${ film?.thubmnail }`} alt={ film.title } fill />
            </div>
            <FilmInteractions />
          </div>  
          <div className='w-[600px]'>
            <h1 className='text-[#ffffe9] text-[2rem] mb-[.75rem]'>{ film?.title } (<Link className='underline px-[.25rem] hover:text-amber-600' href={'/films/year/[year]'} as={`/films/year/${ film.year }`}>{ film?.year }</Link>)</h1>
            <h5 className='text-lg mb-[1.25rem]'>Directed by <Link href={`/director/${ director.slug }`} className='underline text-[#ffffe9] hover:text-amber-600'>{ director.name }</Link></h5>
            <p className='mb-[1rem]'>{ film?.synopsis }</p>
            <h3 className='uppercase mb-[.75rem]'>Cast</h3>
            <CastList cast={ film.cast } />
            <p className='mt-[2rem] text-sm font-lighter flex gap-[.5rem]'>
              <span>{ film.runtime } mins</span>
              <span>More at 
                <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={ film.imdb_link }>IMBD</Link> 
                <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={ film.tmdb_link }>TMDB</Link>
              </span>
            </p> 
          </div>
        </div>
        <div className='my-[2rem]'>
          <h3 className='uppercase mb-1'>Popular Reviews</h3>
          <hr className='mb-[2rem] border-[#445566]'/>
          <ReviewsList reviews={ film.reviews } />
        </div>
        <div className='overflow-hidden'>
          <h3 className='uppercase mb-1'>Related Films</h3>
          <hr className='mb-[1rem] border-[#445566]'/>
          <CarouselOfFilms films={ films } width={230} height={350} />
        </div>
      </section>
    </main>
  )
}