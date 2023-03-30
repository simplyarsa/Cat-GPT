import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './App.css'
import Tile from './Tile.jsx'
import { AiFillGithub, AiFillLinkedin, AiOutlineMessage, AiOutlinePlus } from 'react-icons/ai';
import capitalized from './word';

const generateWord = () => {
  const meow = () => {
    let random = Math.floor(Math.random() * 7) + 3;
    return " meow".repeat(random);
  }
  let char = ['.', '-', '?', '!'];
  let random2, string = meow()
  let random3 = Math.floor(Math.random() * 3) + 1
  for (let i = 0; i < random3; i++) {
    random2 = Math.floor(Math.random() * 3)
    string += (char[random2] + meow())
  }
  random2 = Math.floor(Math.random() * 3)
  string += char[0]
  const capitalized =
    string.charAt(1).toUpperCase()
    + string.slice(2)
  return capitalized
}

export default function App() {

  const bottomRef = useRef(null);

  const [info, setInfo] = useState({
    message: '',
    desc: '',
    url: ''
  })

  const [allInfo, setallInfo] = useState([])

  // const meow = () => {
  //   let rand = Math.floor(Math.random() * 20) + 3;
  //   return "meow ".repeat(rand);
  // }

  const handleChange = (event) => {
    setInfo(prev => ({ ...prev, [event.target.name]: event.target.value }))
  };

  useEffect(() => {
    setInfo(prev => ({ ...prev, desc: generateWord() }))
    const getData = async () => {
      try {
        const res = await axios.get("https://api.thecatapi.com/v1/images/search?api_key=live_aZEF4SeBIv5sZnfKDCgauFT9gVDf7R9ftMxEE0FR2Y4rQMbrahJ5ajYBZhJyb0Ek")

        setInfo(prev => ({ ...prev, url: res.data[0].url }))
      } catch (err) {
        console.log(err)
      }
    }
    getData()
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });

  }, [info.message])

  const handleClick = () => {
    console.log(info)
    if (info.message === '') {
      return
    }
    setallInfo(prev => [...prev, info])
    setInfo({ message: '', desc: '', url: '' })
  }

  const handleReset = () => {
    console.log("yes")
    setInfo({ message: '', desc: '', url: '' })
    setallInfo([])
  }

  const handleEnter = (event) => {
    if (info.message === '') {
      return
    }
    if (event.keyCode === 13) {
      setallInfo(prev => [...prev, info])
      setInfo({ message: '', desc: '', url: '' })
    }
  }


  return (
    <div className='app'>

      <div className='sidebar' >
        <div className='buttoncontainer'>

          <button className='newbutton' onClick={handleReset} ><AiOutlinePlus size={30} />Reset Cat</button>
          <a href="https://github.com/simplyarsa" target="_blank" style={{ textDecoration: 'none' }}><button className='newbutton link' ><AiFillGithub size={30} /> Github</button></a>
        </div>
      </div>
      <div className='mainapp'>

        {allInfo.map(info => {
          return (
            <Tile info={info} />
          )
        })}
        <div ref={bottomRef} />


        <div className='inputdiv'>
          <input type="text"
            name="message"
            onChange={handleChange}
            onKeyDown={(e) => handleEnter(e)}
            value={info.message}
          />
          <button className='submitbutton' onClick={handleClick} ><AiOutlineMessage size={30} /></button>
          {/* <input type="submit" onClick={handleClick} /> */}
        </div>
      </div>


    </div>
  );
}