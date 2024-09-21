import "./NewUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="John" name="" id="" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" name="" id="" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="text" placeholder="John@gmail.com" name="" id="" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="text" placeholder="Password" name="" id="" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 78" name="" id="" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" name="" id="" />
                </div>
                <div className="newUserItem">
                        <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="Male" />
                        <label htmlFor="male">Male </label>
                        <input type="radio" name="gender" id="female" value="Female" />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="newUserItem">
                        <label>Active</label>
                        <select className="newUserSelect" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
