import React from 'react'
import { useURLContext } from '../Utils/Context'
import QRCode from 'react-qr-code'
import { Link } from 'react-router-dom'

function ShowURL() {

    const { shortURL, setShortURL, showURLFlag, setShowURLFlag } = useURLContext()

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            {
                showURLFlag ?
                    <div>
                        <div className='shadow border rounded p-2 m-2 text-gray-50 leading-tight hover:scale-105 duration-300 ease-in-out bg-gray-900'><Link to={shortURL} target='blank'>{shortURL}</Link></div>
                        <div><QRCode value={shortURL} className='sm:h-auto h-40' /></div>
                    </div>
                    :
                    <div>
                    </div>
            }

        </div>
    )
}

export default ShowURL
