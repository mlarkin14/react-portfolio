import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
    <div class="step">
            <h3>Daily Weather and Dad Joke App</h3>
            <div class="step-info">
                <div class="step-img">
                    <a href="https://mlarkin14.github.io/project-1/">
                        <img alt="waves" src="./waves.png" />
                    </a>
                </div>
                <div class="step-text">
                    <p>Website that gives you daily weather and a dad joke</p>
                </div>
            </div>
        </div>
        <div class="step">
            <h3>Pokemon Team Builder</h3>
            <div class="step-info">
                <div class="step-img">
                    <a href="https://best-team-pokemon-team-builder.herokuapp.com/">
                        <img alt="pika" src="./pikachu.png" />
                    </a>
                </div>
                <div class="step-text">

                    <p>App that lets you build and save a team of 6 Pokemon</p>
                </div>
            </div>
        </div>
      
        <div class="step">
            <h3>Camping App</h3>
            <div class="step-info">
                <div class="step-img">
                    <a href="https://bekimab.github.io/Glamorous-Glamping/">
                        <img alt="run" src="./running.png" />
                    </a>
                </div>
                <div class="step-text">
                    <p>Book a camping trip!</p>
                </div>
            </div>
        </div>
    </div>
  )
}
