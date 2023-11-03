
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center gap-2">
        <img src="./assets/Logo.svg" alt="Logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Hoster is hiring</button>
      </div>
      <ul className="hidden lg:flex justify-center items-center gap-6 text-gray-400">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hoster</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center gap-6">
        <a href="#" className="text-gray-400">Sign In</a>
        <button className="bg-blue-400 hover:bg-blue-600 px-4 py-3 rounded-md text-white">Join Waitlist</button>
      </div>
      <div className="lg:hidden">|||</div>
    </div>
  )
}

export default Header