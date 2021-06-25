import style from '../styles/Layout.module.css';
import Nav from './Nav';
import Header from './Header';
import Meta from './Meta';
const Layout = ({children}) => {
    const {container, main} = style;

    return (
    <>
    <Meta/>
    <Nav/>
        <div className={container}>
            <main className={main}>
                <Header/>
                {children}
            </main>
        </div>
    </>
    )
}

export default Layout;
