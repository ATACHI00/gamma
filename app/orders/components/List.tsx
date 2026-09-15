"use client";
import styles from "../order.module.css";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Order {
  id: number;
  title: string;
  describe: string;
  price: number;
  complete: number;
}

export default function List() {
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
    <div className="">
      <div className={styles.ordersCont}>
        {data?.map((item) => (
          <div key={item.id}>
            <li className={styles.myList}>
              <div className={styles.leftContent}>
                <div className={styles.lstOne}>{item.title}</div>
                <div className={styles.lstSec}>{item.price}</div>
              </div>
              <div className={styles.rightContent}>{item.describe}</div>
              <div className={styles.togglesBtn}>
                <span
                  className={styles.deleteBtn}
                  onClick={async () => {
                    try {
                      await axios.delete("../../api/orders", {
                        data: { id: item.id },
                      });
                      setData((prev) =>
                        prev.filter((order) => order.id !== item.id),
                      );
                    } catch (error) {
                      console.log(error, "DELETE error");
                    }
                  }}
                >
                  Удалить
                </span>
                <span
                  className={styles.completeToggle}
                  onClick={async () => {
                    const isComplete = item.complete ? 0 : 1;
                    try {
                      await axios.put("../../api/orders", {
                        id: item.id,
                        complete: isComplete,
                      });
                      setData((prev) =>
                        prev.map((order) =>
                          order.id === item.id
                            ? { ...order, complete: isComplete }
                            : order,
                        ),
                      );
                    } catch (error) {
                      console.log("Toggle Error", error);
                    }
                  }}
                >
                  {item.complete ? (
                    <span className={styles.completed}>Выполнено</span>
                  ) : (
                    "Не выполнено"
                  )}
                </span>
              </div>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}
