import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeReserve, updateAmount } from '../../store/modules/reserve/actions'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import './style.css'

function Reservas() {
  const dispatch = useDispatch()
  const reserves = useSelector(state => state.reserve)


  function handleRemove(id) {
    dispatch(removeReserve(id))
  }

  function incrementAmount(trip) {
    dispatch(updateAmount(trip.id, trip.amount + 1))
  }

  function decrementAmount(trip) {
    dispatch(updateAmount(trip.id, trip.amount - 1))
  }

  return (
    <div>
      <h1 className="title">Você Solicitou {reserves.length} reserva </h1>

      {reserves.map(reserve => (
        <div key={reserve.id} className="reservas">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title} </strong>
          <div id="amount">

            <button type="button"
              onClick={() => decrementAmount(reserve)}>
              <MdRemoveCircle size={18} color="#191919" />
            </button>

            <input type="text" readOnly value={reserve.amount} />

            <button type="button"
              onClick={() => incrementAmount(reserve)}>
              <MdAddCircle size={18} color="#191919" />
            </button>

          </div>
          <button
            type="button"
            onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <Link to='/'>
          <button type="button"> Solicitar Reservas </button>
        </Link>
      </footer>
    </div>
  )
}

export default Reservas;