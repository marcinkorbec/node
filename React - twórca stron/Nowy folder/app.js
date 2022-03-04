const Title = () => <h1>To jest blog o gotowaniu</h1>;

const Post = () => {

}

const Blog = function() {
    return (
        <div>
            <Title/>
            <h2>Przepis na naleśniki.</h2>
            <p>Na naturalnym mleku...</p>
            <button>Czytaj więcej</button>
            <hr/>
            <h2>Przepis na Kurczaka.</h2>
            <p>Na ostro...</p>
            <button>Czytaj więcej</button>
            <hr/>
        </div>
    )
}

ReactDOM.render(
    <Blog/>,
    document.getElementById('root')
);