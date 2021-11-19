import { Content } from "components/Content";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";
import styles from "./Layout.module.css";

export const AppLayout: React.FC = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<Sidebar />
			<Content>{children}</Content>
			<Footer />
		</div>
	);
};
