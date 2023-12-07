import AboutUs from '@app/components/about-us'
import Banner from '@app/components/banner'
import Footer from '@app/components/footer'
import { MainNav } from '@app/components/main-nav'

import BestSelling from '@app/components/best-selling-book'



export default function Home() {
  return (
    <main>
      <MainNav />
      <Banner />
      <AboutUs />
      <BestSelling />
      <Footer />
    </main>
  )
}
