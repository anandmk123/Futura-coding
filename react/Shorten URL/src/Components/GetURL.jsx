import React, { useEffect } from 'react'
import { useState } from 'react'
import { api } from '../Utils/Axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useURLContext } from '../Utils/Context'

function GetURL() {

    const [userURL, setUserURL] = useState(
        {
            url: '',
            alias: '',
        }
    )

    const handleURLChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setUserURL(prev => ({ ...prev, [key]: value }))
    }

    const { shortURL, setShortURL, showURLFlag, setShowURLFlag, history, setHistory } = useURLContext()

    const addHistory = (urlShort) => {
        setHistory(prev => {
            const date = new Date()
            const his = { LongURL: userURL.url, ShortenedURL: urlShort, DateAndTime: date.toString() }
            return [his, ...prev]
        })
    }

    const shortenURL = async () => {
        try {
            const { data } = await api.post('/', userURL, {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    Accept: 'application/json',
                },
            })
            setShortURL(data.short_url)
            setShowURLFlag(true)
            navigate('/shorturl')
            addHistory(data.short_url)
        } catch (error) {
            toast.error(error.response.data.AliasError)
        }
    }

    const clearURL = () => {
        setShortURL('')
        setShowURLFlag(false)
    }

    useEffect(() => {
        clearURL()
    }, [])

    const navigate = useNavigate()
    // console.log(shortURL)
    console.log(history)

    return (
        <div className="h-full">
            <div className="container pt-8 md:pt-12 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
                <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                    <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                        URL .
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                            Shortener
                        </span>
                    </h1>
                    <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                        Transforming long, ugly links into nice, memorable and trackable short URLs.
                    </p>

                    <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-blue-300 py-2 font-bold mb-2">
                                Enter Long URL
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                type="text"
                                name='url'
                                placeholder="long url"
                                value={userURL.url}
                                onChange={handleURLChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-blue-300 py-2 font-bold mb-2">
                                Custom Alias
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                type="text"
                                name='alias'
                                placeholder="your custom alias"
                                value={userURL.alias}
                                onChange={handleURLChange}
                            />
                        </div>
                        <div className="flex items-center justify-between pt-4">
                            <button
                                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                type="button"
                                onClick={() => {
                                    if (userURL.url != '') {
                                        shortenURL()
                                    }
                                    else {
                                        toast.error('URL is required')
                                    }
                                }}
                            >
                                Shorten URL
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="flex flex-col mt-10">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 inline-block w-full">
                        <div className="overflow">
                            <table className="w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-lg font-medium  text-blue-300 uppercase">Long URL</th>
                                        <th scope="col" className="px-6 py-3 text-start text-lg font-medium  text-blue-300 uppercase">Short URL</th>
                                        <th scope="col" className="px-6 py-3 text-start text-lg font-medium  text-blue-300 uppercase">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {history.map(item => {
                                        return (<tr className="odd:bg-white even:bg-gray-100" key={item.DateAndTime}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{item.LongURL}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.ShortenedURL}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.DateAndTime}</td>
                                        </tr>)
                                    }
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GetURL
