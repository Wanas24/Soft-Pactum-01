import React from 'react'

function Appointment() {
  return (
    <>
      <div className="appointment">
        <div className="appLayer ">
            <div className='container d-flex justify-content-center'>

            <form className='w-75 '>


          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
            </form>
            </div>
        </div>
      </div>
    </>
  );
}

export default Appointment