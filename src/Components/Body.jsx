
const Body = () => {
  return (
    <div className="space-y-3 lg:flex lg:flex-row-reverse">
      <div className="flex items-center justify-center lg:flex-1 lg:justify-end">
        <img src="./assets/Blue-Shape.svg " alt="1st" className=" -rotate-45 h-64 md:h-72 lg:h-[400px]"/>
        <img src="./assets/Pink-Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"/>
        <img src="./assets/Purple-Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"/>
        <img src="./assets/Hero-Model.png" alt="Hero-model" className="absolute h-64 md:h-72 lg:h-[400px]"/>
      </div>
      <div className="lg:flex-1">
        <h1 className="text-5xl font-bold leading-tight">Host your website in less than 5 minutes.</h1>
        <p className="text-gray-400">With Hosterr,get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input type="text" placeholder="Enter email address" className="rounded-md px-4 py-3 placeholder:text-gray-400"/>
          <button className="bg-blue-400 hover:bg-blue-600 px-4 py-3 rounded-md text-white">Join Waitlist</button>
        </form>
        <div className="flex gap-2">
          <img src="./assets/Checkmark.svg" alt="check" />
          <p className="text-gray-400">No span ,ever ,Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  )
}

export default Body