interface Props {
  listLenght: number
}

export default function Loading ({ listLenght }: Props): JSX.Element { 
  return (
    <ul className='flex justify-between flex-wrap gap-[.5rem]'>
      {[...Array(listLenght).keys()].map((i) => (
        <li key={i}>
          <article className='bg-[#2d343b] w-[155px] h-[234px] lg:w-[250px] lg:h-[370px] animate-pulse'></article>
        </li>
      ))}
    </ul>
  )
}