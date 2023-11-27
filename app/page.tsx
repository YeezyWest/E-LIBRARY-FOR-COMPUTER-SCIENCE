import AboutUs from '@app/components/about-us'
import { Banner } from '@app/components/banner'
import { MainNav } from '@app/components/main-nav'
import WhatWeDo from '@app/components/what-we-do'



export default function Home() {
  return (
    <main>
      <MainNav />
      <Banner />
      <AboutUs />
      <WhatWeDo />
    </main>
  )
}
