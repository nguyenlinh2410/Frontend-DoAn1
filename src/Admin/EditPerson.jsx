import { useState, useEffect } from "react";
import { UpdatePerson, getAPerson } from "../services/UserService";
import { useParams, useNavigate } from "react-router-dom";

function EditPerson() {
  const { id } = useParams();
  const [person, setPerson] = useState({ name: "", age: "" });
  const navigate = useNavigate();
  const fetchaPerson = async () => {
    try {
      const res = await getAPerson(id);
      if (res && res.data && res.data.data) {
        setPerson(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleUpdate = async () => {
    try {
      const res = await UpdatePerson(id, person);
      console.log("check res: ", res.data);
      navigate("/about");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchaPerson();
  }, [id]);
  return (
    <>
      <h2>UPDATE PERSON</h2>
      <div>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="">Age: </label>
        <input
          type="number"
          value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
        />
      </div>
      <button className="btn" onClick={handleUpdate}>
        Update
      </button>
    </>
  );
}

export default EditPerson;
