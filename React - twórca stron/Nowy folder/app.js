const Title = () => <h1>To jest blog o gotowaniu</h1>;

const Post = (props) => {
    const showContent = false;
    
    const showMoreContent = (event) => {
        event.preventDefault();
        console.log('Kliknięcie');
    }

    return (
        <>
            <h2>{props.title}</h2>
            { showContent ? (<p>{props.content}</p>) : 
            (<><p>{props.shortContent}</p>
            <button onClick={showMoreContent}>Czytaj więcej</button></>)}
        <hr/>
        </> 
    );
}

const Blog = function() {
    const posts = [
        {
            title: "Przepis na naleśniki.",
            shortContent: "Na naturalnym mleku...",
            content: 'mleko, jaja zmieszać, dodać cukru i będzie zajebiście...',
            id: 2
        },
        {
            title: "Przepis na Kurczaka.",
            shortContent: "Na ostro...",
            content: 'pokroić kurczaka, usmażyć i tak dalej...',
            id: 3
        }
    ];

    const postsList = posts.map(el => (
        <Post
            key= {el.id}
            {...el}
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