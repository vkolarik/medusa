import { PageHeader } from "@components/PageHeader"
import { ILink } from "@interfaces/Link"
import * as ROUTES from '@constants/routes'

const GDPR = () => {
  const breadcrumbs: ILink[] = [
    {
      text: "GDPR",
      route: ROUTES.GDPR
    }
  ]

  return (
    <div className='max-width page'>
      <PageHeader title={'GDPR'}
        breadcrumbs={breadcrumbs}/>
      <div className="gdpr">
        <div>
          <div className="gdpr__text md:mt-8 mt-5">
            <h3 className="gdpr__h3 mb-3">I. Základní ustanovení</h3>
            <ul className='md:mt-5 mt-3 gdpr__text--numbers'>
              <li className="gdpr__text mt-3">
              Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (dále jen: „GDPR”) je TRAND TROVE service, s.r.o. IČ xxx xxx xxx se sídlem Brno (dále jen: „správce“).
              </li>
              <li className="gdpr__text mt-3">
                Kontaktní údaje správce jsou
                <ul className='gdpr__text--no-list-style-type'>
                  <li>adresa: Brno</li>
                  <li>email: info@trandtrove.cz</li>
                </ul>
              </li>
              <li className="gdpr__text mt-3">
                Osobními údaji se rozumí veškeré informace o identifikované nebo identifikovatelné fyzické osobě; identifikovatelnou fyzickou osobou je fyzická osoba, kterou lze přímo či nepřímo identifikovat, zejména odkazem na určitý identifikátor, například jméno, identifikační číslo, lokační údaje, síťový identifikátor nebo na jeden či více zvláštních prvků fyzické, fyziologické, genetické, psychické, ekonomické, kulturní nebo společenské identity této fyzické osoby.
              </li>
              <li className="gdpr__text mt-3">Správce nejmenoval pověřence pro ochranu osobních údajů.</li>
            </ul>
          </div>

          <div className="gdpr__text md:mt-8 mt-5">
            <h3 className="gdpr__h3 mb-3">II. Zdroje a kategorie zpracovávaných osobních údajů</h3>
            <ul className='md:mt-5 mt-3 gdpr__text--numbers'>
              <li className="gdpr__text mt-3">
                Správce zpracovává osobní údaje, které jste mu poskytl/a nebo osobní údaje, které správce získal na základě plnění Vaší objednávky.
              </li>
              <li className="gdpr__text mt-3">
                Správce zpracovává Vaše identifikační a kontaktní údaje a údaje nezbytné pro plnění smlouvy.
              </li>
            </ul>
          </div>

          <div className="gdpr__text mt-8">
            <h3 className="gdpr__h3 mb-3">III. Zákonný důvod a účel zpracování osobních údajů</h3>
            <ul className="gdpr__text gdpr__text--numbers md:mt-5 mt-3">
              <li>Zákonným důvodem zpracování osobních údajů je
                <ul className='gdpr__text gdpr__text--bullets'>
                  <li>plnění smlouvy mezi Vámi a správcem podle čl. 6 odst. 1 písm. b) GDPR,</li>
                  <li>oprávněný zájem správce na poskytování přímého marketingu (zejména pro zasílání obchodních sdělení a newsletterů) podle čl. 6 odst. 1 písm. f) GDPR</li>
                  <li>Váš souhlas se zpracováním pro účely poskytování přímého marketingu (zejména pro zasílání obchodních sdělení a newsletterů) podle čl. 6 odst. 1 písm. a) GDPR ve spojení s § 7 odst. 2 zákona č. 480/2004 Sb., o některých službách informační společnosti v případě, že nedošlo k objednávce zboží nebo služby</li>
                </ul>
              </li>
              <li className="gdpr__text mt-5">Účelem zpracování osobních údajů je
                <ul className='gdpr__text gdpr__text--bullets'>
                  <li>vyřízení Vaší objednávky a výkon práv a povinností vyplývajících ze smluvního vztahu mezi Vámi a správcem; při objednávce jsou vyžadovány osobní údaje, které jsou nutné pro úspěšné vyřízení objednávky (jméno a adresa, kontakt), poskytnutí osobních údajů je nutným požadavkem pro uzavření a plnění smlouvy, bez poskytnutí osobních údajů není možné smlouvu uzavřít či jí ze strany správce plnit</li>
                  <li>zasílání obchodních sdělení a činění dalších marketingových aktivit</li>
                </ul>
              </li>
              <li className="gdpr__text mt-5">Ze strany správce nedochází k automatickému individuálnímu rozhodování ve smyslu čl. 22 GDPR.</li>
            </ul>
          </div>

          <div className="gdpr__text mt-8">
            <h3 className="gdpr__h3 mb-3">IV. Doba uchovávání údajů</h3>
            <ul className='gdpr__text--numbers'>
              <li className="gdpr__text md:mt-5 mt-3">Správce uchovává osobní údaje
                <ul className="gdpr__text gdpr__text--bullets">
                  <li>po dobu nezbytnou k výkonu práv a povinností vyplývajících ze smluvního vztahu mezi Vámi a správcem a uplatňování nároků z těchto smluvních vztahů (po dobu 15 let od ukončení smluvního vztahu)</li>
                  <li>po dobu, než je odvolán souhlas se zpracováním osobních údajů pro účely marketingu, nejdéle 15 let, jsou-li osobní údaje zpracovávány na základě souhlasu</li>
                </ul>
              </li>
              <li className="gdpr__text md:mt-5 mt-3">Po uplynutí doby uchovávání osobních údajů správce osobní údaje vymaže.</li>
            </ul>
          </div>

          <div className="gdpr__text mt-8">
            <h3 className="gdpr__h3 mb-3">V. Příjemci osobních údajů (subdodavatelé správce)</h3>
            <ul className='gdpr__text--numbers'>
              <li className="gdpr__text md:mt-5 mt-3">
                Příjemci osobních údajů jsou osoby
                <ul className="gdpr__text gdpr__text--bullets">
                  <li>podílející se na dodání zboží / služeb / realizaci plateb na základě smlouvy</li>
                  <li>podílející se na zajištění provozu služeb</li>
                  <li>zajišťující marketingové služby</li>
                </ul>
              </li>
              <li className="gdpr__text md:mt-5 mt-3">
                Správce má  v úmyslu předat osobní údaje do třetí země (do země mimo EU) nebo mezinárodní organizaci. Příjemci osobních údajů ve třetích zemích jsou poskytovatelé mailingových služeb / cloudových služeb
              </li>
            </ul>
          </div>

          <div className="gdpr__text mt-8">
            <h3 className="gdpr__h3 mb-3">VI. Vaše práva</h3>
            <ul className="gdpr__text--numbers">
              <li className="gdpr__text md:mt-5 mt-3">Za podmínek stanovených v GDPR máte
                <ul className="gdpr__text gdpr__text--bullets">
                  <li>právo na přístup ke svým osobním údajům dle čl. 15 GDPR</li>
                  <li>právo opravu osobních údajů dle čl. 16 GDPR, popřípadě omezení zpracování dle čl. 18 GDPR</li>
                  <li>právo na výmaz osobních údajů dle čl. 17 GDPR</li>
                  <li>právo vznést námitku proti zpracování dle čl. 21 GDPR a</li>
                  <li>právo na přenositelnost údajů dle čl. 20 GDPR</li>
                  <li>právo odvolat souhlas se zpracováním písemně nebo elektronicky na adresu nebo email správce uvedený v čl. III těchto podmínek</li>
                </ul>
              </li>
              <li className="gdpr__text md:mt-5 mt-3">
                Dále máte právo podat stížnost u Úřadu pro ochranu osobních údajů v případě, že se domníváte, že bylo porušeno Vaší právo na ochranu osobních údajů.
              </li>
            </ul>
          </div>

          <div className="gdpr__text mt-8">
            <h3 className="gdpr__h3 mb-3">VII. Podmínky zabezpečení osobních údajů</h3>
            <ul className="gdpr__text gdpr__text--numbers md:mt-5 mt-3">
              <li>Správce prohlašuje, že přijal veškerá vhodná technická a organizační opatření k zabezpečení osobních údajů.</li>
              <li>Správce přijal technická opatření k zabezpečení datových úložišť a úložišť osobních údajů v listinné podobě.</li>
              <li>Správce prohlašuje, že k osobním údajům mají přístup pouze jím pověřené osoby.</li>
            </ul>
          </div>

          <div className="gdpr__text mt-8">
            <h3 className="gdpr__h3 mb-3">VIII. Závěrečná ustanovení</h3>
            <ul className="gdpr__text gdpr__text--numbers md:mt-5 mt-3">
              <li>Odesláním objednávky z internetového objednávkového formuláře potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte.</li>
              <li>S těmito podmínkami souhlasíte zaškrtnutím souhlasu prostřednictvím internetového formuláře. Zaškrtnutím souhlasu potvrzujete, že jste seznámen/a s podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte.</li>
              <li>Správce je oprávněn tyto podmínky změnit. Novou verzi podmínek ochrany osobních údajů zveřejní na svých internetových stránkách, případně Vám zašle novou verzi těchto podmínek na e-mailovou adresu, kterou jste správci poskytl/a.</li>
            </ul>
          </div>

          <div className="gdpr__text mt-8">
            <p>Tyto podmínky nabývají účinnosti dnem 1.4.2024.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default GDPR

