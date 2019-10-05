import WorksTile from "./WorksTile";
import React from "react";
import imgVaterland from "../res/imgs/vaterland.jpg";
import imgHeimat from "../res/imgs/heimat.jpg";
import imgProtestSelfie from "../res/imgs/protest-selfie2.jpg";
import imgHardau from "../res/imgs/hardau.jpg";
import imgSpurenImSand from "../res/imgs/spuren-im-sand.jpg";
import imgCriticalWhiteness from "../res/imgs/critical-whiteness.jpg";
import imgSolange from "../res/imgs/solange.jpg";
import imgNegritude from "../res/imgs/negritude.jpg";

export default function AllWorkTiles(activeIndex, nofElements) {
  const elementsList = [
    {
      title: 'Vaterland',
      description: 'Audiofeature',
      image: imgVaterland,
      link: 'vaterland'
    },
    {
      title: 'Heimat schreiben',
      description: 'Essay über das Schreiben',
      image: imgHeimat,
      link: 'heimat-schreiben'
    },
    {
      title: 'Protest-Selfie',
      description: 'Artikel über Protest-Selfies in PROTEST-Publikation für das Museum für Gestaltung',
      image: imgProtestSelfie,
      link: 'protest-selfie'
    },
    {
      title: 'Schlimmstenfalls eine Utopie',
      description: 'Reportage über das Hardauquartier',
      image: imgHardau,
      link: 'schlimmstenfalls-eine-utopie'
    },
    {
      title: 'Spuren im Sand',
      description: 'Metareporter-Beitrag für REPORTAGEN',
      image: imgSpurenImSand,
      link: 'spuren-im-sand'
    },
    {
      title: 'Critical Whiteness: Looking at one\'s self through the eyes of others',
      description: 'Fachartikel in der Publikation "Im Welttheater" für das Zürcher Theater Spektakel',
      image: imgCriticalWhiteness,
      link: 'critical-whiteness'
    },
    {
      title: 'Solange – A Seat at the Table',
      description: 'Albumrezension für GDS.FM',
      image: imgSolange,
      link: 'solange'
    },
    {
      title: 'W wie Négritude',
      description: 'Fachartikel in der Publikation "Dada Afrika" für das Museum Rietberg',
      image: imgNegritude,
      link: 'w-wie-negritude'
    }
  ];

  return elementsList.map((e, i) => {
    let className = (i === elementsList.length - 1) || i <= activeIndex + 1 ? 'inFront' : 'inBack';

    return <WorksTile title={e.title}
                      activeIndex={activeIndex}
                      thisIndex={i}
                      nofElements={nofElements}
                      className={className}
                      description={e.description}
                      key={i}
                      image={e.image}
                      link={e.link}/>
  })
}