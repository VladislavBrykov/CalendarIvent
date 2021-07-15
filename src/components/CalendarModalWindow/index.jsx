import React from 'react';

export default ({
  closeModal,
  currentEvent,
  deleteEvent,
  mailEvent
}) => {

  return (
    <div className="modal-window-wrapper">
      <div className="bg" onClick={closeModal} />
        <div div className="modal-window">
        <div className="modal-window-close" onClick={closeModal} >close</div>
        <h1>Event</h1>
        <h3>Title: {currentEvent.title}</h3>
        <h3>Description: {currentEvent.description}</h3>
        <button className={'delete-event'} onClick={() => deleteEvent(currentEvent)}>Удалить событие</button>
        <input type="text" id="input-id" placeholder="Введите почту" required ></input>
        <button className={'delete-event'} onClick={() => mailEvent(currentEvent, document.getElementById("input-id").value)}>Поделиться событием</button>
      </div>
    </div >
  );

}