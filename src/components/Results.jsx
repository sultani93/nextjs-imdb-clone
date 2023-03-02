import Card from './Card'

export default function Results({ results }) {
  return (
    <div
      className='sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5
    max-2-6xl mx-auto py-4'
    >
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  )
}
