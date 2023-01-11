import React, { useState } from "react";
import { profileData } from "./profile-data";
import { FaTrashAlt } from "react-icons/fa";
import "./Profile.scss";

export const Profile = () => {
  const [userProfile, setUserProfile] = useState(profileData);
  const [search, setSearch] = useState("");

  const removeProfile = (id) => {
    const newProfileList = userProfile.filter((profile) => profile.id !== id);
    setUserProfile(newProfileList);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <section className="profile-sec rounded-3">
      <div className="container">
        <h2 className="--text-light">Profile App</h2>
        <div className="--form-control">
          <input
            type="text"
            placeholder="Enter search term..."
            style={{ width: "97%" }}
            onChange={handleSearch}
            value={search}
          />
        </div>
        {userProfile
          .filter((value) => {
            if (search == "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map(({ id, img, job, name }) => (
            <div className="profile --card --flex-between" key={id}>
              <img src={img} alt="profile" />
              <div className="desc">
                <h4 className="--text-light">Name: {name}</h4>
                <p className="--text-light">job: {job}</p>
              </div>
              <FaTrashAlt
                size={18}
                className="icon"
                onClick={() => removeProfile(id)}
              />
            </div>
          ))}
      </div>
    </section>
  );
};
