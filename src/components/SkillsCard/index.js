import CocaIcon from "../../assets/coca.svg";
import FlowerIcon from "../../assets/flower.svg";
import HelmetIcon from "../../assets/helmet.svg";
import NodeJsIcon from "../../assets/nodejs.svg";
import ShootingStarIcon from "../../assets/shooting-star.svg";

function SkillsCard() {
  const softSkills = [
    {
      alt: "flower",
      icon: FlowerIcon,
      text: "professionnel curieux",
    },
    {
      alt: "shooting star",
      icon: ShootingStarIcon,
      text: "force de proposition",
    },
    {
      alt: "football helmet",
      icon: HelmetIcon,
      text: "esprit d'équipe",
    },
    {
      alt: "cocktail",
      icon: CocaIcon,
      text: "et qui apporte toujours la rondelle de citron dans le Coca",
    },
  ];

  const techSkills = [
    {
      alt: "Node.js",
      icon: NodeJsIcon,
      text: "Node JS",
    },
    {
      alt: "Node.js",
      icon: NodeJsIcon,
      text: "Node JS",
    },
    {
      alt: "Node.js",
      icon: NodeJsIcon,
      text: "Node JS",
    },
    {
      alt: "Node.js",
      icon: NodeJsIcon,
      text: "Node JS",
    },
    {
      alt: "Node.js",
      icon: NodeJsIcon,
      text: "Node JS",
    },
    {
      alt: "Node.js",
      icon: NodeJsIcon,
      text: "Node JS",
    },
  ];

  return (
    <div className="SkillsCard">
      <ul className="SkillsCard__techSkills">
        {techSkills.map((skill, i) => (
          <li key={i}>
            <img alt={skill.alt} src={skill.icon} />
            <span>{skill.text}</span>
          </li>
        ))}
      </ul>

      <div className="SkillsCard__content">
        <h2 className="SkillsCard__title">« Focus on improve 🚀 »</h2>
        <p className="SkillsCard__description">
          Grand passionné du code et du JavaScript, en relation sérieuse avec
          React depuis 4 ans sans que la flamme ne se soit jamais éteinte.
          <br />
          <br />
          Parti un peu plus tard que les autres sur la ligne de départ, cela a
          forgé mon autonomie et m'a donné les clés pour apprendre seul,
          efficacement et rapidement.
        </p>

        <div>
          <h3 className="SkillsCard__softSkills-title">Ce qu'on dit de moi</h3>
          <ul className="SkillsCard__softSkills">
            {softSkills.map((skill, i) => (
              <li key={i}>
                <img alt={skill.alt} src={skill.icon} />
                <span>{skill.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
