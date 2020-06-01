import React from "react";
import Contact from './Contact';

class Contacts extends React.Component {
	constructor(props) {
		super(props);
		this.state = { contacts: [] };
	}
	componentDidMount() {
		const request = new Request(
			"https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts"
		);

		fetch(request)
			.then(resp => resp.json())
			.then(data => {
				this.setState({ contacts: data })
			})
	}

	render() {

		const filteredContacts = this.state.contacts.filter(elm => {
			const name = elm.name.toLowerCase();
			const key = this.props.filter.toLowerCase();
			const position = name.indexOf(key);

			if (position === 0)
				return true;
			return false;
		});

		if (this.props.orderBy) {
			const order = this.props.orderBy;

			if (order === "admissionDate")
				filteredContacts.sort(({ admissionDate: a }, { admissionDate: b }) =>
					new Date(b) - new Date(a)
				);
			else
				filteredContacts.sort(({ [order]: a }, { [order]: b }) => a.localeCompare(b));
		}

		return (
			<div data-testid="contacts" className="container">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
					{filteredContacts.map(contact => <Contact key={contact.id} data={contact} />)}
				</section>
			</div>
		)
	}
};

export default Contacts;
