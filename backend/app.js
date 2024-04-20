// import express from 'express';
// import cors from "cors";
// import dotenv from "dotenv";
// import { dbConnection } from './database/dbConnection.js';
// import ReservationRouter from './routes/reservationRoute.js';
// import { errorMiddleware } from "./middlewares/error.js";
// const app = express();
// dotenv.config();

// // app.use(
// //     cors({
// //       origin: [process.env.FRONTEND_URL],
// //     //   methods: ["POST"],
// //       credentials: true,
// //     })
// //   );


// app.use(cors());
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/reservation", ReservationRouter);
// dbConnection();

// app.use(errorMiddleware);

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow requests from this origin
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Allow specific HTTP methods
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
//     res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow credentials (e.g., cookies)
//     next();
// });

import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from './database/dbConnection.js';
import ReservationRouter from './routes/reservationRoute.js';
import { errorMiddleware } from "./middlewares/error.js";

const app = express();
dotenv.config();

// Apply CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true // Allow credentials (e.g., cookies)
}));

// Parse incoming requests with JSON payloads
app.use(express.json());
// Parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Mount reservation routes
app.use("/api/v1/reservation", ReservationRouter);

// Establish database connection
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;


// export default app;