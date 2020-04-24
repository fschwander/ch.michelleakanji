import * as React from "react";
import { Image } from "react-bootstrap";
import img from '../res/imgs/protest-selfie.jpg'
import {Helmet} from "react-helmet/es/Helmet";

export default class ProtestSelfie extends React.Component {
  //todo: remove me after fixing scroll to wrong position
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='Works'>
        <Helmet>
          <title>Michelle Akanji ∆ Protest-Selfie</title>
          <meta name='description' content='Zwischen Selbstdarstellung und Protest-Identität. Text erschienen in: Protest. Eine Zukunftspraxis. Zürcher Hochschule der Künste
          (ZHdK) / Basil Rogger, Jonas Voegeli, Ruedi Widmer, Museum für Gestaltung Zürich (Hg.) Lars Müller Publishers, 2018.'/>
          <meta property="og:image" content={img}/>
        </Helmet>

        <h1>Protest-Selfie</h1>
        <h2>Zwischen Selbstdarstellung und Protest-Identität</h2>

        <p className='no-text-intent'>Text erschienen in: Protest. Eine Zukunftspraxis. Zürcher Hochschule der Künste
          (ZHdK) / Basil Rogger, Jonas Voegeli, Ruedi Widmer, Museum für Gestaltung Zürich (Hg.)
          Lars Müller Publishers, 2018.</p>

        <Image src={ img }/>

        <p>Das Protest-Selfie ist ein Selbstporträt mit einer handgeschriebenen politischen Nachricht, das sich mit
          vielen anderen der gleichen Art in sozialen Netzwerken zu einem Selfie-Protest zusammenfügt. Eine solche
          Bewegung funktioniert über Einzelbilder, die dasselbe Hashtag verwenden und so einen virtuellen Schwarm
          bilden. Die Partizipationskultur in den sozialen Medien ermöglicht deren globale Verbreitung. Nicht zu
          verwechseln ist das Protest-Selfie mit Selbstporträts bei real stattfindenden Demonstrationen. Es geht beim
          Protest-Selfie nicht um die Dokumentation der eigenen Protest-Partizipation, sondern vielmehr um die
          Verwendung des Selfies als Mittel zum Protest. Der Körper der Protestierenden steht dabei voll im Zentrum,
          nicht auf der Straße, sondern in der größtmöglichen Öffentlichkeit – im Internet. Die Protestierenden greifen
          hierbei auf gesellschaftlich verankerte Bildgenres zurück: Die Schilder, die sie vor die Kamera halten,
          erinnern an das Emporhalten von selbstgemachten Transparenten auf Demonstrationen. </p>
        <p>Der Selfie-Protest #bringbackourgirls für die Freilassung der von der islamistischen Gruppierung Boko Haram
          im Norden Nigerias entführten Mädchen gehört zu den bisher breitenwirksamsten Selfie-Protesten, weil er im
          Vergleich zu anderen Online- Protesten von Beginn an entlokalisiert funktioniert hat. Das Hashtag wurde eins
          zu eins von den Parolen der Straßenproteste in Nigeria übernommen und weltweit vervielfacht. Die
          Selbstporträts werden so zur öffentlichen Darstellung einer Identifizierung mit den Betroffenen. </p>
        <p>Identifikation mit einer Bewegung entsteht durch ein interaktives Netzwerk an Beziehungen mit anderen.
          Haltungen, Ziele und Handlungsfelder werden wiederholt verhandelt, Mitwirkende beeinflussen einander und
          treffen gemeinsam Entscheidungen. Die daraus resultierende kollektive Identität, also der »vereinheitlichte«
          Akteur im Protest, ist bei einem Selfie-Protest nicht zwingend gegeben. Obwohl er sich innerhalb eines
          Netzwerkes abspielt, sind die Aushandlungsprozesse einer kollektiven Identität nicht sichtbar. Zu sehen ist
          lediglich eine ästhetische Kontextualisierung des Selbst innerhalb eines virtuellen Raumes. Durch diese
          Präsentation – oder eher Repräsentation – erscheint das Protest-Selfie als etwas Eigenständiges, nach außen
          Abgeschlossenes, dessen politische Identität nicht im kollektiven Bewusstsein aufgeht, sondern im
          Einzelnen. </p>
        <p>Wie konnte #bringbackourgirls trotzdem kollektives Handeln hervorbringen und dabei sehr erfolgreich sein? In
          einer Zeit, in der Individualität eines der großen immateriellen Bedürfnisse ist, scheint das Selfie die
          wortwörtliche Verkörperung dieser Lebensweise zu sein. Wir haben die Kontrolle darüber, wie wir gesehen
          werden wollen. So auch in einer Protestbewegung im Internet: Das virtuelle Protest-Ich ist ein bewusst
          gewählter Ausschnitt der Wirklichkeit einer Person. Doch auch die Präsentation dieses Ausschnitts bedarf einer
          Reaktion. Durch die Veröffentlichung von Protest-Selfies durchlaufen wir einen konstanten Prozess der
          Selbstvergewisserung. Somit sind die interaktiven Plattformen, auf denen Selfie-Proteste stattfinden, auch als
          Resonanzräume für Selbstbilder zu verstehen. Diese werden im Idealfall bestätigt, wodurch ein
          Zugehörigkeitsgefühl geschaffen wird, eine virtuelle kollektive Protestidentität. </p>
        <p>Dadurch entsteht ein Gemeinschaftsbewusstsein, das für die gegenwärtigen sozialen Proteste mit globaler
          Ausstrahlung zentral ist. Weil in virtuell vernetzten Bewegungen kein physischer Zusammenhalt wie etwa in
          Protestmärschen gegeben ist, muss die symbolische Zugehörigkeit umso stärker sein. Protest-Selfies sprechen
          für sich und werden damit im virtuellen Raum selbst zu Akteuren des Protests. </p>
        <p>Reale Verhandlungsräume werden heute durch virtuelle erweitert, sodass oft unklar ist, wo eine Bewegung
          überhaupt stattfindet – auf der Straße oder im Internet. Wir können an Protesten auf der ganzen Welt
          teilnehmen, ohne im öffentlichen Raum physisch präsent zu sein. Im Zuge dessen hat sich das Protest-Selfie als
          digitalisierte Form der politischen Demonstration etabliert. Das Selfie – ein popkulturelles Massenphänomen
          der individualisierten Gesellschaft – ist heute eines der gängigsten visuellen Genres auf Netzwerken wie
          Instagram, Twitter und Snapchat. Es stellt die grundlegende menschliche Frage: Wer bin ich? Das Protest-
          Selfie verhandelt demnach die Frage »Wer bin ich im Protest?« </p>
        <p>Über Wirkung, Sinn und Unsinn dieser noch jungen Protestform wird zurzeit in der Medien- und Sozialforschung
          sowie auf zahlreichen Blogs kontrovers diskutiert. Substanziell scheint jedoch die Frage, wie Protest- Selfie
          und Protest-Identität aufeinander wirken. Oder ist das Protest-Selfie vielleicht doch nur eine politisch
          inszenierte Form der Selbstdarstellung?</p>

