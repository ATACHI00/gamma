//create page
"use client";
import "./create.css";
import { useState } from "react";
import Button from "./components/Button";
import Dashboard from "../Components/Dashboard";

export default function New() {
  const [error, setError] = useState({
    name: "",
    contact: "",
    title: "",
    describe: "",
    price: "",
  });
  const [data, setData] = useState({
    name: "",
    contact: "",
    title: "",
    describe: "",
    price: 0,
  });

  return (
    <Dashboard>
      <div className=" flex flex-col justify-center items-center w-full p-22">
        <h1>Заказчик</h1>
        <input
          value={data.name}
          placeholder="Артём"
          onChange={(e) => {
            const value = e.target.value;
            setError((prev) => ({
              ...prev,
              name: value.length > 15 ? "Сократите имя" : "",
            }));
            setData((prev) => ({
              ...prev,
              name: value,
            }));
          }}
        ></input>
        {error.name && <h1>{error.name}</h1>}
        {/* # validation complete */}

        <h1>Контакты заказчика</h1>
        <input
          placeholder="@ert12"
          value={data.contact}
          onChange={(e) => {
            const value = e.target.value;
            setError((prev) => ({
              ...prev,
              contact: value.length > 50 ? "Сократите запись" : "",
            }));
            setData((prev) => ({
              ...prev,
              contact: value,
            }));
          }}
        ></input>
        {error.contact && <h1>{error.contact}</h1>}
        {/* # validation complete */}

        <h1>Название услуги</h1>
        <input
          placeholder="Сайт под ключ"
          value={data.title}
          onChange={(e) => {
            const value = e.target.value;
            setError((prev) => ({
              ...prev,
              title: value.length > 25 ? "Сократите запись" : "",
            }));
            setData((prev) => ({
              ...prev,
              title: value,
            }));
          }}
        ></input>
        {error.title && <h1>{error.title}</h1>}
        {/* # validation complete */}

        <h1>Краткое инфо по услуге</h1>
        <input
          placeholder="Создание и деплой сайта"
          value={data.describe}
          onChange={(e) => {
            const value = e.target.value;
            setError((prev) => ({
              ...prev,
              describe: value.length > 100 ? "Сократите описание" : "",
            }));
            setData((prev) => ({
              ...prev,
              describe: value,
            }));
          }}
        ></input>
        {error.describe && <h1>{error.describe}</h1>}
        {/* # validation complete */}

        <h1>Цена услуги</h1>
        <input
          type="number"
          placeholder="от 0 до 10 000 000"
          value={data.price}
          onChange={(e) => {
            if ((data.price < 0 && data.price < 1) || data.price > 10000000) {
              setError((prev) => ({ ...prev, price: "Некорректное значение" }));
            } else {
              setError((prev) => ({ ...prev, price: "" }));
            }
            setData((prev) => ({
              ...prev,
              price: parseInt(e.target.value),
            }));
          }}
        ></input>
        {error.price && <h1>{error.price}</h1>}
        {/* # validation complete */}
        <Button data={data} />
      </div>
    </Dashboard>
  );
}

// * minor notes
// ? bugs
// ! attention
// todo task
// # major notes
