import { Link } from 'react-router-dom';

const Public = () => {
  const content = (
    <setion className="public">
        <header>
            <h1>Welcome to <span className="nowrap">My Mern Web App!</span></h1>
        </header>
        <main className="public__main">
            <p>I am an enthusiastic programmer with wide knowledge in javascript react and MERN stack</p>
            <address className="public__addr">
                Allan Mathenge <br />
                Njoro <br />
                Nakuru 20107 <br />
                <a href="tel: +254784131234">Hire me</a>
            </address>
            <br />
            <p>Owner: Allan Mathenge</p>
        </main>
        <footer>
            <Link to="/login">Employee Login</Link>
        </footer>
    </setion>
  )
  return content
}
export default Public