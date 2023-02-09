import Film from "./Film";
import { Film as FilmType} from "types";

type Props = {
  films: FilmType[],
  width: number,
  height: number
}

export default function ListOfFilms ({ films, width, height }: Props) {
  return (
    <>
      <ul className='flex justify-between flex-wrap gap-[.5rem]'>
        {films.map(film => (
          <li key={ film.id }>
            <Film data={film} width={width} height={height} />
          </li>
        ))}
      </ul>
    </>
  )
}