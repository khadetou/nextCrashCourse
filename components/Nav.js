import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
const Nav = () => {
    const {nav} = navStyles;
    return (
        <div className={nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
