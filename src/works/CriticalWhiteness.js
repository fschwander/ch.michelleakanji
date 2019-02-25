import * as React from "react";
import { Image } from "react-bootstrap";
import img from '../res/imgs/critical-whiteness.jpg'


export default class CriticalWhiteness extends React.Component {
  //todo: remove me after fixing scroll to wrong position
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className='Works'>
        <h1>Critical Whiteness</h1>
        <h2>Looking at one's self through the eyes of others</h2>

        <p className='no-text-intent'>Text erschienen in&nbsp;
          <a href={ 'http://www.zollfreilager.net/agencies/critical-whiteness-eine-frage-des-blicks/' }
             target='_blank' rel='noreferrer noopener'>ZOLLFREILAGER</a>, 15.08.18
        </p>

        <Image src={ img }/>
        <p>In der gesellschaftlichen Öffentlichkeit, aber auch im Theater, ist Weisssein eine Dynamik des
          privilegierten Schauens auf Andere. Doch auf einer postkolonialen Bühne kann die Unterteilung in Schwarz und
          Weiss, in Szenerie und Zuschauerraum, nicht aufrechterhalten werden: Alle werden Teil der Szenerie. Alle
          stehen im Licht. Alle werden Andere.</p>
        <p>Was bedeutet es, in einer Gesellschaft weiss zu sein, in der sich die Mehrheit als weiss definiert? Critical
          Whiteness ist eine Auseinandersetzung mit dem Weisssein als unhinterfragte Norm und den damit verbundenen
          Privilegien. In den Whiteness Studies geht es in erster Linie darum, die soziale Konstruktion des Weissseins
          als race – als fiktionale «Rasse», nicht als biologische – zu untersuchen. Während es etwa für Homosexuelle,
          Frauen oder Schwarze zahlreiche Forschungsansätze zu deren Verhältnis zur Gesellschaft gibt, wurde das
          Weisssein in der Wissenschaft weitestgehend als «natürlich gegeben» ignoriert. Diese nicht-problematisierte
          Normalität des Weisseins soll durch Critical Whiteness offengelegt werden.</p>
        <p>Die Debatte um Whiteness entstand im Kontext der schwarzen Bürgerrechtsbewegung in den USA. Über viele
          Generationen haben Afro-Amerikaner die weisse Bevölkerung beobachtet und dies schriftlich und mündlich
          festgehalten. Zu ihnen zählen beispielsweise der Philosoph W.E.B. Du Bois mit dem Standardwerk The Souls of
          Black Folk in 1903. «Everything considered, the title to the universe claimed by White Folk is faulty»,
          schrieb Du Bois, und kritisierte damit nicht nur das Konzept der weissen «Norm» und «Rassenlosigkeit», sondern
          vor allem den Glauben an die weisse Überlegenheit, der damit einher ging. </p>
        <p>Das Buch hat Bürgerrechtler wie Martin Luther King massgeblich beeinflusst. Doch Teil des weissen, als
          «allgemeingültig» angesehenen Wissens waren Studien wie diese damals nicht. Erst die afro-amerikanische
          Autorin Toni Morrison machte es mit ihren Essays in Playing in the Dark (1992) möglich, in den USA ehrlich
          über das Weisssein zu sprechen. Sie analysierte, wie Repräsentationen von schwarzen Personen in der
          Literatur eingesetzt werden, um eine Konstruktion Personen, Gefühlen und Atmosphären eine Sprache, die eine
          gesellschaftliche Auseinandersetzung mit den Privilegien der weissen Bevölkerung initiierte.</p>
        <p>Aus diesen kritischen Ansätzen der Bürgerrechtsbewegung entwickelten sich die Critical Whiteness Studies
          als produktiver Teil des antirassistischen und postkolonialen Wissens. Sie reflektieren Erfahrungen, die in
          einem postkolonialen Zusammenhang auftreten, und wurden damit im Feld der Postkolonialen Studien als kritische
          Praxis und Analysekategorie rezipiert.</p>
        <p>Das kritische Potenzial von Critical Whiteness realisiert sich in der Bereitstellung einer Folie. Eine Folie,
          durch die eine Gesellschaft betrachtet werden kann. Blickt man durch sie hindurch, kann geprüft werden, ob
          durch Sprache, Diskurse und damit verknüpfte Handlungen eine weisse Macht hergestellt und erhalten wird. Die
          Folie soll dabei keineswegs nur eine akademische Analysekategorie sein, sondern auch ein zu einem
          alltäglichen Überdenken des nicht-weissen Lebens in einer dominanten weissen Umgebung führen. Critical
          Whiteness wurde weit über die US-amerikanischen Landesgrenzen rezipiert und wird gerade im deutschen
          Sprachraum häufig im Zusammenhang mit antirassistischer Forschung verwendet.</p>

