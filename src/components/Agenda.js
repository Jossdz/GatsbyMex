import React from "react"
import { AgendaItem, AgendaList, AgendaInfo } from "../styles/components"
const Agenda = () => {
  return (
    <div id="agenda">
      <AgendaList>
        <h2>Agenda</h2>
        <div>
          <AgendaItem type="conference">
            Embracing the modern web using a Headless CMS with GatsbyJS
            <span>10:00 a 11:00</span>
          </AgendaItem>
          <AgendaItem type="workshop">
            Crear un blog con netlify cms <span>11:15 a 12:30</span>
          </AgendaItem>
          <AgendaItem type="workshop">
            Como crear un sitio utilizando Gatsby, ThemeUI y Airtable.{" "}
            <span>11:15 - 12:30</span>
          </AgendaItem>
        </div>
        <AgendaItem>
          Café y Snacks por Gatsby <span>12:30 - 13:15</span>
        </AgendaItem>
        <div>
          <AgendaItem type="workshop">
            Crea tu primer gatsby theme y tu landing page{" "}
            <span>13:15 - 14:30</span>
          </AgendaItem>
          <AgendaItem type="workshop">
            Taller Avanzado TBD <span>13:15 - 14:30</span>
          </AgendaItem>
          <AgendaItem type="conference">
            ¿Qué puedo hacer con gatsby después de Gatsby Days?{" "}
            <span>14:45 - 15:45</span>
          </AgendaItem>
        </div>
      </AgendaList>
      <AgendaInfo type="workshop">
        <p>Taller</p>
      </AgendaInfo>
      <AgendaInfo type="conference">
        <p>Charla</p>
      </AgendaInfo>
    </div>
  )
}

export default Agenda
