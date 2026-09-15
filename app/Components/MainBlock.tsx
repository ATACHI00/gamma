"use client";
import styles from "./components_style/MainBlock.module.css";
import axios from "axios";
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
    <div className={styles.mainBlock}>
      <div className={styles.mainList}>
        {data?.map((item) => (
          <li className={styles.mbList} key={item.id}>
            {" "}
            {item.title}
          </li>
        ))}
      </div>
    </div>
  );
}
