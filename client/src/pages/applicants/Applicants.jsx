import { useEffect } from "react";
import { getApplicants } from "../../utils/getApplicants";
import { useState } from "react";
import TableRow from "./TableRow";
import { Helmet } from "react-helmet-async";

const Applicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const data = await getApplicants();
        setApplicants(data);
      } catch (err) {
        console.error("Error fetching applicants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  console.log(applicants);
  return (
    <div>
      <Helmet>
        <title>Application List</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6 text-center text-secondary my-10">
        All Applicants
      </h2>
      <div className="overflow-x-auto ">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Social</th>
              <th>Role</th>
              <th>Location</th>
              <th>Motivation</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <TableRow
                key={index}
                applicant={applicant}
                index={index}
              ></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applicants;
