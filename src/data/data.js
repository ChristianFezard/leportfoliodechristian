import booki from '../images/booki.JPG'
import ohmyfood from '../images/ohmyfood.JPG'
import gameon from '../images/gameon.JPG'
import fisheye from '../images/fisheye.JPG'
import kasa from '../images/kasa.JPG'
import sportsee from '../images/sportsee.JPG'

export const slide = [
    { id: 1, imageUrl: booki, caption: 'image booki' },
    { id: 2, imageUrl: ohmyfood, caption: 'image ohmyfood' },
    { id: 3, imageUrl: gameon, caption: 'image gameOn' },
    { id: 4, imageUrl: fisheye, caption: 'image fisheye' },
    { id: 5, imageUrl: kasa, caption: 'image kasa' },
    { id: 6, imageUrl: sportsee, caption: 'image sportsee' }
]

export const data = [
    {
        id: 1,
        title: "Booki",
        image: booki,
        language: [
            "HTML",
            "CSS"
        ],
        description: "Booki est un site vitrine de location d'appartements. Ce sont mes premiers pas en HTML et CSS.",
        link: "https://christianfezard.github.io/booki/"
    },
    {
        id: 2,
        title: "OhMyFood",
        image: ohmyfood,
        language: [
            "HTML",
            "CSS",
            "SASS"
        ],
        description: "Le site OhMyFood est un site vitrine. OhMyFood est une jeune start-up cherchant a s'imposer dans le monde de la restauration. Le site propose la selection de 4 restaurants et leur menu. il comporte aussi l'utilisation de Sass et quelques animations comme des transitions et un load spinner.",
        link: "https://christianfezard.github.io/Oh_My_Food/"
    },
    {
        id: 3,
        title: "GameOn",
        image: gameon,
        language: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        description: "GameOn est un site qui permet aux joueurs de jeux video de pouvoir s'inscrire a des tournois. Premiers pas dans le monde du JavaScript avec lequel j'ai codé la modale d'inscription.",
        link: "https://christianfezard.github.io/gameon/"
    },
    {
        id: 4,
        title: "FishEye",
        image: fisheye,
        language: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        description: "Fisheye est un site qui permet de visualiser un portfolio de photographies. Apprentissage de la manipulation du DOM, il permet de selectionner un profil de photographe, de voir ses photos/vidéos et de pouvoir les faire défiler via un caroussel.",
        link: "https://christianfezard.github.io/Fisheye/"
    },
    {
        id: 5,
        title: "Kasa",
        image: kasa,
        language: [
            "HTML",
            "CSS",
            "ReactJS"
        ],
        description: "Kasa est un site de location d'appartements. Premier site codé avec ReactJs.",
        link: "https://kasa-kizt.onrender.com/"
    },
    {
        id: 6,
        title: "SportSee",
        image: sportsee,
        language: [
            "HTML",
            "CSS",
            "ReactJS"
        ],
        description: "SprortSee est un dashboard de performances sportives. Codé en ReactJs, il comporte de nombreux graphiques mis en place avec des données issues d'une API, et Recharts. Il dispose aussi de fichiers mockés.",
        link: "https://sportsee-ik5h.onrender.com"
    }
]