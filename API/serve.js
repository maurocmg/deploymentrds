const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
app.use(express.json());
app.use(cors());
const nodemailer = require("nodemailer");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-7468840000831686-070211-68e879b04c259bbe67b2c45b2710d205-1412352374",
});
app.get("/",function(req,res){
    res.send("el servidor de mercado funciona");
});
app.post("/create_preference", (req, res) => {

	
	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:5173",
			"failure": "http://localhost:5173",
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});
app.listen(8080,()=>{
    console.log('servidor corriendo');
})
