import { StripeProvider, Elements, CardElement } from 'react-stripe-elements'

export default () =>
	<div>
		<StripeProvider apiKey="pk_test">
			<Elements>
				<CardElement />
			</Elements>
		</StripeProvider>
	</div>