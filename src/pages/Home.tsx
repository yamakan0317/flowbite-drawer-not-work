import { NavLink } from "react-router-dom"

function Home() {
  return (
    <>
      <NavLink
        to="/dashboard" className="flex items-center px-4 py-2.5 text-base font-normal rounded-lg hover:bg-theme">
        dashboard link
      </NavLink>
    </>
  )
}

export default Home
