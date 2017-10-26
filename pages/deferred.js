import Head from 'next/head'

import CheckoutForm from '../components/CheckoutForm'

export default class Deferred extends React.Component {
	constructor (props) {
		super(props)
		
		this.state = {
			client: false
		}
	}

	componentDidMount () {
		this.setState(Object.assign({}, this.state, { client: true }))
	}

	render () {
		let formElement = <div />

		if (this.state.client) {
			formElement = <CheckoutForm />
		}

		return (
			<div>
				<Head>
					<script src="https://js.stripe.com/v3/" />
				</Head>

				{formElement}
			</div>
		)
	}
}
