## to install the app

`npm install`

`node migrate-users.js`

`node migrate-applications.js`

`node migrate-bank-marketing.js`

`node migrate-default-payments.js`

## then you can run the application

`npm run dev`

## endpoints all with GET method

`/check-user?username=?&password=?`

### bank marketing dataset

`/get-number-of-customers-with-housing-loans-by-education-level?userId=?`

`/get-number-of-customers-contacted-each-month?userId=?`

`/get-number-of-customers-accepted-offer-by-marital-status?userId=?`

#### default payment dataset

`/get-count-defaulters-by-education-level?userId=?`

`/get-count-of-customers-with-payment-delays-last-six-month?userId=?`

### application dataset

`/get-count-of-applications-by-type?userId=?`

`/get-count-of-applications-received-per-state?userId=?`

`/get-proportion-of-applications-consummated-vs-not?userId=?`

`/get-count-of-applications-received-in-2024?userId=?`
