import React, { useEffect, useState } from 'react'
import './PrintABook.css'

import hard from '../../images/hard.png'
import soft from '../../images/soft.png'
import colorful from '../../images/colorful.png'
import colorless from '../../images/colorless.png'

const PrintABook = () => {
    const [book, setBook] = useState()
    const [hardStyles, setHardstyles] = useState()
    const [softStyles, setSoftStyles] = useState()

    const [color, setColor] = useState()
    const [colorfulStyles, setColorfulstyles] = useState()
    const [colorlessStyles, setColorlessStyles] = useState()

    const [paperColor, setPaperColor] = useState()
    const [paperWeight, setPaperWeight] = useState()

    const hardcover = () => {
        setBook(false)
    }

    const softcover = () => {
        setBook(true)
    }

    const colorfulCover = () => {
        setColor(true)
    }

    const colorlessCover = () => {
        setColor(false)
    }

    useEffect(() => {
        if (color) {
            setColorfulstyles({ color: '#A83FDA', outline: '3px solid #A83FDA' })
            setColorlessStyles(null)
        }

        if (!color) {
            setColorlessStyles({ color: '#A83FDA', outline: '3px solid #A83FDA' })
            setColorfulstyles(null)
        }
    }, [color])

    useEffect(() => {
        if (paperColor === "Alto Creme / Naturel vol.1.5"){
            setPaperWeight([80,90,115])
        }
        if (paperColor === "Amber Graphic"){
            setPaperWeight([90,120,150,170,200])
        }
        if (paperColor === "Magno Satin"){
            setPaperWeight([115,130,150,170,200])
        }
    }, [paperColor])

    useEffect(() => {
        if (book) {
            setHardstyles({ color: '#A83FDA', outline: '3px solid #A83FDA' })
            setSoftStyles(null)
        }

        if (!book) {
            setSoftStyles({ color: '#A83FDA', outline: '3px solid #A83FDA' })
            setHardstyles(null)
        }
    }, [book])
    return (
        <div className="main">
            <div className="main-top-words">Print a book</div>
            <div className="main-desc">
                <div>To get started, you‘ll need to configure your product.</div>
                <div>A full quote will be provided once your product has been configured completely.</div>
            </div>
            <div className="book-type">
                <div>
                    1.Book type
                </div>
                <div className="help">
                    Help
                </div>
            </div>
            <div className="covers">
                <div className="hardcover box" onClick={hardcover} style={softStyles}>
                    <div className="img-div">
                        <img src={hard} alt="hard"></img>
                    </div>
                    <h5>Hardcover</h5>
                </div>
                <div className="softcover box" onClick={softcover} style={hardStyles}>
                    <div className="img-div">
                        <img src={soft} alt="soft"></img>
                    </div>
                    <h5>Softcover</h5>
                </div>
            </div>
            <div className="book-type">
                <div>
                    2.Color type
                </div>
                <div className="help">
                    Help
                </div>
            </div>
            <div className="covers">
                <div className="hardcover box" onClick={colorfulCover} style={colorfulStyles}>
                    <div className="img-div">
                        <img src={colorful} alt="hard"></img>
                    </div>
                    <h5>Full color</h5>
                </div>
                <div className="softcover box" onClick={colorlessCover} style={colorlessStyles}>
                    <div className="img-div">
                        <img src={colorless} alt="soft"></img>
                    </div>
                    <h5>Black & White</h5>
                </div>
            </div>
            <div className="book-type">
                <div>
                    3.Number of pages
                </div>
                <div className="help">
                    Help
                </div>
            </div>
            <div className="number-of-pages">
                <input placeholder="From 30 to 400" />
            </div>
            <div className="book-type">
                <div>
                    4.Paper
                </div>
                <div className="help">
                    Help
                </div>
            </div>
            <div className="paper-color">
                <div className="a">A. Paper color</div>
                <div className="radio-color">
                    <div>
                        <input type="radio" id="Alto Creme / Naturel vol.1.5" name="color" value="Alto Creme / Naturel vol.1.5" onChange={(event) => {
                            setPaperColor(event.target.value)
                        }} />
                        <label htmlFor="Alto Creme / Naturel vol.1.5">Alto Creme / Naturel vol.1.5</label>
                    </div>
                    <div>
                        <input type="radio" id="Amber Graphic" name="color" value="Amber Graphic" onChange={(event) => {
                            setPaperColor(event.target.value)
                        }} />
                        <label htmlFor="Amber Graphic">Amber Graphic</label>
                    </div>
                    <div>
                        <input type="radio" id="Magno Satin" name="color" value="Magno Satin" onChange={(event) => {
                            setPaperColor(event.target.value)
                        }} />
                        <label htmlFor="Magno Satin">Magno Satin</label>
                    </div>
                </div>
            </div>
            <div className="book-type">
                <div>
                    4.Paper
                </div>
                <div className="help">
                    B. Paper weight (grs)
                </div>
            </div>
            <div className="paper-weight">
                {paperWeight?.map((weight) => (
                    <>
                    <div className="paper-weight__div">
                        {weight}
                    </div>
                    </>
                ))}
            </div>
            <div className="continue-button">
                <button>Continue</button>
            </div>
        </div>
    )
}

export default PrintABook
