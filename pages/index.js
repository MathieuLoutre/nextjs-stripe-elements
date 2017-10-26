import { StripeProvider, Elements } from 'react-stripe-elements'
import Head from 'next/head'

import CheckoutForm from '../components/CheckoutForm'

export default () =>
	<div>
		<Head>
			<script src="https://js.stripe.com/v3/" />
		</Head>

		<CheckoutForm />
	</div>
