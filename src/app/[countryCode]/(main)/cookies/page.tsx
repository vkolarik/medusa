// components
import { ILink } from "modules/Link"
import * as ROUTES from "@constants/routes"
import { PageHeader } from "@components/PageHeader"

const Cookies = () => {
  const breadcrumbs: ILink[] = [
    {
      text: "Cookies",
      route: ROUTES.COOKIES,
    },
  ]

  return (
    <main className="max-width page">
      <PageHeader title={"Cookies"} breadcrumbs={breadcrumbs} />

      <div className="cookies">
        <div className="cookies-wrapper">
          <div className="first-part">
            <p className="mt-5">
              Za&nbsp;účelem zlepšení našich služeb využívají naše stránky
              soubory cookies. Cookies jsou malé soubory, které ukládají
              informace ve&nbsp;Vašem prohlížeči.
            </p>
            <div className="text mt-8">
              <h2 className="mb-5">
                Co cookies dělají, co nedělají a&nbsp;jak je zakázat?
              </h2>
              <p className="block mt-3">
                Cookies jsou na&nbsp;našich stránkách trendtrove.cz užity
                za&nbsp;účelem měření návštěvnosti webů, cílení reklamy
                a&nbsp;přizpůsobení zobrazení webových stránek.
              </p>
              <p>
                Cookies pro měření návštěvnosti webu a&nbsp;přizpůsobení
                zobrazení webových stránek jsou zpracovávány na&nbsp;základě
                oprávněného zájmu společnosti. Cookies pro cílení reklamy jsou
                zpracovávány pouze na&nbsp;základě Vámi uděleného souhlasu.
                Informace shromážděné pomocí cookies nám neumožňují
                identifikovat Vaše jméno, kontaktní údaje nebo jiné osobní
                identifikační údaje, pokud se nám je nerozhodnete sami
                poskytnout.
              </p>
              <p>
                Webové stránky lze používat i&nbsp;v&nbsp;režimu, který
                neumožňuje sbírání údajů o&nbsp;chování návštěvníků webu. Pokud
                se rozhodnete pro tuto možnost můžete stále používat naše webové
                stránky, ale přístup k některým funkcím a&nbsp;oblastem může být
                omezen. Přesný postup odmítnutí/zakázání cookies se liší
                v&nbsp;závislosti na&nbsp;používaném internetovém prohlížeči
                a&nbsp;naleznete jej v&nbsp;nápovědě svého prohlížeče.
              </p>
            </div>
            <div className="text mt-8">
              <h2 className="mb-3">Kdo cookies využívá?</h2>
              <p className="pt-5">
                Jsme Trend Trove, s.r.o., provozovatel webové stránky
                trendtrove.cz. Vaše osobní údaje zpracováváme jako správce, tedy
                určujeme, jak budou osobní údaje zpracovávány a&nbsp;za jakým
                účelem, po jak dlouhou dobu a&nbsp;určujeme případné další
                zpracovatele, kteří nám se zpracováním budou pomáhat. Kteří to
                jsou?
              </p>
              <ul className="my-6 cookies__list--numbers">
                <li>
                  Služby Google Analytics, provozované společností Google Inc.,
                  sídlem 1600 Amphitheatre Parkway, Mountain View, CA 94043,
                  USA. Sesbírané cookies soubory jsou následně zpracovány
                  společností Google Inc. v souladu se Zásadami ochrany
                  soukromí, dostupnými{" "}
                  <span className="blue">
                    <a
                      href="https://policies.google.com/?hl=cs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ZDE
                    </a>
                  </span>
                </li>
                <li className="mt-3">
                  Služby Facebook Pixel, provozované společností Facebook Inc.,
                  sídlem 1601 Willow Road, Menlo Park, CA 94025, USA. Sesbírané
                  cookies soubory jsou následně zpracovány společností Facebook
                  Inc. &nbsp;souladu se Zásadami ochrany soukromí, dostupnými{" "}
                  <span className="blue">
                    <a
                      href="https://www.facebook.com/full_data_use_policy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ZDE
                    </a>
                  </span>
                </li>
                <li className="mt-3">
                  Společnost LinkedIn corp, sídlem 1000 W Maude, Sunnyvale, CA
                  94085, USA. SEsbírané cookies jsou následně zpracovány
                  společností LinkedIn v&nbsp;souladu se Zásadami ochrany
                  soukromí, dostupnými
                  <span className="blue">
                    {" "}
                    <a
                      href="https://www.linkedin.com/legal/cookie-policy?_l=cs_CZ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ZDE
                    </a>
                  </span>{" "}
                  a{" "}
                  <span className="blue">
                    <a
                      href="https://www.linkedin.com/legal/privacy-policy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ZDE
                    </a>
                  </span>
                  .
                </li>
                <li className="mt-3">
                  Společnost Twitter, Inc., sídlem 1355 Market St #900, San
                  Francisco, CA 94103, USA. Sesbírané cookies jsou následně
                  zpracovány společností Twitter v&nbsp;souladu se Zásadami
                  ochrany soukromí, dostupnými{" "}
                  <span className="blue">
                    <a
                      href="https://twitter.com/en/privacy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ZDE
                    </a>
                  </span>
                  .
                </li>
              </ul>
              <p>
                Pokud se na nás budete chtít kdykoliv obrátit, můžete tak učinit
                na e-mailové adrese info@trendtrove.cz.
              </p>
            </div>

            <div className="text mt-8">
              <h2 className="mb-3">Jaké cookies naše weby využívají?</h2>
              <p className="mt-5">
                Na&nbsp;webových stránkách trendtrove.cz shromažďujeme
                následující soubory cookies:
              </p>
            </div>
          </div>
          <div className="tableDiv">
            <table className="table mt-10">
              <tbody>
                <tr>
                  <th>Typ</th>
                  <th>Název cookie</th>
                  <th>Účel</th>
                  <th>Doba uchování</th>
                  <th>Kdo získává informace</th>
                </tr>
                <tr>
                  <td>preferenční</td>
                  <td>lang</td>
                  <td>
                    Využíváno společností LinkedIn, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.linkedin.com/legal/cookie-policy?_l=cs_CZ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>doba návštěvy</td>
                  <td>linkedin.com</td>
                </tr>
                <tr>
                  <td>statistické</td>
                  <td>_ga</td>
                  <td>
                    Používá se k&nbsp;rozlišení unikátních uživatelů pomocí
                    přiřazení náhodně vygenerovaného číselného identifikátoru.
                  </td>
                  <td>2 roky</td>
                  <td>trendtrove.cz</td>
                </tr>
                <tr>
                  <td>statistické</td>
                  <td>_gat</td>
                  <td>
                    Využíváno Google Analytics, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://policies.google.com/?hl=cs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>1 den</td>
                  <td>trendtrove.cz</td>
                </tr>
                <tr>
                  <td>statistické</td>
                  <td>_gid</td>
                  <td>
                    Využíváno společností LinkedIn, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.linkedin.com/legal/cookie-policy?_l=cs_CZ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>1 den</td>
                  <td>trendtrove.cz</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>_fbp</td>
                  <td>
                    Využíváno společností Facebook, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.facebook.com/full_data_use_policy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>3 měsíce</td>
                  <td>trendtrove.cz</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>bcookie</td>
                  <td>
                    Využíváno společností LinkedIn, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.linkedin.com/legal/cookie-policy?_l=cs_CZ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>2 roky</td>
                  <td>linkedin.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>BizoID</td>
                  <td>
                    Využíváno ke sledování uživatele na&nbsp;více webových
                    stránkách pro zobrazení relevantních reklamních sdělení.
                  </td>
                  <td>29 dní</td>
                  <td>ads.linkedin.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>bscookie</td>
                  <td>
                    Využíváno společností LinkedIn, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.linkedin.com/legal/cookie-policy?_l=cs_CZ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>2 roky</td>
                  <td>linkedin.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>c</td>
                  <td>
                    Využíváno společností IMPER CZ, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://trendtrove.cz/gdpr/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>223 měsíců</td>
                  <td>leady.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>fr</td>
                  <td>
                    Využíváno společností Facebook, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.facebook.com/full_data_use_policy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>3 měsíce</td>
                  <td>facebook.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>lang</td>
                  <td>
                    Zaznamenává jazyk návštěvníka a&nbsp;vybírá vhodnou
                    jazykovou verzi webových stránek
                  </td>
                  <td>doba návštěvy</td>
                  <td>ads.linkedin.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>lidc</td>
                  <td>
                    Využíváno společností LinkedIn, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.linkedin.com/legal/cookie-policy?_l=cs_CZ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>1 den</td>
                  <td>linkedin.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>personalization_id</td>
                  <td>
                    Využíváno společností Twitter, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://twitter.com/en/privacy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>2 roky</td>
                  <td>twitter.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>UserMatchHistory</td>
                  <td>
                    Využíváno ke sledování uživatele na&nbsp;více webových
                    stránkách pro zobrazení relevantních reklamních sdělení.
                  </td>
                  <td>29 dní</td>
                  <td>linkedin.com</td>
                </tr>
                <tr>
                  <td>neklasifikované</td>
                  <td>leady_session_id</td>
                  <td>
                    Cookie soubor pro marketingové vyhodnocování příchozích
                    návštěvníků.
                  </td>
                  <td>doba návštěvy</td>
                  <td>trendtrove.cz</td>
                </tr>
              </tbody>
            </table>
            <br />
            <table className="table mt-7">
              <tbody>
                <tr>
                  <th>Typ</th>
                  <th>Název cookie</th>
                  <th>Účel</th>
                  <th>Doba uchování</th>
                  <th>Kdo získává informace</th>
                </tr>

                <tr>
                  <td>nutné</td>
                  <td>__cfduid </td>
                  <td>
                    Využíváno společností Cloudflare, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.cloudflare.com/gdpr/introduction/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>1 rok</td>
                  <td>artbees.net</td>
                </tr>
                <tr>
                  <td>preferenční</td>
                  <td>lang</td>
                  <td>
                    Využíváno společností LinkedIn, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.linkedin.com/legal/cookie-policy?_l=cs_CZ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>doba návštěvy</td>
                  <td>linkedin.com</td>
                </tr>
                <tr>
                  <td>statistické</td>
                  <td>_ga</td>
                  <td>
                    Používá se k&nbsp;rozlišení unikátních uživatelů pomocí
                    přiřazení náhodně vygenerovaného číselného identifikátoru.
                  </td>
                  <td>2 roky</td>
                  <td>trendtrove.cz</td>
                </tr>
                <tr>
                  <td>statistické</td>
                  <td>_gat</td>
                  <td>
                    Využíváno Google Aanalytics, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://policies.google.com/?hl=cs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>1 den</td>
                  <td>trendtrove.cz</td>
                </tr>
                <tr>
                  <td>preferenční</td>
                  <td>_gid</td>
                  <td>
                    Používá se k&nbsp;rozlišení unikátních uživatelů pomocí
                    přiřazení náhodně vygenerovaného číselného identifikátoru.
                  </td>
                  <td>1 den</td>
                  <td>trendtrove.cz</td>
                </tr>

                <tr>
                  <td>statistické</td>
                  <td>p.gif </td>
                  <td>
                    Zaznamenává informace o&nbsp;typech písma použitých na
                    webové stránce. Nesbírá žádná data o&nbsp;návštěvnících
                    a&nbsp;uživatelích.
                  </td>
                  <td>doba návštěvy</td>
                  <td>typekit.net</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>_fbp </td>
                  <td>
                    Využíváno společností Facebook, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.facebook.com/full_data_use_policy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>3 měsíce</td>
                  <td>trendtrove.cz</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>ads/ga-audiences </td>
                  <td>
                    Využíváno společnostíGoogle, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://policies.google.com/?hl=cs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>doba návštěvy</td>
                  <td>google.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>bcookie </td>
                  <td>
                    Využíváno společností LinkedIn, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.linkedin.com/legal/cookie-policy?_l=cs_CZ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>2 roky</td>
                  <td>linkedin.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>bscookie </td>
                  <td>
                    Využíváno společností LinkedIn, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.linkedin.com/legal/cookie-policy?_l=cs_CZ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>2 roky</td>
                  <td>linkedin.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>fr</td>
                  <td>
                    Využíváno společností Facebook, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.facebook.com/full_data_use_policy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>3 měsíce</td>
                  <td>facebook.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>GPS </td>
                  <td>
                    Používá se k&nbsp;rozlišení unikátních uživatelů pomocí
                    náhodně přiřazeného čísla &nbsp;umožňuje jejich sledování
                    na&nbsp;základě GPS lokalizace.
                  </td>
                  <td>1 den</td>
                  <td>youtube.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>i/adsct </td>
                  <td>
                    Využíváno společností LinkedIn, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.linkedin.com/legal/cookie-policy?_l=cs_CZ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>doba návštěvy</td>
                  <td>t.co</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>IDE </td>
                  <td>
                    Využíváno Google Aanalytics, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://policies.google.com/?hl=cs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>1 rok</td>
                  <td>doubleclick.net </td>
                </tr>

                <tr>
                  <td>marketingové</td>
                  <td>lang</td>
                  <td>
                    Zaznamenává jazyk návštěvníka a&nbsp;vybírá vhodnou
                    jazykovou verzi webových stránek
                  </td>
                  <td>doba návštěvy</td>
                  <td>ads.linkedin.com</td>
                </tr>

                <tr>
                  <td>marketingové</td>
                  <td>lidc</td>
                  <td>
                    Využíváno společností LinkedIn, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.linkedin.com/legal/cookie-policy?_l=cs_CZ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>1 den</td>
                  <td>linkedin.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>personalization_id </td>
                  <td>
                    Využíváno společností Twitter, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://twitter.com/en/privacy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>2 roky</td>
                  <td>twitter.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>PREF </td>
                  <td>
                    Využíváno společností Google/YouTube, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://policies.google.com/?hl=cs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>8 měsíců</td>
                  <td>youtube.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>test_cookie</td>
                  <td>
                    Používá se ke&nbsp;kontrole používaného internetového
                    prohlížeče a&nbsp;jeho podpory cookies.
                  </td>
                  <td>1 den</td>
                  <td>doubleclick.net</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>tr</td>
                  <td>
                    Využíváno společností Facebook, více informací{" "}
                    <span className="blue">
                      <a
                        href="https://www.facebook.com/full_data_use_policy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ZDE
                      </a>
                    </span>
                  </td>
                  <td>doba návštěvy</td>
                  <td>facebook.com</td>
                </tr>

                <tr>
                  <td>marketingové</td>
                  <td>UserMatchHistory</td>
                  <td>
                    Využíváno ke sledování uživatele na&nbsp;více webových
                    stránkách pro zobrazení relevantních reklamních sdělení.
                  </td>
                  <td>29 dní</td>
                  <td>linkedin.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>VISITOR_INFO1_LIVE</td>
                  <td>
                    Měří šířku stránky v&nbsp;daném internetovém prohlížeči
                    a&nbsp;určuje, jaký video přehrávač se má použít.
                  </td>
                  <td>179 dní</td>
                  <td>youtube.com</td>
                </tr>
                <tr>
                  <td>marketingové</td>
                  <td>YSC</td>
                  <td>
                    Zaznamenává, jaká videa na&nbsp;YouTube návštěvník webu
                    viděl. Inkorporovaná na&nbsp;každé webové stránce,
                    na&nbsp;které je umístěno video z&nbsp;YouTube.
                  </td>
                  <td>doba návštěvy</td>
                  <td>youtube.com</td>
                </tr>
                <tr>
                  <td>neklasifikované</td>
                  <td>leady_session_id</td>
                  <td>
                    Cookie soubor pro marketingové vyhodnocování příchozích
                    návštěvníků.
                  </td>
                  <td>doba návštěvy</td>
                  <td>trendtrove.cz</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cookies
