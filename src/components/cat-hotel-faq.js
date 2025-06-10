import React, { useState } from "react";

import PropTypes from "prop-types";

import "./cat-hotel-faq.css";

const CatHotelFAQ = (props) => {
  const [faq1Visible, setFaq1Visible] = useState(false);
  const [faq2Visible, setFaq2Visible] = useState(false);
  const [faq3Visible, setFaq3Visible] = useState(false);
  const [faq4Visible, setFaq4Visible] = useState(false);
  const [faq5Visible, setFaq5Visible] = useState(false);
  const [faq6Visible, setFaq6Visible] = useState(false);
  const [faq7Visible, setFaq7Visible] = useState(false);
  const [faq8Visible, setFaq8Visible] = useState(false);
  const [faq9Visible, setFaq9Visible] = useState(false);
  const [faq10Visible, setFaq10Visible] = useState(false);
  const [faq11Visible, setFaq11Visible] = useState(false);
  const [faq12Visible, setFaq12Visible] = useState(false);
  return (
    <div
      className={`cat-hotel-faqfaq8 thq-section-padding ${props.rootClassName} `}
    >
      <div className="cat-hotel-faq-max-width thq-section-max-width">
        <div className="thq-section-max-width thq-flex-column cat-hotel-faq-container10">
          <div className="cat-hotel-faq-section-title">
            <div className="cat-hotel-faq-content1">
              <h2 className="cat-hotel-faq-heading11 thq-heading-2">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
          <div className="cat-hotel-faq-list">
            <div className="cat-hotel-faq-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="cat-hotel-faq-trigger10"
              >
                <p className="cat-hotel-faq-faq1-question1 thq-body-large">
                  🐾 Anularea unei rezervări
                </p>
                <div className="cat-hotel-faq-icons-container10">
                  {faq1Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon10"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon12"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible === true && (
                <div className="cat-hotel-faq-container13">
                  <span className="thq-body-small">
                    <span>
                      Dacă planurile se schimbă, nicio problemă! Puteți anula
                      gratuit orice rezervare cu cel puțin 7 zile înainte de
                      data începerii cazării.
                    </span>
                    <br></br>
                    <span>
                      Pentru anulările făcute cu mai puțin de 7 zile înainte, se
                      va achita contravaloarea întregului sejur (sau a unei
                      perioade de 7 zile – dacă aceasta este mai scurtă).
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="cat-hotel-faq-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="cat-hotel-faq-trigger11"
              >
                <p className="cat-hotel-faq-faq2-question thq-body-large">
                  🐾 Modificarea duratei de cazare
                </p>
                <div className="cat-hotel-faq-icons-container11">
                  {faq2Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon14"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon16"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible === true && (
                <div className="cat-hotel-faq-container16">
                  <span className="thq-body-small">
                    <span>
                      Doriti să prelungiți sau să scurtați sejurul? Iată cum
                      funcționează:
                    </span>
                    <br></br>
                    <span>
                      • Cu cel puțin 7 zile înainte de începerea cazării puteți
                      modifica perioada fără restricții, în limita locurilor
                      disponibile (în cazul unei prelungiri).
                    </span>
                    <br></br>
                    <span>
                      • În ultimele 7 zile înainte de cazare sau după ce a
                      început sejurul, se pot adăuga zile suplimentare, dar nu
                      se pot reduce cele deja rezervate.
                    </span>
                    <br></br>
                    <span>
                      Dacă doriți totuși să scurtați șederea după ce aceasta a
                      început, este posibil doar dacă mai rămân peste 7 zile din
                      rezervare – iar doar zilele ce depășesc aceste 7 pot fi
                      anulate. Pisicuța poate pleca oricând, însă contravaloarea
                      următoarelor 7 zile nu se va rambursa.
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="cat-hotel-faq-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="cat-hotel-faq-trigger12"
              >
                <p className="cat-hotel-faq-faq3-question thq-body-large">
                  🐾 Pot aduce mâncarea sau jucăriile preferate ale pisicii?
                </p>
                <div className="cat-hotel-faq-icons-container12">
                  {faq3Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon18"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon20"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible === true && (
                <div className="cat-hotel-faq-container19">
                  <span className="thq-body-small">
                    <span>Absolut! Puteți aduce:</span>
                    <br></br>
                    <span>
                      • Mâncarea preferată sau dieta specială (vom respecta cu
                      strictețe indicațiile)
                    </span>
                    <br></br>
                    <span>
                      • Jucării, păturici sau obiecte care miros a „acasă” –
                      ajută la acomodare
                    </span>
                    <br></br>
                    <span>
                      • Perne, hamace, zgărzi personalizate – orice crește
                      confortul pisicii
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="cat-hotel-faq-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="cat-hotel-faq-trigger13"
              >
                <p className="cat-hotel-faq-faq4-question thq-body-large">
                  🐾 Pisica mea are tratament sau o dietă specială. E ok?
                </p>
                <div className="cat-hotel-faq-icons-container13">
                  {faq4Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon22"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon24"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible === true && (
                <div className="cat-hotel-faq-container22">
                  <span className="thq-body-small">
                    Da, cu siguranță! Medicul nostru veterinar ofera sprijin și
                    pentru pisici care au nevoi speciale (tratament, dietă,
                    afecțiuni cronice ușoare). Este important să menționați
                    acest lucru la rezervare și să aduceți toate indicațiile
                    scrise.
                  </span>
                </div>
              )}
            </div>
            <div className="cat-hotel-faq-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="cat-hotel-faq-trigger14"
              >
                <p className="cat-hotel-faq-faq5-question thq-body-large">
                  🐾 Cum știu că pisica mea este bine?
                </p>
                <div className="cat-hotel-faq-icons-container14">
                  {faq5Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon26"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon28"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq5Visible === true && (
                <div className="cat-hotel-faq-container25">
                  <span className="thq-body-small">
                    <span>Pe durata cazării:</span>
                    <br></br>
                    <span>
                      📷 Veți primi poze și filmulețe direct pe WhatsApp, în mod
                      regulat.
                    </span>
                    <br></br>
                    <span>
                      📋 La cerere, oferim și un mic raport scris despre
                      comportament, apetit, socializare.
                    </span>
                    <br></br>
                    <span>
                      💬 Comunicăm deschis și răspundem mereu cu drag la mesaje!
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="cat-hotel-faq-faq6">
              <div
                onClick={() => setFaq6Visible(!faq6Visible)}
                className="cat-hotel-faq-trigger15"
              >
                <p className="cat-hotel-faq-faq6-question thq-body-large">
                  🐾 Pisicile stau singure sau împreună?
                </p>
                <div className="cat-hotel-faq-icons-container15">
                  {faq5Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon30"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon32"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq6Visible === true && (
                <div className="cat-hotel-faq-container28">
                  <span className="thq-body-small">
                    <span>
                      Toate pisicile au spații individuale de cazare, iar joaca
                      se face doar pe rând sau între pisici din aceeași familie.
                    </span>
                    <br></br>
                    <span>
                      Nicio pisică nu va fi obligată să împartă spațiul cu alta,
                      decât dacă este cererea expresă a proprietarului.
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="cat-hotel-faq-faq7">
              <div
                onClick={() => setFaq7Visible(!faq7Visible)}
                className="cat-hotel-faq-trigger16"
              >
                <p className="cat-hotel-faq-faq7-question thq-body-large">
                  🐾 Pot vizita hotelul înainte să fac o rezervare?
                </p>
                <div className="cat-hotel-faq-icons-container16">
                  {faq5Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon34"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon36"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq7Visible === true && (
                <div className="cat-hotel-faq-container31">
                  <span className="thq-body-small">
                    Sigur că da! Ne bucurăm când clienții vor să cunoască
                    spațiul înainte. Putem stabili împreună o zi pentru vizită
                    cu programare, în afara orelor de joacă și curățenie
                  </span>
                </div>
              )}
            </div>
            <div className="cat-hotel-faq-faq8">
              <div
                onClick={() => setFaq8Visible(!faq8Visible)}
                className="cat-hotel-faq-trigger17"
              >
                <p className="cat-hotel-faq-faq1-question2 thq-body-large">
                  🐾 Ce se întâmplă dacă pisica mea se îmbolnăvește în timpul
                  sejurului?
                </p>
                <div className="cat-hotel-faq-icons-container17">
                  {faq5Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon38"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon40"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq8Visible === true && (
                <div className="cat-hotel-faq-container34">
                  <span className="thq-body-small">
                    <span>
                      Observăm zilnic starea fiecărei pisici și suntem atenți la
                      orice semn de disconfort sau modificare de comportament.
                    </span>
                    <br></br>
                    <span>
                      În caz de nevoie, colaborăm cu medicul nostru veterinar,
                      care va evalua rapid situația și va interveni
                      corespunzător.
                    </span>
                    <br></br>
                    <span>
                      📞 Veți fi contactați imediat, iar împreună vom decide
                      pașii următori, în funcție de recomandările medicale.
                    </span>
                    <br></br>
                    <span>
                      🐾 Bunăstarea pisicii este mereu prioritatea noastră!
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="cat-hotel-faq-faq9">
              <div
                onClick={() => setFaq9Visible(!faq9Visible)}
                className="cat-hotel-faq-trigger18"
              >
                <p className="cat-hotel-faq-faq1-question3 thq-body-large">
                  🐾 Acceptați pisici agresive sau sperioase?
                </p>
                <div className="cat-hotel-faq-icons-container18">
                  {faq5Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon42"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon44"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq9Visible === true && (
                <div className="cat-hotel-faq-container37">
                  <span className="thq-body-small">
                    Ne dorim ca toate pisicile să se simtă în siguranță.
                    Acceptăm și pisici mai timide sau anxioase, dar nu putem
                    caza pisici care au un comportament agresiv constant față de
                    oameni.
                  </span>
                </div>
              )}
            </div>
            <div className="cat-hotel-faq-faq10">
              <div
                onClick={() => setFaq10Visible(!faq10Visible)}
                className="cat-hotel-faq-trigger19"
              >
                <p className="cat-hotel-faq-faq10-question thq-body-large">
                  🐾 Oferiți reduceri pentru pisici din aceeași familie?
                </p>
                <div className="cat-hotel-faq-icons-container19">
                  {faq5Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon46"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon48"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq10Visible === true && (
                <div className="cat-hotel-faq-container40">
                  <span className="thq-body-small">
                    Da! Oferim reduceri pentru a doua pisică cazată în același
                    timp. Reducerea variază în funcție de tipul camerei și
                    durata sejurului. Scrie-ne și îți facem o ofertă
                    personalizată
                  </span>
                </div>
              )}
            </div>
            <div className="cat-hotel-faq-faq11">
              <div
                onClick={() => setFaq11Visible(!faq11Visible)}
                className="cat-hotel-faq-trigger20"
              >
                <p className="cat-hotel-faq-faq11-question thq-body-large">
                  🐾 Pot aduce pisica înainte de ora de check-in?
                </p>
                <div className="cat-hotel-faq-icons-container20">
                  {faq5Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon50"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon52"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq11Visible === true && (
                <div className="cat-hotel-faq-container43">
                  <span className="thq-body-small">
                    Cazările se fac pe bază de programare, pentru a evita
                    stresul și aglomerația. Dacă aveți nevoie de o oră diferită
                    de check-in sau check-out, vă rugăm să ne anunțați din timp
                    – facem tot posibilul să găsim o soluție flexibilă.
                  </span>
                </div>
              )}
            </div>
            <div className="cat-hotel-faq-faq12">
              <div
                onClick={() => setFaq12Visible(!faq12Visible)}
                className="cat-hotel-faq-trigger21"
              >
                <p className="cat-hotel-faq-faq12-question thq-body-large">
                  🐾 Ce se întâmplă dacă întârzii la preluare?
                </p>
                <div className="cat-hotel-faq-icons-container21">
                  {faq5Visible === false && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon54"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible === true && (
                    <div>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="cat-hotel-faq-icon56"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq12Visible === true && (
                <div className="cat-hotel-faq-container46">
                  <span className="thq-body-small">
                    <span>
                      Vă rugăm să ne anunțați cât mai din timp dacă apar
                      modificări. Dacă întârzierea depășește ora stabilită cu
                      mai mult de 30 de minute și nu ne putem reprograma, se
                      poate percepe o taxă suplimentară sau o zi de cazare în
                      plus, în
                    </span>
                    <br></br>
                    <span>funcție de intervalul orar și disponibilitate.</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="cat-hotel-faq-content2 thq-flex-column">
          <div className="cat-hotel-faq-content3">
            <h2 className="cat-hotel-faq-heading12 thq-heading-2">
              Pentru întrebări suplimentare ne puteți contacta la numărul de
              WhatsApp sau pe mail.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </h2>
            <span className="cat-hotel-faq-text64">
              🔒 Locurile sunt limitate – rezervă din timp pentru perioadele
              aglomerate!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CatHotelFAQ.defaultProps = {
  rootClassName: "",
};

CatHotelFAQ.propTypes = {
  rootClassName: PropTypes.string,
};

export default CatHotelFAQ;
