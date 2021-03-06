import React from 'react'
import { NavLink } from 'react-router-dom'

const MiniNavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-info bg-dark">
               <div className="MiniNabBarIconss">
                   <span className="">
            
                    <NavLink to="/Contact/BcaAllPage" className="btn btn-dark" id='MiniNavIcons'>Home</NavLink> &nbsp;
                    <NavLink to="/Contact/BcaAllPage/BcaFirstSem" className="btn btn-dark" id='MiniNavIconsecond'>First Sem</NavLink>&nbsp;
                    <NavLink to="/Contact/BcaAllPage/BcaSecondSem"className="btn btn-dark" id='MiniNavIconsthree'>Second Sem</NavLink>&nbsp;
                    <NavLink to="/Contact/BcaAllPage/BcaThirdSem" className="btn btn-dark" id='MiniNavIconsfour'>Third Sem</NavLink>&nbsp;
                    <NavLink to="/Contact/BcaAllPage/BcaFourthSem" className="btn btn-dark" id='MiniNavIconsfive' >Fourth Sem</NavLink>&nbsp; 
                    <NavLink to="/Contact/BcaAllPage/BcaFifthSem"  className="btn btn-dark" id='MiniNavIconsix'>Fifth Sem</NavLink> &nbsp;
                    <NavLink to="/Contact/BcaAllPage/BcaSixthSem"  className="btn btn-dark" id='MiniNavIconseven'>Sixth Sem</NavLink> &nbsp;
                    <NavLink to="/Contact/BcaAllPage/BcaAllPracticals" className="btn btn-dark" id='MiniNavIconseight'>Practicals</NavLink> &nbsp;
                    <NavLink to="/Contact/BcaAllPage/BcaPreviousYearQuesPaper" className="btn btn-dark" id='MiniNavIconnine'>Question's paper</NavLink>&nbsp;
                    <NavLink to="/Contact/BcaAllPage/BcaAllMcq" className="btn btn-dark" id='MiniNavIconten'>MCQ'S</NavLink>
                
                    </span>
    </div>
</nav>
        </div>
    )
}

export default MiniNavBar
