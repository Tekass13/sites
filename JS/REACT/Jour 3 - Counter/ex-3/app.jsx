const App = () => {
    return (
        <React.Fragment>
            <Header logoSrc="logo.png" siteTitle="Un Joli Site" />
            <ContactForm />
            <Footer copyright="© 2024 TeKaSs" />
        </React.Fragment>
    );
};

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);