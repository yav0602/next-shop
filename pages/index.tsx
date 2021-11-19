import { Paragraph } from "components/Paragraph";
import Head from "next/head";
import { Button } from "components/Button";
import { Tag } from "components/Tag";
import { Rating } from "components/Rating";
import { useState } from "react";
import { AppLayout } from "components/AppLayout";

export default function Home() {
	const [stars, setStars] = useState(4);

	return (
		<AppLayout>
			<Head>
				<title>Home</title>
			</Head>
			<Button variant="primary" arrow="right">
				Filled
			</Button>
			<Button variant="outline" arrow="right">
				Outline
			</Button>
			<Paragraph>
				Напишу сразу в двух курсах, так как проходил оба. Java будет многим
				непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего
				положения языка как самого популярного в программировании. Выбор мой пал
				на эту профессию еще и потому, что Java-разработчики получают самую
				большую зарплату. Хотя Python начинает догонять Java по многим моментам,
			</Paragraph>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quaerat
				incidunt, tempora exercitationem eligendi numquam debitis dignissimos
				asperiores! Accusamus cum odio dolore quod deleniti earum facilis minus
				numquam unde minima? Unde vitae recusandae, dignissimos officiis
				obcaecati deserunt repellat perspiciatis, saepe ex quibusdam ducimus
				nostrum ipsam doloribus quasi laudantium. Unde soluta vitae ipsam
				molestiae! Incidunt numquam vitae quam dignissimos suscipit voluptates.
				Fuga laboriosam ad eligendi tenetur maiores sed autem fugiat suscipit,
				doloremque eius! Voluptates a omnis tenetur, ad quo quasi odit vel qui
				nobis mollitia architecto itaque accusamus molestiae dolorum? Ipsam.
				Facilis numquam eligendi quisquam, aut ea rem, adipisci ipsam repellat
				non, laborum neque quam fugiat beatae sapiente ipsa a delectus iste sint
				consequuntur unde! Adipisci blanditiis voluptatem fugiat ex dicta!
				Voluptatibus, ea consequatur! Libero maxime tempora sed ullam odio nihil
				ab. Consequatur officia ipsum quaerat impedit fuga non et saepe
				assumenda eaque corporis, deleniti officiis architecto fugit vel illum
				libero. Distinctio, mollitia dignissimos debitis fuga vitae nulla
				tempore illum doloribus facilis ab consequatur at doloremque, quasi
				reprehenderit? Aliquam assumenda vero nisi, porro ullam, fugiat
				explicabo dolorem distinctio eaque amet dolorum. Quas perferendis
				reprehenderit exercitationem dolor hic ipsum perspiciatis, facere
				magnam. Tenetur amet quisquam odit! Dolorum sit veniam quos, ipsa
				quaerat illum debitis? Quas, assumenda. Delectus facere asperiores
				molestias iste accusamus? Quaerat perspiciatis quae rerum obcaecati.
				Ullam modi cum, odio earum neque qui veniam soluta dolor vitae amet
				inventore suscipit nesciunt. Aspernatur possimus ab sint recusandae,
				dolorum cum assumenda praesentium tempore? Nihil explicabo, molestias
				non id repellendus pariatur quo qui sed odio quidem fugit suscipit
				dignissimos atque? Officiis, cupiditate numquam amet reiciendis officia
				accusantium excepturi dolores architecto. Modi voluptatibus totam enim.
				Voluptas ratione, sed ullam animi vitae culpa eaque in illo cum
				consequatur velit? Voluptates molestias rem eos repudiandae molestiae!
				Cumque quidem officia maiores doloribus voluptas est laborum, commodi
				impedit laboriosam. Ullam delectus expedita est quos alias voluptate
				eaque illum similique illo. Numquam, iusto. Culpa, tenetur consequatur!
				Veritatis, sunt ut repellat voluptatum fuga tempore delectus architecto
				pariatur in deserunt beatae dolore? Laborum quisquam voluptas sint
				dolorem necessitatibus! Amet sed vitae ipsa explicabo non placeat
				temporibus dicta modi sint, sit laudantium facilis omnis, obcaecati
				minus. Blanditiis omnis asperiores id porro, unde nemo? Modi minima,
				animi optio nobis ea fugit voluptatem perferendis iusto odio quaerat
				tempora quod nostrum qui sint! Commodi aliquid adipisci soluta explicabo
				nihil ipsum fugit. Accusamus itaque hic maxime corporis! Saepe, sapiente
				dolores cum eum labore dicta neque! Accusamus excepturi numquam corrupti
				veniam sunt cumque eveniet ex assumenda blanditiis molestias labore eum
				eligendi rerum odio exercitationem perspiciatis, odit at! Distinctio!
				Quia veniam impedit, asperiores error eligendi dolorum qui eos quae
				perferendis nobis dolore fuga illo dignissimos officiis repudiandae
				nisi, laborum non culpa, soluta esse placeat amet cupiditate. Illum,
				fuga eos? Delectus placeat omnis dolor suscipit quibusdam earum
				veritatis exercitationem assumenda autem ex, quae explicabo possimus
				laborum dolores temporibus accusantium voluptas vitae cum labore atque
				sunt fugiat? Repellat quidem dolorum ex. Atque maiores incidunt possimus
				at porro ut, maxime voluptatibus perspiciatis assumenda esse laborum
				officiis aliquam ipsa sed itaque eaque accusantium voluptatem odio quod?
				Culpa repudiandae soluta, natus explicabo assumenda sapiente. Eum quis
				libero aspernatur delectus non dolore quia magni sit, cum molestiae
				quaerat molestias, veniam, quas consectetur consequatur in quod unde
				possimus. Aliquid quaerat distinctio sapiente excepturi dolor ex ipsam.
				Cupiditate tenetur quo dignissimos culpa, officia sit repellendus
				adipisci aut mollitia tempore exercitationem qui inventore eveniet
				voluptates amet odio, et doloremque quas! Qui aspernatur nisi repellat
				quidem reiciendis dolor recusandae? Autem, soluta ad quisquam iure
				provident vero dolorum. Modi cupiditate amet rem pariatur itaque quos,
				nihil debitis, blanditiis repellat possimus neque eos aspernatur ex
				molestias consequuntur dolorem commodi dicta deserunt?
			</Paragraph>
			<Rating value={stars} onChange={setStars} editable />
			<Tag variant="primary">Hello world</Tag>
			<Tag variant="primary">Hello world</Tag>
			<Tag variant="primary">Hello world</Tag>
			<Tag variant="primary">Hello world</Tag>
		</AppLayout>
	);
}
