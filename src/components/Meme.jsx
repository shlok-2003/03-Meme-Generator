import React, { useState, useEffect } from 'react'
import './Meme.css'

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: ""
    })

    const [allMeme, setAllMeme] = useState([])

    useEffect(() => {
        //! Async Function
        // async function getInfo() {
        //     const res = await fetch("https://api.imgflip.com/get_memes")
        //     const file = await res.json()
        //     setAllMeme(file.data.memes)
        // }
        // getInfo()

        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(file => setAllMeme(file.data.memes))
    }, [])

    function getMemeImage() {
        const randomIndex = Math.floor(Math.random() * (allMeme.length - 0) + 0)

        setMeme(prevData => {
            return {
                ...prevData,
                url: allMeme[randomIndex].url,
            }
        })  

        document.getElementById('meme--main').classList.add('meme--main-active')
    }

    function getText(event) {
        const {name, value} = event.target

        setMeme(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    
    return (
        <main>
            <div className='meme--form'>
                <div className='meme--form-input'>
                    <input 
                        type='text' 
                        placeholder='Top Text'
                        name="topText"
                        onInput={getText}
                        value={meme.topText}
                        />
                    <input 
                        type='text' 
                        placeholder='Bottom Text'
                        name="bottomText"
                        onInput={getText}
                        value={meme.bottomText}
                    />
                </div>

                <button className='meme--form-submit-btn' onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>

            <div className='meme--main' id='meme--main'>
                <img src={meme.url} key={1} className='meme--main-img'/>
                <h1 className='meme--main-top'>{meme.topText}</h1>
                <h1 className='meme--main-bottom'>{meme.bottomText}</h1>
            </div>
        </main>
    )
}

export default Meme