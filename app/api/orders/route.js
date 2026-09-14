import db from "../../../database/init";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  db.prepare(
    "INSERT INTO orders (customerName, customerContact,title, describe, price) VALUES (?, ?, ?, ?, ?)",
  ).run(data.name, data.contact, data.title, data.describe, data.price);

  return NextResponse.json(
    {
      message: "Created",
      status: 201,
    },
    {
      status: 201,
    },
  );
}

export async function GET() {
  const data = db.prepare("SELECT * FROM orders").all();
  console.log(data);
  return NextResponse.json(data);
}
