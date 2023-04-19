/*
    API Description: This API is used to fetch data from the backend to the frontend
    API Type: GET
    API URL: http://localhost:3000/api/profile_access
*/

// There is a file called testprofile.json in the backend/database folder
// This file contains the data that is to be fetched by the frontend
// Import the path module
import path from "path";
// Import the fs module
import { promises as fs } from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

// Export the handler function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "backend/database");
  // Read the json data file testprofile.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/testprofile.json",
    "utf8"
  );
  // Return the content of the data file in json format
  res.status(200).json(fileContents);
}

// import path from "path";
// import { promises as fs } from "fs";

// export default async function handler(req, res) {
//   //Find the absolute path of the json directory
//   const jsonDirectory = path.join(process.cwd(), "json");
//   //Read the json data file data.json
//   const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
//   //Return the content of the data file in json format
//   res.status(200).json(fileContents);
// }
