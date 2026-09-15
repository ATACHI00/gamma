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

interface ErrorLeth {
  name: string;
  contact: string;
  title: string;
  describe: string;
  price: string;
}

export default function Button({
  data,
  error,
}: {
  data: DataLeth;
  error: ErrorLeth;
}) {
  const router = useRouter();
  const catcher = !!Object.entries(error).find(([, value]) => value !== "");
  const isNameEmpty = !data.name;
  const isContactEmpty = !data.contact;
  const isTitleEmpty = !data.title;
  const isdescribeEmpty = !data.describe;
  const isPriceEmpty = !data.price || data.price <= 0;
  const isButtonDisabled =
    isNameEmpty ||
    isContactEmpty ||
    isTitleEmpty ||
    isdescribeEmpty ||
    catcher ||
    isPriceEmpty;

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
    <button
      disabled={isButtonDisabled}
      className="create-btn"
      onClick={handleClick}
    >
      Создать
    </button>
  );
}
