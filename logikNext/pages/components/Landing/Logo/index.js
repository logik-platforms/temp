import React from 'react'
import "./Logo.css"

export default class Logo extends React.Component {
    state = {
        glitched: false
    }

    glitch() {
        this.setState({glitched: true})
        setTimeout(() => {
            this.setState({glitched: false})
            if (Math.random() <= 0.5) {
                setTimeout(() => {
                    this.setState({glitched: true})
                    setTimeout(() => {
                        this.setState({glitched: false})
                    }, 0.1 * 1000)
                }, 0.05 * 1000)
            }
        }, 0.1 * 1000)
    }

    randomTimeout() {
        let interval = setTimeout(() => {
            this.glitch()
            clearTimeout(interval)
            this.randomTimeout()
        }, (Math.random() * 5 + 2) * 1000)
    }

    componentDidMount() {
        this.randomTimeout()
    }

    render() {
        return (
            <div id="pageCenter">
                <img id="logoImg" className="unselectable" src={require("../../../img/FullSizeRender.png")} align="left" />
                <div id="titleTextWrapper">
                    <h1 id="titleText" className={`unselectable ${this.state.glitched ? "glitched" : ""}`}>
                        <span id="Lslash">
                            L
                        <span id="slashP">
                                /
                        </span>
                            P
                    </span>
                    </h1>
                </div>
            </div>
        )
    }
}