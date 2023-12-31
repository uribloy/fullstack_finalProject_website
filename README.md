## nodeJS-hackeru-project

# Store Server

## Description

This server is managing store website, create, edit, delete, and display prooducts. and mange cart add or remove items.

## Install

Download the project.

**Attention**

This project uses mongoDB server configuration, as local DataBase.
To run it you need to [download](https://www.mongodb.com/try/download/community-kubernetes-operator) and install mongoDB.

### Installing the server

In the terminal go to the backend folder, install the required files and run

```
npm i
```

Create an ".env" file and insert the details as in the ".env.examples" file.

### run the server

```
 // for production
npm run start

 // for devlopment
npm run dev
```

### Installing the seed data

```
npm run seed-db
```

**Attention**
This action reset the Users & Products collection, and inserts examples users (regular, admin) and producs.

### Installing the front

In the terminal go to the frontend folder, install the required files and run

```
npm i
npm start
```

## server contain

### models

### user model

example input by user

```
{
    name: {
        first*: "first",
        middle: "",
        last*:"lastName",
    },
    userName*:"name",
    phone*: "051123456/7",
    email*: "f@l.com",(unique)
    password*:"12345678",
    address: {
        state: "",
        country*:"israel",
        city*: "tlv",
        street*:"hasalom",
        houseNumber*:"25",
        zipCode: "",
    },
    image: {
        url: "example.com/photo.png",
        alt: "image user",
    },
}
```

Other details to save in DB creatd by system

```
{
isAdmin:false(boolean),
_id:"650fe437fd3160feaac2702a",
createdAt:2001-09-11T15:14:39.390+00:00,
cart:[{product_id:ref Products,
      quantity:num},]
likes:[{product_id:ref Products}],

//and _id for name, image, address
}
```

### product model

example input by user

```
{
    title*:"title",
    description*:"Description",
    brand*:brand
    category*:category
    price*:120
    image: {
        url: "example.com/photo.png",
        alt: "image user",
    },
    stock*:25
}
```

Other details to save in DB creatd by system

```
{
_id:"650fe437fd3160feaac2702a",
createdAt:2001-09-11T15:14:39.390+00:00,
likes:[],

//and _id for img
}
```

## Technologies & Libraraies

- "nodemon": for development purposes
- "bcrypt": password encryption
- "chalk": coloring console messages
- "config": configuration
- "cors": cors policy
- "dotenv": environment variables
- "express": requests routing
- "joi": validation
- "jsonwebtoken": managing web tokens
- "lodash": various helper functions
- "mongoose": managing mongoDB
- "morgan": logging response messages

## Use of the site

You can view the products, but only a registered user can add products to the cart

### Mainly web development technology

- React as the main technology to build website.
- React-Router-Dom for manage routing and url options.
- Bootstrap & Bootstrap-icons to design.
- Formik & Joi to work with forms and validation.
- Axios to manage requests with server side.
