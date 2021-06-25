import headerStyles from '../styles/Header.module.css';

const Header = () => {
    const {title, description} = headerStyles;
    return (
        <div>
            <h1 className={title}>
                Webdev <span>News</span>
            </h1>
            <p className={description}>Keep up to date with the latest web dev news</p>
        </div>
    )
}

export default Header;
