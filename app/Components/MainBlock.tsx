"use client";
import "./components_style/MainBlock.css";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Order {
  id: number;
  title: string;
}

export default function MainBlock() {
  const [data, setData] = useState<Order[]>([]);

  useEffect(() => {
    const res = async () => {
      try {
        const res = await axios.get<Order[]>("../api/orders");
        setData(res.data);
      } catch (error) {
        console.log("Update error", error);
      }
    };

    res();
  }, []);

  return (
    <div className="main-block">
      <h1 className="title">Приветствую</h1>
      <div className="main-list">
        {data?.map((item) => (
          <li key={item.id}> {item.title}</li>
        ))}
      </div>
    </div>
  );
}
