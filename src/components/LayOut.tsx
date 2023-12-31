
import Heder from './Heder'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const LayOut= () => {
  return (
    <main className=' max-w-5xl mx-auto bg-white-secondary'>
        <Heder />
        <section className="bg-white-secondary">
        <Outlet />
        </section>
        <Footer />
    </main>
  )
}

export default LayOut
