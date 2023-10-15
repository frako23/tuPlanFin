import { Link } from "react-router-dom";
import "../styles/style.css"

export const Navbar = () => {
	return (
		<div className="header_navbar">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<nav className="navbar navbar-expand-lg">
						<a className="navbar-brand" href="index.html">
							<img src="" alt="Logo"/>
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="toggler-icon"></span>
							<span className="toggler-icon"></span>
							<span className="toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
							<ul id="nav" className="navbar-nav ml-auto">
								<li className="nav-item active">
									<a className="page-scroll" href="#home">Inicio</a>
								</li>
								<li className="nav-item">
									<a className="page-scroll" href="#about">Acerca de mi</a>
								</li>
								<li className="nav-item">
									<a className="page-scroll" href="#services">Productos Financieros</a>
								</li>
								{/* <li className="nav-item">
									<a className="page-scroll" href="#case">Cases</a>
								</li>
								<li className="nav-item">
									<a className="page-scroll" href="#growth">Growth</a>
								</li>
								<li className="nav-item">
									<a className="page-scroll" href="#team">Team</a>
								</li> */}
								<li className="nav-item">
									<a className="page-scroll" href="#blog">Blog</a>
								</li>
							</ul>
						</div> 
						
						<div className="navbar-btn d-none d-sm-inline-block">
							<a className="main-btn" data-scroll-nav="0" href="#services">Agenda una cita</a>
						</div>
					</nav>
				</div>
			</div>
		</div> 
	</div> 
	);
};