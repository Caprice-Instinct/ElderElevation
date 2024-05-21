import { useState } from "react";
import { format, parseISO, isValid } from "date-fns";

export default function UserForm({ user, onSave }) {
  const [userName, setUserName] = useState(user?.name || "");
  const [DOB, setDOB] = useState(user?.DOB || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");

  const handleDOBChange = (ev) => {
    const dateValue = ev.target.value;
    if (isValid(parseISO(dateValue))) {
      setDOB(dateValue);
    } else {
      setDOB("");
    }
  };

  return (
    <div className="flex gap-4 ">
      <form
        className="grow"
        onSubmit={(ev) =>
          onSave(ev, {
            name: userName,
            DOB,
            phone,
            streetAddress,
            city,
            country,
          })
        }
      >
        <label>First and Last name:</label>
        <input
          type="text"
          placeholder="First and last name"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <label>Email:</label>
        <input type="email" disabled={true} value={user?.email} />
        <label>Date of Birth</label>
        <input
          type="date"
          placeholder="Date of Birth"
          value={DOB ? format(parseISO(DOB), "yyyy-MM-dd") : ""}
          onChange={handleDOBChange}
        />
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
        />
        <label>Street Address:</label>
        <input
          type="text"
          placeholder="Street Address"
          value={streetAddress}
          onChange={(ev) => setStreetAddress(ev.target.value)}
        />
        <label>City:</label>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(ev) => setCity(ev.target.value)}
        />
        <label>Country:</label>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(ev) => setCountry(ev.target.value)}
        />
        <button
          type="submit"
          className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          Save
        </button>
      </form>
    </div>
  );
}
