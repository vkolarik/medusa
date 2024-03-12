import { PageHeader } from "@components/PageHeader"
import { ILink } from "modules/Link"
import * as ROUTES from "@constants/routes"

const VOP = () => {
  const breadcrumbs: ILink[] = [
    {
      text: "VOP",
      route: ROUTES.VOP,
    },
  ]

  return (
    <div className="max-width page">
      <PageHeader title={"Obchodní podmínky"} breadcrumbs={breadcrumbs} />
      <div className="vop md:mt-8 mt-5">
        <div className="text-15px md:text-16px">
          <ol className="vop-list">
            <h2 className="mb-4 text-18px text-black md:text-24px font-normal">
              Prodávající
            </h2>
            <p className=" leading-6 mt-5">
              Trand Trove, zapsaný v živnostenském rejstříku u městského úřadu v
              Brně{" "}
            </p>
            <p className=" leading-6">se sídlem Brno</p>
            <p className=" leading-6">IČO: xxx xxx xxx</p>
            <p className="mb-8  leading-6">
              pro prodej služeb prostřednictvím on-line obchodu umístěného na
              internetové adrese www.trandtrove.cz
            </p>

            <li>
              <h2 className="mb-4 text-18px text-black md:text-24px font-normal">
                Úvodní ustanovení
              </h2>
              <ol className="mt-5">
                <li className="mb-4  leading-6">
                  Tyto obchodní podmínky (dále jen „obchodní podmínky“)
                  prodávajícího upravují v souladu s ustanovením § 1751 odst. 1
                  zákona č. 89/2012 Sb., občanský zákoník, ve znění pozdějších
                  předpisů (dále jen „občanský zákoník“) vzájemná práva a
                  povinnosti smluvních stran vzniklé v souvislosti nebo na
                  základě kupní smlouvy (dále jen „kupní smlouva“) v souladu s
                  ustanoveními §§ 1756 a 1757 občanského zákoníku uzavírané mezi
                  prodávajícím a jinou fyzickou osobou (dále jen „kupující“)
                  prostřednictvím internetového obchodu prodávajícího.
                  Internetový obchod je prodávajícím provozován na webové
                  stránce umístěné na internetové adrese www.jpcze.cz (dále jen
                  „webová stránka“), a to prostřednictvím rozhraní webové
                  stránky (dále jen „webové rozhraní obchodu“).
                </li>
                <li className="mb-4  leading-6">
                  Ustanovení odchylná od obchodních podmínek je možné sjednat v
                  kupní smlouvě uzavřené dle odst. 1.1. obchodních podmínek.
                  Odchylná ujednání v kupní smlouvě mají přednost před
                  ustanoveními obchodních podmínek.
                </li>
                <li className="mb-8  leading-6">
                  Znění obchodních podmínek může prodávající měnit či doplňovat.
                  Tímto ustanovením nejsou dotčena práva a povinnosti vzniklá po
                  dobu účinnosti předchozího znění obchodních podmínek.
                </li>
              </ol>
            </li>

            <li>
              <h2 className="mb-4 text-18px text-black md:text-24px font-normal">
                Uzavření kupní smlouvy
              </h2>
              <ol className="mt-5">
                <li className="mb-4  leading-6">
                  Webové rozhraní obchodu obsahuje informace o nabízených
                  službách, a to včetně uvedení cen jednotlivých služeb/produktů
                  (dále jen „služba“). Ceny služeb zůstávají v platnosti po
                  dobu, kdy jsou zobrazovány ve webovém rozhraní prodávajícího.
                  Tímto ustanovením není omezena možnost prodávajícího uzavřít
                  kupní smlouvu za individuálně sjednaných podmínek.
                </li>
                <li className="mb-8  leading-6">
                  Smluvní vztah mezi prodávajícím a kupujícím vzniká doručením
                  přijetí objednávky (akceptací), jež je prodávajícím zasláno
                  kupujícímu elektronickou poštou, a to na adresu elektronické
                  pošty kupujícího.
                </li>
              </ol>
            </li>

            {/*<li>*/}
            {/*  <h2 className="mb-4 text-18px text-black md:text-24px font-normal">Platební podmínky a dodání*/}
            {/*                služeb</h2>*/}
            {/*  <ol>*/}
            {/*    <li className=" leading-6">Cena za jednotlivé služby je uhrazena okamžikem přijetí*/}
            {/*                    platby:*/}
            {/*    <ul className="list--bullets">*/}
            {/*      <li className=" leading-6">bezhotovostním převodem na účet prodávajícího*/}
            {/*                            č.<strong className='text-red-600'>!!! DOPLNIT !!!</strong>,*/}
            {/*                            vedený u společnosti <strong className='text-red-600'>!!! DOPLNIT !!!</strong> (dále jen „účet prodávajícího“)</li>*/}
            {/*      <li className="mb-4  leading-6">bezhotovostně platební kartou*/}
            {/*                            prostřednictvím platebního*/}
            {/*                            systému GoPay s.r.o.</li>*/}
            {/*    </ul>*/}
            {/*    </li>*/}
            {/*    <p className="mb-4  leading-6">Prodávající nepožaduje od kupujícího zálohu či*/}
            {/*                    jinou obdobnou*/}
            {/*                    platbu. Tímto není dotčeno ustanovení 3.3. obchodních podmínek ohledně povinnosti*/}
            {/*                    uhradit kupní cenu*/}
            {/*                    služeb předem.</p>*/}
            {/*    <li className="mb-4  leading-6">Je-li to v obchodním styku obvyklé nebo je-li tak*/}
            {/*                    stanoveno obecně závaznými právními předpisy a bude-li to kupující požadovat, vystaví*/}
            {/*                    prodávající*/}
            {/*                    ohledně plateb prováděných na základě kupní smlouvy kupujícímu daňový doklad – fakturu.*/}
            {/*                    Prodávající*/}
            {/*                    není plátcem daně z přidané hodnoty. Daňový doklad – fakturu vystaví prodávající*/}
            {/*                    kupujícímu po*/}
            {/*                    uhrazení ceny služeb a zašle jej v elektronické podobě na elektronickou adresu*/}
            {/*                    kupujícího.</li>*/}
            {/*    <li className="mb-8  leading-6">Po uhrazení objednané služby bude služba*/}
            {/*                    kupujícímu*/}
            {/*                    doručena na jeho elektronickou adresu prodávajícím nejpozději do 10 pracovních dnů od*/}
            {/*                    okamžiku*/}
            {/*                    přijetí platby dle bodu 3.1. obchodních podmínek.</li>*/}
            {/*  </ol>*/}
            {/*</li>*/}

            <li>
              <h2 className="mb-4 text-18px text-black md:text-24px font-normal">
                Odstoupení od kupní smlouvy
              </h2>
              <ol className="mt-5">
                <li className="mb-4  leading-6">
                  Kupující může od smlouvy odstoupit v případě, že prodávající
                  nesplní svůj závazek dle bodu 3.3. obchodních podmínek, a to
                  ani ve lhůtě 10 dnů od výzvy kupujícího zaslané prodávajícímu
                  na adresu jeho elektronické pošty.
                </li>
                <li className="mb-8  leading-6">
                  V případě odstoupení od kupní smlouvy dle předchozího bodu
                  obchodních podmínek se kupní smlouva ruší od počátku a
                  prodávající vrátí kupujícímu přijaté peněžní prostředky do 14
                  dnů od odstoupení od kupní smlouvy kupujícím, a to stejným
                  způsobem, jakým je prodávající od kupujícího přijal.
                </li>
              </ol>
            </li>

            <li>
              <h2 className="mb-4 text-18px text-black md:text-24px font-normal">
                Další práva a povinnosti smluvních stran
              </h2>
              <ol className="mt-5">
                <li className="mb-4  leading-6">
                  Prodávající není ve vztahu ke kupujícímu vázán žádnými kodexy
                  chování ve smyslu ustanovení § 1826 odst. 1 písm. e)
                  občanského zákoníku.
                </li>
                <li className="mb-4  leading-6">
                  Prodávající je oprávněn k poskytování služeb na základě
                  živnostenského oprávnění. Živnostenskou kontrolu provádí v
                  rámci své působnosti příslušný živnostenský úřad. Dozor nad
                  oblastí ochrany osobních údajů vykonává Úřad pro ochranu
                  osobních údajů.
                </li>
                <li className="mb-8  leading-6">
                  Kupující tímto uděluje prodávajícímu souhlas se zpracováním
                  osobních údajů pro účely vyplývající z těchto obchodních
                  podmínek. Kupující bere na vědomí, že prodávající bude tento
                  souhlas archivovat pro účely plnění právní povinnosti
                  prodávajícího a ochranu jeho oprávněných zájmů (schopnost
                  doložit udělení souhlasu s prováděným zpracováním).
                </li>
              </ol>
            </li>

            <li>
              <h2 className="mb-4 text-18px text-black md:text-24px font-normal">
                Doručování
              </h2>
              <ol className="mt-5">
                <li className="mb-8  leading-6">
                  Kupujícímu může být doručováno na elektronickou adresu
                  kupujícího.
                </li>
              </ol>
            </li>

            <li>
              <h2 className="mb-4 text-18px text-black md:text-24px font-normal">
                Závěrečná ustanovení
              </h2>
              <ol className="mt-5">
                <li className="mb-4  leading-6">
                  Je-li některé ustanovení obchodních podmínek neplatné nebo
                  neúčinné, nebo se takovým stane, namísto neplatných ustanovení
                  nastoupí ustanovení, jehož smysl se neplatnému ustanovení co
                  nejvíce přibližuje. Neplatností nebo neúčinností jednoho
                  ustanovení není dotčena platnost ostatních ustanovení.
                </li>
                <li className="mb-12 sm:mb-16  leading-6">
                  Kontaktní údaje prodávajícího: adresa elektronické pošty
                  info@trandtrove.cz
                </li>
              </ol>
            </li>
          </ol>

          <p className=" leading-6">V Brně dne 1.4.2024</p>
        </div>
      </div>
    </div>
  )
}

export default VOP
