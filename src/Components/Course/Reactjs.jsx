import React from 'react'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import Coursecart from './Coursecart'

export default function Reactjs() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Course</h6>
                    <h1 className="mb-5">Full React Js Course</h1>
                </div>
                <div className="row g-2 justify-content-center">

                    <Coursecart link="http://localhost:8080/App Developer\Day - 56 (30_10_23)\62. React (Part 1)\01. What is React_.mp4" title="01. What is React JS" desc="Introduction of React js." />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 56 (30_10_23)\62. React (Part 1)\02. What is JSX_.mp4" title="02. What is JSX" desc="Introduction of React js and JSX" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 56 (30_10_23)\62. React (Part 1)\03. Set up Local Environment.mp4" title="03. Set up Local Environment" desc="Set up Local Environment for React js" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 56 (30_10_23)\62. React (Part 1)\04. Understanding our App.mp4" title="04. Understanding our App" desc="Understanding our App and their components" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 56 (30_10_23)\62. React (Part 1)\06. Our 1st Component.mp4" title="05. Our 1st Component" desc="Writing Our 1st Component in Jsx" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 56 (30_10_23)\62. React (Part 1)\07. Import-Export.mp4" title="06. Import-Export" desc="Import-Export in React" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 56 (30_10_23)\62. React (Part 1)\08. Writing Markup in JSX.mp4" title="07. Writing Markup in JSX" desc="details about Writing Markup in JSX" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 56 (30_10_23)\62. React (Part 1)\11. Structuring Components.mp4" title="09. Structuring Components" desc="Structuring Components in react js" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 56 (30_10_23)\62. React (Part 1)\12. Style Components.mp4" title="10. Style Components" desc="Style Components in React jsx " />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 57 (01_11_23)\63. React (Part 2)\01. React Props.mp4" title="11. React Props" desc=" Props in React" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 57 (01_11_23)\63. React (Part 2)\02. Passing Arrays to Props.mp4" title="12. Passing Arrays to Props" desc="Passing Arrays to Props in react components" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 57 (01_11_23)\63. React (Part 2)\04. Conditionals.mp4" title="13. Conditionals" desc="Conditionals in react" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 57 (01_11_23)\63. React (Part 2)\05. Dynamic Component Styling.mp4" title="14. Dynamic Component Styling" desc="Dynamic Component Styling in jsx" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 57 (01_11_23)\63. React (Part 2)\07. Install React Developer Tools.mp4" title="15. Install React Developer Tools" desc="Install React Developer Tools" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 58 (03_11_23)\64. React (Part 3)\01. Handling Click Events.mp4" title="16. Handling Click Events" desc="Learn About Handling Click Events" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 58 (03_11_23)\64. React (Part 3)\04. State in React.mp4" title="17. State in React" desc="learn about State in React and their uses." />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 58 (03_11_23)\64. React (Part 3)\05. Hooks.mp4" title="18. Hooks" desc="Learn About Hooks in react" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 58 (03_11_23)\64. React (Part 3)\06. useState( ).mp4" title="19. useState()" desc="Learn About useState() and its use" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 58 (03_11_23)\64. React (Part 3)\08. Closure in JS.mp4" title="20. Closure in JS" desc="Learn Closure in JS" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 58 (03_11_23)\64. React (Part 3)\10. Callback in Set State Function.mp4" title="21. Callback in Set State Function" desc="Callback in Set State Function in react" />

                    <Coursecart link="http://localhost:8080/App Developer\Day - 58 (03_11_23)\64. React (Part 3)\11. More about State.mp4" title="22. More about State" desc="Know More about State and their uses." />
                </div>
            </div>
            <Footer />
        </>
    )
}
