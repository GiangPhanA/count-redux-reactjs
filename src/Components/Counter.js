import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../redux/actions'

function Counter({ count, dispatch }) {
  return (
    <div>
      <span> {count} </span>
      <button onClick={() => dispatch(decrement())}> DECRE </button>
      <button onClick={() => dispatch(increment())}> ADD </button>
      <button onClick={() => dispatch(reset())}> reset </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count,
})

export default connect(mapStateToProps)(Counter)