        <h3>Im Dunkeln tappen</h3>
        <p>Das Problem mit der Folie: Das Weisssein avanciert zur neuen Negativfolie. Die Welt wird um 180 Grad gedreht,
          Weiss und Schwarz (bzw. nicht-weiss) tauschen die Plätze. Aus schwarz-weiss wird weiss-schwarz. So wird das
          binäre Denken in zwei abgeschlossenen Gruppen, das von Kritikern als «postmoderner Rassismus» bezeichnet
          wird, aufrechterhalten. Wir bleiben der Gegenüberstellung von zwei homogenisierten, nicht zu vereinbarenden
          Teilen der Gesellschaft verhaftet.</p>
        <p>Das zweite Problem – und das betrifft unter anderem auch die Rezeption von Critical Whiteness in der Schweiz:
          Die Folie deckt gewisse Dinge ab. Denn sie soll ja nicht transparent sein, sondern unseren Blick auf bestimmte
          Begebenheiten lenken. Ausser Acht bleibt dabei etwa der historische Kontext: Critical Whiteness steht in einem
          direkten Zusammenhang mit der schwarzen Bürgerrechtsbewegung, mit W.E.B. Du Bois, Toni Morrisson und vielen
          anderen, und lässt sich damit nicht einfach so von der US-amerikanischen auf eine andere Gesellschaft
          übertragen. Damit verbunden ist auch die Frage, ob und wie in einer Gesellschaft über Rassismus gesprochen
          kann. «Race is fiction, racism is real», so ein unter Aktivistinnen und Aktivisten viel zitierter Satz. Im
          Unterschied zu den USA gibt es in der Schweiz allerdings keinen Diskurs über Rassismus auf politischer,
          sozialer und ökonomischer Ebene, also über institutionalisierten Rassismus. Solange in der Schweiz nicht
          über postkoloniale Realitäten, geschweige denn offen über Rassismus gesprochen wird, kann Critical
          Whiteness nicht einfach übernommen werden. Diese Folie würde uns blind machen für die eigene postkoloniale
          Realität.</p>
        <p>Wie könnten die von Critical Whiteness angeregten Diskurse, trotz aller Kritik, fruchtbar sein für ein Land
          wie die Schweiz? Auch hierzulande ist Weisssein überall, und doch unsichtbar. Um dies sichtbar zu machen
          bedarf es einer ehrlichen Auseinandersetzung mit den Privilegien der Mehrheitsgesellschaft. Es beginnt bei den
          Blickrégimes: Die Mehrheitsgesellschaft schaut auf die "Anderen"; definiert sie anhand ihrer Abweichung von
          den als «normal» empfundenen eigenen Mitgliedern. Doch die Anderen, die Marginalisierten, blicken in zwei
          Richtungen. Sie beobachten die Mehrheitsgesellschaft, zu der sich verhalten müssen. Und sie sehen sich selbst
          durch den Blick der Mehrheitsgesellschaft. W.E.B. Du Bois nannte dies bereits 1903 «Double- consciousness» –
          ein doppeltes Bewusstsein, «a sense of always looking at one’s self through the eyes of others»[1].
          Nicht-Weisse in einem hegemonial weissen Setting setzen sich ständig mit ihrem Nicht-Weisssein auseinander.
          Der Blick der Mehrzahl ist wie ein Spiegel auf Verhalten, Aussehen, möglicherweise Identifikation und prägt
          damit das Selbstbild der Nicht-Weissen (mit).</p>
        <p>Es ist ein Privileg, sich nicht selbst durch den Blick eines Anderen zu sehen.</p>
        <p>Wie die Zuschauer im Theater glauben die Privilegierten von ihrer Komfortzone eines Sitzplatzes aus das Spiel
          zu beobachten. Doch das ist ein Irrtum. Denn im Theater postkolonialer Zeiten gibt es längst keine
          privilegierten Zuschauer mehr. Die von den Critical Whiteness Studies geforderte Auseinandersetzung verlangt
          von den Mitgliedern der weissen Mehrheitsgesellschaft die Offenheit, sich selbst in einer Szenerie zu
          verorten. Anzuerkennen, dass auch sie längst Teil einer gemeinsam hervorgebrachten Wirklichkeit geworden
          sind. Deshalb wird es Zeit, das Licht einzuschalten. Zu zeigen, dass die Komfortsessel leer sind, und das
          privilegierte Publikum längst mit auf der Bühne steht.</p>
        <p>[1] (Der) Neger (ist) geboren mit einem Schleier und einer besonderen Gabe – dem zweiten Gesicht – in diese
          amerikanische Welt, eine Welt, die ihm kein wahres Selbstbewusstsein zugesteht und in der er sich selbst nur
          durch die Offenbarung der anderen Welt erkennen kann. Es ist sonderbar, dieses doppelte Bewusstsein, dieses
          Gefühl, sich selbst immer nur durch die Augen anderer wahrzunehmen, der eigenen Seele den Massstab einer Welt
          anzulegen, die nur Spott und Mitleid für einen übrig hat. Stets fühlt man seine Zweiheit, als Amerikaner, als
          Neger. Zwei Seelen, zwei Gedanken, zwei unversöhnte Streben, zwei sich bekämpfende Vorstellungen in einem
          dunklen Körper, den Ausdauer und Stärke allein vor dem Zerreissen bewahren." – so der viel zitierte Abschnitt
          in der deutschen Übersetzung aus The Souls of the Black Folk, die Max Weber bereits 1905 veranlassen wollte
          und erst 2003 – 100 Jahre nach der Veröffentlichung Originalfassung – ins Deutsche übertragen wurde. Du Bois,
          W. E. B.: Die Seelen der Schwarzen. The Souls of Black Folk. Freiburg, 2003.</p>
      </div>
    )
  }
}