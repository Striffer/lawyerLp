import style from "./style.module.css"
import Section from "../../components/Section"
import Card from "../../components/Card"

export default function Skills() {
    return (
        <div className={style.skills}>
            <Section heigth={"max-content"} id={style.contentContainer}>
                <div className={style.textContainer}>
                    <h2>Direito do Trabalho</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptas illo iusto vel illum explicabo pariatur fugit ratione fugiat veniam veritatis quis ut, provident blanditiis harum! Mollitia, pariatur id. Sequi?
                    Autem explicabo distinctio itaque saepe voluptatem accusamus rem exercitationem consequuntur nesciunt quas, fugiat pariatur eligendi eaque veniam sed, nobis dolore eius! Totam aliquid dolorem assumenda quo quisquam, voluptate laborum minus?<br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsa omnis laudantium inventore? Et eum debitis cupiditate iusto beatae ipsum optio magni itaque fuga dicta ad numquam doloremque, voluptates suscipit!<br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, voluptate iusto! Aspernatur dolorum, illum officiis corporis molestias veritatis magnam vel temporibus nemo, porro, odio magni minus pariatur a? Reprehenderit, fugiat.</p>
                    <a href="https://wa.me/32987654321" target="_blank">Solicite um contato</a>
                </div>

                <div className={style.imgContainer}>
                    <Card id={style.firstPerson}></Card>
                </div>
            </Section>

            <Section heigth={"max-content"} id={style.contentContainer}>
                <div className={style.imgContainer}>
                    <Card id={style.seccondPerson}></Card>
                </div>

                <div className={style.textContainer}>
                    <h2>Direito Criminal</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptas illo iusto vel illum explicabo pariatur fugit ratione fugiat veniam veritatis quis ut, provident blanditiis harum! Mollitia, pariatur id. Sequi?
                    Autem explicabo distinctio itaque saepe voluptatem accusamus rem exercitationem consequuntur nesciunt quas, fugiat pariatur eligendi eaque veniam sed, nobis dolore eius! Totam aliquid dolorem assumenda quo quisquam, voluptate laborum minus?<br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsa omnis laudantium inventore? Et eum debitis cupiditate iusto beatae ipsum optio magni itaque fuga dicta ad numquam doloremque, voluptates suscipit!<br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, voluptate iusto! Aspernatur dolorum, illum officiis corporis molestias veritatis magnam vel temporibus nemo, porro, odio magni minus pariatur a? Reprehenderit, fugiat.</p>
                    <a href="https://wa.me/32987654321" target="_blank">Solicite um contato</a>
                </div>
            </Section>

            <Section heigth={"max-content"} id={style.contentContainer}>
                <div className={style.textContainer}>
                    <h2>Direito do Trabalho</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptas illo iusto vel illum explicabo pariatur fugit ratione fugiat veniam veritatis quis ut, provident blanditiis harum! Mollitia, pariatur id. Sequi?
                    Autem explicabo distinctio itaque saepe voluptatem accusamus rem exercitationem consequuntur nesciunt quas, fugiat pariatur eligendi eaque veniam sed, nobis dolore eius! Totam aliquid dolorem assumenda quo quisquam, voluptate laborum minus?<br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsa omnis laudantium inventore? Et eum debitis cupiditate iusto beatae ipsum optio magni itaque fuga dicta ad numquam doloremque, voluptates suscipit!<br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, voluptate iusto! Aspernatur dolorum, illum officiis corporis molestias veritatis magnam vel temporibus nemo, porro, odio magni minus pariatur a? Reprehenderit, fugiat.</p>
                    <a href="https://wa.me/32987654321" target="_blank">Solicite um contato</a>
                </div>

                <div className={style.imgContainer}>
                    <Card id={style.thirdPerson}></Card>
                </div>
            </Section>
        </div>
    )
}