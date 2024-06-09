import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(...[JSON.parse(passwords)]);
    }
  }, []);

  const copyField = (text) => {
    toast(`"${text}" has been copied to the clipboard!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("/icons/show.png")) {
      passwordRef.current.type = "text";
      ref.current.src = "/icons/hide.png";
    } else {
      passwordRef.current.type = "password";
      ref.current.src = "/icons/show.png";
    }
  };

  const savePassword = () => {
    const updatedPasswordArray = [...passwordArray, { ...form, id: uuidv4() }];
    setPasswordArray(updatedPasswordArray);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
    console.log(updatedPasswordArray);
    // setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    // localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    toast.success("Successfully Added!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      {/* <div className="absolute top-0 z-[-2] h-screen w-full rotate-180 transform bg-green-50 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div> */}
      <div className="min-h-[81vh]" style={{ background: "#f6f9ff" }}>
        <div className="mycontainer">
          <h1 className="text text-4xl font-bold text-center">
            <span className="text-green-500">&lt;</span>
            <span>Pass </span> <span className="text-green-500">OP/&gt;</span>
          </h1>
          <p className="text-green-900 text-lg text-center">
            Your own Password Manager
          </p>
          <div className="flex flex-col p-4 items-center text-black gap-3">
            <input
              value={form.site}
              onChange={handleChange}
              placeholder="Enter website URL"
              type="text"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              name="site"
            />
            <div className="flex w-full justify-between gap-5">
              <input
                value={form.username}
                onChange={handleChange}
                placeholder="Enter Username"
                type="text"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                name="username"
              />
              <div className="relative">
                <input
                  ref={passwordRef}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  type="password"
                  className="rounded-full border border-green-500 w-full p-4 py-1"
                  name="password"
                />
                <span
                  className="absolute right-2 top-[7px] cursor-pointer"
                  onClick={showPassword}
                >
                  <img ref={ref} width={20} src="/icons/show.png" alt="eye" />
                </span>
              </div>
            </div>

            <button
              onClick={savePassword}
              className="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-400 rounded-full px-6 py-1 w-fit border border-green-900"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                colors="primary:#000000"
                trigger="hover"
              ></lord-icon>
              Save Password
            </button>
          </div>

          <div className="savedPasswords">
            <h2 className="font-bold text-2xl py-4">Saved Passwords</h2>
            {passwordArray.length === 0 ? (
              <div>No Passwords saved yet</div>
            ) : (
              <table className="table-auto w-full rounded-xl overflow-hidden border border-green-900">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="py-2">Website</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="p-2 pl-4 mw-32 border border-green-200">
                          <div className="flex items-center justify-between">
                            <span>{item.site}</span>
                            <div
                              className="cursor-pointer"
                              onClick={() => {
                                copyField(item.site);
                              }}
                            >
                              {/* <img
                                className="w-4"
                                src="/icons/copy.png"
                                alt="copy"
                              /> */}
                              <lord-icon
                                style={{ width: "25px" }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                colors="primary:#000000"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 pl-4 mw-32 border border-green-200">
                          <div className="flex items-center justify-between">
                            <span>{item.username}</span>
                            <div
                              className="cursor-pointer"
                              onClick={() => {
                                copyField(item.username);
                              }}
                            >
                              <lord-icon
                                style={{ width: "25px" }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                colors="primary:#000000"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 pl-4 mw-32 border border-green-200">
                          <div className="flex items-center justify-between">
                            <span>{item.password}</span>
                            <div
                              className="cursor-pointer"
                              onClick={() => {
                                copyField(item.password);
                              }}
                            >
                              <lord-icon
                                style={{ width: "25px" }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                colors="primary:#000000"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 pl-4 w-24 border border-green-200">
                          <div className="flex flex-row items-center">
                            <span className="cursor-pointer px-1">
                              <lord-icon
                                style={{ width: "25px" }}
                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                colors="primary:#000000"
                                trigger="hover"
                              ></lord-icon>
                            </span>
                            <span className="cursor-pointer px-1">
                              <lord-icon
                                style={{ width: "25px" }}
                                src="https://cdn.lordicon.com/skkahier.json"
                                colors="primary:#000000"
                                trigger="hover"
                              ></lord-icon>
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
