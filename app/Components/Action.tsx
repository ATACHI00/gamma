import Link from "next/link"


export default function Action() {
    return (
        <div className="action">
            <Link className="new-order-href" href="/new">Новый заказ</Link>
            <Link className="history-href" href="/history">История</Link>
        </div>
    )
}