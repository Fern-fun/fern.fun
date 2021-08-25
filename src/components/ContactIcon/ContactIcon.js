import "./ContactIcon.scss";

const ContactIcon = (props) => {
	return (
		<div className="contactIcon__wrapper">
			<a href={props.href}>
				<img src={props.src} alt="" className="contactIcon" />
			</a>
		</div>
	);
};

export default ContactIcon;
