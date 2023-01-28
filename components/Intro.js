import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ title, description, image, buttons }) => {
	return (

		<div className="bg-secondary py-5 px-5">
			<div className="container">
				<div className=" row align-items-left">
					<div className="col-sm-3 text-left">
						<img
							className="img-fluid my-3 profile" width="250"
							height="250" src={image}
							alt="profile of sourv"
							style={{
								objectFit: 'cover!important',
								width: '250px',
								height: '250px',
								borderRadius: '50%!important'
							}}
						/>
					</div>
					<div className="col-sm-6 align-items-left">
						<h1 className="text-primary fw-bold display-3">Hello,</h1>
						<h1 className="text-primary fw-bold display-3">{title}</h1>

						<p className="px-sm-2">{description}</p>
						<div className="">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link}>
										<a className="btn btn-primary my-1 mx-3">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3">{value.title}</a>
									</Link>
							))}
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

export const About = ({ title, description }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-2">
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}