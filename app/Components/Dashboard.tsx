import styles from "./components_style/dashboard.module.css";
type Dashboard = {
  children: React.ReactNode;
};

export default function Dashboard({ children }: Dashboard) {
  return <main className={styles.homeCont}>{children}</main>;
}
