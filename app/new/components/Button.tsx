import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

interface DataLeth {
  name: string;
  contact: string;
  title: string;
  describe: string;
  price: number;
}

export default function Button({ data }: { data: DataLeth }) {
  const router = useRouter();
  const handleClick = async () => {
    try {
      const res = await axios.post("../api/orders", data);
      if (res.status === 201) {
        router.push("/");
      }
    } catch (error) {
      console.log("Something went wrong...", error);
    }
  };
  return (
    <button className="create-btn" onClick={handleClick}>
      Создать
    </button>
  );
}
