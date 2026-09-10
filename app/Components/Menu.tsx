import Link from "next/link"


export default function Menu() {
    return (
        <div className="menu">
            <Link className="finance-href" href="/finance">Финансы</Link>
            <Link className="clients-href" href="/clients">Клиенты</Link>
            <Link className="orders-href" href="/orders">Заказы</Link>
      </div>
    )
}