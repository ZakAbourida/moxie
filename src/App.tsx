import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Problem from "./components/Problem"
import CoreLoop from "./components/CoreLoop"
import FeatureHighlights from "./components/FeatureHighlights"
import DecisionMaking from "./components/DecisionMaking"
import Manifesto from "./components/Manifesto"
import FinalCta from "./components/FinalCta"
import Footer from "./components/Footer"
import Background from "./components/Background"
import TopicPage, { type TopicId } from "./components/TopicPages"
import { ProjectStory, TopicIndex } from "./components/SiteSections"
import { useEffect, useState } from "react"
import { useLanguage } from "./i18n/context"
import { topicTranslations } from "./i18n/topicTranslations"

const TOPICS: TopicId[] = [
  "coach",
  "programmazione",
  "monitoraggio",
  "atleta",
  "engineering",
]

function routeFromHash(): TopicId | "home" {
  const value = window.location.hash.replace(/^#\/?/, "").split("?")[0]
  return TOPICS.includes(value as TopicId) ? value as TopicId : "home"
}

function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Problem />
      <CoreLoop />
      <TopicIndex />
      <FeatureHighlights />
      <DecisionMaking />
      <Manifesto />
      <ProjectStory />
      <FinalCta />
    </main>
  )
}

export default function App() {
  const [route, setRoute] = useState<TopicId | "home">(() => routeFromHash())
  const { lang } = useLanguage()

  useEffect(() => {
    const onHashChange = () => setRoute(routeFromHash())
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  useEffect(() => {
    if (route === "home" && window.location.hash === "#esplora") {
      requestAnimationFrame(() =>
        document.getElementById("esplora")?.scrollIntoView(),
      )
      return
    }
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [route])

  useEffect(() => {
    const topic =
      route === "home"
        ? null
        : topicTranslations[lang].topics.find((item) => item.id === route)
    document.title = topic
      ? `${topic.title} — Moxie`
      : lang === "it"
        ? "Moxie — Coaching OS per atleti di performance"
        : "Moxie — Coaching OS for performance athletes"
  }, [lang, route])

  return (
    <div id="top" className="min-h-screen text-ink">
      <a
        href="#main-content"
        className="font-display sr-only z-[60] rounded-full bg-pop px-4 py-2 text-xs font-bold uppercase text-pop-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {topicTranslations[lang].common.skip}
      </a>
      <Background
        tone={
          route === "coach" ||
          route === "programmazione" ||
          route === "monitoraggio"
            ? "coach"
            : route === "atleta"
              ? "athlete"
              : route === "engineering"
                ? "engineering"
                : "default"
        }
      />
      <Nav />
      {route === "home" ? (
        <Home />
      ) : (
        <main id="main-content">
          <TopicPage id={route} />
        </main>
      )}
      <Footer />
    </div>
  )
}
