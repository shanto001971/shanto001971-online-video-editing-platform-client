import React from 'react';
import { useParams } from 'react-router';

const PaymentSuccess = () => {
	const { tran_id } = useParams();
	return (
		<div>
			<h1 className="text-9xl text-red-300 text-center">
				Payment Successful
			</h1>
			<h3 className="text-5xl text-center mt-10">{tran_id}</h3>
		</div>
	);
};

export default PaymentSuccess;
