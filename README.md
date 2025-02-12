# Mini Message Board

[Mini Message Board - Live Demo](https://mini-message-board-eclb.onrender.com)

This is my first backend project where I built a **mini message board** using **Express** and **EJS**, with **PostgreSQL** as the database to store messages. Users can submit and view messages on two pages: the **Home** page and the **New** page.

## Features

- **Home Page**: Displays all the messages submitted by users, fetched from the PostgreSQL database.
- **New Page**: A form where users can submit their name and message, which is stored in the PostgreSQL database.
- **Database Integration**: Messages are now permanently stored in a PostgreSQL database, replacing the previous in-memory array.
  
## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side logic.
- **Express**: A minimal and flexible Node.js web application framework to handle routing and requests.
- **EJS**: Embedded JavaScript templating engine for rendering dynamic HTML views.
- **PostgreSQL**: A powerful relational database to store user messages persistently.
- **pg**: PostgreSQL client for Node.js to interact with the database.
