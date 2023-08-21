import { updateAuthStateAC } from "../../../Redux/authReduser";

const updateAuthState = () => {
    const isAuth = () => {
        return new Promise((resolve, reject) => {
            var cookieValue = document.cookie;
            let sessionId = cookieValue.split("session_id=")[1];
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "isAuth.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        let response = xhr.responseText;
                        console.log(response);
                        if (response === "Cookies were found.") {
                            resolve(true);
                        } else if (response === "Cookies weren't found.") {
                            resolve(false);
                        }
                    } else {
                        console.log(xhr.responseText);
                        reject(false);
                    }
                }
            };
            xhr.send("sessionId=" + sessionId);
        });
    };
    debugger
    async function updateAuthState() {
        try {
            let authState = await isAuth();
            if (authState) {
                updateAuthStateAC(true);
            } else {
                updateAuthStateAC(false);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    updateAuthState();
};

export default updateAuthState;