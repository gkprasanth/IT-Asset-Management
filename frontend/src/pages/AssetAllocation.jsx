import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";


const TicketForm = () => {
  const [state, setState] = useState('');
  const [empId, setEmpId] = useState('');
  const [empSuggestions, setEmpSuggestions] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState(0)
  const [code, setCode] = useState(null);
  const [formData, setFormData] = useState({
    TicketNumber: '',
    AssetType: null,
    ServiceTag: '',
    AssetCode: code,
    EmployeeId: selectedEmp,
    AllocationDate: ' ',
  });


  useEffect(() => {
    const fetchEmpSuggestions = async () => {
      try {
        const response = await axios.post(`http://localhost:4000/api/search`, { query: empId });
        setEmpSuggestions(response.data.data);
      } catch (error) {
        console.error("Error occurred while fetching employee suggestions:", error);
      }
    };

    if (empId.trim() !== '') {
      fetchEmpSuggestions();
    } else {
      setEmpSuggestions([]);
    }
  }, [empId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      // Add axios POST request here
      try {
        async function allocateAsset() {
          const response = await axios.put('http://localhost:4000/api/asset/allocateasset', {
            service_tag: formData.ServiceTag,
            emp_id: formData.EmployeeId,
            date_issued: formData.AllocationDate
          })
          console.log(response)
        }

        allocateAsset()
      } catch (err) {
        console.log(err)
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (e) => {
    e.preventDefault();
    try {
      console.log(formData.ServiceTag);
      const response = await axios.post("http://localhost:4000/api/status", { serviceTag: formData.ServiceTag });
      setState(response.data.status);
      setCode(response.data.code);
      console.log('status:', response.data.status);
      console.log('code:', response.data.code);
    } catch (error) {
      console.error("Error occurred while fetching status:", error);
    }
  };

  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      AssetCode: code,
      EmployeeId: selectedEmp
      
    }));
  }, [code, selectedEmp]);
  const [optionSelected, setOptionSelected] = useState(false);
  const [date, setDate] = useState(null)

  const handleEmpSelection = (selectedEmp) => {
    setSelectedEmp(selectedEmp);
    setEmpId(selectedEmp);
    setOptionSelected(true);
    console.log(selectedEmp)
  };


  const handleCode = (e) => {
    setCode(e.target.value);
  };


  return (
    <>
      <h1 className='font-bold text-center mt-[30px] mb-[-30px] text-2xl'>Asset Allocation</h1>
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[50%]">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ticketNumber">
              Ticket Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ticketNumber"
              type="text"
              name='TicketNumber'
              placeholder="Enter Ticket Number"
              value={formData.TicketNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asset">
              IT Asset Type
            </label>
            <select
              value={formData.AssetType}
              name="AssetType"
              onChange={(e) => {
                setFormData({ ...formData, AssetType: e.target.value });
              }}
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            >

              <option value="Laptop">Laptop</option>
              <option value="Desktop">Desktop</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceTag">
              Service Tag
            </label>
            <div className='flex items-center gap-2' >
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="serviceTag"
                name="ServiceTag"
                type="text"
                placeholder="Enter Service Tag"
                value={formData.ServiceTag}
                onChange={handleChange}
              />
              <FaSearch className='cursor-pointer ' onClick={handleStatus} size={25} />
            </div>
            {state && <div className='flex gap-1' >
              <span className='font-bold' >Asset State:</span><p style={{
                color: state != "In store" ? "red" : "green"
              }} > {state}</p>

            </div>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="assetCode">
              Asset Code
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="assetCode"
              type="text"
              placeholder="Enter Asset Code"
              readOnly
              value={code || ''}
              onChange={handleCode}
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="empId">
              Employee ID
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="empId"
              type="text"
              name='EmployeeId'
              placeholder="Enter Emp ID"
              value={empId}
              onChange={(e) => {
                setEmpId(e.target.value);
                if (e.target.value != selectedEmp) {
                  setOptionSelected(false); // Reset the flag when input is cleared
                }
              }}
              onFocus={() => setEmpSuggestions(empSuggestions.length > 0 ? empSuggestions : [])}
            />

            {!optionSelected && empSuggestions.length > 0 && (
              <ul className="absolute z-10 left-0 right-0 bg-white border border-gray-300 rounded mt-1">
                {empSuggestions.map((suggestion, index) => (
                  <li key={index} className="cursor-pointer py-1 px-3 hover:bg-gray-100" onClick={() => {
                    handleEmpSelection(suggestion)
                  }}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="allocationDate">
              Allocation Date
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="allocationDate"
              type="date"
              name='AllocationDate'
              placeholder="Enter Date"
              value={formData.AllocationDate}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={state != "In store"}
              style={{
                backgroundColor: state != "In store" && 'grey'
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TicketForm;
