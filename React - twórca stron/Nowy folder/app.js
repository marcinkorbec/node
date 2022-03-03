const title = () => <h1>Mój tytuł</h1>;

const MyComponent = () => {
    return (
        <>
            <Title></Title>
            <p>Tekst pod nagłówkiem</p>
        </>
    )
}

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('root')
);