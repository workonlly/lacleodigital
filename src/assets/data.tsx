// hooks/useAppData.ts
import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export interface Maindata {
  id: number
  promo: string
  heading: string
  keywords: string[] | string
  secheading: string
  secpara: string
  text: string
}

export interface blog{
  id:number;
  heading:string;
  description:string;
  promo:string;
  image?: string;
}
export interface Maindata2 {
  id: number
  sid: number
  promo: string
  heading: string
  keywords: string[] | string
  secheading: string
  secpara: string
  text: string
}

export interface Mainkey {
  id: number
  title: string
  metakeywords: string[]
  description: string
}

export interface Mainimg {
  id: number
  imageurl: string
}

interface AppData {
  maindata: Maindata[]
  maindata2: Maindata2[]
  mainkey: Mainkey[]
  mainimg: Mainimg[]
  blog:blog[];
}

const useAppData = () => {
  const [data, setData] = useState<AppData>({
    maindata: [],
    maindata2: [],
    mainkey: [],
    mainimg: [],
    blog:[],
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true)

      const [r1, r2, r3, r4,r5] = await Promise.all([
        supabase.from('maindata').select('*'),
        supabase.from('maindata2').select('*'),
        supabase.from('maindatakeywords').select('*'),
        supabase.from('mainimages').select('*'),
        supabase.from('blog').select('*'),
      ])

      setData({
        maindata: (r1.data || []) as Maindata[],
        maindata2: (r2.data || []) as Maindata2[],
        mainkey: (r3.data || []) as Mainkey[],
        mainimg: (r4.data || []) as Mainimg[],
        blog: (r5.data || []) as blog[],
      })

      setLoading(false)
    }

    fetchAll()
  }, [])

  return { data, loading }
}

export default useAppData
