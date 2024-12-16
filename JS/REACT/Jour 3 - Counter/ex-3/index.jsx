const Header = ({ logoSrc, siteTitle }) => {
    return (
        <header>
            <img src={logoSrc} alt="logo du site" />
            <h1>{siteTitle}</h1>
        </header>
    );
};

const Footer = ({ copyright }) => {
    return (
        <footer>
            <p>{copyright}</p>
        </footer>
    );
};

const ContactForm = () => {
    const [formData, setFormData] = React.useState({
        lastName: "",
        firstName: "",
        age: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
        sessionStorage.setItem('Form', JSON.stringify({formData}))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Demande prise en compte, on revient vers vous bientôt 😉');
        setFormData({
            lastName: "",
            firstName: "",
            age: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label htmlFor="lastName">Nom</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <label htmlFor="firstName">Prénom</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <label htmlFor="age">Âge</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <label htmlFor="phone">Téléphone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </li>
                <li>
                    <button type="submit">Envoyer</button>
                </li>
            </ul>
        </form>
    );
};