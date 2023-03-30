import React from 'react'
import './App.css'
import { Typewriter } from 'react-simple-typewriter'
import { FaCat, FaDiscord, FaGithub, FaUserAlt } from 'react-icons/fa';

const Tile = ({ info }) => {


    const words = () => {
        return (<Typewriter words={[info.desc]} cursor={true} typeSpeed={150} />)
    };
    setInterval(words, 2000)

    return (
        <>
            <div className='tile'>
                <div className='usertext'>
                    <FaUserAlt size={30} />
                    <div>
                        {info.message}
                    </div>
                </div>

                <div className='comptext'>
                    <div className='cat'>
                        <FaCat size={30} />
                    </div>
                    <div className='comptextdiv'>
                        <div>
                            <img src={info.url} />
                        </div>
                        <Typewriter words={[info.desc]} cursor={true} typeSpeed={150} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Tile