        <h3>#bringbackourgirls </h3>
        <p>Nach der Massenentführung von 276 Schülerinnen in Chibok im Nordosten Nigerias durch Boko Haram
          organisierte eine Gruppe um die ehemalige nigerianische Ministerin Oby Ezekwesili im April 2014 einen Marsch
          zum Haus der Nationalversammlung in der Hauptstadt Abuja. Die Parole »Bring Back Our Girls« auf selbstgemalten
          Transparenten richtete sich gegen die Untätigkeit und anscheinende Gleichgültigkeit der Regierung. Ezekwesili
          teilte die Protest-Parole als Hashtag #BringBackOurGirls via Twitter mit ihren 125 000 Follower/- innen.
          Innerhalb weniger Tage entstand eine globale Online- Bewegung, die sich insbesondere dank prominenter
          Unterstützung, unter anderem durch die US-amerikanische First Lady Michelle Obama und die Bildungsaktivistin
          Malala Yousafzai, stark verbreitete. Über 4,5 Millionen Mal wurde das Hashtag geteilt. 2016 wurden nach
          Verhandlungen mit dem Internationalen Roten Kreuz 21 Geiseln entlassen, im Jahr darauf kamen weitere 81 bei
          einem Gefangenenaustausch frei; vom Rest fehlt jede Spur. Für die Kampagne zu seiner Wiederwahl entschied
          sich der nigerianische Präsident Goodluck Jonathan für das Hashtag #BringBack- Goodluck2015, womit er in der
          Bevölkerung für Verärgerung sorgte. Der nigerianische Historiker Max Siollun sieht einen direkten
          Zusammenhang zwischen Jonathans verlorener Präsidentschaftswahl und seiner Indifferenz gegenüber der
          Massenentführung. (www. theguardian.com/world/2015/ apr/01/nigeria-election-goodluck- jonathan-lost,
          aufgerufen am 28.8.2017.) </p>

