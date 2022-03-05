const Title = () => <h1>To jest blog o gotowaniu</h1>;

const Post = (props) => {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.shortContent}</p>
            <p>{props.content}</p>
            <button>Czytaj więcej</button>
        <hr/>
        </> 
    )
}

const Blog = function() {
    const posts = [
        {
            title: "Przepis na naleśniki.",
            shortContent: "Na naturalnym mleku...",
            content: 'mleko, jaja zmieszać, dodać cukru i będzie zajebiście...',
            showContent: true,
            id: 2
        },
        {
            title: "Przepis na Kurczaka.",
            shortContent: "Na ostro...",
            content: 'pokroić kurczaka, usmażyć i tak dalej...',
            showContent: false,
            id: 3
        }
    ];

    const postsList = posts.map(el => (
        <Post
            key= {el.id}
            title={el.title}
            content={el.content}
            shortContent={el.shortContent}
            shortContent={el.shortContent}
        />
    ))

    return (
        <div>
            <Title/>
            {postsList}
        </div>
    )
}

ReactDOM.render(
    <Blog/>,
    document.getElementById('root')
);