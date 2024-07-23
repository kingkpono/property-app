import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getPropertyDetails } from '../../services/realityApi' // You might need to implement this function
import Navbar from '../../components/NavBar'

const ListingDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const [property, setProperty] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (id) {
      const fetchPropertyDetails = async () => {
        try {
          const data = await getPropertyDetails(id as string)
          setProperty(data)
          setLoading(false)
        } catch (err) {
          setError('Failed to load property details')
          setLoading(false)
        }
      }

      fetchPropertyDetails()
    }
  }, [id])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!property) {
    return <p>Property not found</p>
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">
          {property.location.address.line}
        </h1>
        <img
          src={property.photos[0].href}
          alt={property.location.address.line}
          className="w-full h-96 object-cover mb-4"
        />
        <p className="text-xl font-bold mb-2">
          Price: ${property.list_price.toLocaleString()}
        </p>
        <p className="text-lg mb-2">Beds: {property.description.beds}</p>
        <p className="text-lg mb-2">Baths: {property.description.baths_full}</p>
        <p className="text-lg mb-2">Size: {property.description.sqft} sqft</p>
        <p className="text-lg mb-2">
          Address: {property.location.address.line},{' '}
          {property.location.address.city},{' '}
          {property.location.address.state_code}{' '}
          {property.location.address.postal_code}
        </p>
        <p className="text-lg mb-4">
          Description: {property.description.sub_type}
        </p>
        <a
          href={property.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on Realtor.com
        </a>
      </div>
    </div>
  )
}

export default ListingDetail
