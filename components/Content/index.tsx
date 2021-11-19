import styles from "./Content.module.css";

export const Content: React.FC = ({ children }) => {
	return <main className={styles.content}>{children}</main>;
};
