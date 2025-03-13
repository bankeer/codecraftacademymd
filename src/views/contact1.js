import React, { Fragment, useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useLanguage } from '../context/LanguageContext'
import Navbar41 from '../components/navbar41'
import Contact2 from '../components/contact2'
import Logos1 from '../components/logos1'
import Stats2 from '../components/stats2'
import Footer from '../components/footer'
import './contact1.css'

const Contact1 = (props) => {
  useLayoutEffect(() => {window.scrollTo(0,0)})
  const { t } = useLanguage();
  return (
    <div className="contact1-container">
      <Helmet>
        <title>{t.contact.title}</title>
        <meta
          property="og:title"
          content={t.contact.title}
        />
      </Helmet>
      <Navbar41></Navbar41>
      <Contact2
        content4={
          <Fragment>
            <span className="contact1-text17">
              {t.contact.content4}
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact1-text18">
              {t.contact.content1}
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact1-text21">
              {t.contact.content3}
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/37369207444">{t.contact.phone1}</a>
          </Fragment>
        }
        email1={
          <Fragment>
            <a href="mailto:support@code-craft.academy">{t.contact.email1}</a>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="contact1-text24">
              {t.contact.content5}
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact1-text25">{t.contact.heading1}</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact1-text26">{t.contact.content2}</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <a style={{marginTop:"22px"}} href="skype:support@code-craft.academy?chat">{t.contact.address1}</a>
          </Fragment>
        }
      ></Contact2>
      <Logos1
        heading1={
          <Fragment>
            <span className="contact1-text28">
              {t.contact.heading2}
            </span>
          </Fragment>
        }
      ></Logos1>
      <Stats2
        stat1={
          <Fragment>
            <span className="contact1-text29">{t.contact.stat1}</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact1-text30">
              {t.contact.content1}
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact1-text31">
              {t.contact.content2}
            </span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="contact1-text32">{t.contact.stat3}</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="contact1-text33">
              {t.contact.stat4}
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="contact1-text34">
              {t.contact.stat2Description}
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact1-text35">
              {t.contact.heading3}
            </span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="contact1-text36">
              {t.contact.stat4Description}
            </span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="contact1-text37">{t.contact.stat2}</span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="contact1-text38">
              {t.contact.stat3Description}
            </span>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="contact1-text39">
              {t.contact.stat1Description}
            </span>
          </Fragment>
        }
      ></Stats2>
      <Footer
      ></Footer>
    </div>
  )
}

export default Contact1