        <h3>Partizipationskultur </h3>
        <p>Durch Möglichkeiten der Mobilisierung und Vernetzung entstehen Räume der partizipativen Demokratie. Es
          entwickelt sich eine Kultur der Beteiligung, der Partizipation, in der Individuen nicht mehr nur Konsumenten,
          sondern auch Mitwirkende und Produzenten sind. Für den Medienwissenschaftler Henry Jenkins bewegt die
          Partizipationskultur den Fokus der digitalen Ausdrucksfähigkeit vom Individuellen weg und zum
          Gemeinschaftlichen hin. Partizipationskultur entsteht, wenn eine Kultur (gemeint ist hier beispielsweise die
          Medienkultur) auf neue Medientechnologien so reagiert, dass es für den durchschnittlichen Nutzer möglich ist,
          Inhalte zu archivieren, zu kommentieren, weiterzuverbreiten und sich anzueignen. Jenkins definiert die
          Partizipationskultur anhand der folgenden Merkmale: 1. niedrige Barrieren für künstlerischen Ausdruck und
          Bürgerbeteiligung; 2. gemeinsame Nutzung von Werken (geistig und materiell); 3. Weitergabe von Wissen; 4.
          Mitglieder, die glauben, dass ihre Beiträge wichtig sind, und die 5. ein gewisses Maß an sozialer
          Verbundenheit mit anderen Mitgliedern spüren (Jenkins, Henry: Confronting the Challenges of Participatory
          Culture. Media Education for the 21st Century. Cambridge, 2009.)</p>

        <h3>Protest im virtuellen öffentlichen Raum</h3>
        <p>Protest im virtuellen öffentlichen Raum beruht auf der Prämisse, dass das Internet Öffentlichkeit erzeugen
          kann und dass die Grenzen zwischen Realität und virtueller Realität durchlässig sind. Ein wesentlicher Teil
          der Protestaktivitäten wurde bereits stark in den virtuellen Raum verlagert: Information, Akquisition,
          Vernetzung und Mobilisierung. Partizipationsanreize, Organisationsstrukturen und die Wahrnehmung von
          politischer Partizipation wirken auf die Protestlogik ein. Infolgedessen haben sich neue Protestformen
          entwickelt, die nicht an physischen Orten stattfinden müssen. So beispielsweise viele transnationale Formen,
          Hacktivism oder virtuelle Sit-ins: Es handelt sich dabei Versuche, die Funktionalität von Webseiten zu
          beeinträchtigen, damit diese nicht mehr oder nur stark verlangsamt aufgerufen werden können. Solche Protest
          formen werden zwar hinsichtlich ihrer politischen Wirkung geringer eingeschätzt als ihr physisches Pendant,
          von Unternehmen werden sie jedoch sehr ernst genommen. </p>

        <p className='no-text-intent'>Fahlenbrach, Kathrin: Protest-Inszenierungen. Visuelle Kommunikation und kollektive Identitäten in
          Protestbewegungen. Wiesbaden, 2002. </p>
        <p className='no-text-intent'>Grohmann, Miriam; Kamil Abdulsalam, Layla; Wyss, Eva: Selfie-Proteste – eine emergente Praktik des Protests
          im Web 2.0. In: Aptum. Zeitschrift für Sprachkritik und Sprachkultur 01 (2015), S. 21–47. </p>
        <p className='no-text-intent'>Marichal, Jose: Political Facebook Groups. Micro-Activism and the Digital Front Stage. In: First Monday 18/12
          (2013). <a href={ 'http://www.firstmonday.org/article/view/4653/3800' } target='_blank'
                     rel='noreferrer noopener'>Link</a>, aufgerufen am 3. 7. 2017. </p>
        <p className='no-text-intent'>Schankweiler, Kerstin: Selfie-Proteste. Affektzeugenschaften und Bildökonomien in den Social Media. Working
          Paper SFB 1171 Affective Societies 05/16 (2016). <a
            href={ 'http://www.edocs.fu-berlin.de/docs/receive/FUDOCS_series_000000000562' } target='_blank'
            rel='noreferrer noopener'>Link</a>, aufgerufen am 3. 7. 2017. </p>
      </div>
    )
  }
}
