// Coneccion al server neon
"use server";
import { neon } from "@neondatabase/serverless";

// Fetch data directly from Neon database
export async function getData() {
  const sql = neon(process.env.DATABASE_URL!);
  try {
    const data = await sql`SELECT * FROM ideas`; // Adjust the query to fit your table structure
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}
export async function getCategories() {

  const sql = neon(process.env.DATABASE_URL!);
  try {
    const data = await sql`SELECT * FROM categories`; // Adjust the query to fit your table structure
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}
