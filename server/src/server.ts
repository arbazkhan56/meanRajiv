import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { employeeRouter } from "./employee.routes";

// Load environment variables from the .env file, where the ATLAS_URI is configured
dotenv.config();

const { ATLAS_URI } = process.env;

if (!ATLAS_URI) {
  console.error(
    "No ATLAS_URI environment variable has been defined in config.env"
  );
  process.exit(1);
}

// connectToDatabase(ATLAS_URI)
//   .then(() => {
//     const app = express();
//     app.use(cors());

//     app.use("/employees", employeeRouter);
//     // start the Express server
//     app.listen(5200, () => {
//       console.log(`Server running at http://localhost:5200...`);
//     });
//   })

const app = express();
    app.use(cors());

app.use("/employees", employeeRouter);
    
//The error indicates that MongoDB is rejecting a document because it failed validation based on the rules defined in the MongoDB schema or the collection's validation criteria.
connectToDatabase(ATLAS_URI)
  .then(() => {
    
    // start the Express server
    // app.listen(5200, () => {
      console.log(`Server running at http://localhost:5200...`);
    // });
  })
  .catch((error) => console.error(error));