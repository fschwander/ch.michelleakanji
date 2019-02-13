import * as React from "react";
import { Image } from "react-bootstrap";
import img from '../res/imgs/spuren-im-sand.jpg'

export default class SpurenImSand extends React.Component {
  //todo: remove me after fixing scroll to wrong position
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='Works'>
        <h1>Spuren im Sand</h1>
        <h2>Das Schicksal einer Fotoikone in Zeiten, in denen alles verschwimmt.</h2>

        <p className='no-text-intent'>
          Text erschienen in&nbsp;
          <a
            href={ 'https://reportagen.com/blog/2016/03/22/spuren-im-sand-das-schicksal-einer-fotoikone-zeiten-denen-alles-verschwimmt' }
            target='_blank' rel='noreferrer noopener'>REPORTAGEN</a>
          , 09.03.16
        </p>

        <Image src={img} />

        <p>Das Foto des leblosen Jungen am Strand ging im September 2015 um die Welt. Aylan Kurdi, dreijährig, ein Opfer
          des Flüchtlingsdramas im Mittelmeer. Er war mit seiner Familie unterwegs in eine Welt ohne Krieg und fand den
          Tod. Nicht nur er, auch sein Bruder und seine Mutter ertranken, nachdem das überfüllte Boot kenterte – einzig
          der Vater überlebte die gefährliche Überfahrt. Aylans Schicksal ist eines von vielen, aber auf dem Bild, das
          die Welt schockierte, ist er ganz allein. Das Bild wurde tausendfach in den Sozialen Medien geteilt, worauf
          sich ein Grossteil der Massenmedien in Europa für eine Veröffentlichung auf der Frontseite entschied. Die
          Relevanz des Bildes für die Öffentlichkeit stand in diesem Moment über der Würde des Toten, denn die Welt
          sollte die Wahrheit sehen. Damit wurde nicht nur die Diskussion rund um die Flüchtlingskrise erneut entfacht,
          sondern auch jene um die Macht und der Wichtigkeit der Fotografie im Journalismus. Es sind die Bilder in den
          Medien, an die wir uns erinnern. Und im Zeitalter der Massenmedien ist der Journalismus und nicht mehr die
          Kunst die entscheidende Institution, aus der solche Bilder hervorgehen. Durch deren Selektion sind
          Journalisten massgebend an der Bedeutungskonstruktion dieser Bilder beteiligt und leiten somit auch den
          öffentlichen politischen Diskurs und das Themenrepertoire der Gesellschaft.</p>
        <p>Ende 2015 griff der Schweizer Kriegsreporter&nbsp;
          <a
            href={ 'http://www.weltwoche.ch/ausgaben/2015-52/artikel/bild-des-jahres-spuren-im-sand-die-weltwoche-ausgabe-522015.html' }
            target='_blank' rel='noopener noreferrer'>Kurt Pelda in der Weltwoche</a>
          &nbsp;die Geschichte rund um das von ihm betitelte «Bild des Jahres» nochmals auf: Ein junger Barmann soll laut
          einem Interview mit der Daily Mail den leblosen Jungen aus dem Meer gezogen haben. Seine Angaben stimmen
          allerdings nicht mit denjenigen der Fotografin Nilüfer Demir überein, worauf Pelda die Zweifel an der Echtheit
          des Bildes thematisiert und kurzerhand sein eigenes Rechercheteam losschickt. Leider erfolglos. Ob die
          «Fotoikone» manipuliert wurde ist unklar, und für Kurt Pelda bleibt es eine Geschichte mit Spuren, die im Sand
          verlaufen.</p>
        <h3>Was ist eine Fotoikone?</h3>
        <p>Übrig bleibt Unbehagen: Peldas Artikel vermittelt ein Gefühl der Aussichtlosigkeit, alles bleibt in der
          Schwebe. Mit dem offenen Ende der Geschichte des toten Jungen am Strand drängt sich auch die Frage auf, ob das
          Bild des Jahres wirklich eine Fotoikone ist. Der Kommunikationswissenschaftler David D. Perlmutter definiert
          in Photojournalism and foreign policy die Augenblicklichkeit der Wirkung – das Foto wird schnell berühmt und
          noch nach Jahren publiziert – als Voraussetzung für eine Medienikone. Ist diese bei Nilüfer Demirs Fotografie
          gegeben? Eine Medienikone macht, schreibt, ist Geschichte. Der Ausgang der Syrienkrise ist ungewiss, das Foto
          von Aylan hat auf politischer Ebene wenig bewirkt – wie lange hält es sich noch im kollektiven Gedächtnis?
          Nicht jedes Bild, das aufwühlt, ist eine Fotoikone.</p>
        <p>Die Fotografie ist das stärkste Medium, um eine Tragödie festzuhalten. Sie besitze die Fähigkeit,
          Katastrophen zu vermenschlichen, ihnen ein Gesicht zu geben, sagt der Kunsthistoriker Felix Hoffmann. Damit
          eine Fotografie zur Ikone der Geschichte wird, muss sie auch ausserhalb der Massenmedien rezipiert werden,
          beispielsweise in der Werbung oder in der Kunst. Und sie muss über ihre Tagesaktualität hinaus ins Bewusstsein
          der Gesellschaft rücken. Eine wohl unbestrittene Fotoikone ist das Napalm-Mädchen Kim Phuc im Vietnamkrieg,
          das schreiend aus den Flammen rennt. Der Bildausschnitt, der, wie man mittlerweile weiss, nur einen Teil der
          Realität abbildete, rüttelte damals die Gesellschaft über den sinnlosen Krieg auf. Fotoikonen sind symbolische
          Verdichtungen des politischen Diskurses. Nach der Veröffentlichung in den amerikanischen Medien wurde das
          Napalm-Mädchen schnell zu einem globalen Symbol, das, teilweise völlig aus dem Zusammenhang gerissen,
          tausendfach reproduziert wurde – auf Plakaten für Wahl-Kampagnen, T-Shirts und Teetassen. Kennzeichnend für
          Bildikonen ist, dass sie eine Wende markieren. Es lässt sich eine Erzählstruktur herauslesen, in der sich das
          Bild fast immer kurz vor dem Eklat, dem Sieg, der Tragödie positioniert. So auch bei Kim Phuc. Im kollektiven
          Gedächtnis gehört das Bild zum bitteren Ende eines sinnlosen Krieges.</p>

