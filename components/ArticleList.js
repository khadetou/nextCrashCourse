import ArticleStyle from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';
const ArticleList = ({articles}) => {
    const {grid} = ArticleStyle;
    return (
        <div className={grid}>
            {articles.map(article=>(
                <ArticleItem article={article}/>
            ))}
        </div>
    )
}

export default ArticleList;
