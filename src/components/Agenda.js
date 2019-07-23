import React from "react"
import { AgendaItem, AgendaList } from "../styles/components"
const Agenda = () => {
  return (
    <div id="agenda">
      <AgendaList>
        <h2>Agenda</h2>
        <div>
          <AgendaItem>
            Gatsby y JamStack <span>10:00 - 11:00</span>
          </AgendaItem>
          <AgendaItem>
            Taller Básico TBD <span>11:15 - 12:30</span>
          </AgendaItem>
          <AgendaItem>
            Taller Avanzado TBD <span>11:15 - 12:30</span>
          </AgendaItem>
        </div>
        <AgendaItem>
          Almuerzo por Gatsby <span>12:30 - 13:15</span>
        </AgendaItem>
        <div>
          <AgendaItem>
            Taller Básico TBD <span>13:15 - 14:30</span>
          </AgendaItem>
          <AgendaItem>
            Taller Avanzado TBD <span>13:15 - 14:30</span>
          </AgendaItem>
          <AgendaItem>
            Charla TBD <span>14:45 - 15:45</span>
          </AgendaItem>
        </div>
      </AgendaList>
    </div>
  )
}

export default Agenda
