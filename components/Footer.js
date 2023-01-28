import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="">
					<p>{description}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1 me-3">
									<FontAwesomeIcon className="icon-style-secondary mx-1" icon={value.icon} color="" /> 
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary my-1 me-3">
										<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} /> 
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			<div className="container text-muted">
				<small>&copy; 2023 {" "}
					<Link href="https://github.com/Esarve">
						<a>Sourv Das</a>
					</Link>
					. Inspired From {" "}
					<Link href="https://github.com/hashirshoaeb/portfolio/">
						<a>hashirshoaeb</a>
					</Link>
					{" "} 's portfolio repo
				</small>
			</div>
		</footer>
	);
}