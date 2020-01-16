import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// set environment variables from ../.env
dotenv.config();

/*
 * Check for GRAPHQL_SCHEMA environment variable to specify schema file
 * fallback to schema.graphql if GRAPHQL_SCHEMA environment variable is not set
 */

// Construct a schema, using GraphQL schema language
export const typeDefs = fs
  .readFileSync(
    process.env.GRAPHQL_SCHEMA || path.join(__dirname, "schema.graphql")
  )
  .toString("utf-8");

