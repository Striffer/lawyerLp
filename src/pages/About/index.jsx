import style from "./style.module.css"
import we_img from "../../assets/trabalho-em-equipe.jpg"
import first_person from "../../assets/first_person.jpg"
import seccond_person from "../../assets/seccond_person.jpg"
import third_person from "../../assets/third_person.jpg"
import Section from "../../components/Section"
import Card from "../../components/Card"

export default function About() {
    return (
        <div className={style.about}>
            <Section heigth={"max-content"} id={style.about}>
                <div className={style.imgContainer}>
                    <img src={we_img} alt="" />
                </div>

                <h2>Sua Empresa Aqui</h2><br />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque consequatur repellat et corporis, ipsam reprehenderit odit? Totam accusamus nisi autem libero recusandae error ex fugiat doloremque? Hic, est quae. Maxime, doloremque ratione. A facilis neque, numquam alias nobis perspiciatis cupiditate eum, minima iste nisi dolor modi cumque voluptates repellendus molestias officiis? Est vel reprehenderit odit quos ea, expedita natus!<br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consequatur rerum eveniet perspiciatis, aperiam, doloribus quaerat quis minus similique ipsa, sunt hic. Similique, non? Dolores in itaque error adipisci doloribus.
                Corrupti beatae accusamus a aliquid sint officiis aut obcaecati assumenda tenetur fugiat atque nostrum incidunt laboriosam tempore reiciendis, expedita earum, ipsam quisquam quae illo ullam. Harum sapiente ullam at totam? Praesentium aut ipsa delectus tenetur quasi nobis odit eos at itaque ipsum dolorum voluptatum blanditiis necessitatibus aperiam libero dolor doloremque, atque cupiditate nemo fuga repellendus esse eum nisi. Dolores, libero.<br /><br /><strong>Aqui, nossa paixão é advogar e entregar o melhor serviço prestado ao cliente.</strong></p>
            </Section>

            <Section heigth={"max-content"} id={style.team}>
                <h2>Nossa Equipe</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat sapiente esse amet deleniti veniam, dolorem, quos dolorum laboriosam, quasi est asperiores accusamus exercitationem! Error inventore ipsam non perspiciatis facere.</p>

                <div className={style.teamImg}>
                    <Card backgroundColor={"#ECECEC"} id={style.firstPerson}>
                        <img src={first_person} alt="" />
                        <h2>Qualquer</h2>
                        <h5>OAB/MG 99.999</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit voluptatum quas qui obcaecati omnis! Laboriosam, accusamus explicabo facere expedita cumque illum provident quia assumenda odio. Labore dignissimos tempore officiis.</p>
                    </Card>

                    <Card backgroundColor={"#ECECEC"} id={style.seccondPerson}>
                        <img src={seccond_person} alt="" />
                        <h2>Qualquer Outro</h2>
                        <h5>OAB/MG 99.999</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus minima reprehenderit rerum fugit necessitatibus nobis porro iste officia explicabo exercitationem, odit voluptates! Sit, at obcaecati harum dolor vitae nihil?</p>
                    </Card>

                    <Card backgroundColor={"#ECECEC"} id={style.thirdPerson}>
                        <img src={third_person} alt="" />
                        <h2>Ninguém</h2>
                        <h5>OAB/MG 99.999</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolorum commodi amet fugit itaque distinctio mollitia voluptate tenetur, ut asperiores, dolore praesentium? Dolorem odit aliquid nulla natus necessitatibus. Nisi, fuga?</p>
                    </Card>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime error repellat facere iure, et distinctio explicabo non corrupti adipisci quam deserunt numquam modi reiciendis consectetur facilis, fugiat atque dolore eaque.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, necessitatibus provident tempora enim cum dolorum. Porro modi quos quasi, voluptatibus nam ea mollitia. Fugit minus eum voluptatem, amet soluta eius.<br /><br />Entre em contato conosco e tire suas dúvidas!</p>
            </Section>
        </div>
    )
}