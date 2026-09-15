//create page
"use client";
import "./create.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Dashboard from "../Components/Dashboard";
import { useRouter } from "next/navigation";
interface dataType {
  name: string;
  contact: string;
  title: string;
  describe: string;
  price: number;
  complete: boolean;
}

export default function New() {
  const router = useRouter();

  const titleLabel = {
    nameLabel: "Заказчик",
    contactLabel: "Контакты заказчика",
    titleLabel: "Название услуги",
    describeLabel: "Краткое описание",
  };

  const [error, setError] = useState({
    name: "",
    contact: "",
    title: "",
    describe: "",
    price: "",
  });
  const [data, setData] = useState<dataType>({
    name: "",
    contact: "",
    title: "",
    describe: "",
    price: 1,
    complete: false,
  });

  return (
    <Dashboard>
      <div className=" flex flex-col justify-center items-center w-full p-22">
        <Input
          title={titleLabel.nameLabel}
          value={data.name}
          placeholder="Андрей"
          error={error.name}
          onChange={(value) => {
            setError((prev) => ({
              ...prev,
              name:
                value.length > 50
                  ? `Некорректное значение ${titleLabel.nameLabel}`
                  : "",
            }));
            setData((prev) => ({ ...prev, name: value }));
          }}
        />

        <Input
          title={titleLabel.contactLabel}
          value={data.contact}
          placeholder="@qwr23"
          error={error.contact}
          onChange={(value) => {
            setError((prev) => ({
              ...prev,
              contact:
                value.length > 50
                  ? `Некорректное значение ${titleLabel.contactLabel}`
                  : "",
            }));
            setData((prev) => ({ ...prev, contact: value }));
          }}
        />

        <Input
          title={titleLabel.titleLabel}
          value={data.title}
          placeholder="Сайт под ключ"
          error={error.title}
          onChange={(value) => {
            setError((prev) => ({
              ...prev,
              title:
                value.length > 50
                  ? `Некорректное значение ${titleLabel.titleLabel}`
                  : "",
            }));
            setData((prev) => ({ ...prev, title: value }));
          }}
        />

        <Input
          title={titleLabel.describeLabel}
          value={data.describe}
          placeholder="Создание и деплой сайта на Vercel"
          error={error.describe}
          onChange={(value) => {
            setError((prev) => ({
              ...prev,
              describe:
                value.length > 1000
                  ? `Некорректное значение "${titleLabel.describeLabel}"`
                  : "",
            }));
            setData((prev) => ({ ...prev, describe: value }));
          }}
        />

        <h1>Цена услуги</h1>
        <input
          type="number"
          placeholder="от 0 до 10 000 000"
          value={data.price}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              setError((prev) => ({
                ...prev,
                price: "Цена обязательна для заполнения",
              }));
            }

            if (
              data.price > 10000000 ||
              (value[0] === "0" && value.length > 1)
            ) {
              setError((prev) => ({ ...prev, price: "Некорректная цена" }));
            } else {
              setError((prev) => ({ ...prev, price: "" }));
            }
            setData((prev) => ({
              ...prev,
              price: parseInt(value),
            }));
          }}
        ></input>
        {error.price && <h1 className="new-order-error">{error.price}</h1>}

        <Button error={error} data={data} />
        <button onClick={() => router.push("/")}> Отмена</button>
      </div>
    </Dashboard>
  );
}

// * minor notes
// ? bugs
// ! attention
// todo task
// # major notes
