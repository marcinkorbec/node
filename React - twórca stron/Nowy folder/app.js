const Title = () => <h1>Mój tytuł</h1>;
const MyComponent = function() {
    return (
        <div>
            <Title></Title>
            <p>Tekst pod nagłówkiem</p>
        </div>
    )
}

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('root')
);