const http = require('http');
const nodemailer = require('nodemailer');
require('dotenv').config();

const port = process.env.PORT || 5000;

// Helper function to parse the request body
function getBody(request) {
    return new Promise((resolve) => {
        let body = '';
        request.on('data', (chunk) => {
            body += chunk.toString();
        });
        request.on('end', () => {
            resolve(body);
        });
    });
}

const server = http.createServer(async (req, res) => {
    // Set CORS headers to allow requests from your frontend
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle pre-flight CORS requests
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    
    // Routing
    if (req.url === '/api/send-email' && req.method === 'POST') {
        try {
            const body = await getBody(req);
            const { fullName, email, subject, message } = JSON.parse(body);

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            let mailOptions = {
                from: `"${fullName}" <${email}>`,
                to: 'padbdilshan@gmail.com',
                subject: `New message from portfolio: ${subject}`,
                text: `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
                replyTo: email,
            };

            const info = await transporter.sendMail(mailOptions);
            
            console.log('Email sent successfully!');
            console.log('Nodemailer response info:', info);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Email sent successfully.' }));

        } catch (error) {
            console.log('Error processing request:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Something went wrong.' }));
        }
    } else if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Backend is running.');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 