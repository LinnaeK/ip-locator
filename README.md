# IP-Locator
## By Linnae Kraemer
### April 7th, 2022

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## **To start IP-locator**:

In the project directory, you can run:

###  `docker compose up`

OR: 
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
## **To Test**

#### - **`ip-locator should display longitude and latitude when provided an IP address.`** 
Enter `217.121.179.0/24` into the input and select the submit button. Latitude should display as: `52.5266`, Longitude should display as `6.4182`.

#### - **`ip-locator will display error if an invalid code is submitted`**
Enter `217.121` and select submit. 'Please enter a valid IP Address' will display.

#### - **`ip-locator input will display a notification if a valid IP address is submitted that is not in the database`**
Enter `217.121.179.0` and select submit. 'Sorry, we could not find any records of the IP Address' will display
#### - **`ip-locator input will clear upon focus`**
Enter `217.121.179.0/24` and then click away. Click back on the input. The input should clear instantly. 