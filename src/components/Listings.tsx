import React, { useEffect, useState } from 'react'
import { getProperties } from '../services/realityApi'
import Link from 'next/link'

const Listings = () => {
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties()
        setProperties(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to load properties')
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">Property Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property: any) => (
          <div
            key={property.property_id}
            className="border p-4 rounded-lg shadow-lg"
          >
            <img
              src={property.primary_photo.href}
              alt={property.location.address.line}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold mt-2">
              {property.location.address.line}, {property.location.address.city}
            </h2>
            <p className="text-gray-600">
              ${property.list_price.toLocaleString()}
            </p>
            <p className="text-gray-600">
              {property.description.beds} beds,{' '}
              {property.description.baths_full} baths
            </p>
            <p className="text-gray-600">{property.description.sqft} sqft</p>
            <Link
              href={`/property/${property.property_id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Listings
