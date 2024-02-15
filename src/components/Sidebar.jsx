import React, { useState } from 'react';

const Sidebar = () => {
  const [clientName, setClientName] = useState('');
  const [dateCommencement, setDateCommencement] = useState('');
  const [dateCompletion, setDateCompletion] = useState('');
  const [rfqCode, setRfqCode] = useState('');

  const handleSubmit = () => {
    console.log('Client Name:', clientName);
    console.log('Date of Commencement:', dateCommencement);
    console.log('Date of Completion:', dateCompletion);
    console.log('RFQ Code:', rfqCode);
  };

  return (
    <div>
      <div className="d-flex mt-4 justify-content-between">
        <h5>
          <span>&lt;</span> Create Workorder
        </h5>
        <div>
          <button
            className='button-25'
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Save
          </button>
        </div>
      </div>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            Workorder
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="mb-3">
            <label for="clientName" class="form-label">
              Client
            </label>
            <select
              class="form-select"
              id="clientName"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            >
              <option value=" "></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="dateCommencement" class="form-label">
              Date of Commencement
            </label>
            <input
              type="date"
              class="form-control"
              id="dateCommencement"
              value={dateCommencement}
              onChange={(e) => setDateCommencement(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="dateCompletion" class="form-label">
              Date of Completion
            </label>
            <input
              type="date"
              class="form-control"
              id="dateCompletion"
              value={dateCompletion}
              onChange={(e) => setDateCompletion(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="rfqCode" class="form-label">
              RFQ Code
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="RFQ Code"
              id="rfqCode"
              value={rfqCode}
              onChange={(e) => setRfqCode(e.target.value)}
            />
          </div>

          <button type="button" className='button-25 position-absolute bottom-0 end-0 me-3 mb-3' style={{width:'200px'}} data-bs-dismiss="offcanvas" onClick={handleSubmit}>
            Done
          </button>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
