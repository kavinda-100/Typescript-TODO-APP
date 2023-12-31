

const Footer = () => {
  return (
    <section className="w-full bg-cyan-400 p-5 flex justify-between items-center">
      <h1 className="text-xl lg:text-2xl font-bold text-black">TODO APP</h1>
      <h1 className="text-xl lg:text-2xl font-bold text-gray-600">
        &copy; {new Date().getFullYear()} all rights reserved
      </h1>
    </section>
  )
}

export default Footer
