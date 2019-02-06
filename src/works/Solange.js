import * as React from "react";
import { Image } from "react-bootstrap";
import img from '../res/imgs/solange.jpg'

export default class Solange extends React.Component {
  //todo: remove me after fixing scroll to wrong position
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='WorksPage'>
        <h1>Solange - A Seat at a Table</h1>
        <p className='no-text-intent'>
          Text erschienen in&nbsp;
          <a href={ 'http://gds.fm/news/studio-gds-praesentiert-solange-a-seat-at-the-table' }
             target='_blank' rel='noreferrer noopener'>GDS.FM</a>
          , 15.11.16
        </p>

        <Image src={ img }/>

        <h3>Nimm Platz, wir müssen reden.</h3>
        <p>Das Album A Seat At The Table von Solange Knowles ist eine Konversation über das Leben der schwarzen
          Bevölkerung in den USA. Es erscheint in einem tragischem Jahr, in dem einflussreiche Menschen rassistische
          Mobs wieder salonfähig machen und in dem diese Wortführer ihre Worte in Taten umsetzen – in einem von
          schwarzen Sklaven gemachten Weissen Haus. In einem Jahr, in dem Polizeigewalt und Racial Profiling beweisen,
          dass das Konzept der Gleichstellung eben nur ein Konzept bleibt. Aber auch in einem Jahr, in dem A Seat At The
          Table nach den Titeln Lemonade (Beyoncé) und Freetown Sound (Blood Orange) das dritte wirksame Album sein
          kann, das die Black Lives Matter-Bewegung befeuert. Es sei „ein Projekt über Identität, Stärkung,
          Unabhängigkeit, Leid und Heilung“, sagte Solange zur Veröffentlichung Ende September.</p>
        <p>Geschrieben hat Solange ihr drittes Album in New Iberia, Louisiana, dem Heimatort ihrer Grosseltern bis ein
          Molotowcocktail in ihr Haus geworfen wurde. Dementsprechend ist ein Werk entstanden, in dem auch Frustration
          und Wut zu spüren ist. Ein Indiz dafür, dass bei der Künstlerin eine grosse Entwicklung stattgefunden hat: Das
          letzte, was die RnB-Welt von Solange gehört hat, war die EP True (2012), eine Sammlung von leichten
          Synth-Pop-Songs mit 80er Jahre-Referenzen, die sich an der Grenze zum oberflächlichen Pop bewegten. 2013
          gründete sie ihr eigenes Label, Saint Records, unter dem sie eine Gruppe von RnB-Visionär*innen versammelt,
          welche die Grenzen des Genres austesten. Damit traf sie den Nerv der Zeit: In der Zwischenzeit ist der
          Mainstream-RnB der frühen 2000er Jahre erwachsen geworden und hat sich vom seichten Image des Lovesong-Genres
          voller rückständigen Rollenbildern gelöst. Das Genre hat sich neudefiniert als eine smartere, minimalistische
          Dosierung von dem, was es einmal war. Es reflektiert zeitgenössische Strömungen, ist avantgardistisch und fast
          immer ein politischer Kommentar. Spätestens seit Dev Hynes’ – bekannt als Blood Orange – Album Cupid Deluxe
          (2013) ist RnB wieder auf dem Radar der Popmusik. Musikalisch reiht sich A Seat At The Table hier ein.</p>

