import { SiteHeader } from '@/components/portfolio/site-header'
import { HeroSection } from '@/components/portfolio/hero-section'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { AboutSection } from '@/components/portfolio/about-section'
import { ContactSection } from '@/components/portfolio/contact-section'
import { SiteFooter } from '@/components/portfolio/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
