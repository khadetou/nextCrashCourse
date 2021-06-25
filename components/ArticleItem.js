import Link from 'next/link';
import ArticleStyle from '../styles/Article.module.css';
const ArticleItem = ({article}) => {
    const {card} = ArticleStyle;
    const {id, title, excerpt} = article;
    return (
        <Link href="/article/[id]" as ={`/article/${id}`}>
            <a className={card}>
                <h3>{title} &rarr</h3>
                <p>{excerpt}</p>
            </a>
        </Link>
    )
}

export default ArticleItem;
