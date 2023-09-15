// const db = client.db('videoEditor');

// const demoVideoTemplate = db.collection('templateVideosData');
// const demoImagesTemplate = db.collection('templateImagesData');
// const allTemplateData = db.collection('allTemplateData');

// const usersCollection = db.collection('users');
// const feedbackCollection = db.collection('feedback');

// // Warning data insert  on the mongodb
// app.get('/demoVideoTemplate', async (req, res) => {
// 	const result = await demoVideoTemplate.find().toArray();
// 	res.send(result);
// });
// app.get('/demoImagesTemplate', async (req, res) => {
// 	const result = await demoImagesTemplate.find().toArray();
// 	res.send(result);
// });
// app.get('/allTemplateData', async (req, res) => {
// 	const result = await allTemplateData.find().toArray();
// 	res.send(result);
// });

//

// this is the payment request method that is used to send payments
// const store_id = process.env.STORE_ID;
// const store_passwd = process.env.STORE_PASSWORD;
// const is_live = false;

// Payment methods api is here
// const tran_id = new ObjectId().toString();
// app.post('/payments', async (req, res) => {
// 	const value = req.body;
// 	const price = value.price;
// 	const data = {
// 		total_amount: price,
// 		currency: 'BDT',
// 		tran_id: tran_id, // use unique tran_id for each api call
// 		success_url: 'http://localhost:3030/success',
// 		fail_url: 'http://localhost:3030/fail',
// 		cancel_url: 'http://localhost:3030/cancel',
// 		ipn_url: 'http://localhost:3030/ipn',
// 		shipping_method: 'Courier',
// 		product_name: 'Computer.',
// 		product_category: 'Electronic',
// 		product_profile: 'general',
// 		cus_name: 'Customer Name',
// 		cus_email: 'customer@example.com',
// 		cus_add1: 'Dhaka',
// 		cus_add2: 'Dhaka',
// 		cus_city: 'Dhaka',
// 		cus_state: 'Dhaka',
// 		cus_postcode: '1000',
// 		cus_country: 'Bangladesh',
// 		cus_phone: '01711111111',
// 		cus_fax: '01711111111',
// 		ship_name: 'Customer Name',
// 		ship_add1: 'Dhaka',
// 		ship_add2: 'Dhaka',
// 		ship_city: 'Dhaka',
// 		ship_state: 'Dhaka',
// 		ship_postcode: 1000,
// 		ship_country: 'Bangladesh',
// 	};
// 	console.log(data);
// 	const sslcz = new SSLCommerzPayment(
// 		store_id,
// 		store_passwd,
// 		is_live
// 	);
// 	sslcz.init(data).then((apiResponse) => {
// 		// Redirect the user to payment gateway
// 		let GatewayPageURL = apiResponse.GatewayPageURL;
// 		res.send({ url: GatewayPageURL });
// 		console.log('Redirecting to: ', GatewayPageURL);
// 	});
// });
