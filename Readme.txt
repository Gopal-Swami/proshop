Steps To Run Local

Clone Repositry 
Open proshop folder and navigate to backend 
Run => NPM install
Then open Frontend Folder 
Run => NPM install

Create a .env file in proshop folder 
and Provide value for below fields


JWT_SECRET='Create a JWT secret'
MONGO_URI='Mongo DB URL for your database cluster'
NODE_ENV=development || production
PORT='Available Port'
PAYPAL_CLIENT_ID='Developer.paypal.com client ID by creating an account on paypal'

Then navigate to proshop folder and run command

NPM RUN DEV

Good To Go :)