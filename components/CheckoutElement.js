import { injectStripe, CardElement } from 'react-stripe-elements'

const CheckoutElement = () =>
	<form>
		<CardElement />
	</form>

export default injectStripe(CheckoutElement)
