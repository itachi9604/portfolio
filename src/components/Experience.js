import React from 'react'
import BaseObject from "./BaseObject"
import LM_logo from "./assets/logicmonitor.png"

export default function Experience() {
    return (
            <BaseObject name="experience" data={
                <>  <div className="level-one-margin roles">
                    <a href="https://www.logicmonitor.com">
                    <img src={LM_logo} alt="Logicmonitor logo" /><span> Logicmonitor</span></a>
                    <ul>
                        <li><span>Automation Engineer | Jan 2022 - Present</span></li><br />
                        <li><span>Associate Automation Engineer | Dec 2020 - Dec 2021</span></li>
                    </ul></div>
                    <section className="level-two-margin">
            <span style={{fontWeight: '900'}}>Responsibilities</span>
            <ul>
                <li>Automation testing of RESTful web services with Python pytest framework</li>
                <li>Created dynamic infra integration suite for the team where team can check their integration build before merging to main branch.</li>
                <li>Contributed to a crucial automation suite which ensures confidence in product for
                    production and non production environments</li>
                <li>Created mini server and deployed for automation where 3rd party dependency
                    were resolved.</li>
                <li>Programmed Core libraries for the team which were then used by other teams
                    also.</li>
                <li>Contributed to SNMP simulator that helped other teams for their automation.</li>
                <li>Technologies Used: <b>Python, Pytest, Amazon Web Services, REST API, Jenkins, SQL</b></li>
            </ul>

        </section>
                </>
            }></BaseObject>
      
    )
}
