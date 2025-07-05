
import  { useEffect, useState } from 'react'
import { supabase } from '../supabase'

interface Record {
  id: number
  promo: string
  heading: string
}

const DataFetcher = () => {
  const [data, setData] = useState<Record[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('maindata').select('*')

      if (error) {
        console.error('Error fetching data:', error)
      } else {
        setData(data)
      }

      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Fetched Data</h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <ul className="space-y-3">
          {data.map((item) => (
            <li key={item.id} className="border p-4 rounded bg-white shadow">
              <p className="text-lg font-semibold">{item.promo}</p>
              <p className="text-gray-600">{item.heading}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DataFetcher
