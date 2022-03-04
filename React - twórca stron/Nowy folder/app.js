const Title = () => <h1>To jest blog o gotowaniu</h1>;

const Post = (props) => {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.shortContent}</p>
            <button>Czytaj więcej</button>
        <hr/>
        </> 
    )
}

const Blog = function() {
const posts = [
    {
        title: "Przepis na naleśniki.",
        shortContent: "Na naturalnym mleku..."
    },
    {
        title: "Przepis na Kurczaka.",
        shortContent: "Na ostro..."
    }
];

    return (
        <div>
            <Title/>
            <Post 
                title={posts.title}
                shortContent={posts.shortContent}>
            </Post>
            <Post 
                title= {posts.title}
                shortContent= {posts.shortContent}>
            </Post>
        </div>
    )
}

ReactDOM.render(
    <Blog/>,
    document.getElementById('root')
);