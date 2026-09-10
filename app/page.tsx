//
import Link from "next/link";
import './main.css'
import Action from "./Components/Action";
import Menu from "./Components/Menu";
import MainBlock from "./Components/MainBlock";
import Dashboard from "./Components/Dashboard";


export default function Home() {
  return (
    <Dashboard>
      <Action/>
      <MainBlock/>
      <Menu/>
    </Dashboard>
  );
}