        <h3>Zwei Bilder – Zwei Welten</h3>
        <p>Wie damals Nick Út, der für sein Werk 1972 den Pulitzerpreis gewann, bildet Nilüfer Demir mit ihrem Foto ein
          Einzelschicksal ab. Doch in der Bildsprache unterscheiden sich die beiden Fotos stark: In der anhaltenden
          Bilderflut, die fortan Welle um Welle von Flüchtlingen zeigt, wirkt das minimalistische Bild vom «schlafenden»
          Aylan konträr: so klar und eindeutig, so ruhig und passiv. Es spiegelt die Lähmung der westlichen Gesellschaft
          in einem Konflikt, der unlösbar scheint. Das Napalm-Mädchen erscheint ganz anders: Seine Mimik, Gestik und
          Körperhaltung scheint von einem Affekt geprägt, der ein existenzielles Gefühl zum Ausdruck bringt. Der Körper
          des Mädchens teilt sich dem Betrachter aktiv mit, er schreit nach Handlung, nach dem Schuldigen, den USA.</p>
        <p>Durch den Medienwandel steht die Öffentlichkeit heute in einem anderen Verhältnis zu Bildern. 1972 fiel der
          Startschuss der «Live»-Berichterstattung im Fernsehen, unter dem Titel «War is coming home» konnte der Bürger
          zum ersten Mal einen Krieg vom Wohnzimmer aus verfolgen. Trotzdem konnten Journalisten keineswegs frei über
          den Krieg berichten und bis zum Irakkrieg wurden die sogenannten «embedded journalists» strategisch von
          militärischen Einheiten an bestimmte Plätze der Kriegsszenen platziert. Entsprechend eingeschränkt waren die
          Perspektiven auf die Geschehnisse. Ein so schockierendes, emotionales, nahes Bild wie jenes vom Napalm-Mädchen
          mit all seinen ikonisierenden Attributen brannte sich also schnell in die Köpfe der Zeitungsleser ein. Auch
          wenn niemand mehr so genau weiss, wann er das Foto zum ersten Mal gesehen hat, wurde genau dieses Vietnam-Bild
          Teil des kollektiven Bildgedächtnisses.</p>

