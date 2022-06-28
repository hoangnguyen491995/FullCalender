import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

function App() {
  
 const renderEventContent =(eventInfo)=> {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      
      eventContent={renderEventContent}
     
    />
  );
}

export default App;
