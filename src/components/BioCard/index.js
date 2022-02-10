import Avatar from "../../assets/profile.svg";
import GithubIcon from "../../assets/github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import TwitterIcon from "../../assets/twitter.svg";

function BioCard() {
  const socials = [
    {
      alt: "twitter",
      href: "https://twitter.com/Faissal_Hattou",
      icon: TwitterIcon,
    },
    {
      alt: "github",
      href: "https://github.com/Bakhaw",
      icon: GithubIcon,
    },
    {
      alt: "linkedin",
      href: "https://www.linkedin.com/in/faissal-hattou/",
      icon: LinkedinIcon,
    },
  ];

  return (
    <div className="BioCard">
      <img alt="profile" className="BioCard__avatar" src={Avatar} />

      <div className="BioCard__description">
        <h1 className="BioCard__description__title">Faïssal Hattou</h1>
        <h2 className="BioCard__description__subtitle">Web developer</h2>
        <h2 className="BioCard__description__subtitle">all around the world</h2>
      </div>

      <ul className="BioCard__socials">
        {socials.map((social, i) => (
          <li key={i}>
            <a href={social.href} target="_blank" rel="noreferrer">
              <img
                alt={social.alt}
                className="BioCard__socials__icon"
                src={social.icon}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BioCard;
