import { StripeProvider, Elements } from 'react-stripe-elements'

import CheckoutElement from './CheckoutElement'

export default () =>
	<StripeProvider apiKey="pk_test">
		<Elements>
			<CheckoutElement />
		</Elements>
	</StripeProvider>
