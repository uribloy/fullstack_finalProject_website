import useMe from "../../hooks/useMe";

const MyProfile = () => {
  const user = useMe();

  return (
    <div>
      <h2>my Profile</h2>
      {user ? (
        <>
          {/* <img src={user.image.url} alt={user.userName} /> */}
          <div>
            <p>Name: {user.userName}</p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
          </div>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default MyProfile;
