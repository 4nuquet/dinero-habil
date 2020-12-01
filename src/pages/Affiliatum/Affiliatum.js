import React, { useEffect, useState } from 'react'
import './Theme.css';
import './Affiliatum.scss';
import CountDown from '../../components/CountDown/CountDown';
import Modal from '../../components/Modal/Modal';
import Webinar from './Webinar';

function Affiliatum() {

	const [modal, setModal] = useState(true);
	const [showVideo, setShowVideo] = useState(false)
	const widthVideo = window.screen.width;
	const resultImages = [
		{ pos: 1, url: 'https://i1.wp.com/affiliatum.com/wp-content/uploads/2019/06/Affiliatum-Resultados-Leonardo-Penaloza.jpg' },
		{ pos: 2, url: 'https://i1.wp.com/affiliatum.com/wp-content/uploads/2020/02/Affiliatum-Resultados-Sneider-Martinez.jpg' },
		{ pos: 3, url: 'https://i1.wp.com/affiliatum.com/wp-content/uploads/2020/02/Affiliatum-Resultados-Diego-Vera-2.jpg' },
		{ pos: 4, url: 'https://i2.wp.com/affiliatum.com/wp-content/uploads/2020/02/Affiliatum-Resultados-Alejandro-Piedrabuena.jpg' },
		{ pos: 5, url: 'https://i0.wp.com/affiliatum.com/wp-content/uploads/2019/06/Affiliatum-Resultados-Jhon-Stik.jpg' },
		{ pos: 6, url: 'https://i1.wp.com/affiliatum.com/wp-content/uploads/2020/02/Affiliatum-Resultados-Daniela-Rache.jpg' }]

	const moreResults = [
		{ pos: 1, url: 'https://i0.wp.com/affiliatum.com/wp-content/uploads/2019/07/Affiliatum-Resultados-Brayan-Jmz-2.jpg' },
		{ pos: 2, url: 'https://i2.wp.com/affiliatum.com/wp-content/uploads/2020/02/Affiliatum-Resultados-Ana-Quiroz-2.jpg' },
		{ pos: 3, url: 'https://i2.wp.com/affiliatum.com/wp-content/uploads/2020/02/Affiliatum-Resultados-Iris-Salazar.jpg' },
		{ pos: 4, url: 'https://i1.wp.com/affiliatum.com/wp-content/uploads/2020/02/Affiliatum-Resultados-Agustin-Alarcon.jpg' },
		{ pos: 5, url: 'https://i2.wp.com/affiliatum.com/wp-content/uploads/2020/02/Affiliatum-Resultados-Juan-Manuel.jpg' },
		{ pos: 6, url: 'https://i2.wp.com/affiliatum.com/wp-content/uploads/2019/06/Affiliatum-Resultados-Quisling-Valenzuela.jpeg' }];

		const saveAction = () => {
			localStorage.setItem('#register', true)
			setModal(false)
		}

	useEffect(() => {
		const loadData = () => {
			const value = localStorage.getItem('#register');
			if (value === null) {
				setModal(true)
			} else {
				setModal(false)
			}
		  }
		  loadData();
	})

	if (modal) {
		return <Modal visible={modal} setModal={saveAction} />
	}
	return (
		<>

			<div className="header">
				<div className="branding">
					<div className="container-fluid position-relative py-3">
						<div className="logo-wrapper">
							<div className="site-logo">
								<a className="navbar-brand" href="index.html">
									<img className="logo-icon mr-2 logo-icon-custom" src="logo.svg" alt="DineroHabil" />
									<span className="ml-2 logo-text">Educacion Habil</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="hero-section">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6 col-sm-12 pt-3 mb-6 align-self-center">
							<div className="promo pr-md-3 pr-lg-5">
								<h3 className="mb-3">
									Cómo Generé Mis Primeros <span className='text-primary '>&#36;700 Dólares</span> Online Haciendo Imágenes y Videos de 15 segundos
					            </h3>
								<span className=" mb-4">
									Video muestra el <strong> MÉTODO EXACTO</strong> y como tu puedes empezar <strong>YA MISMO</strong>
								</span>
							</div>
						</div>
						<div className="col-12 col-md-5 col-sm-12 align-self-center mb-2">
							{showVideo ? (
								<div className="book-cover-holder mb-4"><Webinar width={widthVideo} /></div>) : (
									<>
										<div className="book-cover-holder mt-5">
											<img className="img-fluid book-cover" src="https://i2.wp.com/s3-us-east-2.amazonaws.com/media-files-page/wp-content/uploads/2018/08/26184147/Video-Presentacion-Lifenvy.png" alt="EducacionHabil" />
											<div className="book-badge d-inline-block shadow bg-danger animate__animated animate__heartBeat animate__slower animate__infinite infinite">
												Oferta<br />Limitada</div>
										</div>
										<div className="cta-holder mt-4 text-center">
											<button className="btn btn-primary btn-block btn-cta shadow animate__animated animate__tada animate__slower animate__infinite infinite" onClick={() => setShowVideo(true)}><h5 >QUIERO LA EXTRATEGIA EXACTA</h5></button>
										</div>
									</>)}

						</div>
					</div>
				</div>
			</section>

			<section id="benefits-section" className="benefits-section theme-bg-light-gradient">
				<div className="container py-5">
					<h2 className="section-heading text-center mb-3">Esto es lo que aprenderás Durante la Presentación</h2>
					<div className="row text-center">
						<div className="item col-12 col-md-6 col-lg-4">
							<div className="item-inner p-3 p-lg-4">
								<div className="item-header mb-3">
									<div className="item-icon"><i className="fas fa-brain"></i></div>
									<h3 className=" font-weight-bold">PILARES</h3>
								</div>
								<div className="item-desc">
									Entender cuáles son los <strong>3 PILARES</strong> para construir un negocio digital exitoso comercializando a través de internet productos creados por otras empresas o emprendedores
					    </div>
							</div>
						</div>
						<div className="item col-12 col-md-6 col-lg-4">
							<div className="item-inner p-3 p-lg-4">
								<div className="item-header mb-3">
									<div className="item-icon"><i className="fas fa-trophy"></i></div>
									<h3 className="">CONTENIDO GANADOR</h3>
								</div>
								<div className="item-desc">
									Donde encontrar <strong>PRODUCTOS GANADORES</strong> muy fáciles de vender y de altísima calidad, con <strong>ALTAS COMISIONES</strong> para ti por cada venta
					    </div>
							</div>
						</div>
						<div className="item col-12 col-md-6 col-lg-4">
							<div className="item-inner p-3 p-lg-4">
								<div className="item-header mb-3">
									<div className="item-icon"><i className="fab fa-rocketchat"></i></div>
									<h3 className="">El COMO</h3>
								</div>
								<div className="item-desc">
									Cómo presentar tu producto ganador a millones de personas usando <strong>IMAGENES</strong> y VIDEOS DE 15 SEGUNDOS
					    </div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="author-section" className="author-section section bg-danger animate__animated animate__bounce animate__slower animate__infinite infinite">
				<div className="container d-flex flex-row align-items-center py-3 date-limit">
					<div className="author-profile text-center">
						<img className="author-pic" src="assets/images/date-limit.png" />
					</div>
					<h5 className=" text-center text-white mb-3">
						A PARTIR  DEL JUEVES 3 DE DICIEMBRE A LAS 11:59PM LAS INSCRIPCIONES QUEDAN <strong className='text-warning'>OFICIALMENTE CERRADAS</strong></h5>
				</div>
			</section>

			<section id="content-section" className="content-section">
				<div className="container py-5">
					<h2 className="section-heading text-center mb-3">Estos también pueden ser TUS RESULTADOS</h2>
					<h5 className=" text-center mb-4">Miles de Personas Ya Tomaron Acción y Tu 🤔 que Esperas?</h5>
					<div className='d-flex justify-content-around'>
						<div className='text-warning arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
							<i className="fas fa-angle-double-down arrow-cta"></i>
						</div>
						<div className='text-warning arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
							<i className="fas fa-angle-double-down arrow-cta"></i>
						</div>
						<div className='text-warning arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
							<i className="fas fa-angle-double-down arrow-cta"></i>
						</div>
						<div className='text-warning arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
							<i className="fas fa-angle-double-down arrow-cta"></i>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-12 col-md-6 mb-5">
							<div className="hero-quotes mt-5">
								<div id="quotes-carousel" className="quotes-carousel carousel slide mb-5" data-ride="carousel" data-interval="5000">
									<ol className="carousel-indicators">
										<li data-target="#quotes-carousel" data-slide-to="0" className="active"></li>
										{resultImages.map(item => (<li data-target="#quotes-carousel" data-slide-to={'#' + item.pos} ></li>))}
									</ol>
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img className="img-fluid book-cover" src='https://i1.wp.com/affiliatum.com/wp-content/uploads/2020/02/Affiliatum-Resultados-David-Henao.jpg' />
										</div>
										{resultImages.map(item => (<div className="carousel-item ">
											<img className="img-fluid book-cover" src={item.url} />
										</div>))}
									</div>

								</div>
							</div>
						</div>
					</div>
					<div className="cta-holder mt-2">
						<p className='text-center'>Estas son algunas publicaciones de los miembros del equipo en nuestro Grupo Privado🤫 de Facebook...</p>
						<a className="btn btn-primary btn-block btn-cta shadow" href="#purchase-section"><h5>💸 YO TAMBIÉN QUIERO RESULTADOS 💸</h5></a>
					</div>
				</div>

				<div className="container py-5">
					<h2 className="section-heading text-center mb-3">¿Ahora si estás preparado para unirte a la Comunidad?</h2>
					<h5 className=" text-center mb-4">¿O quieres que sigamos? 🚀 ¡Lo que tenemos son RESULTADOS para mostrar!</h5>
					<div className='d-flex justify-content-around'>
						<div className='text-warning arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
							<i className="fas fa-angle-double-down arrow-cta"></i>
						</div>
						<div className='text-warning arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
							<i className="fas fa-angle-double-down arrow-cta"></i>
						</div>
						<div className='text-warning arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
							<i className="fas fa-angle-double-down arrow-cta"></i>
						</div>
						<div className='text-warning arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
							<i className="fas fa-angle-double-down arrow-cta"></i>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-12 col-md-6 mb-5">
							<div className="hero-quotes mt-5">
								<div id="more-carousel" className="quotes-carousel carousel slide carousel-fade mb-5" data-ride="carousel" data-interval="5000">
									<ol className="carousel-indicators">
										<li data-target="#more-carousel" data-slide-to="0" className="active"></li>
										{moreResults.map(item => (
											<li data-target="#more-carousel" data-slide-to={'#' + item.pos}></li>
										))}
									</ol>
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img className="img-fluid book-cover" src="https://i1.wp.com/affiliatum.com/wp-content/uploads/2020/02/Affiliatum-Resultados-Daniela-Rache.jpg" />
										</div>
										{moreResults.map(item => (
											<div className="carousel-item">
												<img className="img-fluid book-cover" src={item.url} />
											</div>
										))}
									</div>


								</div>
							</div>
						</div>
					</div>
					<div className="cta-holder mt-2">
						<p className='text-center'>Bueno, ya si va siendo hora de que te decidas...🧠 ¡Es AHORA o Nunca! 🏁</p>
						<a className="btn btn-primary btn-block btn-cta shadow" href='#purchase-section' > <h5>🤝QUIERO ENTRAR AL EQUIPO🤝</h5></a>
					</div>
				</div>
			</section>

			<section id="content-section" className="content-section">
				<div className="container">
					<div className="single-col-max mx-auto">
						<div className='d-flex justify-content-around'>
							<div className='text-success arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
								<i className="fas fa-angle-double-down arrow-cta"></i>
							</div>
							<div className='text-success arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
								<i className="fas fa-angle-double-down arrow-cta"></i>
							</div>
							<div className='text-success arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
								<i className="fas fa-angle-double-down arrow-cta"></i>
							</div>
							<div className='text-success arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
								<i className="fas fa-angle-double-down arrow-cta"></i>
							</div>
						</div>
						<h2 className="section-heading text-center mb-4">Accede a un EXCLUSIVO ENTRENAMIENTO</h2>

						<h5 className='mb-3'>Te daremos las <span className='text-primary'> BASES FUNDAMENTALES, HERRAMIENTAS</span> y te enseñaremos el CAMINO para que puedas lograr tus primeros <span className='text-primary'> &#36; 700 Dólares o MÁS</span> </h5>
						<div id="author-section" className="author-section section bg-danger animate__animated animate__bounce animate__slower animate__infinite infinite">
							<div className="container d-flex flex-column text-center py-3 date-limit">
								<h5 className=" text-center text-white">
									LOS CUPOS ESTAN POR AGOTARSE </h5>
								<CountDown />
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-md-6">
								<div className="figure-holder mb-5">
									<img className="img-fluid" src="assets/images/product-1.png" />
								</div>
							</div>
							<div className="col-12 col-md-6 mb-5">

								<div className="key-points mb-4 text-center">
									<ul className="key-points-list list-unstyled mb-4 mx-auto d-inline-block text-left">
										<li><i className="fas fa-coins mr-2"></i>Te Mostraremos los pilares fundamentales del Marketing de Afiliados desde 0</li>
										<li><i className="fas fa-coins mr-2"></i>Aprenderás Implementar esta Efectiva Metodología paso a paso</li>
										<li><i className="fas fa-coins mr-2"></i>Lograrás buscar tus clientes ideales para presentarles una oferta irresistible</li>
										<li><i className="fas fa-coins mr-2"></i>Te mostraremos como escoger productos ganadores con altisima comision por venta</li>
										<li><i className="fas fa-coins mr-2"></i>Implementaremos todo el proceso para que logres tu primera venta</li>
										<li><i className="fas fa-coins mr-2"></i>Tendrás Acceso a las guias que estan ayudando a miles de personas a lograr a concretar sus comisiones</li>
										<li><i className="fas fa-coins mr-2"></i>Estudiaremos casos de Exitosos de esta metodología y cómo lograron altas conversiones </li>
									</ul>
									<div className="text-center animate__animated animate__bounce animate__slower animate__infinite infinite">
										<a className='btn btn-primary btn-block btn-cta shadow' href="#purchase-section"><h5>QUIERO MI ENTRENAMIENTO</h5></a>

									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='benefits-section theme-bg-light-gradient py-3'>
				<h1 className="section-heading text-center my-3 animate__animated animate__heartBeat animate__slower animate__infinite infinite">❗️ Eso no es todo ❗️</h1>
				<h5 className=" text-center mb-4">También obtendrás todos estos bonos de <span className='text-primary'>REGALO EXCLUSIVO</span></h5>
			</section>

			<section id="author-section" className="author-section section py-4">
				<div className="container d-flex flex-row align-items-center py-3 date-limit">
					<div className="figure-holder">
						<img className="img-fluid" src="assets/images/community.jpg" />
					</div>
					<div>
						<h2 className="section-heading text-center mb-3">
							COMUNIDAD</h2>
						<span className='text-dark text-center'>Una gran y activa hermandad que están dispuestos a ayudarte🤝, motivarte y darte ideas para lograr tus comisiones, entregandote Altísimo contenido de valor basado en experiencias exitosas 💎</span>
						<h5 className='text-success text-right'>&#36; 124.97 USD/mes</h5>
					</div>
				</div>
				<div className='d-flex justify-content-around'>
					<div className='text-warning arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
						<i className="fas fa-angle-double-down arrow-cta"></i>
					</div>
					<div className='text-danger arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
						<i className="fas fa-gift arrow-cta"></i>
					</div>
					<div className='text-danger arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
						<i className="fas fa-gift arrow-cta"></i>
					</div>
					<div className='text-warning arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
						<i className="fas fa-angle-double-down arrow-cta"></i>
					</div>
				</div>
				<div className="container d-flex flex-row align-items-center py-3 date-limit">
					<div className="figure-holder">
						<img className="img-fluid" src="assets/images/resources.jpg" />
					</div>
					<div>
						<h5 className="section-heading text-center mb-3">
							PIEZAS ARTÍSTICAS</h5>
						<span className='text-dark text-center'>Material audiovisual de gran calidad pensado y diseñado para ofrecer tu producto ganador transformando 🚀 la vida de tus clientes </span>
						<h5 className='text-success text-right'>&#36; 175 USD/mes</h5>
					</div>
				</div>
				<div className='d-flex justify-content-around'>
					<div className='text-warning arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
						<i className="fas fa-angle-double-down arrow-cta"></i>
					</div>
					<div className='text-danger arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
						<i className="fas fa-gift arrow-cta"></i>
					</div>
					<div className='text-danger arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
						<i className="fas fa-gift arrow-cta"></i>
					</div>
					<div className='text-warning arrow-cta animate__animated animate__tada animate__slow animate__infinite infinite'>
						<i className="fas fa-angle-double-down arrow-cta"></i>
					</div>
				</div>
				<div className="container d-flex flex-row align-items-center py-3 date-limit">
					<div className="figure-holder">
						<img className="img-fluid" src="assets/images/support.jpg" />
					</div>
					<div>
						<h5 className="section-heading text-center mb-3">
							SOPORTE FIEL</h5>
						<span className='text-dark text-center'>Un eficiente y Rápido soporte técnico 24/7 disponible a ayudarte 😊 con cualquier duda e inconveniente que puedas tener con respecto al contenido del Entrenamiento y contenido que debes usar 📚</span>
						<h5 className='text-success text-right'>&#36; 99 USD/mes</h5>
					</div>
				</div>
			</section>

			<section id="purchase-section" className="author-section section theme-bg-light-gradient">
				<div className='animate__animated animate__bounce animate__slower animate__infinite infinite'>
					<div className="container-fluid bg-danger">
						<h1 className="section-heading text-center text-white p-3 mb-0">
							ULTIMOS CUPOS PARA TRASNFORMAR TU VIDA </h1>
					</div>
					<CountDown />
				</div>
				<div className="container-fluid d-flex flex-column py-4 bg-black">
					<div>
						<h2 className="text-center mb-3 text-white">
							PRECIO NORMAL <br /><s className='text-danger'>&#36; 398,27USD</s></h2>
					</div>
					<div className=''>
						<h2 className='text-center text-white pt-3'>PRECIO SOLO POR HOY Y HASTA AGOTAR INSCRIPCIONES</h2>
						<h1 className="text-offer text-center mb-3 text-success animate__animated animate__heartBeat animate__slower animate__infinite infinite">&#36; 99USD</h1>
					</div>
					<div className="cta-holder mt-4">
						<div className='d-flex justify-content-around'>
							<div className='text-warning arrow-cta'>
								<i className="fas fa-angle-double-down arrow-cta"></i>
							</div>
							<div className='text-warning arrow-cta'>
								<i className="fas fa-angle-double-down arrow-cta"></i>
							</div>
							<div className='text-warning arrow-cta'>
								<i className="fas fa-angle-double-down arrow-cta"></i>
							</div>
							<div className='text-warning arrow-cta'>
								<i className="fas fa-angle-double-down arrow-cta"></i>
							</div>
						</div>
						<a className="btn btn-primary btn-block btn-cta shadow animate__animated animate__tada animate__slower animate__infinite infinite" href='https://go.hotmart.com/N29664873G?ap=e178'><h4 className='text-white'>QUIERO MI LUGAR YA!!!</h4></a>
						<div className='text-center w-75 mx-auto'>
							<img className="img-fluid" src="assets/images/cards.png" alt="EducacionHabil" />			
						</div>
					</div>
				</div>
			</section>

			<section id="author-section" className="author-section section bg-black py-3">

				<div className="container d-flex flex-column date-limit py-3">
					<h2 className="section-heading text-center text-white mb-4">Adicional e incluido en el valor tendrás acceso a uno de los cursos <span className='text-primary'>MÁS ESPERADOS</span> que llevarán tu negocio digital al <span className='text-primary'>SIGUIENTE NIVEL</span></h2>
					<div className="author-profile text-right">
						<img className="img-fluid" src="assets/images/add-1.png" alt="BeMaste" />
					</div>
					<h2 className="text-center mb-3"><s className='text-danger'>&#36; 497USD</s></h2>
					<h1 className="section-headingtext-center text-white text-center mb-3 animate__animated animate__bounce animate__slower animate__infinite infinite">
						<a className='text-white' href='https://bemaster.com/oferta/'>AFILIADO MASTER</a>
					</h1>
				</div>

				<div className="container d-flex flex-column date-limit py-3">
					<h2 className="section-heading text-center text-white mb-4">¿Qué pasa si el Programa No Cumple con Tus expectativas?</h2>
					<div className="author-profile text-center animate__animated animate__tada animate__slower animate__infinite infinite">
						<img className="img-fluid" src="https://cdn.shopify.com/s/files/1/2176/9663/files/7D75974A-5648-4484-9C57-EE8455C1962E_large.png?v=1529904502" />
					</div>
					<h5 className="section-headingtext-center text-white mb-3">
						¡No te preocupes! Contamos con Una Garantía De Calidad de ⏰ 7 DIAS ⏰, Donde si el Programa es lo que tú creías o buscabas te devolvemos el 100 % DE TU DINERO  SIN HACER PREGUNTAS.</h5>
				</div>
				<div className='separator my-5'></div>
				<div className="container d-flex flex-column date-limit py-3">
					<p>DESCARGOS DE RESPONSABILIDAD IMPORTANTES: Este sitio no es parte del sitio web de Facebook o Facebook, Inc. Además, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.</p>
					<br />
					<p>DESCARGO DE RESPONSABILIDAD: Los resultados (incluidos los resultados de negociación) mencionados anteriormente son mis resultados personales. Por favor, comprenda que mis resultados no son típicos, no estoy implicando que los duplicará (o hará cualquier cosa por ese asunto). Tengo el beneficio de haber pasado por muchos entrenamientos, mentores, pruebas y errores durante años, y tengo un seguimiento establecido y la historia como resultado. La persona promedio que compra cualquier información de "cómo hacerlo" obtiene poco o ningún resultado. Estoy usando estas referencias solo para fines de ejemplo. Sus resultados variarán y dependerán de muchos factores... incluidos, entre otros, sus antecedentes, experiencia y ética laboral. Todos los negocios conllevan riesgos y esfuerzos y acciones masivas y consistentes. Si no está dispuesto a aceptar eso, NO OBTENGA ESTE CURSO. Al enviar su dirección de correo electrónico y número de teléfono en este sitio web, usted está autorizando a nuestra empresa a enviarle mensajes informativos y promocionales por correo electrónico, llamadas telefónicas y mensajes de texto. Todos los ingresos y representaciones de ingresos son solo declaraciones aspiracionales de su potencial de ganancias. El éxito de Privilege Academy, los testimonios y otros ejemplos utilizados son resultados excepcionales y no típicos, y no pretenden ser ni son garantía de que usted u otros logren los mismos resultados. Los resultados individuales siempre variarán y los tuyos dependerán por completo de tu capacidad individual, ética de trabajo, habilidades y experiencia comercial, nivel de motivación, diligencia al aplicar los programas de Privilege Academy, la economía, los riesgos normales e imprevistos de hacer negocios y otros factores. Los programas de Privilege Academy no son responsables de sus acciones. Usted es el único responsable de sus propios movimientos y decisiones, y la evaluación y el uso de nuestros productos y servicios se deben basar en su propia diligencia debida. Usted acepta que los Programas de Privilege Academy no son responsables ante usted de ninguna manera por sus resultados en el uso de nuestros productos y servicios.</p>
				</div>

			</section>
		</>
	)
}

export default Affiliatum
