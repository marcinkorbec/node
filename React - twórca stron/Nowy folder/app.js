const MainTitle = () => <h1>To jest blog o gotowaniu</h1>;

class Title extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
           <h2>{this.props.value}</h2> 
        )
    }
}

class Post extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            showContent: false
        }
    }

    showMoreContent() {
        setShowContent(true);
        this.setState({ showContent: true});
    }

    render () {
        return (
            <>
                <Title value={this.props.title}/>
                { this.state.showContent ? (<p>{this.props.content}</p>) : 
                (<><p>{this.props.shortContent}</p>
                <button onClick={() => this.showMoreContent()}>Czytaj więcej</button></>)}
            <hr/>
            </> 
        );
    }
    
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
            <MainTitle/>
            {postsList}
        </div>
    )
}

ReactDOM.render(
    <Blog/>,
    document.getElementById('root')
);