        <h3>Die leise, bestimmte Stimme</h3>
        <p>Die 21 Songs sind persönliche Erzählungen mit einfachen Statements, die auch immer eine Mitteilung an ein
          Gegenüber sind. So ist beispielsweise „Don’t You Wait“ eine Aufforderung, sich von negativen Einflüssen zu
          trennen. Solanges Stimme ist dabei federnd, zart, schmiegsam und immer nur ein Angebot. Durch diese Subtilität
          in der Stimme gewinnen die Texte an Gewicht. Im Vergleich zu ihrer Schwester Beyoncé verzichtet Solange auf
          ein dominantes „all eyes on me“-Konzept und ist dabei mindestens so bestimmt. Das Album gewinnt an Validität
          durch seine Gäste: Acht Interludes in Form von aufgezeichneten Tischgesprächen mit Gästen wie Vater Matthew
          Knowles, der in einem Monolog über seine Jugend als erster Schwarzer in einer Südstaaten-Schule spricht. Aber
          auch ausserhalb dieser Aufzeichnungen hat Solange mit den richtigen Leuten koaliert: Zu ihren Duettpartnern
          gehören Sampha, Kelela und Kelly Rowland (alle Saint Records), produziert wurde das Album im Kollektiv von
          Raphael Saadiq, Dave Longstreth, und Adam Bainbridge.</p>
        <p>Das Album wird in seinem Verlauf immer eleganter und exquisiter, Solanges Stimme erinnert an vielen Stellen
          an Minnie Riperton. Solange, die sich 2014 noch mit ihrem Schwager Jay-Z im Lift prügelte (inklusive Video,
          das um die Welt ging) kann sich vom Stereotyp der schwarzen wütenden Frau lösen, in dem sie ihre Wut
          kanalisiert. Im Song „Mad“ reflektiert sie ihren Umgang mit Ärger und Konflikt und dann kommt es zum Bruch,
          der das sonst so glaubwürdige und ehrliche Album ein wenig zerstört: Lil Wayne rappt darüber, dass er mit
          seinem Ruhm nicht umgehen kann und dass er am Tag seines Selbstmordversuchs ebenfalls wütend war.</p>

        <h3>Kodierte Sprache, kodierte Bilder</h3>
        <p>Das institutionelle Rassismusproblem und Polizeigewalt der USA werden in A Seat At The Table nicht direkt
          angesprochen. Die Missstände werden aus einer individuellen Perspektive beleuchtet: Es ist eine Analyse über
          das Geflecht von Gesten und Haltungen gegenüber einer schwarzen Frau in der westlichen Welt. Der Song “Don’t
          Touch My Hair“ thematisiert in diesem Fall nicht nur den Umgang mit dem „Fremden“ oder die Vormacht weisser
          Schönheitsideale. Es geht um den Kampf für körperliche Autonomie und um die Frage, wie man in einem schwarzen
          Köper leben soll. Dabei schlägt Solange einen ähnlich verletzten, anklagenden Ton an wie Ta-Nehisi Coates. Der
          Autor von Between The World And Me – zurzeit eine der führenden intellektuellen schwarzen Stimmen in den
          Vereinigten Staaten – schreibt einen Brief an seinen Sohn, der gleichzeitig eine eindringliche Anklageschrift
          ist. Der eigene Körper steht hier als Akkumulation für Enteignung, Fremdbestimmung und soziale Hierarchie, die
          auch lange nach dem Ende der Sklaverei nicht überwunden sind.</p>
        <p>So zelebriert dieses Album würdevoll und auf radikale Weise die schwarze Musik und Identität. Doch wie
          spricht es die „weisse“ Bevökerung an und wie jene schwarzen Menschen in der Diaspora, die Identitätskrisen
          haben und manchmal vergessen, dass sie schwarz sind, bis im Saal das Licht angeht? Wie spricht man
          Gesellschaften an, in denen Black Lives Matter immer noch ein Reizbegriff ist? Im Interlude „Tina Taught Me“,
          erklärt Mama Tina Knowles:</p>
        <p>It really saddens me, when we are not allowed to be proud of being black. You are just pro black, and that’s
          okay.... when you celebrate black culture it doesn’t mean that you don’t like white culture. Irritating is
          when somebody says: They are racists, that’s reversed racism. Or: They have a black history month, but we
          don’t have a white history month. All we have ever been taught is white history, so why are you mad at that?
          (Interlude: Tina Taught Me)</p>
        <p>2016 ist das Schwarzsein definiert von einer Vergangenheit voller Brutalität und Degradierung, einer
          postkolonialen Gegenwart voller Alltagsrassismus, von dem wir uns nicht richtig lösen können. Kendrick Lamar
          hat 2015 mit dem Song „Alright“ eine Hymne für den schwarzen Protest geschrieben. „F.U.B.U.“ von Solange hätte
          auch dieses Potenzial, doch kommt die Zeile „All my niggas in the whole wide (Red. white?) world“ und „this
          shit is for us“ jedem Nicht-Schwarzen wohl schwer über die Lippen. Doch die Gesellschaft braucht Alben wie A
          Seat At The Table. Wer für die Gleichstellung kämpft, muss manchmal radikal, laut und extrem sein. Doch für
          eine gemeinsame Zukunft müssen auch andere einen Platz am Tisch erhalten.</p>
      </div>
    )
  }
}