        <h3>Die singuläre Ikone gibt es (fast) nicht mehr</h3>
        <p>Durch die Möglichkeiten des Internets und der Handykamera gibt es heute viele professionelle und
          unprofessionelle Fotojournalisten vor Ort. Und deshalb sehen wir meistens nicht nur ein einziges, sondern
          viele Bilder eines Ereignisses. Daher wird auch nicht immer genau dasselbe Bild veröffentlicht – vielmehr
          sehen wir viele Bilder mit demselben Motiv. Die singuläre Ikone gibt es (fast) nicht mehr. Wie könnten Kurt
          Pelda und andere heute überhaupt über eine mögliche Manipulation des Bildes vom toten Jungen diskutieren, wenn
          nicht auch in einem anderen Moment ein ähnliches Bild gemacht worden wäre?</p>
        <p>Das Bild von Aylan dient im Vergleich zu historischen Ikonen nicht als Momentaufnahme zur Erinnerung an ein
          besonderes historisches Ereignis – es löste als mediales Ereigniskollektive Betroffenheit aus. Und für eine
          kurze Zeit – bis zum Anschlag im November 2015 in Paris – hatte die ganze Welt Sympathie mit den Syrern. Doch
          was war zuerst, das Ikonenhafte am Bild oder die Betroffenheit? Suchte die globale Medienöffentlichkeit nicht
          auch ein Schlüsselbild, einen Stellvertreter für alle Bilder, die wir täglich sehen könnten, aber nicht mehr
          sehen wollen? Bilder von lasergesteuerten Drohnen sind heute kaum mehr von denjenigen in Videospielen zu
          unterscheiden. In der Bilderflut wird das kollektive Bildgedächtnis überstrapaziert, die klassische Fotoikone
          scheint nicht mehr am Platz.</p>

        <h3>Journalisten sind auch Akteure, Leser sind auch Menschen</h3>
        <p>Kurt Pelda schreibt im Dezember 2015, dass die Unklarheit darüber, ob Aylans Leiche bewegt wurde oder nicht,
          für die Bewältigung der Syrienkrise völlig gleichgültig sei. Politisch mag dies zutreffen, gesellschaftlich
          nicht ganz. Gezeigt wird nicht nur ein Bild vom Krieg, sondern auch das Verhältnis des Fotografen zum
          Fotografierten, der Medienvertreterin zum Opfer, des Subjekts zum Objekt. Und der Leser sieht immer nur eine
          von vielen Wirklichkeiten oder gar nur deren Konstruktion. Nilüfer Demir sagte, sie wolle die Welt mit ihren
          Bildern aufrütteln. Auch Pelda tut dies immer wieder: Er begleitet Ende 2015 eine syrische Familie auf der
          Flucht bis ins Empfangszentrum in Kreuzlingen. Unterwegs hilft er den Flüchtlingen, organisiert Hotelzimmer,
          motiviert sie, nicht mit Schleppern mitzugehen. Dass die Familie wohlauf in der Schweiz ankommt, hat sie zu
          einem Grossteil dem Reporter zu verdanken. Die Rolle des Journalisten in solchen Extremsituationen ist
          diejenige eines Gratwanderers: Ein neutraler Betrachter zu bleiben scheint unmöglich, ein Eingreifen in die
          Situation kann den Verlauf einer Geschichte komplett verändern. Was wir über den Syrienkonflikt wissen, wissen
          wir grösstenteils über die Medien. Die Bilder, die wir sehen, sind nicht zufällig eingefangene Momente,
          sondern Produkte von Entscheidungen.</p>
        <p>In Zeiten, in denen sich Jugendliche so kritisch von klassischen Massenmedien distanzieren, weil sie nicht
          mehr wissen, was sie glauben sollen und in denen der Infojournalismus immer mehr unter 30-Jährige Leserinnen
          und Leser verliert, ist es wichtig, die richtige Geschichte zu erzählen. Dies tut Heike Faller im Zeit Magazin
          vom 28. Januar. Mit dem Foto von Aylan als Ausgangspunkt erzählt sie die Geschichte seiner Familie, die mit
          den Folgen des Todes ihrer Neffen, Brüder und Söhne leben muss – aber auch mit der Internetdebatte, die das
          Bild ausgelöst hat. Es ist eine unaufgeregte Bestandesaufnahme – ein Ausschnitt aus einer Geschichte, die noch
          lange nicht zu Ende geschrieben ist.</p>

      </div>
    )
  }
}