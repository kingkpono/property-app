import axios from 'axios'

const apiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY

const realtyApi = axios.create({
  baseURL: 'https://realty-in-us.p.rapidapi.com/properties/v3',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
    'X-RapidAPI-Key': apiKey,
  },
})

export const getProperties = async () => {
  try {
    const response = await realtyApi.post('/list', {
      limit: 200,
      offset: 0,
      postal_code: '90004',
      status: ['for_sale', 'ready_to_build'],
      sort: {
        direction: 'desc',
        field: 'list_date',
      },
    })
    console.log(response.data.data.home_search.results)
    return response.data.data.home_search.results
  } catch (error) {
    console.error('Error fetching properties:', error)
    throw error
  }
}

// Existing code...

export const getPropertyDetails = async (id: string) => {
  try {
    const response = await realtyApi.get('/detail?property_id=' + id)
    console.log(response.data.data.home)
    return response.data.data.home
  } catch (error) {
    console.error('Error fetching property:', error)
    throw error
  }
}
