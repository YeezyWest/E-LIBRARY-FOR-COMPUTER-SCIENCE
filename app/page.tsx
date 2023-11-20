import { MainNav } from '@app/components/main-nav'
import { Button } from '@app/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainNav />
      <Button className='bg-green-500 text-sm hover:bg-green-900'>Click me</Button>
    </main>
  )
}
