// orders
"use client";
import styles from "./order.module.css";
import { useRouter } from "next/navigation";
import Dashboard from "../Components/Dashboard";
import List from "./components/List";

export default function Orders() {
  const router = useRouter();
  return (
    <Dashboard>
      <div className={styles.ordersCont}>
        <span className={styles.return} onClick={() => router.push("/")}>
          ⬅ Назад
        </span>
        <h1 className={styles.orderTitle}>Заказы</h1>
        <List />
      </div>
    </Dashboard>
  );
}
