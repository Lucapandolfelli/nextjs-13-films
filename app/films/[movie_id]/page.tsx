import Image from "next/image"
import Link from "next/link"
import FilmInteractions from "@/components/FilmInteractions"
import ReviewsList from "@/components/ReviewsList"
import Carousel from "@/components/Carousel"
import Genres from "@/components/Genres"
import { getFilmById, getFilmListByMovieId, getCollectionById, getRelatedFilms, getReviewsByMovieId } from "@/lib/films/fetch"
import { getCastByMovieId, getDirectorByMovieId } from "@/lib/person/fetch"
import Backdrop from "@/components/Backdrop"
import Collection from "@/components/Collection"

interface Props {
  params: { movie_id: string }
}

export default async function FilmDetailPage ({ params: { movie_id } }: Props) {
  const film = await getFilmById(movie_id)
  const cast = await getCastByMovieId(movie_id)
  const reviews = await getReviewsByMovieId(movie_id)
  const recommendedFilms = await getRelatedFilms(movie_id)
  const director = await getDirectorByMovieId(movie_id)
  const lists = await getFilmListByMovieId(movie_id)
  let relatedFilms
  
  if (film.belongs_to_collection != null){
    relatedFilms = await getCollectionById(film?.belongs_to_collection.id)
  }

  return (
    <main className='text-[#99aabb]'>
      <Backdrop height="large" url={ film?.backdrop_path } />
      <section className='max-w-5xl h-fit mx-auto pb-[2rem] px-[1.25rem] md:px-0 flex flex-col md:flex-row gap-[4rem] relative'>{/* bg-[#161b20] */}
        <aside className='w-full mx-[1.25rem] flex items-center'>
          <div className='w-[calc(100%_-_2.5rem)] md:min-w-[280px] md:w-[280px] absolute top-[-11rem] md:top-[-7rem] right-0 md:right-[unset] left-0 mx-auto'>
            <div className='relative w-[150px] md:w-full h-[214px] md:h-[400px] md:mb-[2rem] shadow-xl'>
              <Image src={`https://image.tmdb.org/t/p/original/${ film?.poster_path }`} alt={ film?.title } fill />
            </div>
            <div className='hidden sm:flex flex-col items-center gap-[1rem]'>
              <FilmInteractions initialAverage={ film?.vote_average } initialViews={'0'} initialLikes={'0'} initialSaves={ lists } initialRating={ film?.vote_count } />
            </div>
          </div>  
        </aside>
        <div className='md:w-[680px]'>
          <div className='flex items-center sm:items-start flex-col gap-[3rem] mb-[1rem]'>
            <div className='w-full'>
              <small className='text-lg text-[#667788]'>{ film?.release_date.substr(0,4) }</small>
              <h1 className='text-[#ffffe9] text-[2rem] font-semibold lg:text-[2.5rem] mb-[.75rem]'>{ film?.title }</h1>
              <h5 className='text-[#667788] mb-[2rem]'>Directed by <Link href={`/person/${ director?.id }`} className='text-[#ffffe9] hover:text-amber-600'>{ director?.name }</Link></h5>
              <h6 className='text-[#667788] font-semibold uppercase mb-[1rem]'>{ film?.tagline }</h6>
              <p className='mb-[1rem] leading-[1.8]'>{ film?.overview }</p>
              <div className='w-full mt-[2rem] mb-[1rem] font-lighter flex gap-[2.5rem] flex-wrap'>
                <span className='flex flex-col gap-[.25rem] text-[#ffffe9]'>
                  <p className='text-[#667788]'>Duration</p>
                  { film.runtime } mins.
                </span>
                <span className='flex flex-col gap-[.25rem] text-[#ffffe9]'>
                  <p className='text-[#667788]'>Genres</p>
                  <Genres genres={ film?.genres } />
                </span>
                <span className='flex flex-col gap-[.25rem] text-[#ffffe9]'>
                  <p className='text-[#667788]'>Released</p>
                  <p>{`${ new Date(film?.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }`}</p>
                </span>
                <span className='flex flex-col gap-[.25rem] text-[#ffffe9]'>
                  <p className='text-[#667788]'>Revenue</p>
                  <p>${ film?.revenue.toLocaleString() }</p>
                </span>
                {/* <span className='flex flex-col gap-[.25rem]'>
                  <p className='text-[#667788]'>More at</p>
                  <div>
                    <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={`http://www.imdb.com/title/${ film?.imdb_id }/maindetails`}>IMBD</Link> 
                    <Link className='text-[.7rem] border-2 border-[#465058] rounded-sm py-[.125rem] px-[.25rem] ml-[.25rem] transition-all duration-300 ease-linear hover:border-[#8295a4]' href={`https://www.themoviedb.org/movie/${ film?.id }`}>TMDB</Link>
                  </div>
                </span> */}
              </div> 
            </div>
          </div>
          <div className='sm:hidden flex flex-col items-center gap-[1rem] mb-[2rem]'>
            <FilmInteractions initialAverage={ Number.parseFloat(film?.vote_average).toFixed(1) } initialViews={'0'} initialLikes={'0'} initialSaves={ lists } initialRating={ film?.vote_count } />
          </div>
          <div className='mb-[1rem] lg:mb-[2rem]'>
            <header className="flex justify-between items-center">
              <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1rem]'>Cast<small className='text-[#667788] text-sm ml-[1rem]'>{ cast.length } Actors</small></h3>
              <Link href={`/films/${ film?.id }/cast`}>View All</Link>
            </header>
            <Carousel data={ cast.slice(0, 9) } width={155} height={234} />
          </div>
          {/* <div className='mb-[1rem] lg:mb-[2rem]'>
            <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[1rem] md:mb-[1.25rem]'>Reviews</h3>
            <ReviewsList reviews={ reviews } />
          </div> */}
        </div>
      </section>
      <section className='max-w-5xl h-fit mx-auto pb-[4rem] px-[1.25rem] md:px-0'>
        { film?.belongs_to_collection != null && <Collection collection={ relatedFilms } /> }
        <div>
          <h3 className='text-[1.5rem] md:text-[1.75rem] text-[#ffffe9] font-semibold mb-[.75rem] md:mb-[1rem]'>Recommended Films</h3>
          <Carousel data={ recommendedFilms } width={155} height={234} />
        </div>
      </section>
    </main>
  )
}