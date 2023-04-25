import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import { useGlobalContext } from './Context'

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`
 
const Gallery = () => {
// invoking global
const {searchTerm} = useGlobalContext()

const response = useQuery({
  queryKey:[`images`,searchTerm],
  queryFn: async()=>{
    const result = await axios.get(`${url}&query=${searchTerm}`)
    return result.data
  }
})

// handle loading
if(response.isLoading)
{
  return <section className="image-container" >
    <h4>Loading...</h4>
  </section>
}

// handle loading
if(response.isError)
{
  return <section className="image-container" >
    <h4>There was an error...</h4>
  </section>
}

const results = response.data.results
// in case no  data from api
if(results.length < 1)
{
  return <section className="image-container" >
  <h4>No result found...</h4>
</section>
}


// main return
  return (
    <section className="image-container">
      {results.map((item)=>{
        const url = item?.urls?.regular
        return <img className="img" src={url} key={item.id} alt={item.alt_description}/>
      })}
      </section>
  )
}

export default Gallery