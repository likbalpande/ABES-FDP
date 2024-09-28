import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const HomePage = () => {
    const [arr, setArr] = useState([]);

    const getGithubUsers = () => {
        const pr = fetch("https://api.github.com/users");
        pr.then((res) => {
            const pr2 = res.json();
            pr2.then((data) => {
                // arr = data;
                // console.log("arr", arr);
                setArr(data);
            });
        }).catch((err) => {
            console.log("fail", err);
        });
    };

    // useEffect(callback, dependency array)
    useEffect(getGithubUsers, []);

    return (
        <div>
            <Navbar />
            <div className="dummy-div-1">
                <h1>Welcome!</h1>
                <h4>Website coming soon...</h4>
            </div>
            <hr />
            <div>{JSON.stringify(arr)}</div>
        </div>
    );
};

export default HomePage;
