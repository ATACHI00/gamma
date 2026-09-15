import { stringify } from "node:querystring";
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
  console.log("complete is", data.complete);
  return NextResponse.json(data);
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const prepare = db.prepare("DELETE FROM orders WHERE id = ?");
    const operate = prepare.run(id);

    if (!id) {
      return Response.json({ error: "id не передан" }, { status: 400 });
    }

    console.log(operate.changes);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}

export async function PUT(request) {
  const data = await request.json();
  const { complete, id } = data;
  const prepare = db.prepare("UPDATE  orders SET complete = ? WHERE id = ?");
  const setting = prepare.run(complete, id);
  console.log(setting.changes);
  return NextResponse.json({ id: setting.changes, success: true });
}
