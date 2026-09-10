import Link from "next/link"
import Action from "./Action";
import Menu from "./Menu";
import MainBlock from "./MainBlock";

type Dashboard = {
  children: React.ReactNode
}


export default function Dashboard({children}: Dashboard) {
    return (
            <main className="home-cont" 
            style={{
                border: "black solid 1px", 
                height: "450px",
                minWidth: "682px",
                display: "flex"}}>
                {children}
            </main>

    )
}