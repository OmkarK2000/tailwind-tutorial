
const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row justify-between">
      <ul className="flex gap-4 text-gray-400">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
      <div className="flex gap-2">
        <img src="./assets/Help-Avatar.svg" alt="Avatar" />
        <div>
          <p className="font-thin">Have any Quetions?</p>
          <a href="#" className="font-medium">Talk to specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer