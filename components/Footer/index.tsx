import dayjs from "dayjs";
import styles from "./Footer.module.css";

const currentYear = dayjs().year();

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>OwlTop © 2020 - {currentYear} Все права защищены</div>
			<a href="#" target="_blank">
				Пользовательское соглашение
			</a>
			<a href="#" target="_blank">
				Политика конфиденциальности
			</a>
		</footer>
	);
};
