import React from 'react';

class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.state = { search: '', orderBy: '' };
	  }

	onFilterChange = e => {
		const element = e.target;
		const newState = this.state;

		if (element.classList.contains('filters__search__input'))
			newState['search'] = element.value;

		if (element.classList.contains('filters__item')) {
			newState['orderBy'] = element.value;
		}

		this.props.onChange(newState);
		this.setState(newState);
	}

	render() {
		const buttonIsSelected = (value) => {
			if (this.state.orderBy === value)
				return 'is-selected';
			return '';
		}

		return (
			<div data-testid="filters" className="container">
				<section className="filters">
					<div className="filters__search">
						<input type="text" className="filters__search__input"
							value={this.state.text}
							onChange={this.onFilterChange}
							placeholder="Pesquisar" />

						<button className="filters__search__icon">
							<i className="fa fa-search" />
						</button>
					</div>

					<button className={`filters__item ${buttonIsSelected('name')}`}
						value="name"
						onClick={this.onFilterChange}>
						Nome <i className="fas fa-sort-down" />
					</button>

					<button className={`filters__item ${buttonIsSelected('country')}`}
						value="country"
						onClick={this.onFilterChange}>
						País <i className="fas fa-sort-down" />
					</button>

					<button className={`filters__item ${buttonIsSelected('company')}`}
						value="company"
						onClick={this.onFilterChange}>
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button className={`filters__item ${buttonIsSelected('department')}`}
						value="department"
						onClick={this.onFilterChange}>
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button className={`filters__item ${buttonIsSelected('admissionDate')}`}
						value="admissionDate"
						onClick={this.onFilterChange}>
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
