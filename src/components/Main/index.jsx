import style from "./style.module.css"
import Section from "../Section"
import first_img from "../../assets/first_img.jpg"
import seccond_img from "../../assets/seccond_img.jpg"
import third_img from "../../assets/third_img.jpg"
import Slider from "../Slider"
import AOS from 'aos/dist/aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
import Card from "../Card"
import { Link } from "react-router-dom"

export default function Main() {
    const [isChecked, setIsChecked] = useState("firstSlide")

    useEffect(() => {
        AOS.init()
    },[])

    return (
        <>
            <main className={style.main}>
                <Section height={"90vh"} id={style.slider}>
                    <Slider>
                        <div className={style.slides}>
                            <input type="radio" name="radio-btn" id={style.radio1} value={"firstSlide"} onChange={(e) => {setIsChecked(e.target.value)}}/>
                            <input type="radio" name="radio-btn" id={style.radio2} value={"seccondSlide"} onChange={(e) => {setIsChecked(e.target.value)}}/>
                            <input type="radio" name="radio-btn" id={style.radio3} value={"thirdSlide"} onChange={(e) => {setIsChecked(e.target.value)}}/>

                            <div className={`${style.slide} ${style.first}`}>
                                <img src={first_img} alt="" />
                                {isChecked === "firstSlide"
                                ?
                                <>
                                    <div className={style.textContainer1} data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-in-out">
                                        <h2 className={style.h21}>ADVOCACIA E <br />ASSESSORIA JURÍDICA</h2>
                                    </div>
                                    <div className={style.aContainer1} data-aos="fade-right" data-aos-delay="800" data-aos-easing="ease-in-out">
                                        <Link to="/lawyerLp/Atuacao" className={style.a1}>Conheça nossas áreas de Atuação</Link>
                                    </div>
                                </>
                                :
                                null
                                }
                                
                            </div>

                            <div className={`${style.slide}`}>
                                <img src={seccond_img} alt="" />
                                {isChecked === "seccondSlide"
                                ?
                                <>
                                    <div className={style.textContainer2} data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-in-out">
                                        <h2 className={style.h22}>Atendimento personalizado,<br />conectando-se de forma online, rápda e eficiente,<br />atuação em todo Brasil,<br />diretamente para você.</h2>
                                    </div>
                                    <div className={style.aContainer2} data-aos="fade-left" data-aos-delay="800" data-aos-easing="ease-in-out">
                                        <a className={style.a2} href="https://wa.me/32987654321" target="_blank">Agende uma reunião agora!</a>
                                    </div>
                                </>
                                :
                                null
                                }
                                
                            </div>

                            <div className={`${style.slide}`}>
                                <img src={third_img} alt="" />
                                <h2 className={style.h23}>Enfrentando desafios no ambiente corporativo?</h2>
                                <p className={style.p3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut inventore temporibus deserunt minima tenetur sit, molestias, amet dolor dolorem perferendis animi incidunt quibusdam nisi. Officia recusandae omnis deserunt maiores ad.<br /><br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, aperiam modi ullam totam exercitationem eaque enim earum voluptate odio asperiores voluptatum consequuntur, ex nemo voluptatibus porro ratione provident, veritatis tempore?</p>
                            </div>
                        </div>

                        <div className={style.navigationManual}>
                            {isChecked === "firstSlide"
                            ?
                            <label htmlFor={style.radio1} className={style.manualBtn} style={{backgroundColor: "#402B2B"}}></label>
                            :
                            <label htmlFor={style.radio1} className={style.manualBtn}></label>
                            }

                            {isChecked === "seccondSlide"
                            ?
                            <label htmlFor={style.radio2} className={style.manualBtn} style={{backgroundColor: "#402B2B"}}></label>
                            :
                            <label htmlFor={style.radio2} className={style.manualBtn}></label>
                            }

                            {isChecked === "thirdSlide"
                            ?
                            <label htmlFor={style.radio3} className={style.manualBtn} style={{backgroundColor: "#402B2B"}}></label>
                            :
                            <label htmlFor={style.radio3} className={style.manualBtn}></label>
                            }
                        </div>
                    </Slider>
                </Section>

                <Section heigth={"90vh"} id={style.mission}>
                    <Card id={style.missionCard}>
                        <h2>MISSÃO</h2>
                        <p>Prevenir problemas nas relações trabalhistas através dos serviços jurídicos e consequentemente transformar as relações empresa e empregado no mais saudável possível e com menor risco de problemas empresariais, sempre pautada na ética, comprometimento, transparência e qualidade dos nossos serviços prestados.</p>
                    </Card>

                    <Card id={style.missionCard}>
                        <h2>VISÃO</h2>
                        <p>Ser um escritório referência de soluções preventivas trabalhistas, empresariais e cível, buscando todas as ferramentas necessárias para a implementação do objetivo principal de prevenção, sempre com ética e transparência na resolução dos problemas jurídicos.</p>
                    </Card>

                    <Card id={style.missionCard}>
                        <h2>VALORES</h2>
                        <p>Ética. Respeito. Princípios. Qualidade. Humanização. Compromisso.</p>
                    </Card>
                </Section>

                <Section heigth={"60vh"} id={style.about}>
                    <h2>Sua Empresa Aqui</h2><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facere, atque a hic est blanditiis nostrum. Perferendis corporis ex placeat, ad exercitationem totam aliquid commodi nemo dicta corrupti praesentium? Voluptate.
                    Adipisci vel, ad molestiae consequuntur minus veniam earum odio nobis nemo voluptatum quia voluptates corporis quisquam minima mollitia deserunt. Consectetur libero distinctio at corporis, labore doloremque fugiat fuga qui repudiandae!<br /><br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quibusdam incidunt eos numquam modi deleniti iste harum nemo neque molestiae? Laborum mollitia facilis at nemo explicabo velit consectetur esse vitae?
                    Repudiandae exercitationem, alias unde, velit ad non provident suscipit aspernatur itaque accusantium deleniti porro maxime tenetur hic debitis harum voluptatibus optio. Rem quae corrupti dicta nostrum error explicabo dolorum ducimus!
                    Officia praesentium sed exercitationem et minus saepe explicabo quidem tempore, quibusdam, delectus consectetur aliquam numquam natus optio maxime velit minima recusandae voluptas sit accusamus autem in repellat veniam soluta? Obcaecati!
                    At voluptate nulla facilis voluptatum. Consectetur maiores cum consequuntur veritatis optio ut! Labore consequuntur corrupti doloribus ipsum laudantium harum, explicabo atque dolores accusantium perferendis ipsam totam repellendus eos voluptate iusto.<br /><br /><strong>Aqui, nossa paixão é advogar e entregar o melhor serviço prestado ao cliente.</strong></p>
                    <Link to="/lawyerLp/Escritorio">Conheça nossa Equipe.</Link>
                </Section>

                <Section heigth={"max-content"} id={style.clients}>
                    <h2>Nossos Clientes</h2>
                    <div className={style.clientsContainer}>
                        <div className={style.client}>
                            <img src="https://www.advocacialima.com.br/wp-content/uploads/sites/29/cliente-banco-200x150.jpg" alt="" />
                        </div>
                        <div className={style.client}>
                            <img src="https://www.advocacialima.com.br/wp-content/uploads/sites/29/cliente-escola-idiomas-200x150.jpg" alt="" />
                        </div>
                        <div className={style.client}>
                            <img src="https://www.advocacialima.com.br/wp-content/uploads/sites/29/c.agro-200x150.jpg" alt="" />
                        </div>
                        <div className={style.client}>
                            <img src="https://www.advocacialima.com.br/wp-content/uploads/sites/29/cliente-neo-constec-200x150.png" alt="" />
                        </div>
                    </div>
                </Section>
            </main>
        </>
    )
}