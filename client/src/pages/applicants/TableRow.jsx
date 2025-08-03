const TableRow = ({ applicant, index }) => {
  const {
    name,
    email,
    phone,
    role,
    motivation,
    location,
    availability,
    social,
  } = applicant;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{social}</td>
      <td>{role}</td>
      <td>{location}</td>
      <td>{motivation}</td>
      <td>{availability}</td>
    </tr>
  );
};

export default TableRow;
