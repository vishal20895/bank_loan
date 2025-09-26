import React, { useEffect, useState } from "react";

const Loans = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch loans from Fastify backend
    fetch("http://localhost:3000/loans")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setLoans(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching loans:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading loans...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Loan Records</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Borrower</th>
            <th className="border border-gray-400 px-4 py-2">Loan Type</th>
            <th className="border border-gray-400 px-4 py-2">Amount</th>
            <th className="border border-gray-400 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(loans) && loans.length > 0 ? (
            loans.map((loan) => (
              <tr key={loan.id}>
                <td className="border border-gray-400 px-4 py-2">{loan.id}</td>
                <td className="border border-gray-400 px-4 py-2">{loan.customer_name}</td>
                <td className="border border-gray-400 px-4 py-2">{loan.loan_type}</td>
                <td className="border border-gray-400 px-4 py-2">₹{loan.amount}</td>
                <td className="border border-gray-400 px-4 py-2">{loan.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No loans found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Loans;
