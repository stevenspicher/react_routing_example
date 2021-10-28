import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="sidebar">
            <p>About the site</p>
            <ul>
                <li><Link to='/about/news'>News</Link></li>
                <li><Link to='/about/contact'>Contact</Link></li>
            </ul>
        </div>

    )
}

export default About