import React from "react";
import WithAuthorizationProtection from "../auth/authorizationProtect";

const findMeOn = [
  {
    name: 'Github',
    link: 'https://github.com/YerrouHamza'
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hamza-yerrou/'
  },
  {
    name: 'Protfolio',
    link: 'https://hamzayerrou.com/'
  }
]

const AboutPage = React.memo(() => {
  return (
    <div >
      <h1 className="text-4xl font-bold text-gray-800 mb-5">About Me</h1>
      
      <section>
        <p className="text-lg text-gray-600 mb-10">
          Hi, I'm <span className="font-semibold text-blue-600">Hamza Yerrou</span>, a Senior Front-end Developer with 4 years of experience. I am committed to continuous learning and growth in the field of web development. I have a deep passion for creating beautiful, user-friendly, and responsive websites and web applications. <br />
          Additionally, I have a good understanding of back-end technologies like Node.js, Express, and MongoDB, which allows me to build full-stack applications. I'm always seeking new challenges and opportunities to expand my skill set and grow as a developer.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl text-gray-800">Found Me On:</h2>
        <div className="space-x-4">
          {findMeOn.map((item, index) => (
            <a 
              key={index}
              href={item.link}
              type="link"
              target="_blank"
              className="font-semibold text-lg text-blue-500 hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
})

const ProtectedAboutPage = WithAuthorizationProtection(AboutPage);

export default ProtectedAboutPage;
