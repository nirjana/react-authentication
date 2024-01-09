import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "antd";

interface Profile {
  name: string;
  picture: string;
  email: string;
}

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state || {};
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (user) {
          const response = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${user.access_token}`,
                Accept: "application/json",
              },
            }
          );

          const userProfile: Profile = response.data;
          setProfile(userProfile);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    navigate("/");
  };

  return (
    <div className="page-container">
      <div className="signin-container">
        <h2>Profile Page</h2>
        {profile ? (
          <div className="user-info">
            <img className="user-image" src={profile.picture} alt="user" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <Button type="primary" onClick={logOut}>
              Log Out
            </Button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
